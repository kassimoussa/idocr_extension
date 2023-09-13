// Écouteur pour les messages provenant du popup.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'loadData') {
      console.log("C'est bon");
      jdata = JSON.parse(request.data);
      console.log(jdata);
      manipulateDOM(jdata);
  }
});

// Fonction pour manipuler le DOM de la page
function manipulateDOM(data) {

  // Rendre visible les éléments nécessaires
  var elementsToDisplay = document.querySelectorAll("#crmContentPanel, #crmContentPanelContainer, .ms-crm-Inline-Value");
  elementsToDisplay.forEach(function(element) {
      element.style.display = "block";
      console.log("Élément rendu visible :", element);
  });

  // Accéder à l'iframe
  var iframe = document.getElementById('contentIFrame0');
  if (iframe) {
      var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

      // Accéder à l'élément 'crm_nom_i' dans l'iframe
      var crmNomInput = iframeDocument.getElementById('crm_nom_i');
      if (crmNomInput) {
          // Remplir le champ 'crm_nom_i' avec les données
          crmNomInput.value = data["nom"];
          crmNomInput.click();
          // Simuler un appui sur la touche Entrée pour déclencher l'événement
          var enterEvent1 = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true });
          crmNomInput.dispatchEvent(enterEvent1);
          // Déclencher un événement de changement pour notifier le système
          var changeEvent1 = new Event('change', { bubbles: true });
          crmNomInput.dispatchEvent(changeEvent1);
          console.log("Champ 'crm_nom_i' rempli avec :", data.nom);
      } else {
          console.log("Élément 'crm_nom_i' introuvable dans l'iframe.");
      }
      

      // Remplir le champ 'crm_datedenaissance_iDateInput' avec les données
      var dateNaissanceInput = iframeDocument.getElementById('crm_datedenaissance_iDateInput');
      if (dateNaissanceInput) {
      
          dateNaissanceInput.value = data["date_naissance"];
          dateNaissanceInput.click();
          // Simuler un appui sur la touche Entrée pour déclencher l'événement
          var enterEvent = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true });
          dateNaissanceInput.dispatchEvent(enterEvent);
          // Déclencher un événement de changement pour notifier le système
          var changeEvent = new Event('change', { bubbles: true });
            dateNaissanceInput.dispatchEvent(changeEvent);

          console.log("Champ 'crm_datedenaissance_iDateInput' rempli avec :", dateNaissanceInput.value);
      } else {
          console.log("Élément 'crm_datedenaissance_iDateInput' introuvable dans l'iframe.");
      }

      // Remplir le champ 'crm_datededelivrance_iDateInput' avec les données
      var dateDelivranceInput = iframeDocument.getElementById('crm_datededelivrance_iDateInput');
      if (dateDelivranceInput) {
      
          dateDelivranceInput.value = data["date_emission"];
          dateDelivranceInput.click();
          // Simuler un appui sur la touche Entrée pour déclencher l'événement
          var enterEvent = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true });
          dateDelivranceInput.dispatchEvent(enterEvent);
          // Déclencher un événement de changement pour notifier le système
          var changeEvent = new Event('change', { bubbles: true });
            dateDelivranceInput.dispatchEvent(changeEvent);

          console.log("Champ 'crm_datededelivrance_iDateInput' rempli avec :", dateDelivranceInput.value);
      } else {
          console.log("Élément 'crm_datededelivrance_iDateInput' introuvable dans l'iframe.");
      }

      
      // Remplir le champ 'crm_datedexpiration_iDateInput' avec les données
      var dateDexpirationInput = iframeDocument.getElementById('crm_datedexpiration_iDateInput');
      if (dateDexpirationInput) {
      
          dateDexpirationInput.value = data["date_expiration"];
          dateDexpirationInput.click();
          // Simuler un appui sur la touche Entrée pour déclencher l'événement
          var enterEvent = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true });
          dateDexpirationInput.dispatchEvent(enterEvent);
          // Déclencher un événement de changement pour notifier le système
          var changeEvent = new Event('change', { bubbles: true });
            dateDexpirationInput.dispatchEvent(changeEvent);

          console.log("Champ 'crm_datedexpiration_iDateInput' rempli avec :", dateDexpirationInput.value);
      } else {
          console.log("Élément 'crm_datedexpiration_iDateInput' introuvable dans l'iframe.");
      }


      // Remplir le champ 'crm_nomdelamere_i' avec les données
      var nomMereInput = iframeDocument.getElementById('crm_nomdelamere_i');
      if (nomMereInput) {
          nomMereInput.value = data["nom_mere"];
          nomMereInput.click();
          // Simuler un appui sur la touche Entrée pour déclencher l'événement
          var enterEvent = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true });
          nomMereInput.dispatchEvent(enterEvent);
          // Déclencher un événement de changement pour notifier le système
          var changeEvent = new Event('change', { bubbles: true });
          nomMereInput.dispatchEvent(changeEvent);
          console.log("Champ 'crm_nomdelamere_i' rempli avec :", data["nom_mere"]);
      } else {
          console.log("Élément 'crm_nomdelamere_i' introuvable dans l'iframe.");
      }

      // Remplir le champ 'crm_ndocument_i' avec les données
      var cinInput = iframeDocument.getElementById('crm_ndocument_i');
      if (cinInput) {
          cinInput.value = data["ncni"];
          cinInput.click();
          // Simuler un appui sur la touche Entrée pour déclencher l'événement
          var enterEvent = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true });
          cinInput.dispatchEvent(enterEvent);
          // Déclencher un événement de changement pour notifier le système
          var changeEvent = new Event('change', { bubbles: true });
          cinInput.dispatchEvent(changeEvent);
          console.log("Champ 'crm_ndocument_i' rempli avec :", data["ncni"]);
      } else {
          console.log("Élément 'crm_ndocument_i' introuvable dans l'iframe.");
      }
  } else {
      console.log("Iframe 'contentIFrame0' introuvable.");
  }

  // Accédez à l'élément select
