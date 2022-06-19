// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector('#modal')
modal.classList.add('hidden')
let modalMessage = modal.querySelector('#modal-message')

const likes = document.querySelectorAll('.like-glyph')

likes.forEach(like => {
  like.addEventListener('click', () => {
    mimicServerCall()
      .then(res => {
        if (like.textContent == FULL_HEART) {
          like.classList.remove('activated-heart')
          like.textContent = EMPTY_HEART
        } else {
          like.classList.add('activated-heart')
          like.textContent = FULL_HEART
        }
      })
      .catch(err => {
        modal.classList.remove('hidden')
        setTimeout(() => {
          modal.classList.add('hidden')
        }, 3000);
        modalMessage.textContent = err
      })
  })

})





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
