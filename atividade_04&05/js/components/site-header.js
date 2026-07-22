class SiteHeader extends HTMLElement {
  connectedCallback() {
    const imgSrc = this.getAttribute("imgSrc") || "";

    this.innerHTML = `
      <header class="container__header">
        <a href="../../pages/index.html">
          <img class="logo" src="${imgSrc}" alt="Logo" />
        </a>
        <site-button
          class="btn-hamburger"
          bg-color="var(--color-gray-100)"
          text-color="var(--color-gray-500)"
          font-family="var(--font-family-teko)"
          content="<i class='fa-solid fa-bars'></i>"
        >
        </site-button>
        <div class="content__header">
          <nav class="content__header-nav">
            <ul class="content__header-nav-ul">
              <li><a class="link" href="servicos.html">Nossos Serviços</a></li>
              <li><a class="link" href="sobre.html">Sobre Nós</a></li>
              <li><a class="link" href="produtos.html">Produtos</a></li>
              <li><a class="link" href="cuidados.html">Cuidados com Pets</a></li>
              <li><a class="link" href="contato.html">Contato</a></li>
            </ul>
          </nav>

          <div class="container-buttons">
            <site-button
              bg-color="var(--color-blue-500)"
              text-color="var(--color-white)"
              font-family="var(--font-family-teko)"
              content="Sign In">
            </site-button>

            <site-button
              bg-color="var(--color-blue-200)"
              text-color="var(--color-blue-500)"
              font-family="var(--font-family-teko)"
              content="Cadastre-se">
            </site-button>
          </div>
        </div>
      </header>
    `;
    const menuButton = this.querySelector(".btn-hamburger");
    const menu = this.querySelector(".content__header");

    menuButton.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }
}

customElements.define("site-header", SiteHeader);
