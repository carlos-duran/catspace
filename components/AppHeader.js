const css = /*css*/ `
  header {
    padding: 1rem;
    background-color: var(--primary-color);
  }

  app-container {
    display: flex;
    justify-content: space-between;
  }
`;

const html = /*html*/ `
  <style>${css}</style>
  <header>
    <app-container>
      <app-link href="/">🙀 Catspace!</app-link>
      <nav>
        <app-link href="/usuarios">Directorio</app-link>
        <app-link href="/login">Login</app-link>
        <app-link href="/registro">Registro</app-link>
        <!-- <a href="/perfil">Perfil</a> -->
      </nav>
    </app-container>
  </header>
`;

const template = document.createElement("template");
template.innerHTML = html;

class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(template.content.cloneNode(true));
  }
}

window.customElements.define("app-header", AppHeader);
