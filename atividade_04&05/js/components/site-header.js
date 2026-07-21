
class SiteHeader extends HTMLElement {
  connectedCallback() {
    const imgSrc = this.getAttribute("imgSrc") || "";

    this.innerHTML = `
      <header class="container__header">
        <img class="logo" src="${imgSrc}" alt="Logo" />
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
              <li><a class="link" href="#">Nossos Serviços</a></li>
              <li><a class="link" href="#">Sobre Nós</a></li>
              <li><a class="link" href="#">Produtos</a></li>
              <li><a class="link" href="#">Cuidados com Pets</a></li>
              <li><a class="link" href="#">Contato</a></li>
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
      if(menu.classList.contains("active")){
        menuButton.style.right = "30%"
      }else{
        menuButton.style.right = "0"
        menuButton.style.transition = "right 0.3s ease-in"
      }
    });
  }
}

customElements.define("site-header", SiteHeader);
