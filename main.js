const url = 'https://api.github.com/users/'

const mainEl = document.querySelector('#root')

const cardWrapper = document.createElement('div')
cardWrapper.id = 'cardWrapper'

const form = document.createElement('form')
form.addEventListener('submit', (event) => {
  event.preventDefault();
  getData(input.value)
  input.value = ''
})

const input = document.createElement('input')
input.placeholder = "Type github login.."

const button = document.createElement('button')
button.id = "search"
button.innerHTML = 'Search'
button.type = 'submit'

mainEl.append(cardWrapper,form)
form.append(input, button)


const fillCard = (data) => {
  const {
    login,
    avatar_url,
    location,
    bio  
  } = data;

  const card = document.createElement('div')
  card.id = 'card'

  const cardAvatar = document.createElement('img')
  cardAvatar.id = 'card_avatar'
  const cardLogin = document.createElement('h1')
  cardLogin.id = 'card_login'
  const cardLocation = document.createElement('p')
  cardLocation.id = 'card_location'
  const cardBio = document.createElement('p')
  cardBio.id = 'card_bio'

  const deleteBtn = document.createElement('button')
  deleteBtn.id = 'card_delete-button'
  deleteBtn.innerText = 'DELETE'
  deleteBtn.addEventListener('click', clearCard)

  card.append(
    cardAvatar,
    cardLogin,
    cardLocation,
    cardBio,
    deleteBtn
)

cardWrapper.append(card)

  cardAvatar.src = avatar_url;
  cardLogin.innerText = login;
  cardLocation.innerText = location;
  cardBio.innerText = bio;
}

function clearCard() {
  cardWrapper.innerHTML = ''
}


const getData = async (login) => {

  try {
    const response = await fetch(`${url}${login}`)
    const data = await response.json();

    clearCard()
    fillCard(data)

  } catch(error) {
    console.log(error)
  }
}
