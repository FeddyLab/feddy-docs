// The Feddy widget on every docs page, so readers can ask from where they are.
// The project ID is a public value; it ships in the page source by design.
const script = document.createElement('script');
script.src = 'https://core.feddy.app/sdk/feddy.js';
script.async = true;
script.onload = () => window.Feddy.init({ projectId: 'fd_0hcw4rk0e9y28jzs' });
document.head.appendChild(script);
