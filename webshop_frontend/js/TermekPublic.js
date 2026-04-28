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
        <div class="kartya card col-sm-3" style = "width:400px ">
        <img class ="card-img-top img-fluid" style= "height:300px" src = "${this.#obj.kep}" alt="${this.#obj.nev}">
        <p class="card-title h2 text-center">${this.#obj.nev} , ${this.#obj.ar}</p>
        <p class="card-text text-center">${this.#obj.leiras}</p>
        <button class="kosarba btn btn-primary">Kosárba</button>
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
