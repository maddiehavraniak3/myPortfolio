document.addEventListener("DOMContentLoaded", function() {
    const events = [
        { date: "Feb 2024", title: "Data Analyst Intern at Ualett", description: "Analyzed gig economy financial solutions using advanced data analytics." },
        { date: "Jan 2024", title: "Project: Tracking and Logistics System for Irman Sod", description: "Enhanced supply chain operations, significantly boosting operational efficiency." },
        { date: "May 2023", title: "Front End Software Engineer Intern at Ualett", description: "Led a team of 6 in UI redesign of the Ualett app, increasing user engagement." }
    ];

    const timelineContainer = document.querySelector(".timeline-container");

    events.forEach((event, index) => {
        const item = document.createElement("div");
        item.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;

        const content = document.createElement("div");
        content.className = "timeline-content";

        const date = document.createElement("div");
        date.className = "timeline-date";
        date.textContent = event.date;

        const title = document.createElement("div");
        title.className = "timeline-title";
        title.textContent = event.title;

        const description = document.createElement("div");
        description.className = "timeline-description";
        description.textContent = event.description;

        content.appendChild(date);
        content.appendChild(title);
        content.appendChild(description);
        item.appendChild(content);
        timelineContainer.appendChild(item);
    });

    function checkVisibility() {
        const items = document.querySelectorAll(".timeline-item");
        items.forEach(item => {
            if (item.getBoundingClientRect().top < window.innerHeight) {
                item.classList.add("visible");
            } else {
                item.classList.remove("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Initial check
});
