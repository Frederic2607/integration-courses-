document.addEventListener("DOMContentLoaded", () => {
  // Afficher MODAL et empecher le scroll
  document.querySelector("#btn-signup").addEventListener("click", () => {
    document.querySelector(".modal").classList.remove("hidden");
    document.querySelector("body").classList.add("no-scroll");
  });

  // Cacher la MODAL et remettre le scroll
  document.querySelector(".modal-container i").addEventListener("click", () => {
    document.querySelector(".modal").classList.add("hidden");
    document.querySelector("body").classList.remove("no-scroll");
  });

  // Envoie et récupération des données du formulaire
  document
    .querySelector("#contact-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        description: document.querySelector("#description").value,
      };
      const response = await axios.post(
        "https://app-backend-tripadvisor.herokuapp.com/form",
        data
      );
    });
});
