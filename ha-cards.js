class HaCards extends HTMLElement {

  setConfig(config) {
    this.config = config;

    this.innerHTML = `
      <ha-card header="Meine GitHub Card">
        <div style="padding: 16px;">
          <p>Hallo von GitHub!</p>
          <p>Entity: ${config.entity}</p>
        </div>
      </ha-card>
    `;
  }

  set hass(hass) {
    if (!this.config) return;

    const state = hass.states[this.config.entity];
    const p = this.querySelector("p:last-child");

    if (state) p.innerText = `State: ${state.state}`;
  }
}

customElements.define("ha-cards", HaCards);
