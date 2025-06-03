const playlist = [
    {
        id: 1,
        name: "Blinding Lights",
        artist: "The Weeknd",
        image: "img/blinding_lights.png",
        audio: "https://res.cloudinary.com/dgopx1osv/video/upload/v1748895502/pf6binaj3qvbhsknb0rg.mp3"
    },
    {
        id: 2,
        name: "Shape of You",
        artist: "Ed Sheeran",
        image: "img/shape_of_you.webp",
        audio: "https://res.cloudinary.com/dgopx1osv/video/upload/v1748895491/hwwokodskmbtalyonv5i.mp3"
    },
    {
        id: 3,
        name: "Watermelon Sugar",
        artist: "Harry Styles",
        image: "img/Watermelon_Sugar.png",
        audio: "https://res.cloudinary.com/dgopx1osv/video/upload/v1748895493/vcsriagueh19kytectqu.mp3"
    },
    {
        id: 4,
        name: "Levitating",
        artist: "Dua Lipa",
        image: "img/levitating.webp",
        audio: "https://res.cloudinary.com/dgopx1osv/video/upload/v1748895499/rfehzlftqtcfumddna76.mp3"
    },
    {
        id: 5,
        name: "Good For You",
        artist: "Selena Gomez",
        image: "img/good_for_you.png",
        audio: "https://res.cloudinary.com/dgopx1osv/video/upload/v1748895486/egviyuzdialsc5os31rm.mp3"
    },
    {
        id: 6,
        name: "As It Was",
        artist: "Harry Styles",
        image: "img/As_It_Was.png",
        audio: "https://res.cloudinary.com/dgopx1osv/video/upload/v1748895499/ujb5rk1uxxyhthfcfvke.mp3"
    },
    {
        id: 7,
        name: "Heat Waves",
        artist: "Glass Animals",
        image: "img/Heat_Waves.png",
        audio: "https://res.cloudinary.com/dgopx1osv/video/upload/v1748895486/hroghn12whtrysvnuqvr.mp3"
    },
    {
        id: 8,
        name: "Lost In The Fire",
        artist: "The Weeknd ft. Gesaffelstein",
        image: "img/lost_in_the_fire.webp",
        audio: "https://res.cloudinary.com/dgopx1osv/video/upload/v1748895490/htyxtdlcouel95nn7lfv.mp3"
    },
    {
        id: 9,
        name: "After Hours",
        artist: "The Weeknd",
        image: "img/after_hours.webp",
        audio: "https://res.cloudinary.com/dgopx1osv/video/upload/v1748895511/uq2xyxnwrfpq3fjptipm.mp3"
    },
    {
        id: 10,
        name: "Timeless",
        artist: "The Weeknd ft. Playboi Carti",
        image: "img/timeless.webp",
        audio: "https://res.cloudinary.com/dgopx1osv/video/upload/v1748895497/hhixueu6xc11cpvcptx8.mp3"
    },
    {
        id: 11,
        name: "Closer",
        artist: "The Chainsmokers ft. Halsey",
        image: "img/closer.jpg",
        audio: "https://res.cloudinary.com/dgopx1osv/video/upload/v1748895507/hctfymstp7owrjot9yjg.mp3"
    },
    {
        id: 12,
        name: "Ijazat",
        artist: "Falak Shabir",
        image: "img/falak_ijazat.webp",
        audio: "https://res.cloudinary.com/dgopx1osv/video/upload/v1748895499/sckaayxcfuukgjh7b7gk.mp3"
    },
    {
        id: 13,
        name: "Superman",
        artist: "Yo Yo Honey Singh",
        image: "img/superman.webp",
        audio: "https://res.cloudinary.com/dgopx1osv/video/upload/v1748895501/qpxdar1dsaztyo9itvci.mp3"
    },
    {
        id: 14,
        name: "Call Aundi",
        artist: "Yo Yo Honey Singh",
        image: "img/superman.webp",
        audio: "https://res.cloudinary.com/dgopx1osv/video/upload/v1748895509/aajxuktntjucjgiun477.mp3"
    },
    {
        id: 15,
        name: "Desi Kalakaar",
        artist: "Yo Yo Honey Singh",
        image: "img/desi_kalakaar.jpg",
        audio: "https://res.cloudinary.com/dgopx1osv/video/upload/v1748895485/adjemgaydondh7oiz3ma.mp3"
    },
    {
        id: 16,
        name: "Mitti Di Khushboo",
        artist: "Ayushmann Khurrana",
        image: "img/mitti_di_khusboo.jpg",
        audio: "https://res.cloudinary.com/dgopx1osv/video/upload/v1748895489/ctdnj8h9jqogaoqnfksn.mp3"
    },
];

