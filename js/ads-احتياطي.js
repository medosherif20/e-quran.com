export default async () => {

    let head = document.getElementsByTagName('head')[0];
    let ads_1 = document.createElement('script');
    let ads_2 = document.createElement('script');
    let ads_3 = document.createElement('script');
    let ads_4 = document.createElement('script');
    let ads_5 = document.createElement('script');
    let ins = document.createElement('ins');
    let ins_script = document.createElement('script');
    let ads_4_script = document.createElement('script');
    let ads_5_script = document.createElement('script');

    // ads 1
    ads_1.async = true;
    ads_1.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8643267162014987";
    ads_1.crossOrigin = "anonymous";

    // ads 2 
    ads_2.async = true;
    ads_2.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9599895934613798";
    ads_2.crossOrigin = "anonymous";
    ins.className = "adsbygoogle"
    ins.style = "display:block"
    ins.setAttribute('data-ad-client', 'ca-pub-9599895934613798');
    ins.setAttribute('data-ad-slot', '7678071357');
    ins.setAttribute('data-ad-format', 'auto');
    ins.setAttribute('data-full-width-responsive', 'true');
    ins_script.innerHTML = `(adsbygoogle = window.adsbygoogle || []).push({});`


    // ads 3

    ads_3.type = 'text/javascript';
    ads_3.src = "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-4e828e255d03b2ab";

    // ads 4 

    ads_4.src = "https://cdn.onesignal.com/sdks/OneSignalSDK.js";
    ads_4.async = "true";
    ads_4_script.innerHTML = `window.OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: "a2b55d42-430a-4dcf-8c6d-1132fd320e72",
    });
  });`;


    //   ads 5 

    ads_5.async = "true";
    ads_5.src = "https://www.googletagmanager.com/gtag/js?id=UA-63784623-1";
    ads_5_script.innerHTML = `  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-63784623-1');`;


  head.appendChild(ads_1);
  head.appendChild(ads_2);
  head.appendChild(ads_3);
  head.appendChild(ads_4);
  head.appendChild(ads_5);
  head.appendChild(ads_4_script);
  head.appendChild(ads_5);
  head.appendChild(ins);
  head.appendChild(ins_script);

}