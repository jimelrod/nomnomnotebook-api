var clipboard = null;

function signIn() {
    firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .catch(error => console.log(error));
}

function signOut() {
    firebase
        .auth()
        .signOut()
        .then(() => $('#firebaseKey').html("Successfully Signed Out"))
        .catch(error => {
            $('#firebaseKey').html("Error Signing Out");
            console.log(error);
        });
}

$(document).ready(() => {
    clipboard = new Clipboard('.clippy');

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            user.getToken()
                .then(token => { 
                    $('#firebaseKey').html(token);
                    $('#sign-in').prop('disabled', true);
                    $('#sign-out').prop('disabled', false);
                })
                .catch(error => console.log(error));
        }
        else {
            $('#sign-in').prop('disabled', false);
            $('#sign-out').prop('disabled', true);
        }
    });
});