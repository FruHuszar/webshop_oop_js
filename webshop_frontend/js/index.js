import Termekek from "./Termekek.js";

const szuloELem = document.querySelector(".tarolo");
const isAdminOldal = window.location.pathname.includes("admin.html");

async function startApp() {
  try {
    const response = await fetch("http://localhost:3000/api/termekek");
    const termekListaAdatbazisbol = await response.json();

    new Termekek(termekListaAdatbazisbol, szuloELem, isAdminOldal);

    window.addEventListener("torles", async (event) => {
      // 1. Az event.detail-ben most már az objektum ID-ját kell küldened a TermekAdmin-ból!
      const id = event.detail;

      if (confirm("Biztosan törlöd a terméket?")) {
        try {
          const response = await fetch(
            `http://localhost:3000/api/termekek/${id}`,
            {
              method: "DELETE",
            },
          );

          if (response.ok) {
            alert("Törölve az adatbázisból!");
            // Frissítjük az oldalt, hogy eltűnjön a termék
            location.reload();
          } else {
            alert("Hiba történt a törlés során a szerveren.");
          }
        } catch (error) {
          console.error("Hiba a hálózati kérésnél:", error);
        }
      }
    });

    const kosarLista = [];

    window.addEventListener("kosarba", (event) => {
      kosarLista.push(event.detail);
      console.log("Kosár: ", kosarLista);
    });

    window.addEventListener("ujElemHozzaadas", (event) => {
      const ujTermek = event.detail;
      termekListaAdatbazisbol.push(ujTermek);
      new Termekek(termekListaAdatbazisbol, szuloELem, isAdminOldal);
    });
  } catch (error) {
    console.error("Hiba a backend elérésekor:", error);
  }
}

startApp();
