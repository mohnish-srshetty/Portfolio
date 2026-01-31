document.getElementById('show-register').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('register-form').style.display = 'block';
  document.getElementById('message').textContent = '';
});

document.getElementById('show-login').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('register-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('message').textContent = '';
});

// Tab switching for login/register
const tabLogin = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');
const loginFormDiv = document.getElementById('login-form');
const registerFormDiv = document.getElementById('register-form');
if (tabLogin && tabRegister && loginFormDiv && registerFormDiv) {
  tabLogin.addEventListener('click', () => {
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
    loginFormDiv.style.display = '';
    registerFormDiv.style.display = 'none';
    document.getElementById('message').textContent = '';
  });
  tabRegister.addEventListener('click', () => {
    tabRegister.classList.add('active');
    tabLogin.classList.remove('active');
    loginFormDiv.style.display = 'none';
    registerFormDiv.style.display = '';
    document.getElementById('message').textContent = '';
  });
}

document.getElementById('register').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const name = document.getElementById('register-name').value;
  try {
    const res = await fetch('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name }),
      credentials: 'include'
    });
    const data = await res.json();
    document.getElementById('message').textContent = data.message;
    if (res.ok) {
      document.getElementById('message').style.color = 'green';
      // Switch to login
      document.getElementById('register-form').style.display = 'none';
      document.getElementById('login-form').style.display = 'block';
    } else {
      document.getElementById('message').style.color = 'red';
    }
  } catch (error) {
    document.getElementById('message').textContent = 'Error: ' + error.message;
    document.getElementById('message').style.color = 'red';
  }
});

document.getElementById('login').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  try {
    const res = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include'
    });
    const data = await res.json();
    document.getElementById('message').textContent = data.message;
    if (res.ok) {
      document.getElementById('message').style.color = 'green';
      setTimeout(() => {
        document.getElementById('message').textContent = '';
        window.location.href = '/portfolio';
      }, 10);
    } else {
      document.getElementById('message').style.color = 'red';
    }
  } catch (error) {
    document.getElementById('message').textContent = 'Error: ' + error.message;
    document.getElementById('message').style.color = 'red';
  }
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