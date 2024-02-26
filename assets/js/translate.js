var enButton = document.getElementById('en-btn');
var frButton = document.getElementById('fr-btn');

var body = document.body;

// Get the active language from local storage or use the default language
var savedLanguage = localStorage.getItem('activeLanguage') || 'fr';

// Set the class on the body based on the active language
body.classList.add(savedLanguage);

// updateURL(savedLanguage);

var selector = 'data-translatable';

var i18n = domI18n({
    selector: '[' + selector + ']',
    separator: ' // ',
    languages: ['en', 'fr'],
    defaultLanguage: savedLanguage
});

// Set the initial language based on the savedLanguage
i18n.changeLanguage(savedLanguage);

var images = document.querySelectorAll('img[' + selector + ']');

images.forEach(function (image) {
    // Récupérez le chemin de l'image actuelle
    var src = image.getAttribute('src');

    // Vérifiez la langue actuelle et modifiez le titre en conséquence
    if (savedLanguage == 'en') {
        // Remplacez '_en' par '_fr' pour passer de l'anglais au français
        var newSrc = src.replace('_fr.', '_en.');

        // Modifiez le titre de l'image
        image.setAttribute('src', newSrc);
    } else {
        // Vérifiez la langue actuelle et modifiez le titre en conséquence
        // Remplacez '_en' par '_fr' pour passer de l'anglais au français
        var newSrc = src.replace('_en.', '_fr.');

        // Modifiez le titre de l'image
        image.setAttribute('src', newSrc);
    }
    // Vous pouvez ajouter d'autres conditions pour d'autres langues si nécessaire
});


enButton.onclick = function () {
    i18n.changeLanguage('en');

    // Save the active language to local storage
    localStorage.setItem('activeLanguage', 'en');
    // Update the class on the body
    body.classList.remove('fr');
    body.classList.add('en');


    // Update the URL
    // updateURL('en');



    // Parcourez chaque image et modifiez son titre en fonction de la langue
    images.forEach(function (image) {
        // Récupérez le chemin de l'image actuelle
        var src = image.getAttribute('src');

        // Vérifiez la langue actuelle et modifiez le titre en conséquence
        if (src.includes('_fr.')) {
            // Remplacez '_en' par '_fr' pour passer de l'anglais au français
            var newSrc = src.replace('_fr.', '_en.');

            // Modifiez le titre de l'image
            image.setAttribute('src', newSrc);
        }
        // Vous pouvez ajouter d'autres conditions pour d'autres langues si nécessaire
    });
};

frButton.onclick = function () {
    i18n.changeLanguage('fr');

    // Save the active language to local storage
    localStorage.setItem('activeLanguage', 'fr');

    // Update the class on the body
    body.classList.remove('en');
    body.classList.add('fr');

    // Update the URL
    // updateURL('fr');


    // Parcourez chaque image et modifiez son titre en fonction de la langue
    images.forEach(function (image) {
        // Récupérez le chemin de l'image actuelle
        var src = image.getAttribute('src');


        // Vérifiez la langue actuelle et modifiez le titre en conséquence
        if (src.includes('_en.')) {
            // Remplacez '_en' par '_fr' pour passer de l'anglais au français
            var newSrc = src.replace('_en.', '_fr.');

            // Modifiez le titre de l'image
            image.setAttribute('src', newSrc);
        }
        // Vous pouvez ajouter d'autres conditions pour d'autres langues si nécessaire
    });

};

// function updateURL(language) {
// // Extract the current path from the URL
// var currentPath = window.location.pathname;

// // Check if there is an existing language code in the URL
// var regex = /^\/(en|fr)\//;
// var match = currentPath.match(regex);

// // If there is a match, replace the existing language code; otherwise, add a new one
// var newPath;
// if (match) {
//     newPath = currentPath.replace(regex, '/' + language + '/');
// } else {
//     newPath = '/' + language + currentPath;
// }

// // Use history.pushState to update the URL
// history.pushState({}, '', newPath);