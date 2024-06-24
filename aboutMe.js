document.addEventListener("DOMContentLoaded", function() {
    const heading = document.querySelector('.section-heading');
    const dp = document.querySelector('.dp');
    const aboutInfo = document.querySelector('.about-info');
    const contactBtn = document.querySelector('.contact-btn');
    const infoSection = document.querySelector('.info-dp-section');

    setTimeout(() => {
        heading.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        heading.style.opacity = 1;
        heading.style.transform = 'translateX(0)';
    }, 500);

    setTimeout(() => {
        infoSection.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        infoSection.style.opacity = 1;
        infoSection.style.transform = 'translateY(0)';
    }, 1000);

    setTimeout(() => {
        dp.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        dp.style.opacity = 1;
        dp.style.transform = 'translateY(0)';
    }, 1500);

    setTimeout(() => {
        aboutInfo.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        aboutInfo.style.opacity = 1;
        aboutInfo.style.transform = 'translateY(0)';
    }, 2000);

    setTimeout(() => {
        contactBtn.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        contactBtn.style.opacity = 1;
        contactBtn.style.transform = 'translateY(0)';
    }, 2500);
});
