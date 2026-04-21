import { termekLista } from "./termekLista.js";
import Termekek from "./Termekek.js";

const szuloELem = document.querySelector(".tarolo");

new Termekek(termekLista, szuloELem, true);

window.addEventListener("torles", (event) => {
    const index = event.detail;
    
    termekLista.splice(index, 1);
    
    szuloELem.innerHTML = "";
    new Termekek(termekLista, szuloELem, true);
});
