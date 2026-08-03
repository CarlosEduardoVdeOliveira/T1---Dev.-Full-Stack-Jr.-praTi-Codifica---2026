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
  type: "carousel",
  perView: getPerView({ 480: 2, 768: 3, 1024: 4, 9999: 5 }),
  autoplay: autoPlay,
  gap: 16,
  bound: true,
}).mount();

new Glide(".products", {
  type: "carousel",
  perView: getPerView({ 480: 1, 768: 2, 1024: 2, 9999: 3 }),
  autoplay: autoPlay,
  gap: 16,
  bound: true,
}).mount();

new Glide(".testimonials", {
  type: "carousel",
  perView: getPerView({ 480: 1, 768: 2, 1024: 2, 9999: 3 }),
  autoplay: autoPlay,
  gap: 16,
  bound: true,
}).mount();
