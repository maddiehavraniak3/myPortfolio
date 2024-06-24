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

document.addEventListener("DOMContentLoaded", function() {
    const heading = document.querySelector('.section-heading');
    const projectContainer = document.querySelector('.project-container');

    setTimeout(() => {
        heading.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        heading.style.opacity = 1;
        heading.style.transform = 'translateX(0)';
    }, 500);

    setTimeout(() => {
        projectContainer.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        projectContainer.style.opacity = 1;
        projectContainer.style.transform = 'translateY(0)';
    }, 1000);
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function openPDF(pdfUrl) {
    window.open(pdfUrl, '_blank');
}


