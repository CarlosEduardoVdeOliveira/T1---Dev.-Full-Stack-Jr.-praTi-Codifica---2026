class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
    <footer class="container__footer">
      <p class="footer__paragraph"> &copy; Todos os direitos reservados e design feito com carinho por <b>Carlos Eduardo</b></p>
      <div class="content__footer">
        <ul class="content__footer-ul">
          <li><a class="link" href="#">nossos serviços</a></li>
          <li><a class="link" href="#">Sobre nós</a></li>
          <li><a class="link" href="#">Envio</a></li>
          <li><a class="link" href="#">FAQ</a></li>
          <li><a class="link" href="#">Contato</a></li>
        </ul>
      </div>
    </footer>`;
  }
}

customElements.define("site-footer", SiteFooter);
