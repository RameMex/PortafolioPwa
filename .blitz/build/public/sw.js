if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,c,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const r={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return n;case"module":return r;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-17e319d0"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/SRj5_l8LGOSufY1uAcUQD/_buildManifest.js",revision:"SRj5_l8LGOSufY1uAcUQD"},{url:"/_next/static/SRj5_l8LGOSufY1uAcUQD/_ssgManifest.js",revision:"SRj5_l8LGOSufY1uAcUQD"},{url:"/_next/static/chunks/76333407e3e0affaad2e3d4649da0f05153ceeb8.c401fea431a920752eb9.js",revision:"SRj5_l8LGOSufY1uAcUQD"},{url:"/_next/static/chunks/905cd02448c073ade164c352eb36416db51f4e09.e1a68c7751355160c476.js",revision:"SRj5_l8LGOSufY1uAcUQD"},{url:"/_next/static/chunks/commons.50b3a48c202124da93b3.js",revision:"SRj5_l8LGOSufY1uAcUQD"},{url:"/_next/static/chunks/d623929a68419a429f424318bece364c243d3f4b.7e9477fa073d7e5c111d.js",revision:"SRj5_l8LGOSufY1uAcUQD"},{url:"/_next/static/chunks/framework.8db26ec1cbcefaa734a5.js",revision:"SRj5_l8LGOSufY1uAcUQD"},{url:"/_next/static/chunks/main-cb092d6dc5c20707f4a5.js",revision:"SRj5_l8LGOSufY1uAcUQD"},{url:"/_next/static/chunks/pages/404-a47fe169cb038f8f1108.js",revision:"SRj5_l8LGOSufY1uAcUQD"},{url:"/_next/static/chunks/pages/_app-f7ad45a9724d70857b7e.js",revision:"SRj5_l8LGOSufY1uAcUQD"},{url:"/_next/static/chunks/pages/_error-4bdec910a2c3d34e9a53.js",revision:"SRj5_l8LGOSufY1uAcUQD"},{url:"/_next/static/chunks/pages/forgot-password-d9992d8acb85552545fc.js",revision:"SRj5_l8LGOSufY1uAcUQD"},{url:"/_next/static/chunks/pages/index-563fdb2c733252245c97.js",revision:"SRj5_l8LGOSufY1uAcUQD"},{url:"/_next/static/chunks/pages/login-58e483baca7d4ba9c50c.js",revision:"SRj5_l8LGOSufY1uAcUQD"},{url:"/_next/static/chunks/pages/reset-password-8a156e622ac3d9cfe6fd.js",revision:"SRj5_l8LGOSufY1uAcUQD"},{url:"/_next/static/chunks/pages/signup-155c1a318786e1757f41.js",revision:"SRj5_l8LGOSufY1uAcUQD"},{url:"/_next/static/chunks/polyfills-9b64142299b07c122cee.js",revision:"SRj5_l8LGOSufY1uAcUQD"},{url:"/_next/static/chunks/webpack-245f049e565ebf942e09.js",revision:"SRj5_l8LGOSufY1uAcUQD"},{url:"/_next/static/css/5932000444b3e34b4fee.css",revision:"SRj5_l8LGOSufY1uAcUQD"},{url:"/favicon.ico",revision:"9fd55a2933a2142a2d3817c5ef0fbc3e"},{url:"/icons/icon-128x128.png",revision:"d626cfe7c65e6e5403bcbb9d13aa5053"},{url:"/icons/icon-144x144.png",revision:"e53a506b62999dc7a4f8b7222f8c5add"},{url:"/icons/icon-152x152.png",revision:"18b3958440703a9ecd3c246a0f3f7c72"},{url:"/icons/icon-16x16.png",revision:"83703514f19796ee15151e450984416d"},{url:"/icons/icon-192x192.png",revision:"27dc12f66697a47b6a8b3ee25ba96257"},{url:"/icons/icon-32x32.png",revision:"25e2c6ee34840568012b32e4314278df"},{url:"/icons/icon-384x384.png",revision:"a40324a3fde2b0b26eeffd4f08bf8be8"},{url:"/icons/icon-512x512.png",revision:"93d6e8e15cfa78dfee55446f607d9a28"},{url:"/icons/icon-72x72.png",revision:"f2ffc41b3482888f3ae614e0dd2f6980"},{url:"/icons/icon-96x96.png",revision:"fba02a40f7ba6fc65be8a2f245480f6d"},{url:"/logo.png",revision:"5bd5546d2b6a2318b19c26ebb4074e16"},{url:"/manifest.json",revision:"c96057f6fe080d95b52920d55437ade9"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
