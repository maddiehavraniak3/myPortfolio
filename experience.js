document.addEventListener("DOMContentLoaded", function() {
    const events = [
        { date: "May 2024", title: "Marketing Analyst", description: "Analyzed market trends and data to support strategic marketing decisions, enhance customer engagement, and drive growth through data-driven strategies." },
        { date: "Feb 2024", title: "Data Analyst Intern", description: "Assisted in planning, executing, and optimizing financial analytics projects, providing actionable insights to improve user satisfaction and drive strategic growth." },
        { date: "Jan 2024", title: "Project: Tracking and Logistics System for Irman Sod", description: "Enhanced supply chain operations, significantly boosting operational efficiency." },
        { date: "May 2023", title: "Front End Software Engineer Intern", description: "Collaborated with cross-functional teams to redesign the app UI, enhancing user experience and engagement through user feedback and modern front-end technologies." }
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
