import { termekLista } from "./termekLista.js";
import Termekek from "./Termekek.js";

const szuloELem = document.querySelector(".tarolo");
const isAdminOldal = window.location.pathname.includes("admin.html");

new Termekek(termekLista, szuloELem, isAdminOldal);

window.addEventListener("torles", (event) => {
    const index = event.detail;
    termekLista.splice(index, 1);
    new Termekek(termekLista, szuloELem, isAdminOldal);
});
