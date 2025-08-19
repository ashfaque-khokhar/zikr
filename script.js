// Zikr data with Arabic text, English translation, and audio file names
const zikrData = [
    {
        id: 1,
        arabic: "أَسْتَغْفِرُ اللَّهَ",
        english: "Astaghfirullah <br>Main Allah se maafi maangta hoon. Aage se aisa nahi karunga.",
        audioFile: "astaghfirullah.mp3",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        id: 2,
        arabic: "اللَّهُ أَكْبَر",
        english: "Allahu Akbar <br>Allah hī sabse baḍā hai",
        audioFile: "allahu-akbar.mp3",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },

    {
        id: 10,
        arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّٰهِ ٱلْعَلِيِّ ٱلْعَظِيم",
        english: "There is no power and no strength except with Allah, the Most High, the Most Great",
        audioFile: "la-hawla-wa-la-quwwata-illa-billah.mp3",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    },

    {
        id: 3,
        arabic: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ",
        english: "Here I am, O Allah, here I am",
        audioFile: "labbaik-allahumma-labbaik.mp3",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    // {
    //     id: 4,
    //     arabic: "الْحَمْدُ لِلَّهِ",
    //     english: "All praise is due to Allah",
    //     audioFile: "alhamdulillah.mp3",
    //     gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    // },
    // {
    //     id: 5,
    //     arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ",
    //     english: "There is no god but Allah",
    //     audioFile: "la-ilaha-illa-allah.mp3",
    //     gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    // },
    // {
    //     id: 6,
    //     arabic: "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ",
    //     english: "O Allah, send prayers upon Muhammad",
    //     audioFile: "salawat.mp3",
    //     gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    // },
    // {
    //     id: 7,
    //     arabic: "رَبِّ اغْفِرْ لِي",
    //     english: "My Lord, forgive me",
    //     audioFile: "rabbi-ighfir-li.mp3",
    //     gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    // },
    // {
    //     id: 8,
    //     arabic: "بِسْمِ اللَّهِ",
    //     english: "In the name of Allah",
    //     audioFile: "bismillah.mp3",
    //     gradient: "linear-gradient(135deg, #e0c3fc 0%, #9bb5ff 100%)"
    // },
    // {
    //     id: 9,
    //     arabic: "رَضِيتُ بِاللَّهِ رَبًّا",
    //     english: "I am pleased with Allah as my Lord",
    //     audioFile: "raditu-billahi-rabban.mp3",
    //     gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    // }
    
];

// Audio management
let currentAudio = null;
let currentPlayingCard = null;
let audioCache = {}; // Cache for audio files

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderZikrCards();
    setupEventListeners();
});

// Render zikr cards dynamically
function renderZikrCards() {
    const zikrGrid = document.getElementById('zikrGrid');
    
    zikrData.forEach(zikr => {
        const card = createZikrCard(zikr);
        zikrGrid.appendChild(card);
    });
}

// Create individual zikr card
function createZikrCard(zikr) {
    const card = document.createElement('div');
    card.className = 'zikr-card';
    card.dataset.zikrId = zikr.id;
    card.style.background = zikr.gradient;
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Play ${zikr.english}`);
    
    card.innerHTML = `
        <div class="arabic-text">${zikr.arabic}</div>
        <div class="english-text">${zikr.english}</div>
        <button class="audio-control" data-audio="${zikr.audioFile}">
            <span class="icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                </svg>
            </span>
            <span class="text">Play</span>
        </button>
    `;
    
    return card;
}

// Setup event listeners
function setupEventListeners() {
    const zikrGrid = document.getElementById('zikrGrid');
    
    // Event delegation for audio controls
    zikrGrid.addEventListener('click', function(e) {
        const audioControl = e.target.closest('.audio-control');
        if (audioControl) {
            e.stopPropagation();
            handleAudioControl(audioControl);
        } else {
            const card = e.target.closest('.zikr-card');
            if (card) {
                const audioControl = card.querySelector('.audio-control');
                handleAudioControl(audioControl);
            }
        }
    });
    
    // Keyboard accessibility
    zikrGrid.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const card = e.target.closest('.zikr-card');
            if (card) {
                const audioControl = card.querySelector('.audio-control');
                handleAudioControl(audioControl);
            }
        }
    });
}

// Handle audio control (play/pause)
function handleAudioControl(audioControl) {
    if (!audioControl) return;
    
    const audioFile = audioControl.dataset.audio;
    const card = audioControl.closest('.zikr-card');
    const icon = audioControl.querySelector('.icon');
    const text = audioControl.querySelector('.text');
    
    // If this card is currently playing, pause it
    if (currentPlayingCard === card && currentAudio && !currentAudio.paused) {
        pauseAudio();
        return;
    }
    
    // Stop any currently playing audio
    if (currentAudio && !currentAudio.paused) {
        stopCurrentAudio();
    }
    
    // Play new audio
    playAudio(audioFile, card, audioControl);
}

// Play audio function
function playAudio(audioFile, card, audioControl) {
    const icon = audioControl.querySelector('.icon');
    const text = audioControl.querySelector('.text');
    
    // Check if audio is already cached
    if (audioCache[audioFile]) {
        // Use cached audio
        currentAudio = audioCache[audioFile];
        currentPlayingCard = card;
        
        // Reset audio to beginning
        currentAudio.currentTime = 0;
        
        // Update UI immediately for cached audio
        icon.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
        `;
        text.textContent = 'Pause';
        audioControl.disabled = false;
        audioControl.classList.add('playing');
        card.classList.add('active');
        
        // Start playing
        currentAudio.play().catch(error => {
            console.error('Error playing cached audio:', error);
            handleAudioError(audioControl, card, error);
        });
    } else {
        // Load new audio file only when needed
        loadAndPlayAudio(audioFile, card, audioControl);
    }
}

