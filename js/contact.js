// start swiper slide
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//  end swiper slide




//  start local storage
var set = (k, v) => localStorage.setItem(k, v);
var form = document.getElementById('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  var firstName = form.firstName.value;
  var lastName = form.LastName.value;
  var email = form.Email.value;
  var phone = form.phone.value;
  var message = form.text.value;
  set('firstName', firstName);
  set('lastName', lastName);
  set('email', email);
  set('phone', phone);
  set('message', message);
  console.log({ firstName, lastName, email, phone, message });
  form.reset();
  alert('Message is sent');
});
//  end local storage