const css = /*css*/ `
  
`;

const html = /*html*/ `
  <style>${css}</style>
  <app-layout>
    <app-container>
      <h1>Página de Usuarios</h1>
    </app-container>
  </app-layout>
`;

const template = document.createElement("template");
template.innerHTML = html;

class UsersPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(template.content.cloneNode(true));
  }
}

window.customElements.define("users-page", UsersPage);