const progress = document.getElementById('progress-bar');
const song = document.getElementById('song');
const ctrlIcon = document.getElementById('ctrlIcon');
const playBtn = document.getElementById('playBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const songTitle = document.getElementById('songTitle');
const artistName = document.getElementById('artistName');
const songImage = document.getElementById('songImage');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const playlistBtn = document.getElementById('playlistBtn');
const playlistDropdown = document.getElementById('playlistDropdown');
const songList = document.getElementById('songList');
const volumeSlider = document.getElementById('volumeSlider');
const loadingText = document.getElementById('loadingText');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');

let currentSongIndex = 0;
let isPlaying = false;
let isPlaylistOpen = false;
let currentThemeIsDark = false;

function checkRequiredElements() {
    const requiredElements = {
        'progress-bar': progress, 'song': song, 'ctrlIcon': ctrlIcon,
        'playBtn': playBtn, 'songTitle': songTitle, 'artistName': artistName,
        'songImage': songImage, 'nextBtn': nextBtn, 'prevBtn': prevBtn,
        'currentTime': currentTimeEl, 'duration': durationEl, 'playlistBtn': playlistBtn,
        'playlistDropdown': playlistDropdown, 'songList': songList, 'volumeSlider': volumeSlider
    };

    const missingElements = Object.entries(requiredElements).filter(([, element]) => !element).map(([id]) => id);

    if (missingElements.length > 0) {
        console.error('Missing required HTML elements with IDs:', missingElements.join(', '));
        alert('Some essential elements are missing from your HTML. Please check the console for details.');
        return false;
    }
    return true;
}

function applyTheme(isDarkMode, savePreference = false) {
    currentThemeIsDark = isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    if (themeIcon) {
        themeIcon.classList.toggle('fa-sun', isDarkMode);
        themeIcon.classList.toggle('fa-moon', !isDarkMode);
    }
    if (savePreference) {
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }
}

function detectAndApplyTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme !== null) {
        applyTheme(savedTheme === 'dark');
    } else {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDarkMode);
    }
}

function toggleTheme() {
    applyTheme(!currentThemeIsDark, true);
}

function init() {
    if (!checkRequiredElements()) {
        return;
    }

    detectAndApplyTheme();

    if (loadingText) {
        loadingText.classList.add('show');
        loadingText.textContent = "Loading player...";
    }

    loadSong(currentSongIndex);
    populatePlaylist();
    setupEventListeners();

    if (loadingText) {
        loadingText.classList.remove('show');
    }
}

function loadSong(index) {
    const currentSong = playlist[index];
    songTitle.textContent = currentSong.name;
    artistName.textContent = currentSong.artist;
    songImage.src = currentSong.image;

    songImage.onerror = function () {
        this.src = 'img/default.png';
        console.warn(`Could not load image: ${currentSong.image}. Using fallback.`);
    };

    song.src = currentSong.audio;

    updateActivePlaylistItem(index);

    if (loadingText) {
        loadingText.classList.add('show');
        loadingText.textContent = 'Loading audio...';
    }
}

function populatePlaylist() {
    songList.innerHTML = '';
    playlist.forEach((songData, index) => {
        const songItem = document.createElement('div');
        songItem.className = `song-item ${index === currentSongIndex ? 'active' : ''}`;
        songItem.innerHTML = `
            <img src="${songData.image}" alt="${songData.name}" onerror="this.src='img/default.png'">
            <div class="song-details">
                <div class="song-name">${songData.name}</div>
                <div class="artist-name">${songData.artist}</div>
            </div>
        `;
        songItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
            if (!isPlaying) {
                playPause();
            } else {
                song.play();
            }
            togglePlaylist();
        });
        songList.appendChild(songItem);
    });
}

