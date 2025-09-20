document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a[data-page]");

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // stop default #
            const page = link.getAttribute("data-page");
            window.location.href = page; // go to the page
        });
    });
});
