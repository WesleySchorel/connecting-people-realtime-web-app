let ioServer = io()
let messages = document.querySelector('section.realtime ul')
let input = document.querySelector('input.berichten')
let naam = document.querySelector('#naam')
let bericht = document.querySelector('#bericht')
const logo = document.querySelector('.logo')

// State messages
const loadingState = document.querySelector('span.loading')
const emptyState = document.querySelector('span.empty')
const errorState = document.querySelector('span.offline')

// Luister naar het submit event
document.querySelector('form.chat').addEventListener('submit', (event) => {
  event.preventDefault()

  // Als er überhaupt iets getypt is
  if (input.value) {
    // Stuur het bericht naar de server
    ioServer.emit('message', input.value)

    // Leeg het form field
    input.value = ''
  }
})

ioServer.on('whatever', (message) => {
  addMessage(message)
})

ioServer.on('connectionCount', (count) => {
  const connectionCountElement = document.querySelector('#connection-count')
  if (connectionCountElement) {
    connectionCountElement.textContent = `Personen online: ${count}`
  }

  logo.classList.add('animatie')

  // Verwijder de 'animatie' klasse na een korte vertraging
  setTimeout(() => {
    logo.classList.remove('animatie');
  }, 1000); // Verander de vertraging (in milliseconden) naar jouw wens
})

ioServer.on('history', (history) => {
  history.forEach((message) => {
    addMessage(`${message.naam}: ${message.bericht}`)
  })
})


// Luister naar berichten van de server
ioServer.on('message', (message) => {
  loadingState.style.display = 'none'
  emptyState.style.display = 'none'
  addMessage(message)
})

// Er gaat iets mis bij het verbinden
ioServer.io.on('error', (error) => {
  loadingState.style.display = 'none'
  emptyState.style.display = 'none'
  errorState.style.display = 'inline'
})

// Poging om opnieuw te verbinden
ioServer.io.on('reconnect_attempt', (attempt) => {
  console.log('attempting reconnection')
})

// Verbinding geslaagd
ioServer.io.on('reconnect', (attempt) => {
  loadingState.style.display = 'none'
  emptyState.style.display = 'none'
  errorState.style.display = 'none'
})

// De server stuurt doorlopend pings om te kijken of de boel online is
ioServer.io.on('ping', () => {
  // ...
})

// Als het reconnecten niet goed gaat
ioServer.io.on('reconnect_error', (error) => {
  // ...
})

// Reconnecten is een aantal keer (reconnectionAttempts) geprobeerd en faalt
// het reconnecten stopt, misschien handig voor een 'probeer opnieuw' knop.
ioServer.io.on('reconnect_failed', () => {
  // ...
})

/**
 * Impure function that appends a new li item holding the passed message to the
 * global messages object and then scrolls the list to the last message.
 * @param {*} message the message to append
 */
function addMessage(message) {
  const currentTime = new Date().toLocaleTimeString('nl-NL', { hour: 'numeric', minute: 'numeric' });

  const timeElement = document.createElement('span');
  const messageElement = document.createElement('li');
  messageElement.classList.add('own-message')
  timeElement.classList.add('time-message')

  messages.appendChild(Object.assign(messageElement, { textContent: message }))
  messages.appendChild(Object.assign(timeElement, { textContent: currentTime }));
  messages.scrollTop = messages.scrollHeight
}
