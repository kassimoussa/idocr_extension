document.addEventListener("DOMContentLoaded", () => {
  const loadButton = document.getElementById("btnCharger");
  const typeSelect = document.getElementById("typeID");

  let jsonData = {}; // Pour stocker les données JSON

  document
    .getElementById("uploadButton")
    .addEventListener("click", async () => {
      const imageInput = document.getElementById("imageInput");
      const file = imageInput.files[0];

      // Check if a file is selected
      if (imageInput.files.length === 0) {
        alert("Please select an image file.");
        return;
      }

      // Get the selected option's value
      const selectedOption = typeSelect.value;

      // Construct the API URL based on the selected option
      const apiUrl = `http://192.168.100.183:8000/api/${selectedOption}`;

      if (file) {
        const formData = new FormData();
        formData.append("image", file);

        try {
          const response = await fetch(apiUrl, {
            method: "POST",
            body: formData,
          });

          if (response.ok) {
            jsonData = await response.json();

            //console.log(jsonData);
            /*  const uploadedImage = document.getElementById("uploadedImage");
            uploadedImage.src = responseData.image_url;
            uploadedImage.style.display = "block"; */

            /* const jsonResponse = document.getElementById("jsonResponse");
            jsonResponse.textContent = JSON.stringify(responseData, null, 2);
            jsonResponse.style.display = "block"; */

            const resultdiv = document.getElementById("resultdiv");

            const alertdiv = document.getElementById("alertdiv");

            const ipnom = document.getElementById("nom");
            const ipdate_naissance = document.getElementById("date_naissance");
            const iplieu_naissance = document.getElementById("lieu_naissance");
            const ipnom_mere = document.getElementById("nom_mere");
            const ipprofession = document.getElementById("profession");
            const ipsexe = document.getElementById("sexe");
            const ipdate_emission = document.getElementById("date_emission");
            const ipdate_expiration =
              document.getElementById("date_expiration");
            const ipadresse = document.getElementById("adresse");
            const ipnncni = document.getElementById("ncni");

            ipnom.value = jsonData.nom;
            ipdate_naissance.value = jsonData.date_naissance;
            iplieu_naissance.value = jsonData.lieu_naissance;

            ipnom_mere.value = jsonData.nom_mere;
            ipprofession.value = jsonData.profession;

            if (jsonData.sexe) {
              ipsexe.value = jsonData.sexe;
            } else {
              ipsexe.value = "";
            }

            if (jsonData.date_emission) {
              ipdate_emission.value = jsonData.date_emission;
            } else {
              ipdate_emission.value = "";
            }

            if (jsonData.date_expiration) {
              ipdate_expiration.value = jsonData.date_expiration;
            } else {
              ipdate_expiration.value = "";
            }

            ipadresse.value = jsonData.adresse;
            ipnncni.value = jsonData.ncni;

            resultdiv.style.display = "block";
            alertdiv.style.display = "none";

            console.log("Image uploaded successfully");
          } else {
            resultdiv.style.display = "block";
            alertdiv.innerHTML = "Image upload failed";
            alertdiv.style.display = "block";
            console.log("Image upload failed");
          }
        } catch (error) {
          console.log("Error ", error);
        }
      }
    });

  loadButton.addEventListener("click", function () {
    var formData = {};

    // Get the values of each input field and store them in the object
    formData.nom = document.getElementById("nom").value;
    formData.nom_mere = document.getElementById("nom_mere").value;
    formData.date_naissance = document.getElementById("date_naissance").value;
    formData.lieu_naissance = document.getElementById("lieu_naissance").value;
    formData.date_emission = document.getElementById("date_emission").value;
    formData.date_expiration = document.getElementById("date_expiration").value;
    formData.profession = document.getElementById("profession").value;
    formData.adresse = document.getElementById("adresse").value;
    formData.sexe = document.getElementById("sexe").value;
    formData.ncni = document.getElementById("ncni").value;

    // Convert the JavaScript object to a JSON string
    var fData = JSON.stringify(formData);

    // Display the JSON data (you can customize this part)
    //console.log(formData);
    if (fData) {
      // Envoyer les données au content script
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: "loadData",
          data: fData,
        });
      });
    }
  });
});
