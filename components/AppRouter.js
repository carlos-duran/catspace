const routes = [
  {
    path: "/",
    tag: "home-page",
  },
  {
    path: "/usuarios",
    tag: "users-page",
  },
];

function getPathFromHash() {
  const hash = location.hash;
  let path = "/";
  if (hash) path = hash.slice(1);
  return path;
}

class AppRouter extends HTMLElement {
  handlePath() {
    const path = getPathFromHash();
    const route = routes.find((route) => route.path === path);
    let el;
    if (route) {
      el = document.createElement(route.tag);
    } else {
      el = document.createElement("not-found-page");
    }
    this.innerHTML = "";
    this.append(el);
  }

  connectedCallback() {
    console.log("Hola router!");
    this.handlePath();
    window.addEventListener("hashchange", this.handlePath.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener("hashchange", this.handlePath.bind(this));
  }
}

window.customElements.define("app-router", AppRouter);
