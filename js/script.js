
window.onload = function() {
  var myModal = new bootstrap.Modal(document.getElementById('newsletterModal'));
  myModal.show();
};



document.addEventListener('DOMContentLoaded', function() {
  // Cerrar el modal al enviar el formulario
  document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario para demostración
    var modalElement = bootstrap.Modal.getInstance(document.getElementById('newsletterModal'));
    modalElement.hide(); // Cerrar el modal

    // Mostrar el toast
    var toastElement = document.getElementById('subscribeToast');
    var toast = new bootstrap.Toast(toastElement);
    toast.show(); // Mostrar el toast
  });
});


document.querySelectorAll('.categoria-item').forEach(item => {
  item.addEventListener('mouseover', function() {
      const hoverImg = this.getAttribute('data-hover-img');
      this.style.setProperty('--hover-img', `url(${hoverImg})`);
  });
});

const carousel = new bootstrap.Carousel('#myCarousel', {
  interval: 3000,
  wrap: true,
  pause: false,
  touch: false
})

