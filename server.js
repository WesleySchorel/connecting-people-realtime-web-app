/* Losjes gebaseerd op https://socket.io/get-started/chat */

import * as path from 'path'

import { Server } from 'socket.io'
import { createServer } from 'http'
import express from 'express'
import fetch from 'node-fetch'

const baseURL = 'https://api.vervoerregio-amsterdam.fdnd.nl/api/v1'
const principes = 'https://api.vervoerregio-amsterdam.fdnd.nl/api/v1/principes'
const checks = 'https://api.vervoerregio-amsterdam.fdnd.nl/api/v1/checks'
const partnerSlug = '/websites'
const postSlug = '/urls'

const partner_data = await fetch(baseURL + partnerSlug). then((response) => response.json())
const principe_data = await fetch(principes). then((response) => response.json())
const check_data = await fetch(checks). then((response) => response.json())

const app = express()
const http = createServer(app)
const ioServer = new Server(http, {
  connectionStateRecovery: {
    // De tijdsduur voor recovery bij disconnect
    maxDisconnectionDuration: 2 * 60 * 1000,
    // Of middlewares geskipped moeten worden bij recovery (ivm login)
    skipMiddlewares: true,
  },
})
const port = process.env.PORT || 2400
const historySize = 50

let history = []

let connections = 0


app.set('view engine', 'ejs')
app.set('views', './views')

// Serveer client-side bestanden
app.use(express.static(path.resolve('public')))

app.get('/', function (req, res) {
  res.render('index', {active: '/'})
})

app.get('/projectboard', function (req, res) {
  res.render('projectboard', { partner_data, active: '/projectboard'})
})

app.get('/toolboard', function (request, response) {

let id = request.query.id || "clf7zms5va5670bw8rb7gwll2"
  if (id) {
    fetchJson(`${baseURL}/url?id=${id}`).then((data) => {
      if (data.url.checks.length != 0) {
        response.render('toolboard', { currentProject: data, checkedProjectSuccescriteria: data.url.checks[0].succescriteria, principe_data, active: '/toolboard' })
      } else {
        response.render('toolboard', { currentProject: data, checkedProjectSuccescriteria: data.url.checks, principe_data, active: '/toolboard' })
      }
    });
  }
})

// app.post('/toolboard', function(req, res) {
//   const checkURL = 'https://api.vervoerregio-amsterdam.fdnd.nl/api/v1/checks'
//   postJson(checkURL, req.body).then((data) => {
//     let newCheck = { ... req.body }
//    
//     if (data.data) {
//       res.redirect('/') 
//     } else {
//       const errormessage = `${req.body.check}: Checks zijn al gechecked.`
//       const newdata = { error: errormessage, values: newCheck }
      
//       res.render('projectboard', {newdata, check_data, partner_data, active: '/projectboard' })
//     }
//   })
// })

app.get('/urltoevoegen', function (req, res) {
  res.render('urltoevoegen', {partner_data, active: '/urltoevoegen'})
})

app.get('/urloverzicht', function (request, response) {
  let id = request.query.websiteId
  // console.log(id);
  let partnerUrl = 'https://api.vervoerregio-amsterdam.fdnd.nl/api/v1/urls?websiteId=' + id + '&first=100'
  
  fetchJson(partnerUrl).then((partnerData) => {
    response.render('urloverzicht', {partnerData, partner_data, active: '/projectboard'})
  })
})

app.post('/urltoevoegen', function(req, res) {
  const formURL = baseURL + postSlug
  postJson(formURL, req.body).then((data) => {
    let newURL = { ... req.body }
    // console.log(JSON.stringify(data))
    if (data.data) {
      res.redirect('/projectboard') 
    } else {
      const errormessage = `${req.body.url}: URL bestaat al.`
      const newdata = { error: errormessage, values: newURL }
      
      res.render('urltoevoegen', {newdata, partner_data, active: '/urltoevoegen' })
    }
  })
})

// Start de socket.io server op
ioServer.on('connection', (client) => {
  // Log de connectie naar console
  connections++

  console.log(`user ${client.id} connected`)

  ioServer.emit('connectionCount', connections);

  // Stuur de history
  client.emit('history', history)

  // Luister naar een message van een gebruiker
  client.on('message', (message) => {
    // Check de maximum lengte van de historie
    while (history.length > historySize) {
      history.shift()
    }
    // Voeg het toe aan de historie
    history.push(message)

    // Verstuur het bericht naar alle clients
    ioServer.emit('message', message)
  })

  // Luister naar een disconnect van een gebruiker
  client.on('disconnect', () => {
    // Log de disconnect
    connections--

    console.log(`user ${client.id} disconnected`)

    ioServer.emit('connectionCount', connections);
  })
})

// Start een http server op het ingestelde poortnummer en log de url
http.listen(port, () => {
  console.log('listening on http://localhost:' + port)
})

async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error)
}

async function postJson(url, body) {
  return await fetch(url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .catch((error) => error)
}
