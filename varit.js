function muutaVari(id, vari) {
    document.getElementById(id).style.backgroundColor = vari;
}

// Tarkista sivun latauksen yhteydessä, mikä sivu on aktiivinen ja vaihda väritys
document.addEventListener('DOMContentLoaded', function() {
    var sivu = window.location.pathname.split('/').pop(); // Saadaan nykyinen sivu
    if (sivu === 'index.html') {
        muutaVari('etusivu', 'red'); // Vaihda väri etusivun mukaan
    } else if (sivu === 'keidas.html') {
        muutaVari('keidas', 'yellow'); // Vaihda väri keidas-sivun mukaan
    } else if (sivu === 'kahvila.html') {
        muutaVari('kahvila', 'green'); // Vaihda väri kahvila-sivun mukaan
    } else if (sivu === 'yhteystiedot.html') {
        muutaVari('yhteys', 'blue'); // Vaihda väri yhteys-sivun mukaan
    }
});