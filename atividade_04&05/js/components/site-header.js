class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="container__header">
        <img class="logo" src="../../assets/logo.svg" />

        <nav class="content__header">
          <ul class="content__header-ul">
            <li><a class="content__header-link" href="#">Nossos Serviços</a></li>
            <li><a class="content__header-link" href="#">Sobre Nós</a></li>
            <li><a class="content__header-link" href="#">Produtos</a></li>
            <li><a class="content__header-link" href="#">Cuidados com Pets</a></li>
            <li><a class="content__header-link" href="#">Contato</a></li>
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
      </header>
    `;
  }
}

customElements.define("site-header", SiteHeader);
