const css = /*css*/ `
  :host {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  app-footer {
    margin-top: auto;
  }
`;

const html = /*html*/ `
  <style>${css}</style>
  <app-header></app-header>
  <slot></slot>
  <app-footer></app-footer>
`;

const template = document.createElement("template");
template.innerHTML = html;

class AppLayout extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(template.content.cloneNode(true));
  }
}

window.customElements.define("app-layout", AppLayout);
