const home = document.querySelector('[data-js=home]')
const bookmarks = document.querySelector('[data-js=bookmarks]')
const create = document.querySelector('[data-js=create]')
const profile = document.querySelector('[data-js=profile]')
const homeBtn = document.querySelector('[data-js=homeBtn]')
const bookmarksBtn = document.querySelector('[data-js=bookmarksBtn]')
const createBtn = document.querySelector('[data-js=createBtn]')
const profileBtn = document.querySelector('[data-js=profileBtn]')
const homeContent = document.querySelector('[data-js=homeContent]')
const bookmarksContent = document.querySelector('[data-js=bookmarksContent]')
const createContent = document.querySelector('[data-js=createContent]')
const profileContent = document.querySelector('[data-js=profileContent]')
const bookmarkActive = document.querySelector('[data-js=bookmarkActive]')
const bookmark = document.querySelector('[data-js=bookmark]')
const showAnswerBtn = document.querySelector('[data-js=showAnswerBtn]')
const showAnswer = document.querySelector('[data-js=showAnswer]')

showAnswerBtn.addEventListener('click', () => {
  showAnswer.classList.toggle('d-none')
})

bookmarkActive.addEventListener('click', () => {
  bookmarkActive.classList.add('d-none')
})

bookmark.addEventListener('click', () => {
  bookmarkActive.classList.remove('d-none')
})

homeBtn.addEventListener('click', () => {
  home.classList.remove('d-none')
  bookmarks.classList.add('d-none')
  profile.classList.add('d-none')
  create.classList.add('d-none')
  homeContent.classList.remove('d-none')
  bookmarksContent.classList.add('d-none')
  createContent.classList.add('d-none')
  profileContent.classList.add('d-none')
})

bookmarksBtn.addEventListener('click', () => {
  home.classList.add('d-none')
  bookmarks.classList.remove('d-none')
  profile.classList.add('d-none')
  create.classList.add('d-none')
  homeContent.classList.add('d-none')
  bookmarksContent.classList.remove('d-none')
  createContent.classList.add('d-none')
  profileContent.classList.add('d-none')
})

createBtn.addEventListener('click', () => {
  home.classList.add('d-none')
  bookmarks.classList.add('d-none')
  profile.classList.add('d-none')
  create.classList.remove('d-none')
  homeContent.classList.add('d-none')
  bookmarksContent.classList.add('d-none')
  createContent.classList.remove('d-none')
  profileContent.classList.add('d-none')
})

profileBtn.addEventListener('click', () => {
  home.classList.add('d-none')
  bookmarks.classList.add('d-none')
  profile.classList.remove('d-none')
  create.classList.add('d-none')
  homeContent.classList.add('d-none')
  bookmarksContent.classList.add('d-none')
  createContent.classList.add('d-none')
  profileContent.classList.remove('d-none')
})
