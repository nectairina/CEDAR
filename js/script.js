
window.onload = function() {
  var myModal = new bootstrap.Modal(document.getElementById('newsletterModal'));
  myModal.show();
};


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var modalElement = bootstrap.Modal.getInstance(document.getElementById('newsletterModal'));
    modalElement.hide(); 

    var toastElement = document.getElementById('subscribeToast');
    var toast = new bootstrap.Toast(toastElement);
    toast.show(); 
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
