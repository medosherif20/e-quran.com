/*
|--------------------------------------------------------------------------
| تحميل الإعلانات والخدمات داخل <head> بشكل ديناميكي
|--------------------------------------------------------------------------
| الخدمات المستخدمة:
| - Google AdSense (حسابين)
| - ShareThis
| - OneSignal (إشعارات)
| - Google Analytics
|--------------------------------------------------------------------------
*/

export default async () => {

    /* جلب وسم head */
    const head = document.getElementsByTagName('head')[0];

    /* =======================
       إنشاء عناصر السكربت
    ======================= */

    const ads_1 = document.createElement('script'); // AdSense حساب 1
    const ads_2 = document.createElement('script'); // AdSense حساب 2
    const ads_3 = document.createElement('script'); // ShareThis
    const ads_4 = document.createElement('script'); // OneSignal SDK
    const ads_5 = document.createElement('script'); // Google Analytics SDK

    const ads_4_script = document.createElement('script'); // تهيئة OneSignal
    const ads_5_script = document.createElement('script'); // تهيئة Google Analytics

    const ins = document.createElement('ins');              // وسم إعلان AdSense
    const ins_script = document.createElement('script');   // تشغيل الإعلان


    /* =======================
       ads 1 - Google AdSense
       
    ======================= */

    ads_1.async = true;
    ads_1.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8363644011600003";
    ads_1.crossOrigin = "anonymous";


    /* =======================
       ads 2 - Google AdSense
       (حساب إعلاني آخر)
    ======================= */

    ads_2.async = true;
    ads_2.src =
        "https://cdn.adapex.io/hb/aaw.e-quran.js";
 


     /* =======================
          ads 3 - ShareThis
       ======================= */





    /* =======================
       ads 4 - OneSignal SDK
    ======================= */








    /* =======================
       ads 5 - Google Analytics (GA4)
    ======================= */

    ads_5.async = true;
    ads_5.src = "https://www.googletagmanager.com/gtag/js?id=G-75475ZBQK3";

    ads_5_script.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-75475ZBQK3');
    `;


    /* =======================
       ins - إعلان AdSense
    ======================= */

    ins.className = "adsbygoogle";
    ins.style.display = "none"; // غيّرها إلى block عند الاستخدام
    ins.setAttribute("data-ad-client", "ca-pub-xxxxxxxxxxxxxxxx");
    ins.setAttribute("data-ad-slot", "xxxxxxxxxx");

    ins_script.innerHTML = `
        (adsbygoogle = window.adsbygoogle || []).push({});
    `;


    /* =======================
       إضافة العناصر إلى head
    ======================= */

    head.appendChild(ads_1);
    head.appendChild(ads_2);
    head.appendChild(ads_3);
    head.appendChild(ads_4);
    head.appendChild(ads_4_script);
    head.appendChild(ads_5);
    head.appendChild(ads_5_script);
    head.appendChild(ins);
    head.appendChild(ins_script);
};
