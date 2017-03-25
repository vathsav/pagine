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
    if (document.getElementById('subscribe_email').value) {
        // Check if already subscribed
        firebase.database().ref('subscriptions/').once('value')
            .then(function(snapshot) {
                var found = false;

                snapshot.forEach(function(element) {
                    if (element.val().value == document.getElementById('subscribe_email').value) {
                        found = true;
                    }
                })

                if (!found) {
                    firebase.database().ref('subscriptions/').push()
                        .set({
                            timestamp: firebase.database.ServerValue.TIMESTAMP,
                            value: document.getElementById('subscribe_email').value
                        })
                        .then(function() {
                            holder.style.display = "block";
                            document.getElementById('popup_content').innerHTML = "You're now subscribed!";
                        })
                        .catch(function(e) {
                            holder.style.display = "block";
                            document.getElementById('popup_content').innerHTML = "An error occurred! Please try again.";
                        });
                } else {
                    holder.style.display = "block";
                    document.getElementById('popup_content').innerHTML = "You're already subscribed!";
                }
            });
    }
}
