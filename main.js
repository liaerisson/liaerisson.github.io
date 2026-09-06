const button = document.getElementById("navbar_mobile_button");
const menu = document.getElementById("navbar_mobile_container");

button.addEventListener("click", () => {
    menu.classList.toggle("open");
});

document.querySelectorAll(".navbar_mobile_link").forEach(link => {
    link.addEventListener("click", event => {
        if (link.target === "_blank") return;

        const currentPage =
            window.location.pathname.split("/").pop() || "index.html";

        const targetPage =
            link.getAttribute("href").split("/").pop();

        if (currentPage === targetPage) {
            event.preventDefault();
            showPageToast("You're already here :)");
        }
    });
});

function showPageToast(message) {
    let toast = document.querySelector(".page-toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.className = "page-toast";
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toast.hideTimeout);

    toast.hideTimeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 1000);
}

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const backToTop = document.getElementById("back_to_top");

if (backToTop) {
    window.addEventListener("scroll", () => {
        backToTop.classList.toggle("show", window.scrollY > 500);
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

let shellClicks = 0;

const shell = document.getElementById("navbar_logo");

if (shell) {
    shell.addEventListener("click", event => {
        const currentPage =
            window.location.pathname.split("/").pop() || "index.html";

        if (currentPage !== "index.html") {
            return;
        }

        event.preventDefault();

        shellClicks++;

        if (shellClicks === 3) {
            launchCrab();
            shellClicks = 0;
        }
    });
}

function launchCrab() {
    const crab = document.createElement("img");

    crab.className = "easter_crab";
    crab.src = "images/crab_icon.png";
    crab.alt = "";

    document.body.appendChild(crab);

    setTimeout(() => {
        crab.remove();
    }, 3000);
}