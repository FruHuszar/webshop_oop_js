export default class Termekek {
  #lista = [];
  #adminE = false;

  constructor(lista, szuloElem, adminE) {
    this.#lista = lista;
    this.szuloElem = szuloElem;
    this.#adminE = adminE;
    
    this.szuloElem.innerHTML = "";

    if (this.#adminE) {
      this.megjelenitAdmin();
    } else {
      this.megjelenitPublic();
    }
  }

  megjelenitAdmin() {
    let kod = `
            <table>
                <thead>
                    <tr>
                        <th>Név</th>
                        <th>Leírás</th>
                        <th>Ár</th>
                        <th>Értékelés</th>
                        <th>Törlés</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
          `;
    this.szuloElem.insertAdjacentHTML("beforeend", kod);
    this.tbodyElem = this.szuloElem.querySelector("tbody");
    
    this.#lista.forEach((elem, i) => {
      new TermekAdmin(elem, this.tbodyElem, i);
    });
  }

  megjelenitPublic() {
    this.#lista.forEach((elem, i) => {
      new TermekPublic(elem, this.szuloElem);
    });
  }
}
