// ga.js
export default function loadGA() {
  return new Promise((resolve) => {
    let head = document.getElementsByTagName('head')[0];

    // إنشاء السكربت
    let ga = document.createElement('script');
    ga.async = true;
    ga.src = "https://www.googletagmanager.com/gtag/js?id=G-75475ZBQK3";

    // بعد التحميل، نعرف gtag
    ga.onload = function() {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function(){ dataLayer.push(arguments); };
      gtag('js', new Date());
      gtag('config', 'G-75475ZBQK3');

      resolve(); // نخبر main.js إن gtag جاهز
    };

    head.appendChild(ga);
  });
}
