// Function to Open Modal
function openModal(title, description, imageUrl) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDescription").innerText = description;
  document.getElementById("modalImage").src = imageUrl;
  document.getElementById("projectModal").style.display = "flex";
}

// Function to Close Modal
function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}

// Close Modal When Clicking Outside
window.onclick = function (event) {
  let modal = document.getElementById("projectModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Copy Image URL to Clipboard
function copyImage(imageUrl) {
  navigator.clipboard.writeText(imageUrl).then(() => {
    alert("Image URL copied to clipboard!");
  });
}
function openMenu() {
  document.getElementById("dropdownMenu").style.right = "0";
}
function closeMenu() {
  document.getElementById("dropdownMenu").style.right = "-106%";
}
// Functions for Dropdown enu
