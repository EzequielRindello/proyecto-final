// header and footer utils
export async function loadHeaderAndFooter() {
    try {
        const headerTemplate = await loadTemplate("/partials/header.html");
        const headerElement = document.getElementById("header-dinamico");
        const footerTemplate = await loadTemplate("/public/partials/footer.html");
        const footerElement = document.getElementById("footer-dinamico");

        await Promise.all([
            renderWithTemplate(headerTemplate, headerElement),
            renderWithTemplate(footerTemplate, footerElement)
        ]);
    } catch (error) {
        return
    }
}

export function renderWithTemplate(template, parentElement, data, callback) {
    parentElement.insertAdjacentHTML("afterbegin", template);
    if (callback) {
        callback(data);
    }
}

async function loadTemplate(path) {
    const res = await fetch(path);
    const template = await res.text();
    return template;
}

// localStorage utils