function updateActivePlaylistItem(index) {
    document.querySelectorAll('.song-item').forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function playPause() {
    const rotatingDisc = document.querySelector('.rotating-disc'); // Get reference to the disc

    if (isPlaying) {
        song.pause();
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');
        songImage.classList.remove('playing');
        if (rotatingDisc) { // Check if disc exists before modifying
            rotatingDisc.classList.remove('popped-out'); // Hide disc
            rotatingDisc.style.animationPlayState = 'paused'; // Pause rotation
        }
        isPlaying = false;
    } else {
        const playPromise = song.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    ctrlIcon.classList.add('fa-pause');
                    ctrlIcon.classList.remove('fa-play');
                    songImage.classList.add('playing');
                    if (rotatingDisc) { // Check if disc exists before modifying
                        rotatingDisc.classList.add('popped-out'); // Show disc
                        rotatingDisc.style.animationPlayState = 'running'; // Start rotation
                    }
                    isPlaying = true;
                    if (loadingText) {
                        loadingText.classList.remove('show');
                    }
                })
                .catch((error) => {
                    console.error('Error playing audio:', error);
                    if (loadingText) {
                        loadingText.textContent = 'Playback error: ' + error.message;
                        loadingText.classList.add('show');
                        setTimeout(() => loadingText.classList.remove('show'), 3000);
                    }
                    ctrlIcon.classList.remove('fa-pause');
                    ctrlIcon.classList.add('fa-play');
                    songImage.classList.remove('playing');
                    if (rotatingDisc) { // Ensure disc is hidden on error
                        rotatingDisc.classList.remove('popped-out');
                        rotatingDisc.style.animationPlayState = 'paused';
                    }
                    isPlaying = false;
                });
        }
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
    if (isPlaying) {
        song.play();
    }
}

function prevSong() {
    currentSongIndex = (currentSongIndex === 0) ? playlist.length - 1 : currentSongIndex - 1;
    loadSong(currentSongIndex);
    if (isPlaying) {
        song.play();
    }
}

function togglePlaylist() {
    isPlaylistOpen = !isPlaylistOpen;
    playlistDropdown.classList.toggle('show', isPlaylistOpen);
}

function setupEventListeners() {
    song.addEventListener('loadedmetadata', () => {
        progress.max = song.duration;
        progress.value = song.currentTime;
        durationEl.textContent = formatTime(song.duration);
        if (loadingText) {
            loadingText.classList.remove('show');
        }
    });

    song.addEventListener('error', (e) => {
        console.error("Audio playback error:", e);
        if (loadingText) {
            loadingText.textContent = 'Error loading audio file.';
            loadingText.classList.add('show');
            setTimeout(() => {
                loadingText.classList.remove('show');
            }, 3000);
        }
    });

    song.addEventListener('canplay', () => {
        if (loadingText) {
            loadingText.classList.remove('show');
        }
    });

    song.addEventListener('timeupdate', () => {
        progress.value = song.currentTime;
        currentTimeEl.textContent = formatTime(song.currentTime);
    });

    song.addEventListener('ended', nextSong);

    progress.addEventListener('input', () => {
        song.currentTime = progress.value;
    });

    playBtn.addEventListener('click', playPause);
    nextBtn.addEventListener('click', nextSong);
    prevBtn.addEventListener('click', prevSong);
    playlistBtn.addEventListener('click', togglePlaylist);

    volumeSlider.addEventListener('input', (e) => {
        song.volume = e.target.value / 100;
    });

    document.addEventListener('click', (e) => {
        if (isPlaylistOpen && !playlistDropdown.contains(e.target) && !playlistBtn.contains(e.target)) {
            togglePlaylist();
        }
    });

    const prefersDarkSchemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    prefersDarkSchemeMq.addEventListener('change', (e) => {
        if (localStorage.getItem('theme') === null) {
            applyTheme(e.matches);
        }
    });

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }

    document.addEventListener('keydown', (e) => {
        switch (e.code) {
            case 'Space':
                e.preventDefault();
                playPause();
                break;
            case 'ArrowRight':
                nextSong();
                break;
            case 'ArrowLeft':
                prevSong();
                break;
        }
    });
}

document.addEventListener('DOMContentLoaded', init);