const css = /*css*/ `
  :host {
    display: block;
    width: 100%;
    max-width: var(--container-width, 800px);
    margin-left: auto;
    margin-right: auto;
  }
`;

const html = /*html*/ `
  <style>${css}</style>
  <slot></slot>
`;

const template = document.createElement("template");
template.innerHTML = html;

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(template.content.cloneNode(true));
  }
}

window.customElements.define("app-container", AppContainer);
