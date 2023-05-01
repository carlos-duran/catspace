const css = /*css*/ `
  footer {
    display: block;
    padding: 1rem;
    background-color: var(--primary-color);
    text-align: center;
  }
`;

const html = /*html*/ `
  <style>${css}</style>
  <footer>©️ 2023 Carlos Duran</footer>
`;

const template = document.createElement("template");
template.innerHTML = html;

class AppFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(template.content.cloneNode(true));
  }
}

window.customElements.define("app-footer", AppFooter);
