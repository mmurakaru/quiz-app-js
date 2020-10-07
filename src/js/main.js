const home = document.querySelector('[data-js=home]')
const bookmarks = document.querySelector('[data-js=bookmarks]')
const create = document.querySelector('[data-js=create]')
const profile = document.querySelector('[data-js=profile]')
const homeBtnActive = document.querySelector('[data-js=homeBtnActive]')
const homeBtn = document.querySelector('[data-js=homeBtn]')
const bookmarksBtnActive = document.querySelector(
  '[data-js=bookmarksBtnActive]'
)
const bookmarksBtn = document.querySelector('[data-js=bookmarksBtn]')
const createBtnActive = document.querySelector('[data-js=createBtnActive]')
const createBtn = document.querySelector('[data-js=createBtn]')
const profileBtnActive = document.querySelector('[data-js=profileBtnActive]')
const profileBtn = document.querySelector('[data-js=profileBtn]')
const homeContent = document.querySelector('[data-js=homeContent]')
const bookmarksContent = document.querySelector('[data-js=bookmarksContent]')
const createContent = document.querySelector('[data-js=createContent]')
const profileContent = document.querySelector('[data-js=profileContent]')
const bookmarkActive = document.querySelector('[data-js=bookmarkActive]')
const bookmark = document.querySelector('[data-js=bookmark]')
const showAnswerBtn = document.querySelector('[data-js=showAnswerBtn]')
const showAnswer = document.querySelector('[data-js=showAnswer]')

const clearInput = document.querySelector('[data-js=clearInput]')
const form = document.querySelector('[data-js=form]')

clearInput.addEventListener('click', () => {
  form.reset()
})

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
  homeBtnActive.classList.remove('d-none')
  homeBtn.classList.add('d-none')
  bookmarksBtnActive.classList.add('d-none')
  bookmarksBtn.classList.remove('d-none')
  createBtnActive.classList.add('d-none')
  createBtn.classList.remove('d-none')
  profileBtnActive.classList.add('d-none')
  profileBtn.classList.remove('d-none')
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
  homeBtnActive.classList.add('d-none')
  homeBtn.classList.remove('d-none')
  bookmarksBtnActive.classList.remove('d-none')
  bookmarksBtn.classList.add('d-none')
  createBtnActive.classList.add('d-none')
  createBtn.classList.remove('d-none')
  profileBtnActive.classList.add('d-none')
  profileBtn.classList.remove('d-none')
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
  homeBtnActive.classList.add('d-none')
  homeBtn.classList.remove('d-none')
  bookmarksBtnActive.classList.add('d-none')
  bookmarksBtn.classList.remove('d-none')
  createBtnActive.classList.remove('d-none')
  createBtn.classList.add('d-none')
  profileBtnActive.classList.add('d-none')
  profileBtn.classList.remove('d-none')
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
  homeBtnActive.classList.add('d-none')
  homeBtn.classList.remove('d-none')
  bookmarksBtnActive.classList.add('d-none')
  bookmarksBtn.classList.remove('d-none')
  createBtnActive.classList.add('d-none')
  createBtn.classList.remove('d-none')
  profileBtnActive.classList.remove('d-none')
  profileBtn.classList.add('d-none')
})
