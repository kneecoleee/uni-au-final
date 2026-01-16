// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "ky",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "sorry for lying about the au...",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "do you think this is dorky...",                                    // First interaction
            yesBtn: "yes",                                             // Text for "Yes" button
            noBtn: "no",                                               // Text for "No" button
            secretAnswer: "absolutely, 100%, this is very dorky"           // Secret hover message
        },
        second: {
            text: "how dorky is this",                          // For the love meter
            startText: "like a lot",                                   // Text before the percentage
            nextBtn: "no comment"                                         // Text for the next button
        },
        third: {
            text: "will you be my valentine?", // The big question!
            yesBtn: "yes",                                             // Text for "Yes" button
            noBtn: "no"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "maybe a little",  // Shows when they go past 5000%
        high: "dorkatron 5000",              // Shows when they go past 1000%
        normal: "we lost it"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "can't wait to see you bear :D",
        message: "you know i actually felt bad lying to you about this kasi nga this is not for the au talaga... i just wanted to ask you to be my valentine in the dorkiest way possible",
        emojis: "🧸 🐶"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#A1D2CE",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#78CAD2",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#62A8AC",     // Button color (should stand out against the background)
        buttonHover: "#5497A7",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#50858B"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dtfbiqb2j/video/upload/v1768462033/goodnight_n_go_ckyfqv.mp3", // Music streaming URL
        startText: "music?",        // Button text to start music
        stopText: "okay no",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;
