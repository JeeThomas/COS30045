document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // stop default href
            const page = link.getAttribute("data-page");
            window.location.href = page; // navigate
        });
    });
});
