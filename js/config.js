/**
 * CENTRALIZED CONFIGURATION FILE
 * All important variables, links, and API keys should be here.
 */

window.CONFIG = {
    // Official domain of the site (for anti-clone verification)
    officialDomains: ['https://stalktest.netlify.app'],

    // Slug for administrative access - REMOVED
    // adminSlug: 'stalkvice321',

    // Pricing Configuration
    pricing: {
        current: '27,90',
        original: '279,90'
    },

    // Checkout / Payment Links
    checkout: {
        // Official link (used on all domains)
        official: 'https://paymentlink.com'
    },

    // API URLs
    api: {
        // Main Instagram API (used in instagram-api.js)
        instagram: 'https://stalkea.ai/api/instagram.php',

        // Secondary / Legacy API (used in core.min.js)
        legacy: 'https://api-insta-two.vercel.app/api'
    },

    // Site Information (Metadata)
    site: {
        name: "Stalkvice.online",
        fullName: "stalkvice.online - O maior software de espionagem de Instagram da América Latina",
        description: "stalkvice.online - O maior software de espionagem de Instagram da América Latina. Descubra a verdade sobre qualquer pessoa do Instagram.",
        email: "contact@gmail.com" // Email updated
    },

    // Network Configuration
    network: {
        apiPort: 8002,
        defaultPort: 8001
    }
};

console.log('✅ Config loaded:', window.CONFIG.site.name);
