import TermekAdmin from "./TermekAdmin.js";
import TermekPublic from "./TermekPublic.js";

export default class Termekek {
  #lista = [];
  #adminE = false;
  constructor(lista, szuloElem, adminE) {
    this.#lista = lista;
    this.szuloElem = szuloElem;
    this.#adminE = adminE;
    if (this.#adminE) {
      this.megjelenitAdmin();
    } else {
      this.megjelenitPublic();
    }
  }

  megjelenitAdmin() {
    this.szuloElem.innerHTML = "";
    this.#lista.forEach((elem, i) => {
      const ta = new TermekAdmin(elem, this.szuloElem);
    });
    console.log("Termékadmin");
  }

  megjelenitPublic() {
    this.szuloElem.innerHTML = "";
    this.#lista.forEach((elem, i) => {
      const tp = new TermekPublic(elem, this.szuloElem);
    });
    console.log("Termékpublic");
  }
}
