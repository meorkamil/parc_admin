const txtEmail = document.querySelector('#txtEmail');
const txtPassword = document.querySelector('#txtPassword');
const btnLogin = document.querySelector('#btnLogin');
const alertWrongCredential = document.querySelector('#wrong-credential');
const loading = document.querySelector('#loading');

loading.style.display = "none";
alertWrongCredential.style.display = "none";

btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const password = txtPassword.value;

    if (email == "admin@parc.com") {
        loading.style.display = "block";
        const promise = auth.signInWithEmailAndPassword(email, password);
        var user = sessionStorage.setItem('dataStored', 'admin');
    }
    else {
        alertWrongCredential.style.display = "block";
    }


})


firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
        window.location.replace("http://127.0.0.1:5500/user.html");
    } else {
        console.log('not logged in');
    }
})
