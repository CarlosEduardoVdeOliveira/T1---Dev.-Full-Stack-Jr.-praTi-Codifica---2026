function getPerView(breakpoints) {
  const width = window.innerWidth;
  for (const [bp, val] of Object.entries(breakpoints)) {
    if (width <= parseInt(bp)) return val;
  }
  return Object.values(breakpoints).pop();
}

let autoPlay = 0;
if (window.innerWidth < 600) {
  autoPlay = 3000;
}

new Glide(".services", {
  perView: getPerView({ 480: 1, 768: 2, 1024: 3, 9999: 5 }),
  autoplay: autoPlay,
  gap: 16,
}).mount();

new Glide(".products", {
  perView: getPerView({ 480: 1, 768: 2, 1024: 2, 9999: 3 }),
  autoplay: autoPlay,
}).mount();

new Glide(".testimonials", {
  perView: getPerView({ 480: 1, 768: 1, 9999: 3 }),
  autoplay: autoPlay,
}).mount();
