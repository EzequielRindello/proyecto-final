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

export function firstVisitAlert() {
    fetch("/json/alerts.json")
        .then(response => response.json())
        .then(data => {
            const popupDiv = document.createElement("div");
            popupDiv.classList.add("popup");

            const greetings = document.createElement("h2");
            greetings.textContent = data.first.greetings;
            popupDiv.appendChild(greetings);

            const messageParagraph = document.createElement("p");
            messageParagraph.textContent = data.first.msg;
            popupDiv.appendChild(messageParagraph);

            const part1 = document.createElement("p");
            part1.innerHTML = `<strong>${data.first.part1}</strong>`
            popupDiv.appendChild(part1);

            const part2 = document.createElement("p");
            part2.innerHTML = `<strong>${data.first.part2}</strong>`
            popupDiv.appendChild(part2);

            const part3 = document.createElement("p");
            part3.innerHTML = `<strong>${data.first.part3}</strong>`
            popupDiv.appendChild(part3);

            const closeButton = document.createElement("a");
            closeButton.textContent = "Close";
            closeButton.addEventListener("click", () => {
                popupDiv.remove();
                document.querySelector("main").classList.remove("popup-active");
                document.querySelector("header").classList.remove("popup-active");
                document.querySelector("footer").classList.remove("popup-active");
            });
            popupDiv.appendChild(closeButton);

            document.body.appendChild(popupDiv);
            document.querySelector("main").classList.add("popup-active");
            document.querySelector("header").classList.add("popup-active");
            document.querySelector("footer").classList.add("popup-active");

        })
        .catch(error => {
            console.error("Error from json:", error);
        });
}