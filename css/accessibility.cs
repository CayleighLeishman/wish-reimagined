// Credit to who I took this code from:
//  https://whimsica11y.net/disability/

#switches {
display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

@media (370px < width < 500px) {
  #switches {
    display: flex;
    flex-wrap: wrap;
  }
}
.hue-slider {
  display: flex;
  justify-content: space-between;
  grid-column: 1 / span 2;
  padding: 1px 6px;
}
#hueSlider {
  max-width: 5em;
}
button, .hue-slider, .notice {
  border: 1px solid var(--text);
  border-radius: 0.25em;
  margin: 0.1em;
  color: inherit;
  background-color: var(--background);
  font-family: var(--display-font);
  font-size: 1.1em;
  text-align: center;
}
#switches button[aria-pressed="true"] {
  color: var(--background);
  background-color: var(--text);
}
button:hover, .notice {
  color: CanvasText;
  background-color: Canvas;
}
button:active { translate: 1px 1px }
.notice {
  margin-inline: auto;
  padding: 0.5em 0.75em;
  max-width: 40ch;
}