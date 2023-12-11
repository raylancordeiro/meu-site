window.addEventListener('load', () => {
    loadFavicon();
    loadOccupation();
    generateQrCode();
});

const pathProd = '/meu-site'

function loadOccupation() {
    const texts = ["Programador", "Back-End Engineer", "Solutions Architect", "Freelancer", "Professor"];
    let index = 0;
    let isDeleting = false;
    let text = '';
    let typingSpeed = 50;

    function type() {
        const currentText = texts[index];
        if (!isDeleting) {
        text = currentText.substring(0, text.length + 1);
        } else {
        text = currentText.substring(0, text.length - 1);
        }

        document.getElementById('typingText').innerHTML = text;

        let delta = typingSpeed;

        if (isDeleting) {
        delta /= 2;
        }

        if (!isDeleting && text === currentText) {
        delta = 1500;
        isDeleting = true;
        } else if (isDeleting && text === '') {
        isDeleting = false;
        index = (index + 1) % texts.length;
        delta = 500;
        }

        setTimeout(type, delta);
    }
    
    setTimeout(type, 1500);
}

function loadFavicon() {
    let iconIndex = 0;
    const icons = ['favicon1.png', 'favicon2.png', 'favicon3.png', 'favicon4.png', 'favicon5.png'];

    function changeFavicon() {
        const link = document.querySelector("link[rel='shortcut icon']");
        link.setAttribute('href', 'images/' + icons[iconIndex]);

        iconIndex = (iconIndex + 1) % icons.length;

        setTimeout(changeFavicon, 500); //meio segundo (500ms)
    }
    changeFavicon();
}

function generateQrCode() {
    var link = "https://nubank.com.br/cobrar/5jweo/65764f66-3116-4c99-8e06-9145773b66f4";
			
    var qrCodeUrl = "https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=" + encodeURIComponent(link);

    var img = document.createElement('img');
    img.src = qrCodeUrl;
    document.getElementById('qrcode')
    .appendChild(img)
}