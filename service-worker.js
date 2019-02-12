/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c91436192fe17c62a1b4457474ab73cb"
  },
  {
    "url": "assets/css/0.styles.8a8b2bef.css",
    "revision": "0ba4f4c43ca47f239d2a96027d0ba089"
  },
  {
    "url": "assets/js/1.1b909c2f.js",
    "revision": "c032de003214f301d04762696c9e79a9"
  },
  {
    "url": "assets/js/3.33a51c2b.js",
    "revision": "1564fae90d3a520caca3b75b40b9f376"
  },
  {
    "url": "assets/js/4.cd1e6ad7.js",
    "revision": "1d460e8cb884c4e460f7d37798b18d86"
  },
  {
    "url": "assets/js/5.60bf3841.js",
    "revision": "0a39cff30ec8246c5a60bcd0a13e9845"
  },
  {
    "url": "assets/js/6.2a9f499f.js",
    "revision": "4a4a80deb1bbf75af6ecf5435b67cf6a"
  },
  {
    "url": "assets/js/7.95ef1665.js",
    "revision": "4c752cf88fc6e301140eadf7a4add2e5"
  },
  {
    "url": "assets/js/8.b9fd434d.js",
    "revision": "c24d4b7540b84fb7ce1aab05ab9de203"
  },
  {
    "url": "assets/js/app.ede88466.js",
    "revision": "1afd51a00b15478ebf4b0f6c1e350fbe"
  },
  {
    "url": "index.html",
    "revision": "94893a616c56b15ee4bd0beb2560e464"
  },
  {
    "url": "posts/2019/01/21/test.html",
    "revision": "820d4ed9e412c7f1aae599fa7b962b55"
  },
  {
    "url": "posts/2019/01/22/another-test.html",
    "revision": "64fcd224cf0c440fe7bf68c1875a47fc"
  },
  {
    "url": "posts/categories/catA.html",
    "revision": "d9392291d1c029a9dcdb5a24a93a9cc9"
  },
  {
    "url": "posts/categories/catB.html",
    "revision": "efb532070dc48d82be3f2dd673853575"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "23580a822e068da29547fb5e88d771ba"
  },
  {
    "url": "posts/index.html",
    "revision": "e3b6dc84fbdd7a5bc03e8877c6d696e8"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "6b3393a96b7374aa6267ef0059239932"
  },
  {
    "url": "posts/tags/js.html",
    "revision": "cc88d2dd4f3819b4497d131ca8895ed2"
  },
  {
    "url": "posts/tags/tagA.html",
    "revision": "17c0872b4d6f1ab793683e94d243a60e"
  },
  {
    "url": "posts/tags/tagB.html",
    "revision": "435ebcdffd85093e7750829b24ba8038"
  },
  {
    "url": "posts/tags/vue.html",
    "revision": "55628cdc421cabd99bfe0420efd719c7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
