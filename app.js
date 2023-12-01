const submitBtn = document.querySelector('.submit-btn');
const okayBtn = document.querySelector('.okay-button');
const modal = document.querySelector('.modal');

submitBtn.addEventListener('click' , function() {
  modal.classList.remove('display');
});
okayBtn.addEventListener('click' , function() {
  modal.classList.add('display');
  submitBtn.classList.remove('display');
});
