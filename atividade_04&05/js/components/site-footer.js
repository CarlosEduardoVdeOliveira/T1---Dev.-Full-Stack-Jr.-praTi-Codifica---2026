class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
    <footer class="container__footer">
      <p class="footer__paragraph"> &copy; Todos os direitos reservados e design feito com carinho por <b>Carlos Eduardo</b></p>
      <div class="content__footer">
        <ul class="content__footer-ul">
          <li><a class="link" href="servicos.html">nossos serviços</a></li>
          <li><a class="link" href="sobre.html">Sobre nós</a></li>
          <li><a class="link" href="produtos.html">Produtos</a></li>
          <li><a class="link" href="cuidados.html">Cuidados</a></li>
          <li><a class="link" href="contato.html">Contato</a></li>
        </ul>
      </div>
    </footer>`;
  }
}

customElements.define("site-footer", SiteFooter);
