class SiteButton extends HTMLElement {
  connectedCallback() {
    const content = this.getAttribute("content") || "";
    const bgColor = this.getAttribute("bg-color") || "#fff";
    const textColor = this.getAttribute("text-color") || "var(--color-black)";
    const btnPadding = this.getAttribute("btn-padding") || "var(--spacing-xs) var(--spacing-md)";
    const fontFamily =
      this.getAttribute("font-family") || "var(--font-family-rubik)";

    this.innerHTML = `
      <button
        class="btn"
        style="background:${bgColor}; color:${textColor}; font-family:${fontFamily}; padding:${btnPadding}"
      >
        ${content}
      </button>
    `;
  }
}

customElements.define("site-button", SiteButton);
