document.querySelector('.logout-btn').addEventListener('click', async () => {
  await fetch('/logout', { method: 'POST', credentials: 'include' });
  window.location.href = '/';
});

// Profile dropdown toggle on click
const profileAvatar = document.querySelector('.portfolio-avatar');
const profileDropdown = document.querySelector('.profile-dropdown');

profileAvatar.addEventListener('click', (e) => {
  e.stopPropagation();
  profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!profileAvatar.contains(e.target) && !profileDropdown.contains(e.target)) {
    profileDropdown.style.display = 'none';
  }
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  section.classList.add('animate-on-scroll');
  observer.observe(section);
});

// Light lines animation
const lightsDown = [
  { selector: ".light4", from: -1080, to: 1080 },
  { selector: ".light5", from: -1080, to: 1080 },
  { selector: ".light6", from: -1080, to: 1080 },
  { selector: ".light7", from: -1080, to: 1080 },
  { selector: ".light8", from: -1080, to: 1080 },
  { selector: ".light11", from: -1080, to: 1080 },
  { selector: ".light12", from: -1080, to: 1080 },
  { selector: ".light13", from: -1080, to: 1080 },
  { selector: ".light14", from: -1080, to: 1080 },
  { selector: ".light15", from: -1080, to: 1080 },
  { selector: ".light16", from: -1080, to: 1080 },
];
const lightsUp = [
  { selector: ".light1", from: 1080, to: -1080 },
  { selector: ".light2", from: 1080, to: -1080 },
  { selector: ".light3", from: 1080, to: -1080 },
  { selector: ".light9", from: 1080, to: -1080 },
  { selector: ".light10", from: 1080, to: -1080 },
  { selector: ".light17", from: 1080, to: -1080 },
];
const container = document.querySelector('.light-lines');
if (container) {
  const allLights = [...lightsDown, ...lightsUp];
  const animations = allLights.map((light) => {
    const element = container.querySelector(light.selector);
    const duration = (Math.floor(Math.random() * 59) + 2) * 0.5 + 0.5;
    return { element, from: light.from, to: light.to, duration: duration / 1 };
  });
  const animationState = animations.map(() => ({
    startTime: performance.now() - Math.random() * 5000,
  }));
  const animate = (time) => {
    animations.forEach((ref, index) => {
      if (!ref.element) return;
      const state = animationState[index];
      const elapsed = (time - state.startTime) / 1000;
      const progress = (elapsed % ref.duration) / ref.duration;
      const currentY = ref.from + (ref.to - ref.from) * progress;
      ref.element.style.transform = "translateY(" + currentY + "px)";
    });
    requestAnimationFrame(animate);
  };
  requestAnimationFrame(animate);
}