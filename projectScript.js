function openModal(modalId) {
    console.log('Opening modal:', modalId);
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    console.log('Closing modal:', modalId);
    document.getElementById(modalId).style.display = "none";
}

function openPDF(pdfPath) {
    console.log('Opening PDF in new tab:', pdfPath);
    window.open(pdfPath, '_blank');
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

