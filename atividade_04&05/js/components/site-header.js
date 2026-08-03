class SiteHeader extends HTMLElement {
  connectedCallback() {
    const imgSrc = this.getAttribute("imgSrc") || "";

    this.innerHTML = `
      <header class="container__header">
        <img class="logo" src="${imgSrc}" alt="Logo" />
        <div class="content__header">
          <nav class="content__header-nav">
            <ul class="content__header-nav-ul">
              <li><a class="link" href="index.html">Início</a></li>
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
        <site-button
          class="btn-hamburger"
          bg-color="var(--color-gray-100)"
          text-color="var(--color-gray-500)"
          font-family="var(--font-family-teko)"
          content="<i class='fa-solid fa-bars'></i>"
        >
        </site-button>
      </header>
    `;

    const menuButton = this.querySelector(".btn-hamburger");
    const menu = this.querySelector(".content__header");
    const icon = menuButton.querySelector("i") || menuButton.querySelector("button i");

    menuButton.addEventListener("click", () => {
      menu.classList.toggle("active");
      const isActive = menu.classList.contains("active");
      // Troca o ícone entre hamburger e X
      const buttonEl = menuButton.querySelector("button");
      if (buttonEl) {
        buttonEl.innerHTML = isActive
          ? "<i class='fa-solid fa-xmark'></i>"
          : "<i class='fa-solid fa-bars'></i>";
      }
    });

    // Fechar menu ao clicar em um link
    menu.querySelectorAll(".content__header-nav-ul a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
        const buttonEl = menuButton.querySelector("button");
        if (buttonEl) {
          buttonEl.innerHTML = "<i class='fa-solid fa-bars'></i>";
        }
      });
    });
  }
}

customElements.define("site-header", SiteHeader);
