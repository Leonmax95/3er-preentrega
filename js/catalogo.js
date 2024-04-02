document.addEventListener('DOMContentLoaded', function () {
   
    const modal = document.getElementById('myModal');
    const closeButton = document.getElementsByClassName('close')[0];

    if (modal && closeButton) {
        modal.style.display = "block";

        closeButton.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    } else {
        console.log('Modal or close button not found');
    }

    fetch('https://jsonplaceholder.typicode.com/posts') 
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
});