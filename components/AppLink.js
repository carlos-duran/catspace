const css = /*css*/ `
  :host {
    display: inline;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }
`;

const html = /*html*/ `
  <style>${css}</style>
  <a>
    <slot></slot>
  </a>
`;

const template = document.createElement("template");
template.innerHTML = html;

class AppLink extends HTMLElement {
  constructor() {
    super();
    const href = this.getAttribute("href");
    this.attachShadow({ mode: "open" });
    const fragment = template.content.cloneNode(true);
    const a = fragment.querySelector("a");
    a.setAttribute("href", "#" + href);
    this.shadowRoot.append(fragment);
  }
}

window.customElements.define("app-link", AppLink);
