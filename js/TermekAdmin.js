export default class TermekAdmin {
  #obj = {};
  constructor(obj = { nev, leiras, kep, ar, ertekeles }, szuloELem) {
    this.#obj = obj;
    this.szuloELem = szuloELem;
    this.megjelenit();

    /*const kepElem = document.querySelector(".kep:last-child");
        kepElem.addEventListener("click", (event)=> {
            this.esemeny()
        })*/
  }

  megjelenit() {
    let html = `
        <tr>
            <td>${this.#obj.nev}</td>
            <td>${this.#obj.leiras}</td>
            <td>${this.#obj.ar}</td>
            <td>${this.#obj.ertekeles}</td>
        </tr>
               `;
    this.szuloELem.insertAdjacentHTML("beforeend", html);
  }
}
