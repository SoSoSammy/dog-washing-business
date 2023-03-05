const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
const subscribeButton = document.querySelector(".subscribe-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

// When the trigger is clicked, show modal
trigger.addEventListener("click", toggleModal);
// When the close button is clicked, hide the modal
closeButton.addEventListener("click", toggleModal);
// when the dark background is clicked, hide the modal
window.addEventListener("click", windowOnClick);
// When the subscribe button is clicked, hide the modal
subscribeButton.addEventListener("click", toggleModal);