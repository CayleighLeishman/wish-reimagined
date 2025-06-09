const root = document.documentElement;

const buttons = {
  light: document.getElementById('lightSwitch'),
  dark: document.getElementById('darkSwitch'),
  auto: document.getElementById('autoSwitch'),
  mono: document.getElementById('monoSwitch')
};

// Helper function to set aria-pressed on the mode buttons
function setPressed(activeId) {
  ['light', 'dark', 'auto'].forEach(mode => {
    const id = mode + 'Switch';
    buttons[mode].setAttribute('aria-pressed', id === activeId ? 'true' : 'false');
  });
}

// Light mode
function switchLight() {
  root.setAttribute('data-theme', 'light');
  setPressed('lightSwitch');
}

// Dark mode
function switchDark() {
  root.setAttribute('data-theme', 'dark');
  setPressed('darkSwitch');
}

// Auto mode
function switchAuto() {
  root.removeAttribute('data-theme'); // Let system preference decide
  setPressed('autoSwitch');
}

// turns on or off monochrome mode
function toggleMono() {
  const isActive = document.documentElement.hasAttribute('data-mono');

  if (isActive) {
    document.documentElement.removeAttribute('data-mono');
    buttons.mono.setAttribute('aria-pressed', 'false');
  } else {
    document.documentElement.setAttribute('data-mono', '');
    buttons.mono.setAttribute('aria-pressed', 'true');
  }
}


// Hue slider
const hueSlider = document.getElementById('hueSlider');
hueSlider.addEventListener('input', () => {
  root.style.setProperty('--hue', hueSlider.value);
});

// Set initial hue on load
root.style.setProperty('--hue', hueSlider.value);
