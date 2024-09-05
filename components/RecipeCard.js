export class RecipeCard extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    const template = document.getElementById("recipe-card-template");
    const content = template.content.cloneNode(true);
    const styles = document.createElement("style");
    this.root.appendChild(content);
    this.root.appendChild(styles);

    async function getCSS() {
      const css = await fetch("/components/RecipeCard.css");
      styles.textContent = await css.text();
    }

    getCSS();
  }
}

customElements.define("recipe-card", RecipeCard);
