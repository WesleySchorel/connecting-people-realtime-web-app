// Importeer express uit de node_modules map
import express from 'express'
import fetch from 'node-fetch';

const baseURL = 'https://api.vervoerregio-amsterdam.fdnd.nl/api/v1'
const principes = 'https://api.vervoerregio-amsterdam.fdnd.nl/api/v1/principes'
const checks = 'https://api.vervoerregio-amsterdam.fdnd.nl/api/v1/checks'
const partnerSlug = '/websites'
const postSlug = '/urls'

const partner_data = await fetch(baseURL + partnerSlug). then((response) => response.json())
const principe_data = await fetch(principes). then((response) => response.json())
const check_data = await fetch(checks). then((response) => response.json())

// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine en geef de 'views' map door
app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Gebruik de map 'public' voor statische resources
app.use(express.static('public'))

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

app.post('/toolboard', function(req, res) {
  const checkURL = 'https://api.vervoerregio-amsterdam.fdnd.nl/api/v1/checks'
  postJson(checkURL, req.body).then((data) => {
    let newCheck = { ... req.body }
    console.log(req.body)
    console.log(JSON.stringify(data))
    if (data.data) {
      res.redirect('/') 
    } else {
      const errormessage = `${req.body.url}: Checks zijn al gechecked.`
      const newdata = { error: errormessage, values: newCheck }
      
      res.render('projectboard', {newdata, check_data, partner_data, active: '/projectboard' })
    }
  })
})

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

// Stel het poortnummer in waar express op gaat luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})

async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error)
}

/**
 * postJson() is a wrapper for the experimental node fetch api. It fetches the url
 * passed as a parameter using the POST method and the value from the body paramater
 * as a payload. It returns the response body parsed through json.
 * @param {*} url the api endpoint to address
 * @param {*} body the payload to send along
 * @returns the json response from the api endpoint
 */

async function postJson(url, body) {
  return await fetch(url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .catch((error) => error)
}