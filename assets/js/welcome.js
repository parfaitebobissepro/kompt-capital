// Save the active language to local storage


var isReaded = false;
var isRoleSelected = false;

document.addEventListener('DOMContentLoaded', addListenerScroll, false);

let contentScrollable = document.querySelector('#welcomeModal .welocme-content');

function addListenerScroll(){
    contentScrollable.addEventListener('scroll', function() {
        // Calcul de la hauteur totale du contenu à l'intérieur de l'élément scrollable
        var scrollableContentHeight = contentScrollable.scrollHeight;
        // Calcul de la position actuelle du défilement
        var currentScrollPosition = contentScrollable.scrollTop + contentScrollable.clientHeight;
    
        // Vérification si l'utilisateur a fait défiler jusqu'en bas
        if (currentScrollPosition == scrollableContentHeight) {
            isReaded = true;
            document.querySelector(".acceptButtonWelcome").disabled = !isRoleSelected;
            // Vous pouvez également effectuer d'autres actions ici en cas de défilement jusqu'en bas
        }
    });
}



if (localStorage.getItem('isFirstTimeOpened') == null) {
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

    localStorage.setItem('isFirstTimeOpened', 1);
}


function selectRole(element) {
    var buttons = document.querySelectorAll(".role-visiteur button");

    // Parcourez chaque image et modifiez son titre en fonction de la langue
    buttons.forEach(function (button) {
        button.classList.remove("active");
    });

    element.classList.add('active');
    isRoleSelected = true;
    document.querySelector(".acceptButtonWelcome").disabled = !isRoleSelected;
}