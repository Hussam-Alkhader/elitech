const lottieScript = document.createElement('script');
lottieScript.src = "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.8/lottie.min.js";
lottieScript.onload = function () {
  const animation = lottie.loadAnimation({
    container: document.getElementById('logo-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/js/preloader.json'
  });

  setTimeout(function() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('hidden');
  }, 1000);
};

document.head.appendChild(lottieScript);