var nationaliteSelect = iframeDocument.getElementById('crm_nationalitecode_i');

// Définissez la valeur correspondante à "Djiboutienne"
var codeNationnalite = "171060000";

// Parcourez les options pour trouver et sélectionner "Djiboutienne"
for (var i = 0; i < nationaliteSelect.options.length; i++) {
    if (nationaliteSelect.options[i].value === codeNationnalite) {
        nationaliteSelect.selectedIndex = i;
        // Déclenchez un événement de changement pour notifier le système
        var changeEvent = new Event('change', { bubbles: true });
        nationaliteSelect.dispatchEvent(changeEvent);
        console.log("Sélection de la nationalité 'Djiboutienne'");
        break;
    }
}

  // Accédez à l'élément select
  var genreSelect = iframeDocument.getElementById('crm_genre_i');

  //Definition de codes

  var homme = "171060000";
  var femme = "171060001";
  var genreIndex = "";
  
  if (data["sexe"] === "M") {
     genreIndex = homme;
  } else {
    genreIndex = femme;
  }

  // Parcourez les options pour trouver et sélectionner le genre
for (var i = 0; i < genreSelect.options.length; i++) {

  if (genreSelect.options[i].value === genreIndex) {
      genreSelect.selectedIndex = i;
      // Déclenchez un événement de changement pour notifier le système
      var changeEvent = new Event('change', { bubbles: true });
      genreSelect.dispatchEvent(changeEvent);
      console.log("Sélection du genre");
      break;
  }
}

// Accédez à l'élément select de la liste déroulante
var selectElement = iframeDocument.getElementById('crm_autoriteemetricecode_i');

// Vérifiez si l'élément select a été trouvé
if (selectElement) {
  // Index de l'option que vous souhaitez sélectionner (par exemple, la deuxième option)
  var selectedIndex = 5;

  // Sélectionnez l'option en définissant sa propriété selectedIndex
  selectElement.selectedIndex = selectedIndex;

  // Déclenchez un événement de changement pour notifier le système
  var changeEvent = new Event('change', { bubbles: true });
  selectElement.dispatchEvent(changeEvent);

  console.log("Option sélectionnée dans la liste déroulante.");
} else {
  console.log("Élément select avec l'ID 'crm_autoriteemetricecode_i' introuvable.");
}



}
