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

importScripts(
  "worker.js",
  "https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "apple-touch-icon.6eb46d24.png",
    "revision": "5e93710a334885396b9a8f33b3126dd4"
  },
  {
    "url": "apple-touch-icon.7d30ec0d.png",
    "revision": "5e93710a334885396b9a8f33b3126dd4"
  },
  {
    "url": "favicon-16x16.72035243.png",
    "revision": "3371d24d6115fc83c890616041bc4db7"
  },
  {
    "url": "favicon-16x16.baeaaac9.png",
    "revision": "3371d24d6115fc83c890616041bc4db7"
  },
  {
    "url": "favicon-32x32.57dd0187.png",
    "revision": "8b844671ab65818e9caa5c216b7f79a4"
  },
  {
    "url": "favicon-32x32.84818249.png",
    "revision": "8b844671ab65818e9caa5c216b7f79a4"
  },
  {
    "url": "index.html",
    "revision": "e164fdccf562b3e41d1bf466223ce975"
  },
  {
    "url": "ktr.e31bb0bc.js",
    "revision": "c421226fca10f9f79d83b84f05fb158b"
  },
  {
    "url": "ktr.f72fb645.js",
    "revision": "8c7fe435479d385f623f3cf3be65fa1c"
  },
  {
    "url": "ktu-192x192.4d56df97.png",
    "revision": "fb988257153f00eea2154c56130a45a8"
  },
  {
    "url": "ktu-192x192.b9644b4a.png",
    "revision": "fb988257153f00eea2154c56130a45a8"
  },
  {
    "url": "ktu-192x192.bcbcfc7c.webp",
    "revision": "f3f147fa79f0aa4659d7e08d49eb593c"
  },
  {
    "url": "ktu-192x192.ff15a65e.webp",
    "revision": "f3f147fa79f0aa4659d7e08d49eb593c"
  },
  {
    "url": "ktu-384x384.740fb56a.png",
    "revision": "f2d9cbf4eca29cb61e564d55dc2e6ea6"
  },
  {
    "url": "ktu-384x384.85f25774.webp",
    "revision": "52f1ed88071476fb24f484c29ea50fee"
  },
  {
    "url": "ktu-384x384.c5cff03b.webp",
    "revision": "52f1ed88071476fb24f484c29ea50fee"
  },
  {
    "url": "ktu-384x384.ed4e5f40.png",
    "revision": "f2d9cbf4eca29cb61e564d55dc2e6ea6"
  },
  {
    "url": "ktu-512x512.47ce854c.png",
    "revision": "552c1bfeb98bda2e068332b4b4b5b993"
  },
  {
    "url": "ktu-512x512.77ee334e.webp",
    "revision": "ecb1e2f6b2ab81dbe7cf97eb43024c96"
  },
  {
    "url": "ktu-512x512.d68ff847.webp",
    "revision": "ecb1e2f6b2ab81dbe7cf97eb43024c96"
  },
  {
    "url": "ktu-512x512.db72e32e.png",
    "revision": "552c1bfeb98bda2e068332b4b4b5b993"
  },
  {
    "url": "mstile-150x150.5a2d0ef2.png",
    "revision": "19ce11906a327930fcdfcc889ea6bb1e"
  },
  {
    "url": "mstile-150x150.c876d1d4.png",
    "revision": "19ce11906a327930fcdfcc889ea6bb1e"
  },
  {
    "url": "mstile-310x150.5df66395.png",
    "revision": "c38d03c1060f027fb9ad61954f9560b8"
  },
  {
    "url": "mstile-310x150.a11a86cc.png",
    "revision": "c38d03c1060f027fb9ad61954f9560b8"
  },
  {
    "url": "mstile-310x310.28a64a8f.png",
    "revision": "24f14ea9ece847c0d5d595fadb096234"
  },
  {
    "url": "mstile-310x310.44ef318a.png",
    "revision": "24f14ea9ece847c0d5d595fadb096234"
  },
  {
    "url": "mstile-70x70.032d20b4.png",
    "revision": "7c083f977876f273ba2ef207dff05440"
  },
  {
    "url": "mstile-70x70.bcf4a963.png",
    "revision": "7c083f977876f273ba2ef207dff05440"
  },
  {
    "url": "sw.js",
    "revision": "1fbcbdc2ef95700a115c8e23ea8cf4e6"
  },
  {
    "url": "worker.js",
    "revision": "1e8f53cebde98bf36941d7dd8315ca46"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
