// script.js
document.getElementById('sendButton').addEventListener('click', function () {
  const phoneNumber = document.getElementById('phoneNumber').value;
  if (phoneNumber) {
    // Show pop-up animation
    const popup = document.getElementById('popup');
    popup.classList.add('show');

    // Redirect to WhatsApp after 1.5 seconds
    setTimeout(() => {
      window.location.href = `https://wa.me/${phoneNumber}`;
    }, 1500);
  } else {
    alert('Please enter a valid phone number.');
  }
});

// PWA Installation Prompt
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  showInstallButton();
});

function showInstallButton() {
  const installButton = document.createElement('button');
  installButton.textContent = 'Install App';
  installButton.style.position = 'fixed';
  installButton.style.bottom = '20px';
  installButton.style.right = '20px';
  installButton.style.padding = '10px 20px';
  installButton.style.backgroundColor = '#25d366';
  installButton.style.color = 'white';
  installButton.style.border = 'none';
  installButton.style.borderRadius = '5px';
  installButton.style.cursor = 'pointer';
  installButton.style.zIndex = '1000';
  document.body.appendChild(installButton);

  installButton.addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      deferredPrompt = null;
      document.body.removeChild(installButton);
    });
  });
}