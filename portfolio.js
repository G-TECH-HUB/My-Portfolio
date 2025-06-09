/* JS Nav Bar Handler */
const openMenu = document.querySelector('.bxs-up-arrow-alt');
const closeMenu = document.querySelector('.bxs-down-arrow-alt');
const navBox = document.querySelector('.nav-box');
const linksBtn = document.querySelectorAll('.links');

/* body.addEventListener('touchstart', (event) => {
   if(!navBox.contains(event.target)){
      navBox.classList.remove('show');
   }
}); */
linksBtn.forEach((link) => {
   link.addEventListener('click', () => {
      console.log('clicked')
      navBox.classList.remove("show");
   })
})
openMenu.addEventListener('click', () => {
   navBox.classList.toggle('show');
})

closeMenu.addEventListener('click', () => {
   navBox.classList.remove('show');

})

/* Contact Box Notification Handler */
const form = document.getElementById('contact-form');
const message = document.getElementById('message-status');
const submit = document.getElementById('submit');
	
submit.addEventListener('click', () => {
      message.innerHTML = ('Please wait for verification once input is filled...')


   setTimeout(() => {
      message.innerHTML = ('Once verification is successful message will be sent automatically!')
   }, 2000)

   setTimeout(() => {
      message.innerHTML = ('')
   }, 7000)

   setTimeout(() => {
      form.reset();
   }, 7000)
   
})



