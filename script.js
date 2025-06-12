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
