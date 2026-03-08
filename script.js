// === PENGATURAN DATA PORTAL ===
const portalData = {
    // Menu Utama (10 Tombol Placeholder)
    mainMenu: [
        {
            title: "Aplikasi SIKEPANG",
            subtitle: "Layanan Usul Kenaikan Pangkat",
            type: "internal",
            targetPage: "pangkat",
            visible: true
        },
        {
            title: "Aplikasi SIJULAK",
            subtitle: "Sistem Jurnal Layanan Konsultasi",
            type: "external",
            url: "https://#", 
            visible: true
        },
        {
            title: "Aplikasi SICAPER",
            subtitle: "Layanan Registrasi Surat Cepat",
            type: "external",
            url: "https://#",
            visible: true
        },
        {
            title: "Slot Layanan 4",
            subtitle: "Deskripsi untuk layanan keempat di sini",
            type: "external",
            url: "#",
            visible: true
        },
        {
            title: "Slot Layanan 5",
            subtitle: "Deskripsi untuk layanan kelima di sini",
            type: "external",
            url: "#",
            visible: true
        },
        {
            title: "Slot Layanan 6",
            subtitle: "Deskripsi untuk layanan keenam di sini",
            type: "external",
            url: "#",
            visible: true
        },
        {
            title: "Slot Layanan 7",
            subtitle: "Deskripsi untuk layanan ketujuh di sini",
            type: "external",
            url: "#",
            visible: true
        },
        {
            title: "Slot Layanan 8",
            subtitle: "Deskripsi untuk layanan kedelapan di sini",
            type: "external",
            url: "#",
            visible: true
        },
        {
            title: "Slot Layanan 9",
            subtitle: "Deskripsi untuk layanan kesembilan di sini",
            type: "external",
            url: "#",
            visible: true
        },
        {
            title: "Slot Layanan 10",
            subtitle: "Deskripsi untuk layanan kesepuluh di sini",
            type: "external",
            url: "#",
            visible: true
        }
    ],

    // Halaman Internal
    internalPages: {
        "pangkat": {
            title: "Detail Usul Kenaikan Pangkat",
            links: [
                { title: "Buku Panduan", subtitle: "Unduh panduan penggunaan", url: "#", visible: true },
                { title: "Login Aplikasi", subtitle: "Masuk ke dashboard SIKEPANG", url: "#", visible: true },
                { title: "FAQ", subtitle: "Pertanyaan yang sering diajukan", url: "#", visible: true }
            ]
        }
    }
};


// === LOGIKA APLIKASI ===
const pageHome = document.getElementById('page-home');
const pageInternal = document.getElementById('page-internal');
const mainMenuContainer = document.getElementById('main-menu');
const internalMenuContainer = document.getElementById('internal-menu');
const internalTitle = document.getElementById('internal-title');
const btnBack = document.getElementById('btn-back');

// Variabel baru untuk fitur Toggle Menu
const btnToggleMenu = document.getElementById('btn-toggle-menu');

// Fitur Buka/Tutup Menu Layanan
btnToggleMenu.onclick = () => {
    // Menambah/menghapus class 'hidden-menu'
    mainMenuContainer.classList.toggle('hidden-menu');
    
    // Mengubah teks dan arah panah berdasarkan status menu
    if (mainMenuContainer.classList.contains('hidden-menu')) {
        btnToggleMenu.innerHTML = 'Buka Menu Layanan <span id="toggle-icon">▼</span>';
    } else {
        btnToggleMenu.innerHTML = 'Tutup Menu Layanan <span id="toggle-icon">▲</span>';
    }
};

// Fungsi merender tombol dengan Judul, Subjudul, dan Ikon
function renderButtons(links, container) {
    container.innerHTML = ''; 
    
    const visibleLinks = links.filter(link => link.visible === true);

    visibleLinks.forEach(link => {
        const button = document.createElement('a');
        button.className = 'link-btn';

        const textArea = document.createElement('div');
        textArea.className = 'btn-text-area';
        
        const titleSpan = document.createElement('span');
        titleSpan.className = 'btn-title';
        titleSpan.textContent = link.title;
        
        const subtitleSpan = document.createElement('span');
        subtitleSpan.className = 'btn-subtitle';
        subtitleSpan.textContent = link.subtitle;

        textArea.appendChild(titleSpan);
        textArea.appendChild(subtitleSpan);

        const iconSpan = document.createElement('div');
        iconSpan.className = 'btn-icon';
        iconSpan.innerHTML = '&#8250;'; 

        button.appendChild(textArea);
        button.appendChild(iconSpan);

        if (link.type === 'internal') {
            button.href = '#';
            button.onclick = (e) => {
                e.preventDefault();
                openInternalPage(link.targetPage);
            };
        } else {
            button.href = link.url;
            button.target = '_blank'; 
        }

        container.appendChild(button);
    });
}

// Fungsi membuka halaman internal
function openInternalPage(pageId) {
    const pageData = portalData.internalPages[pageId];
    if (pageData) {
        internalTitle.textContent = pageData.title;
        renderButtons(pageData.links, internalMenuContainer);
        
        pageHome.classList.remove('active');
        pageInternal.classList.add('active');
        window.scrollTo(0, 0); 
    }
}

// Fungsi kembali ke halaman utama
btnBack.onclick = () => {
    pageInternal.classList.remove('active');
    pageHome.classList.add('active');
};

// Inisialisasi awal saat web dibuka
renderButtons(portalData.mainMenu, mainMenuContainer);