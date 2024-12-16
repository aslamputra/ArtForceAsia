const whatsappNumber = "6281927545657";
const emailAddress = "ArtForceAsia@gmail.com";
const images = document.querySelectorAll('.gallery img');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popupTitle');
const popupDescription = document.getElementById('popupDescription');
const popupImage = document.getElementById('popupImage');
const whatsappLink = document.getElementById('whatsappLink');
const emailLink = document.getElementById('emailLink');
const closePopup = document.getElementById('closePopup');

// Tambahkan event listener untuk setiap gambar
images.forEach(image => {
  image.addEventListener('click', () => {
    const title = image.getAttribute('data-title');
    const description = image.getAttribute('data-description');
    const imgSrc = image.getAttribute('data-image');

    popupTitle.textContent = title;
    popupDescription.textContent = description;
    popupImage.src = imgSrc;

    // Set URL untuk WhatsApp dan Email
    const waMessage = `https://wa.me/${whatsappNumber}?text=Hello, I am interested in ${title}`;
   
    // const emailMessage = `mailto:?subject=Inquiry about ${title}&body=I would like to know more about ${title}.`;
    const emailMessage = `mailto:${emailAddress}?subject=Inquiry about ${title}&body=Hello,%20I%20would%20like%20to%20know%20more%20about%20this%20image:%20${title}%0A%0ADescription:%20${description}`;

    whatsappLink.href = waMessage;
    emailLink.href = emailMessage;

    popup.style.display = 'flex';
  });
});

// Tutup popup saat tombol "X" diklik
closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Tutup popup saat area luar konten diklik
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});