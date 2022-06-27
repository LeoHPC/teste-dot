/* FIRST-SECTION */
/* SLIDER */
var slideIndex = 1
showSlides(slideIndex)

function currentSlides(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides")
  var dots = document.getElementsByClassName("dot")

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }

  slides[slideIndex - 1].style.display = "block"
  dots[slideIndex - 1].className += " active"
}

/* SECOND SECTION */
/* CAROUSEL */
const cardsWrapper = document.getElementsByClassName('carousel-item-wrapper')
var isMobileScreen

if (window.innerWidth < 480) {
  var i
  for (i = 0; i < cardsWrapper.length; i++) {
    cardsWrapper[i].classList.remove('carousel-item-wrapper')
  }
  isMobileScreen = true
}

const slides = isMobileScreen
  ? document.querySelectorAll('[data-js="carousel__item-mobile"]')
  : document.querySelectorAll('[data-js="carousel__item"]')


if (window.innerWidth < 480) {
  const slidesDesktop = document.querySelectorAll('[data-js="carousel__item"]')
  slides[0].classList.add('carousel__item--visible')
  slidesDesktop.forEach(slide => {
    slide.classList.remove('carousel__item')
  })
  slides.forEach(slide => {
    slide.classList.add('carousel__item')
  })
}

const nextButton = document.querySelector('[data-js="carousel__button--next"]')
const previousButton = document.querySelector('[data-js="carousel__button--prev"]')

const lastSlideIndex = slides.length - 1
let currentSlideIndex = 0

const manipulateSlidesClasses = correctSlideIndex => {
  slides.forEach(slide => slide.classList.remove('carousel__item--visible'))
  slides[correctSlideIndex].classList.add('carousel__item--visible')
}

nextButton.addEventListener('click', () => {
  const correctSlideIndex = currentSlideIndex === lastSlideIndex
    ? currentSlideIndex = 0
    : ++currentSlideIndex

  manipulateSlidesClasses(correctSlideIndex)
})

previousButton.addEventListener('click', () => {
  const correctSlideIndex = currentSlideIndex === 0
    ? currentSlideIndex = lastSlideIndex
    : --currentSlideIndex

  manipulateSlidesClasses(correctSlideIndex)
})

/* FOURTH-SECTION */
/* ACCORDION */
const accordion = document.querySelector('[data-js="accordion"]')

const closeAccordionItem = (accordionHeaderToBeClosed) => {
  const accordionHeaderId = accordionHeaderToBeClosed.dataset.accordionHeader
  const accordionBodyToBeClosed =
    document.querySelector(`[data-accordion-body="${accordionHeaderId}"]`)

  accordionHeaderToBeClosed.classList.remove('active')
  accordionBodyToBeClosed.classList.remove('active')
}

const handleAccordionClick = event => {
  const accordionHeaderId = event.target.dataset.accordionHeader
  const clickedAccordionHeader =
    document.querySelector(`[data-accordion-header="${accordionHeaderId}"]`)
  const accordionItemToBeOpened =
    document.querySelector(`[data-accordion-body="${accordionHeaderId}"]`)
  const accordionHeaderToBeClosed = Array
    .from(document.querySelectorAll('[data-js="accordion-header"]'))
    .filter(accordionHeader => accordionHeader !== clickedAccordionHeader)
    .find(accordionHeader => accordionHeader.classList.contains('active'))

  if (!event.target.dataset.accordionHeader) {
    return
  }

  if (accordionHeaderToBeClosed) {
    closeAccordionItem(accordionHeaderToBeClosed)
  }

  accordionItemToBeOpened.classList.toggle('active')
  clickedAccordionHeader.classList.toggle('active')
}

accordion.addEventListener('click', handleAccordionClick)

/* FIFTH-SECTION */
/* PHONE MASK */
function mascara(o, f) {
  v_obj = o
  v_fun = f
  setTimeout("execmascara()", 1)
}

function execmascara() {
  v_obj.value = v_fun(v_obj.value)
}

function mtel(v) {
  v = v.replace(/\D/g, "");
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
  v = v.replace(/(\d)(\d{4})$/, "$1-$2");
  return v;
}

function id(el) {
  return document.getElementById(el);
}

window.onload = function () {
  id('telefone').onkeyup = function () {
    mascara(this, mtel);
  }
}