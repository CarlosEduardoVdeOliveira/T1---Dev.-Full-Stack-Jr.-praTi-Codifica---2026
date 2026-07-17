const btnArrows = document.querySelectorAll(".btn-arrows")

if(window.screen.width > 600){
  btnArrows.forEach(btn => btn.style.display === "none")
}else{
  btnArrows.forEach(btn => btn.style.display === "block")
}

let autoPlay = 0
if(window.screen.width < 600){
  autoPlay = 3000
}

new Glide(".services", {
  perView: 5,
  autoplay: autoPlay,
  gap: 16,
}).mount();

new Glide(".products", {
  perView: 3,
  autoplay: autoPlay,
}).mount();

new Glide(".testimonials", {
  perView: 3,
  autoplay: autoPlay,
}).mount();
