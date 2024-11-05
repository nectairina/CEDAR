
document.addEventListener('DOMContentLoaded', function() {
  var myModal = new bootstrap.Modal(document.getElementById('subscribeModal'));
  myModal.show();

  var subscribeForm = document.querySelector('#subscribeModal form');

  var subscribeToast = new bootstrap.Toast(document.getElementById('subscribeToast'));

  subscribeForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    myModal.hide();

    subscribeToast.show();
  });
});


document.querySelectorAll('.categoria-item').forEach(item => {
  item.addEventListener('mouseover', function() {
      const hoverImg = this.getAttribute('data-hover-img');
      this.style.setProperty('--hover-img', `url(${hoverImg})`);
  });
});

const images = document.querySelectorAll('.banner-image');
const logos = document.querySelectorAll('.banner-logo');
let currentIndex = 0;

function changeImage() {
  images[currentIndex].classList.remove('active');
  logos[currentIndex].classList.remove('active');

  currentIndex = (currentIndex + 1) % images.length;

  images[currentIndex].classList.add('active');
  logos[currentIndex].classList.add('active');
}

setInterval(changeImage, 3000);
