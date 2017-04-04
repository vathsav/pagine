var database = firebase.database();

// Get the modal
var holder = document.getElementById('holder');

var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    holder.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == holder) {
        holder.style.display = "none";
    }
}

function subscribe() {
    var email = document.getElementById('subscribe_email').value;
    email = email.replace(/\./g, ',');
    firebase.database().ref('subscriptions/' + email)
        .set({
            email: email,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        })
        .then(function() {
            holder.style.display = "block";
            document.getElementById('popup_content').innerHTML = "You're now subscribed!";
        })
        .catch(function(e) {
            holder.style.display = "block";
            document.getElementById('popup_content').innerHTML = "You're already subscribed!";
        });
}