// Load and play new audio file
function loadAndPlayAudio(audioFile, card, audioControl) {
    const icon = audioControl.querySelector('.icon');
    const text = audioControl.querySelector('.text');
    
    // Show loading state
    icon.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="loading-spinner">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" opacity="0.3"/>
            <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"/>
        </svg>
    `;
    text.textContent = 'Loading...';
    audioControl.disabled = true;
    
    // Create audio element
    currentAudio = new Audio(`music/${audioFile}`);
    currentAudio.loop = true;
    currentPlayingCard = card;
    
    // Cache the audio file
    audioCache[audioFile] = currentAudio;
    
    // Audio event listeners
    currentAudio.addEventListener('loadeddata', function() {
        icon.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
        `;
        text.textContent = 'Pause';
        audioControl.disabled = false;
        audioControl.classList.add('playing');
        card.classList.add('active');
    });
    
    currentAudio.addEventListener('error', function(error) {
        console.error('Error loading audio file:', audioFile);
        handleAudioError(audioControl, card, error);
    });
    
    // Start playing
    currentAudio.play().catch(error => {
        console.error('Error playing audio:', error);
        handleAudioError(audioControl, card, error);
    });
}

// Handle audio errors
function handleAudioError(audioControl, card, error) {
    const icon = audioControl.querySelector('.icon');
    const text = audioControl.querySelector('.text');
    
    icon.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </svg>
    `;
    text.textContent = 'Error';
    audioControl.disabled = true;
    audioControl.style.opacity = '0.6';
    
    setTimeout(() => {
        resetAudioControl(audioControl, card);
        audioControl.style.opacity = '1';
    }, 3000);
}

// Pause current audio
function pauseAudio() {
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        
        if (currentPlayingCard) {
            const audioControl = currentPlayingCard.querySelector('.audio-control');
            const icon = audioControl.querySelector('.icon');
            const text = audioControl.querySelector('.text');
            
            icon.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                </svg>
            `;
            text.textContent = 'Play';
            audioControl.classList.remove('playing');
            currentPlayingCard.classList.remove('active');
        }
    }
}

// Stop current audio completely
function stopCurrentAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    
    if (currentPlayingCard) {
        const audioControl = currentPlayingCard.querySelector('.audio-control');
        resetAudioControl(audioControl, currentPlayingCard);
    }
    
    currentAudio = null;
    currentPlayingCard = null;
}

// Reset audio control to default state
function resetAudioControl(audioControl, card) {
    const icon = audioControl.querySelector('.icon');
    const text = audioControl.querySelector('.text');
    
    icon.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
        </svg>
    `;
    text.textContent = 'Play';
    audioControl.classList.remove('playing');
    audioControl.disabled = false;
    card.classList.remove('active');
}

// Utility function to handle page visibility
document.addEventListener('visibilitychange', function() {
    if (document.hidden && currentAudio && !currentAudio.paused) {
        // Optionally pause when tab is not visible
        // pauseAudio();
    }
});

// Handle window beforeunload
window.addEventListener('beforeunload', function() {
    if (currentAudio) {
        currentAudio.pause();
    }
});

// Responsive grid adjustment (if needed for dynamic content)
function adjustGrid() {
    const grid = document.getElementById('zikrGrid');
    const cards = grid.children;
    
    // This function can be extended for dynamic grid adjustments
    // Currently, CSS handles responsive behavior
}

// Call adjustGrid on window resize (if needed)
window.addEventListener('resize', adjustGrid);
