function getHomePage() {
    return `<h1>Welcome Home</h1><p>This is our SPA home page.</p>`;
}

function getAboutPage() {
    return `<h1>About Us</h1><p>Learn about our company.</p>`;
}

function getContactPage() {
    return `<h1>Contact Us</h1><p>Get in touch with our team.</p>`;
}

const routes = {
    '#/': getHomePage,
    '#/about': getAboutPage,
    '#/contact': getContactPage,
};

function handleRoute() {
    const hash = window.location.hash || '#/'; // Default to home if no hash
    const content = routes[hash] ? routes[hash]() : '<h1>Page Not Found';
    document.getElementById('app').innerHTML = content;
}

// Listen for navigation
window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', handleRoute);