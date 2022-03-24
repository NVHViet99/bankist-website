// Lazy loading
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observe) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // replace src with ata-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observe.unobserve(entry.target);
};

const imgObserve = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-300px',
});

imgTargets.forEach(img => imgObserve.observe(img));
