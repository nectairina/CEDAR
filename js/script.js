
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

setInterval(changeImage, 1500);


/* Java botones products, new,offer..etc. */

document.addEventListener('DOMContentLoaded', function() {
    const btnNewElements = document.querySelector('.btn-action-newelement');
    const btnLastOffer = document.querySelector('.btn-action-lastoffer');
    const btnAll = document.querySelector('.btn-action-all'); 
    const btnStool = document.querySelector('.btn-action-stool');
    const btnArmchair = document.querySelector('.btn-action-armchair');
    const btnDesignChair = document.querySelector('.btn-action-design');
    const cards = document.querySelectorAll('.card');
  
    
    function showAllCards() {
      cards.forEach(card => {
        card.classList.remove('hidden'); 
      });
    }
  
    
    function filterCardsByClass(className) {
      cards.forEach(card => {
        if (card.classList.contains(className)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }
  
   
    btnNewElements.addEventListener('click', function() {
      cards.forEach(card => {
        const isNew = card.querySelector('.badge-new');
        if (isNew) {
          card.classList.remove('hidden'); 
        } else {
          card.classList.add('hidden'); 
        }
      });
    });
  
    
    btnLastOffer.addEventListener('click', function() {
      cards.forEach(card => {
        const isOffer = card.querySelector('.badge-offer');
        if (isOffer) {
          card.classList.remove('hidden'); 
        } else {
          card.classList.add('hidden'); 
        }
      });
    });
  
    
    btnAll.addEventListener('click', function() {
      showAllCards();
    });
  
    
    btnStool.addEventListener('click', function() {
      filterCardsByClass('stool');
    });
  
    btnArmchair.addEventListener('click', function() {
      filterCardsByClass('armchair');
    });
  
    btnDesignChair.addEventListener('click', function() {
      filterCardsByClass('design-chair');
    });
  
    
    showAllCards();
  });
  
 
  

  document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.querySelector(".custom-footer-subscribe-input");
    const subscribeButton = document.querySelector(".custom-footer-subscribe-button");
    const validationMessage = document.getElementById("validation-message");

    function validateEmail() {
        const emailValue = emailInput.value;
        if (emailValue.endsWith("@gmail.com")) {
            validationMessage.textContent = "Valid email";
            validationMessage.classList.add("valid");
            validationMessage.classList.remove("invalid");
        } else {
            validationMessage.textContent = "Invalid email";
            validationMessage.classList.add("invalid");
            validationMessage.classList.remove("valid");
        }
        validationMessage.style.display = "block";
        
       
        setTimeout(function() {
            validationMessage.classList.add("fade-out");
        }, 3000); 
        
        setTimeout(function() {
            validationMessage.style.display = "none";
            validationMessage.classList.remove("fade-out");
        }, 3500); 
    }

    emailInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            validateEmail();
        }
    });

    subscribeButton.addEventListener("click", function(event) {
        event.preventDefault();
        validateEmail();
    });
});


function openCarousel(index) {
  const carousel = document.querySelector('#carousel-item');
  const carouselInstance = bootstrap.Carousel.getOrCreateInstance(carousel);
  carouselInstance.to(index);
}