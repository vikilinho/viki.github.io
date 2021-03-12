'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "73f8865d14d26594cf793ec7907dc981",
".git/config": "811856eb2a37436826a8ab6b9a9afbde",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bc7e005e0bf5c497023b55f762137603",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "10e28824d3c55acbd0cbcb002f0b048d",
".git/logs/refs/heads/master": "10e28824d3c55acbd0cbcb002f0b048d",
".git/logs/refs/remotes/origin/master": "2be1c2cfa789948d5b6cd97d5ea2139f",
".git/objects/01/8ab6c8e338afe7377ffa3199f1d76e205c6b13": "1927ad783ce8608de97541301e023940",
".git/objects/06/939f93bcfff22a40427eed18cb3cb8b7ea83bd": "2c99c77cdc600462477221b8e63a2c9d",
".git/objects/0b/5edcfd5a6d75253188d2b7fd8cffc3d507d73b": "272493baa4a4b9fea09b17b1ff24fce3",
".git/objects/0b/bced5c4bca5244612dd3823cc8f5d889dd312a": "0764d4eada595bcef7f1a61da2b956bf",
".git/objects/15/2465524bf14426c38f67f818049264527b049e": "9a87cb838f6c29898d7c3623816e7601",
".git/objects/17/80131565ad20234408e53e354eafaf30aad805": "18cf849a1414a82ab9e8eb63eb0765f0",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/5c86d4a02310dc2f9fe99dda67bc0777626309": "800581afbdcf8c84aeba51e951989fd4",
".git/objects/2f/d3705c164e81df95e01e25b7f7abe85d102f6a": "2241ffefe30d3a2b0773b577de7550a4",
".git/objects/35/bd8e4e5e92b2c5faff278059346a8de75bb19f": "64c23db1acd6da95f44a33499f03a359",
".git/objects/36/1d48fc2f45ac8c0f5b10ea65ad8e4bfd531371": "05e77e64a82a60c66139634d4301a04a",
".git/objects/3f/49914b1a87bbd69207509496564caa601d71e9": "5abce67de82b89a6d53542dc6359d40f",
".git/objects/40/12267e69a9b401864c5cddf4bd57a60fa6e74f": "25741ee71eebdbf9b39618e0a281aaf3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/52/bed48abe0b72b47eba74e9f6c999b33652d669": "5e8516afd0880af07c1f0c61f0b52293",
".git/objects/59/b1f40b57b69a64b93981710305537351bf7283": "770bbacbef8bf0e5bef88b9c18a17aeb",
".git/objects/5a/b56c2317afa00bee6455d6d544d0d88bd221bd": "c3cd533599fc70071931261ecbc0afd2",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/69/e42a63b3cd29b91eb2b7abf50d63047435b8d8": "9f74373d71cd706be5ddb23f19d8f1c1",
".git/objects/6c/8e14230eee84103dd4546d3e0f9d5b74d122f2": "c8e5ff7c107052bc7aeb7e2f2d31249f",
".git/objects/6e/d360005b59f14f872880dbc460904205921ac5": "280dcf25edff5b278e24f176e2f7d970",
".git/objects/71/c017d606dc03b6ae0cdf946a6aa3e65aa13027": "2db2f29d43fdf9839a0667d19da6e349",
".git/objects/78/f7365c716ded9159bcc930bc9ac953bc5b22be": "ce4d5206f62e252c44cc6d33c744d463",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/9ee34e2936f577e751b9e527c38cabd6552ae2": "db11b60d0251933820ce0bb4cbe82a28",
".git/objects/87/681742bd5616304e740fcb6f1cc2ef289ff316": "0ff08659f05c6385a777c300f8ad7f8a",
".git/objects/88/cbf8c713615fc8d35b3e9e5393f24c98e72c11": "f5282ab70237068f0c754e9d1ec7bc7d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/a2eced839f265aef653a7054fcabca07f8ff1e": "56c2010ab0d2c5feb37f0aca4de6eeb8",
".git/objects/93/ccb8084ec01d520a0eecb37da2fdfc6e0f1929": "b4b8f73d2b787d4a89549c2583a3ab1c",
".git/objects/96/ac37ff70fae9d2e007921e95da956f071f8275": "c9a2512bc5ce58f341c547987e064c0d",
".git/objects/96/f98f55724c3bfa8853e39497b02a8ee63e3857": "7778864b7c80f69b92529a9f752c9e8f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/6a480a4920a905ee9026548598e70cc4eb31b8": "a099dc2749a1b7084db773dc9cb96b8d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bf/90280be2c9cb61c968e1e9f013437415ea65a7": "3bc11b1419995a2272c428b51c053004",
".git/objects/c0/82c83335931128f972c3f05dc6efb4e28482f7": "8d12323e5841a4e0bccef158f20dc87a",
".git/objects/c9/290fe224f5841aacf2056726e0a4a968e2cbe3": "76c8cb9253996d20a99ba342b30b05d5",
".git/objects/cf/a4232204c0c2e1a22859c20e558974a67608b7": "bf8856a9e539fcb03b0619e3dcaff7e4",
".git/objects/d5/19e6e69785e115b8dde3f35f5972fe56854998": "693ad266f87e64822fb438aee16023de",
".git/objects/d8/b8c3d6846e1a7fd62569036ed2d31d6294061c": "5f173a0de7d3fdd5383eac0510d72690",
".git/objects/dd/94b145bdba5d10f8491b77df277ab24bc4bf27": "5f64f7d96bd24ab0b4acb1569e10ae6e",
".git/objects/de/b3f4b15f0a6e150dbe8cd807e92ac4e47d79ed": "8fa243ec67a905a93f4c6479256c7798",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ef/3bb39a0edfebbf0b5db5de9262b5d49550112b": "10c815cd5d03af278f1b7e6bde620735",
".git/objects/f0/d2bb50c6b1f8c87ac9312fff143b343f2253e1": "13237b54ea254ee6f011df7744250dc6",
".git/objects/f0/d79a6081017211cf3cb094ebb84c11045cbd5d": "c8b6cdd3a418d2cac7bc4bae26f24e81",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f4/d1382be4c8999e5dddb61d813e1d33b943c147": "fab75dd1fb114c191697a73fe4610cab",
".git/refs/heads/master": "12b404ec86d3c215eb7ac8d5c04cd389",
".git/refs/remotes/origin/master": "12b404ec86d3c215eb7ac8d5c04cd389",
"assets/AssetManifest.json": "d586340b8cb554c38cb409e9b529140c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/images/ayuda.png": "016f78c89cdbe2060ba1fb2d4a9ab60c",
"assets/images/contain3.jpg": "b6e109db5bf8784f13fb2ebf2f8b252e",
"assets/images/ex.png": "876871f555c006da47d3634e16fdabe8",
"assets/images/expense.png": "875639f53d23b8eb2f053ea37795ea47",
"assets/images/gala.jpg": "f1acc7e13667bc78bc14a78474cd574f",
"assets/images/galaxy.jpg": "59019ddec826ae1ac2233304eb08d2b5",
"assets/images/hello.jpg": "9907a7da32d00d9cb1885b33674d7b81",
"assets/images/mat.png": "2db5fb3ea57cb565dfdc0a2459d77fcc",
"assets/images/mobile.svg": "bc9e62f84ee2fd0cc466d51a4c28f21f",
"assets/images/moni.png": "5dfd7938f6e01b230522a578a732e47c",
"assets/images/vicdroid.jpg": "1eeae2e2a76b35b25a6058f76762e458",
"assets/NOTICES": "969cfabc2014f3db72a71c2a6d5cfe90",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "7662fdd005748c1c2592b9de2870fb5e",
"/": "7662fdd005748c1c2592b9de2870fb5e",
"main.dart.js": "55645c67cfa8d587b531d85306dbeb23",
"manifest.json": "c45f54e5b410206c7ecf6e0867dff113",
"version.json": "94c4004f83ac08d91def49536959fb2c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
