const btnLogout = document.getElementById('btnLogout');

btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
    sessionStorage.clear();
    window.location.replace("http://127.0.0.1:5500/");
})