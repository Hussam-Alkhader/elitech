class FaviconTitleComponent extends HTMLElement {
    connectedCallback() {
        // Change the page title
        this.innerHTML = `<title>Elitech</title>`;

        // Dynamically add the favicon link to the <head> section
        const link = document.createElement('link');
        link.rel = 'shortcut icon';
        link.href = 'assets/images/favicon.png';
        document.head.appendChild(link);
    }
}

customElements.define('favicon-title-component', FaviconTitleComponent);
