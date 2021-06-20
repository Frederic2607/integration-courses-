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

  // Détecter le scroll et ajouter la bordure au header
  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    if (scroll !== 0) {
      document.querySelector("header").classList.add("bottom-border");
    } else {
      document.querySelector("header").classList.remove("bottom-border");
    }
  });

  // Reset le formulaire au click sur la croix
  document.querySelector(".modal-cross").addEventListener("click", () => {
    document.querySelector("#contact-form").reset();
    document.querySelector("#submit-btn").removeAttribute("disabled");
    document.querySelector(".form-send").classList.add("send-hidden");
  });

  // Envoie et récupération des données du formulaire
  document
    .querySelector("#contact-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();

      // désactiver le bouton de soumission
      document
        .querySelector("#submit-btn")
        .setAttribute("disabled", "disabled");

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
      if (response.status === 200) {
        document.querySelector(".form-send").classList.remove("send-hidden");
      } else {
        alert("Erreur");
      }
    });
});
