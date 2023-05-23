console.log("script connecté !");

// Menu déroulant

const widgetBars = document.getElementById("widgetBar");
//console.log(widgetBars);

widgetBars.innerHTML += `
      <div class="block_deroulant">
        <a href="/index.html">Notre carte</a>
        <a href="/a_propos.html">à propos</a>
        <a href="/traiteur.html">Traiteur</a>
        <a href="/wine.html">Carte des vins</a>
        <a href="/events.html">actualités</a>
        <a href="/partenaire.html">Nos partenaires</a>
        <a href="/contact.html">Contact</a>
      </div>
  `;

const icone = document.querySelector(".logo i");
//console.log(icone); //OK
const navBar = document.querySelector(".navbar-desktop");
//console.log(navBar); //OK

icone.addEventListener("click", function () {
  //console.log("icone cliqué");
  navBar.classList.toggle("change-navbar");
  icone.classList.toggle("fa-times");
});

// Fin du menu déroulant

// Menu chevrons

const chevrons = document.querySelectorAll(".chevron");
//console.log(accordeon); //OK

chevrons.forEach((item) => {
  //console.log(item);

  item.addEventListener("click", function () {
    console.log("item cliqué");

    // Je sélectionne et stocke la DIV suivante de l'item cliqué
    const next = item.nextElementSibling;
    //console.log(next);

    // Je rend visible ou non la description
    next.classList.toggle("visible");

    // Je cible et stocke l'icone de item
    const changeChevron = item.lastElementChild;
    console.log(changeChevron);
    changeChevron.classList.toggle("fa-chevron-up");
  });
});

// Fin Menu chevron

//widget réseaux sociaux

const blockWidget = document.getElementById("widgets");
//console.log(blockWidget); //OK
blockWidget.innerHTML += `
  <div class="social_logo_widget ">
    <div class="widget_plus appearance">
      <i class="fa-regular fa-message"></i>
    </div>
    <div class="widget_anim_bottom ">
      <a href="https://www.facebook.com/Place-Meuillotine-102059658112540/">
        <i class="fa-brands fa-facebook"></i>
      </a>
      <a href="https://www.instagram.com/placemeuillotine/">
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a href="tel: 0980668861">
        <i class="fa-solid fa-phone"></i>
      </a>
      <a href="https://www.google.com/maps/uv?pb=!1s0x47f28efacc23caf7%3A0x9aab0ffddb73ff88!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOrJ8X9Fp3_0kTseE_WylY3ZLxI7u0fRYWb3sOd%3Dw213-h160-k-no!5splace%20meuillotine%20-%20Recherche%20Google!15sCgIgAQ&imagekey=!1e10!2sAF1QipOrJ8X9Fp3_0kTseE_WylY3ZLxI7u0fRYWb3sOd&hl=fr&sa=X&ved=2ahUKEwicq_OwpO31AhXylP0HHT6GAGoQoip6BAg2EAM">
        <i class="fa-brands fa-google"></i>
      </a>
      <a href="/html/contact.html">
        <i class="fa-solid fa-at"></i>
      </a>
    </div>
  </div>
  `;

const widget = document.querySelector(".widget_plus");
//console.log(widget); //OK
const cross = document.querySelector(".social_logo_widget");
//console.log(cross); //OK

widget.addEventListener("click", function () {
  //console.log("widget cliqué");
  cross.classList.toggle("appearance");
});

// fin Widget réseaux sociaux

// Début du block conctact dans le header

const blockContact = document.getElementById("blockContacts");
//console.log(blockContact);//OK

blockContact.innerHTML += `
<a href="tel: 0980668861">
  <i class="fa-solid fa-mobile-screen"></i>
  <h5 class="contact-title">09 80 66 88 61</h5>
</a>
<a href="https://www.google.com/search?q=place+meuillotine&rlz=1C1MSIM_frFR952FR952&oq=place+meuillotine&aqs=chrome..69i57j0i10i512l3j0i10i22i30j69i61l3.9366j0j7&sourceid=chrome&ie=UTF-8#">
  <i class="fa-solid fa-location-dot"></i>
  <h5 class="contact-title">14 grande Rue - 21700 Meuilley</h5>
</a>
<a href="/html/contact.html">
  <i class="fa-regular fa-envelope"> </i>
  <h5 class="contact-title">Contactez-nous</h5>
</a>
`;

// Début du formulaire

// Stockage des élément

const form = document.getElementById("formulaire");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const message = document.getElementById("message");
const succes = document.getElementById("containerForm");

// Validation du formulaire

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("formulaire envoyé");

  // Récupération des valeurs des inputs

      const firstValue = firstname.value.trim();
      console.log("firstname :", firstValue);
      const lastValue = lastname.value.trim();
      console.log("lastname :", lastValue);
      const phoneValue = phone.value.trim();
      console.log("Phone :", phoneValue);
      const emailValue = email.value.trim();
      console.log("Email :", emailValue);
      const messageValue = message.value.trim();
      console.log("Message :", messageValue);
      const msgError = document.querySelectorAll(".error");

  msgError.forEach((error) => {
    error.classList.add("invisible_form");
  });
  if (firstValue.length < 2 || firstValue.length > 25) {
    console.log("erreur prénom");
    firstname.nextElementSibling.classList.remove("invisible_form");
  } else if (lastValue.length < 3 || lastValue.length > 25) {
    console.log("erreur nom");
    lastname.nextElementSibling.classList.remove("invisible_form");
  }else if (phoneValue.length < 10 || phoneValue.length > 10) {
    console.log("Erreur téléphone");
    phone.nextElementSibling.classList.remove("invisible_form")
  }else if (messageValue.length < 10 || messageValue.length > 100) {
    console.log("erreur message");
    message.nextElementSibling.classList.remove("invisible_form");
  } else {
    console.log("Succés");
    
    form.remove();
    succes.innerHTML += `
    <div class="box">
    <h1 class="succes">Votre message a bien été envoyé ! <br> Merci et à bientôt !</h1>
      </div>
    `;
  }
});
// Fin du formulaire