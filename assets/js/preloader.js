// تحميل مكتبة Lottie ديناميكيًا
const lottieScript = document.createElement('script');
lottieScript.src = "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.8/lottie.min.js";
lottieScript.onload = function () {
  // الكود الخاص بالأنيميشن بعد تحميل المكتبة
  const animation = lottie.loadAnimation({
    container: document.getElementById('animation'), // العنصر الذي سيتم عرض الأنيميشن فيه
    renderer: 'svg', // نوع العرض
    loop: true, // جعل الحركة تدور باستمرار
    autoplay: true, // تشغيل الأنيميشن تلقائيًا
    path: 'assets/js/preloader.json' // استبدل هذا المسار بموقع ملف JSON الخاص بك
  });
};
document.head.appendChild(lottieScript);
