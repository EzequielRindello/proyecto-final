export function meAlert() {
    const footerMsg = document.getElementById("footer-msg");
    footerMsg.addEventListener("click", () => {
        infoFooterAlert();
    })
}

function infoFooterAlert() {
    fetch("/json/alerts.json")
        .then(response => response.json())
        .then(data => {
            // crear el div emergente
            const popupDiv = document.createElement("div");
            popupDiv.classList.add("popup");

            // agregar el mensaje al div emergente
            const messageParagraph = document.createElement("p");
            messageParagraph.textContent = data.footer;
            popupDiv.appendChild(messageParagraph);

            // agregar un botón para cerrar el div emergente
            const closeButton = document.createElement("a");
            closeButton.textContent = "Close";
            closeButton.addEventListener("click", () => {
                popupDiv.remove();
                document.querySelector("main").classList.remove("popup-active");
                document.querySelector("header").classList.remove("popup-active");
                document.querySelector("footer").classList.remove("popup-active");
            });
            popupDiv.appendChild(closeButton);

            // agregar el div emergente al cuerpo del documento
            document.body.appendChild(popupDiv);
            document.querySelector("main").classList.add("popup-active");
            document.querySelector("header").classList.add("popup-active");
            document.querySelector("footer").classList.add("popup-active");

        })
        .catch(error => {
            console.error("Error from json:", error);
        });
}

export function infoAlert() {
    fetch("/json/alerts.json")
        .then(response => response.json())
        .then(data => {
            // crear el div emergente
            const popupDiv = document.createElement("div");
            popupDiv.classList.add("popup");

            // agregar el mensaje al div emergente
            const messageParagraph = document.createElement("p");
            messageParagraph.textContent = data.info;
            popupDiv.appendChild(messageParagraph);

            // agregar un botón para cerrar el div emergente
            const closeButton = document.createElement("a");
            closeButton.textContent = "Close";
            closeButton.addEventListener("click", () => {
                popupDiv.remove();
                document.querySelector("main").classList.remove("popup-active");
                document.querySelector("header").classList.remove("popup-active");
                document.querySelector("footer").classList.remove("popup-active");
            });
            popupDiv.appendChild(closeButton);

            // agregar el div emergente al cuerpo del documento
            document.body.appendChild(popupDiv);
            document.querySelector("main").classList.add("popup-active");
            document.querySelector("header").classList.add("popup-active");
            document.querySelector("footer").classList.add("popup-active");

        })
        .catch(error => {
            console.error("Error from json:", error);
        });
}