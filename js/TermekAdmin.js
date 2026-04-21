export default class TermekAdmin {
  #obj = {};
  #index;

  constructor(obj, szuloElem, index) {
    this.#obj = obj;
    this.szuloElem = szuloElem;
    this.#index = index;
    this.megjelenit();

    this.torolGomb = this.szuloElem.querySelector("tr:last-child .torol");
    this.torolGomb.addEventListener("click", () => {
      this.kattintasEsemeny();
    });
  }

  kattintasEsemeny() {
    const esemeny = new CustomEvent("torles", {
      detail: this.#index,
    });
    window.dispatchEvent(esemeny);
  }

  megjelenit() {
    let html = `
        <tr class="auto-hyphen">
            <td>${this.#obj.nev}</td>
            <td>${this.#obj.leiras}</td>
            <td>${this.#obj.ar}</td>
            <td>${this.#obj.ertekeles}</td>
            <td><button class="torol btn btn-outline-dark">✕</button></td>
        </tr>
               `;
    this.szuloElem.insertAdjacentHTML("beforeend", html);
  }
}
