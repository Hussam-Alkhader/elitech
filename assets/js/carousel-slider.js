document.addEventListener('DOMContentLoaded', () => {
  
  //------ Slider Begin
	const CaroS = document.querySelector('.Carousel-slider');
	const CaroSlider = new MicroSlider(CaroS, { indicators: true, indicatorText: '' });

  // 2. قائمة الأيقونات بالترتيب
  const iconSets = { 
    "page1-icons": [
      { icon: "assets/images/case/Asset 20@2x-100.png", text: "Videos" },
      { icon: "assets/images/case/Asset 25@2x-100.png", text: "Reading" },
      { icon: "assets/images/case/Asset 24@2x-100.png", text: "Vocabulary" },
      { icon: "assets/images/case/Asset 21@2x-100.png", text: "Wordlist" },
      { icon: "assets/images/case/Asset 22@2x-100.png", text: "Songs" },
      { icon: "assets/images/case/Asset 23@2x-100.png", text: "Grammar" },
    ],
    "page2-icons": [
      { icon: "assets/images/case/Asset 25@2x-100.png", text: "Profile" },
      { icon: "assets/images/case/Asset 26@2x-100.png", text: "Settings" },
      { icon: "assets/images/case/Asset 27@2x-100.png", text: "Messages" },
      { icon: "assets/images/case/Asset 28@2x-100.png", text: "Notifications" },
      { icon: "assets/images/case/Asset 29@2x-100.png", text: "Logout" },
    ],
  };

    // جلب مفتاح الأيقونات من الخاصية
    const iconKey = CaroS.getAttribute("data-icons");

    // الحصول على الأيقونات بناءً على المفتاح
    const icons = iconSets[iconKey] || [];

  // 3. استهداف جميع المؤشرات وتعيين الأيقونات
  const indicators = document.querySelectorAll('.indicators li');

  indicators.forEach((indicator, index) => {
    if (icons[index]) {
      indicator.innerHTML = `
        <a href="#">
          <img src="${icons[index].icon}" alt="Icon ${index + 1}" class="indicator-icon">
          <span class="indicator-text">${icons[index].text}</span>
        </a>
      `;
    }
  });
	const hammer = new Hammer(CaroS);
	const CaroSTimer = 2000;
	let CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
    
  //------- Mouseenter Event
	CaroS.onmouseenter = function(e) {
		clearInterval(CaroAutoplay); 
		console.log(e.type + ' mouse detected');
	}
  
  //----- Mouseleave Event
	CaroS.onmouseleave = function(e) {
		clearInterval(CaroAutoplay); 
		CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
		console.log(e.type + ' mouse detected');
	}
  
  //----- Mouseclick Event
	CaroS.onclick = function(e) {
		clearInterval(CaroAutoplay); 
		console.log(e.type + ' mouse detected');
	}
  
  //------ Gesture Tap Event
	hammer.on('tap', function(e) {
		clearInterval(CaroAutoplay);
		console.log(e.type + ' gesture detected');
	});
  
  //----- Gesture Swipe Event
	hammer.on('swipe', function(e) {
		clearInterval(CaroAutoplay); 
		CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
		console.log(e.type + ' gesture detected');
	});

  let slideLink = document.querySelectorAll('.slider-item');
  if (slideLink && slideLink !== null && slideLink.length > 0){
    slideLink.forEach( el => el.addEventListener('click', e => {
      e.preventDefault();
      let href = el.dataset.href;
      let target = el.dataset.target;
      if (href !== '#') window.open(href, target);
    }));
  }

    //----- Update active slide when the slider changes
    CaroSlider.on('slideChange', function (event) {
      // Remove active class from all slides
      document.querySelectorAll('.slider-item').forEach(item => item.classList.remove('active'));
      
      // Add active class to the current slide
      const activeSlide = document.querySelector('.slider-item[data-index="' + event.index + '"]');
      if (activeSlide) {
        activeSlide.classList.add('active');
      }
    });
  
  //---- Slider End
  
});