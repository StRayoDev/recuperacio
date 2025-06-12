function afegirJoc() {
  const input = document.getElementById("nouJoc");
  const joc = input.value.trim();

  if (joc !== "") {
    const llista = document.getElementById("jocs");
    const nouElement = document.createElement("li");
    nouElement.textContent = joc;
    llista.appendChild(nouElement);
    input.value = "";
  } else {
    alert("Introdueix un nom de videojoc vàlid.");
  }
}

function filtrarJocs() {
  const filtre = document.getElementById("filtre").value;
  const jocs = document.querySelectorAll("#jocs li");

  jocs.forEach(joc => {
    const text = joc.textContent.toLowerCase();
    if (filtre === "retro") {
      joc.classList.toggle("ocult", !text.includes("retro"));
    } else {
      joc.classList.remove("ocult");
    }
  });
}
