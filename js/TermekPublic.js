import { termekLista } from "./termekLista.js";

export default class TermekPublic {
  #obj = {};
  constructor(obj = { id, nev, kep, leiras, ar }, szuloElem) {
    this.#obj = obj;
    this.szuloElem = szuloElem;
    this.megjelenitPublic();

    const kartyak = this.szuloElem.querySelectorAll(".kartya");
    this.buttonELem = kartyak[kartyak.length - 1].querySelector("button");

    this.buttonELem.addEventListener("click", (event) => {
      console.log(event.target);
      this.kosarbaEsemeny();
    });
  }

  megjelenitPublic() {
    let kod = `
        <div class="kartya">
        <img src = "${this.#obj.kep}" alt="${this.#obj.nev}">
        <p>${this.#obj.nev} , ${this.#obj.ar}</p>
        <p>${this.#obj.leiras}</p>
        <button class="kosarba">Kosárba</button>
        </div>
        `;

    this.szuloElem.insertAdjacentHTML("beforeend", kod);
  }

  getObj() {
    return this.#obj;
  }

  kosarbaEsemeny() {
    console.log("kosárba esemeny");
    const e = new CustomEvent("kosarba", { detail: this.#obj });
    window.dispatchEvent(e);
    console.log(this.#obj);
  }
}
