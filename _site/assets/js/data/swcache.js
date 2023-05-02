const resource = [
    /* --- CSS --- */
    '/https://beom195.github.io/assets/css/style.css',

    /* --- PWA --- */
    '/https://beom195.github.io/app.js',
    '/https://beom195.github.io/sw.js',

    /* --- HTML --- */
    '/https://beom195.github.io/index.html',
    '/https://beom195.github.io/404.html',

    
        '/https://beom195.github.io/categories/',
    
        '/https://beom195.github.io/tags/',
    
        '/https://beom195.github.io/archives/',
    
        '/https://beom195.github.io/about/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/https://beom195.github.io/assets/img/favicons/android-chrome-192x192.png',
        '/https://beom195.github.io/assets/img/favicons/android-chrome-512x512.png',
        '/https://beom195.github.io/assets/img/favicons/apple-touch-icon.png',
        '/https://beom195.github.io/assets/img/favicons/favicon-16x16.png',
        '/https://beom195.github.io/assets/img/favicons/favicon-32x32.png',
        '/https://beom195.github.io/assets/img/favicons/favicon.ico',
        '/https://beom195.github.io/assets/img/favicons/mstile-150x150.png'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'localhost:4000',

    
        'chirpy-img.netlify.app',
    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
    
];

