export default class TermekUrlap {
  constructor(szuloElem) {
    this.szuloElem = szuloElem;
    this.megjelenit();

    this.mentesGomb = this.szuloElem.querySelector("#mentes");
    this.nevElem = this.szuloElem.querySelector("#unev");
    this.leirasElem = this.szuloElem.querySelector("#uleiras");
    this.arElem = this.szuloElem.querySelector("#uar");
    this.ertekelesElem = this.szuloElem.querySelector("#uertekeles");

    this.mentesGomb.addEventListener("click", () => {
      this.kattintasEsemeny();
    });
  }

  kattintasEsemeny() {
    const ujAdat = {
      nev: this.nevElem.value,
      leiras: this.leirasElem.value,
      ar: this.arElem.value,
      ertekeles: this.ertekelesElem.value,
    };

    const esemeny = new CustomEvent("ujElemHozzaadas", {
      detail: ujAdat,
    });
    window.dispatchEvent(esemeny);
  }

  megjelenit() {
    let html = `
        <tr class="urlap-sor">
            <td><input type="text" id="unev" placeholder="Név"></td>
            <td><input type="text" id="uleiras" placeholder="Leírás"></td>
            <td><input type="number" id="uar" placeholder="Ár"></td>
            <td><input type="number" id="uertekeles" placeholder="Értékelés"></td>
            <td><button id="mentes">Mentés</button></td>
        </tr>
               `;
    this.szuloElem.insertAdjacentHTML("afterbegin", html);
  }
}
