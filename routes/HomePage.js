const css = /*css*/ `
  section {
    padding: 4rem 1rem;
  }

  section:nth-child(even) {
    background-color: #eee;
  }
`;

const html = /*html*/ `
  <style>${css}</style>
  <app-layout>
    <section id="hero">
      <app-container>
        <h1>Página principal</h1>
        <p>Hola mundo!<p/>
      </app-container>
    </section>
    <section id="testimonios">
      <app-container>
        <h1>Testimonios</h1>
      </app-container>
    </section>
    <section id="contacto">
      <app-container>
        <h1>Contacto</h1>
      </app-container>
    </section>
  </app-layout>
`;

const template = document.createElement("template");
template.innerHTML = html;

class HomePage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(template.content.cloneNode(true));
  }
}

window.customElements.define("home-page", HomePage);
