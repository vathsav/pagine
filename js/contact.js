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

// Contact
function submitContact() {
    if (document.getElementById('name').value && document.getElementById('email').value && document.getElementById('message').value) {
        firebase.database().ref('mail/').push()
            .set({
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            })
            .then(function() {
                holder.style.display = "block";
                document.getElementById('popup_content').innerHTML = "Thanks a bunch! I'll get back to you soon.";
            })
            .catch(function(e) {
                holder.style.display = "block";
                document.getElementById('popup_content').innerHTML = "An error occurred. Please try again.";
            });
    } else {
        holder.style.display = "block";
        document.getElementById('popup_content').innerHTML = "All fields are mandatory!";
    }
}
