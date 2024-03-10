// Save the active language to local storage


var isReaded = false;

console.log(localStorage.getItem('isFirstTimeOpened'));

if (localStorage.getItem('isFirstTimeOpened') == null) {
    localStorage.setItem('isFirstTimeOpened', 1);
    setTimeout(() => {
        openWelcomePopup();
    }, 3000);
}




function openWelcomePopup() {
    var modal = document.getElementById("welcomeModal");
    modal.style.zIndex = "99999";
    modal.style.opacity = "1";
}

function closeWelcomePopup() {
    var modal = document.getElementById("welcomeModal");
    modal.style.zIndex = -1;
    modal.style.opacity = "0";

    // Ajouter un écouteur d'événements pour fermer le modal lorsqu'on clique en dehors
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.zIndex = "0";
            modal.style.opacity = "0";
        }
    }
}


function selectRole(element) {
    var buttons = document.querySelectorAll(".role-visiteur button");

    // Parcourez chaque image et modifiez son titre en fonction de la langue
    buttons.forEach(function (button) {
        button.classList.remove("active");
    });

    element.classList.add('active');

    document.querySelector(".acceptButtonWelcome").disabled = false;
}