import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import '@splidejs/react-splide/css';
import '../styles/globals.css'

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const attachScripts = () => {

      const gtmScript = document.getElementById('gtm');
      const gaScript = document.getElementById('ga');
      const fbScript = document.getElementById('fb');
      const gtm2Script = document.createElement('script');
      gtm2Script.src = 'https://www.googletagmanager.com/gtag/js?id=G-BVKQYJ6KFL';
      gtm2Script.async = true;

      gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.defer=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-N7SB2Z3');    
  `;

      gaScript.innerHTML = `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-BVKQYJ6KFL');
  `;

      fbScript.innerHTML = `!function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '889335038854708');
    fbq('track', 'PageView');  
  `;

      document.head.appendChild(gtmScript);
      document.head.appendChild(gaScript);
      document.head.appendChild(fbScript);
      document.head.appendChild(gtm2Script);
    };

    setTimeout((function () {
      var vidDefer = document.getElementsByTagName('iframe');
      for (var i = 0; i < vidDefer.length; i++) {
        if (vidDefer[i].getAttribute('data-src')) {
          vidDefer[i].setAttribute('src', vidDefer[i].getAttribute('data-src'));
        }
      }
    }), 3000)

    setTimeout(attachScripts, 20000)
  }, [])

  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
};
