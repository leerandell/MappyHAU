'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "81a3726eb8c98641514a69c752e39576",
"assets/FontManifest.json": "6493d8b0ca54c607da7299539abad0b8",
"assets/fonts/Alice-Regular.ttf": "1b458e9e5b31453b294dcd9c561e4df9",
"assets/fonts/Anteb-Bold.ttf": "15878abdeefcff489d0c0dd1c98899c2",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/MontserratAlternates-Regular.otf": "593416a50e5a0d64583735536493c19c",
"assets/fonts/MontserratAlternates-SemiBold.otf": "582ac8386624ca11768ebe578c46a35c",
"assets/fonts/RomanSerif.ttf": "534dff1bd0bab8cfdc991849615acd28",
"assets/fonts/Tan%2520Pumpkins%2520Personal%2520Use.ttf": "b62b9b117f176e4a0f26320ffe773622",
"assets/images/eight/SRH.jpg": "b723793539bea38a277e3e4bebc2997f",
"assets/images/eighteen/SHBuilding.jpg": "85ab713571d61c5102b6dab20076ef8c",
"assets/images/eleven/PGN.jpg": "cddc835c52d4d753e96005dee929cfdd",
"assets/images/eleven/PGN_Clinic.jpg": "1ce033b3f71e57795f8564519b105f47",
"assets/images/eleven/PGN_CollegeGuideOffice.jpg": "09be0cb16e7bd3095f1104d5101ee708",
"assets/images/eleven/PGN_OSAOffice.jpg": "e55ae71177190ea1bfc2061efdc6fce9",
"assets/images/eleven/PGN_SBA_DeansOffice.jpg": "2e84669b9b1125b3430494cedcc9598e",
"assets/images/eleven/PGN_UnivGuideOff.jpg": "61a6b423a96c96ef5a1e78a021c39346",
"assets/images/fifteen/ChapelofHGA.jpg": "acb268291225a4ad2cdfb46b61667b3b",
"assets/images/five/WC.jpg": "e7ed9045123f086e37c5bc6fe17eca92",
"assets/images/four/STL.jpg": "671b406623f0e154346cd4d4fcb98d05",
"assets/images/four/STL_SHTM-DeansOffice.jpg": "ff44874ff7c82c7abf222bcef1441a64",
"assets/images/fourteen/MGN.jpg": "0e3d1a12a14c559619d0a350f968bc2b",
"assets/images/fourteen/MGN_CCJEF_ConsulRoom.jpg": "82e7653e5b040c8f9ba38eef35b6fc11",
"assets/images/fourteen/MGN_CCJEF_DeansOffice.jpg": "316073fbe94c7b14c7fc6e5e41995721",
"assets/images/fourteen/MGN_CCJEF_SciLab.jpg": "783df018213a4dcd7fcb7390a3a7af5e",
"assets/images/fourteen/MGN_CompLab.jpg": "f36aa1002efde1107ef292fbc12bcae4",
"assets/images/fourteen/MGN_GuideOffice.jpg": "5afebc1f8ce1a2ea199f901436704503",
"assets/images/front/bed.png": "0fd9c280bab973eefb39ce5bd5c70c6b",
"assets/images/front/ccjef.png": "2b5eb274915cdb3a1de7f2229d633213",
"assets/images/front/gs.png": "6a24dfa501b4a58feb872e8e55589e0d",
"assets/images/front/HAU_logo.png": "d45cc6c1d0d9ac51fc1c54593c89c090",
"assets/images/front/HAU_map.PNG": "4c27fb889dd4dd40d342f2f822c0515a",
"assets/images/front/sas.png": "4853c4ef8a8d7bbf6a961ab2bc6fed13",
"assets/images/front/sba.png": "fdafbdedd16fd5d1869e7c2533eb4455",
"assets/images/front/sea.png": "e147e3938bf140f60f5edcef1f140b3a",
"assets/images/front/sed.png": "f93a82a11fba3ed1f4a065cd0324eefa",
"assets/images/front/shtm.png": "b13cf6ef22848c7c153c0aa8280f7b3f",
"assets/images/front/soc.png": "06183ffc98ba92cd00e5f8d5b6be6a47",
"assets/images/nine/SMH.jpg": "bc2a520d99f94104accb013e20669ad3",
"assets/images/nineteen/CoveredCourt.jpg": "f1b3244cdb3941d5c85d5116ddc10215",
"assets/images/one/Plaza_Building.jpg": "b3700242dd190375bb913773d2489330",
"assets/images/one/RedBuilding_Dormitory.jpg": "ab6ab34f68fcf6d5f369f838bbd96392",
"assets/images/one/RedBuilding_HumanOffice.jpg": "735d1324b84ff928c3fa7565503bac54",
"assets/images/seven/SGH.jpg": "6fb1ffdf814d2030f677148679637b15",
"assets/images/seventeen/SJH.jpg": "4aec96fc08e59732de4c32697183646c",
"assets/images/seventeen/SJH_ConsulRoom.jpg": "5ee0eb38db88384f917d0c5c3e9ea263",
"assets/images/seventeen/SJH_CSC-CCJEF-SOC-Office.jpg": "406687c3ac02a4433e69a13444dd7a12",
"assets/images/seventeen/SJH_SAS_DeansOffice.jpg": "6d6e0fa6dd83961c3a668fe55f5f4855",
"assets/images/seventeen/SJH_SEDDeansOff.jpg": "35306a14481df29bb5f2e2b5a637bac0",
"assets/images/seventeen/SJH_SEDFacRoom.jpg": "b4b8d46a513434cc2b30d63eaab1dd38",
"assets/images/seventeen/SJH_SOC_DeansOffice.jpg": "a5981c710b7730aced310a9609970781",
"assets/images/seventeen/SJH_SOC_FacRoom.jpg": "fddab3e43a14b38ff230524c3295798f",
"assets/images/six/YellowCanteen.jpg": "91b7f4f8597976e4555782480d986d06",
"assets/images/sixteen/Josefina_FormCenter.jpg": "321dce52d8cc8894365718175ea15a9b",
"assets/images/ten/GGN.jpg": "6f06e6f90db67ec7e8ad7fbb37d92d47",
"assets/images/ten/GGN_Canteen.jpg": "70279a7cd5cb81e8994751988b7ac9c7",
"assets/images/ten/GGN_HSGuideOffice.jpg": "77125d3a3fe5c5f5f1d517daaf3b231c",
"assets/images/ten/GGN_HSLib.jpg": "01bb617fba4864f63ce401eae58bf301",
"assets/images/ten/GGN_InternetSection.jpg": "9cbeccb4ebfd48e4ac2b61933f563ee3",
"assets/images/ten/GGN_MediaCenter.jpg": "3be6b0b44dd175331b5dab0c62acaef4",
"assets/images/ten/GGN_PrinOffice-FacRoom.jpg": "bc779534707fe799747bd11d726174fb",
"assets/images/thirteen/APS.jpg": "3a5de75b17a12ad86300dabfaed02ced",
"assets/images/thirteen/APS_BookStore.jpg": "3da9440579c06bf39ac262f399f4baef",
"assets/images/thirteen/APS_CompRoom.jpg": "23cb51e8a26cd87dfad971944e200b4b",
"assets/images/thirteen/APS_SEA_DeansOffice.jpg": "d2798aafce8ae577a1c45fa63d96d2df",
"assets/images/three/SFJ.jpg": "9060e73dc6a45dc143f05bc7aeeb0814",
"assets/images/three/SFJ_PresidentOffice.jpg": "1865202e8c362f2b86bfc16a0653e4a1",
"assets/images/three/SFJ_UnivLib.jpg": "ade4696337726dae57e6a06e4eda1a29",
"assets/images/three/SFJ_UnivTheater.jpg": "cd7a8a0f1ca2b9c9e7aaa8abd9da3859",
"assets/images/twelve/DJDN.jpg": "1af5df6fb63ca50ad50d28c0240fb57f",
"assets/images/twelve/DJDN_AccOffice.jpg": "29a7c20ee933a42045b8e33c0e478615",
"assets/images/twelve/DJDN_TellersOffice.jpg": "faa78b2ea7ca822e6c6bba42b8908474",
"assets/images/twenty/ImmacGym.jpg": "35ebdb6875eeb72394f57e273e01bbbc",
"assets/images/twentyone/ImmacGymAnnex.jpg": "ad3f671cc64aa186d860a0d670c51ab0",
"assets/images/two/StMarthaBuilding.jpg": "b6954ec899dd207d925ae2481023eead",
"assets/images/two/StMartha_AdmissionsOff.jpg": "cef7bf150ceb282580e08026ca098f11",
"assets/images/two/StMartha_Dormitory.jpg": "e6ac718ff42dfc7d2a8eeed151d0095c",
"assets/images/two/StMartha_DormOffice.jpg": "df46a017a69a3431e0255c76d2ff4286",
"assets/images/two/StMartha_Testing-Eval.jpg": "d25725ec48e4d0edb8bb7a990d706487",
"assets/NOTICES": "29da5079670cbb3124d5d890029a97d8",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "29002b267ad14f586ddcc3cd130924d1",
"/": "29002b267ad14f586ddcc3cd130924d1",
"main.dart.js": "8b98e25e9b3066ffbb4288e1dc803ead",
"manifest.json": "795e87aa16c26d26ef4f179011be6604",
"version.json": "3f072acdc2b754a4b54f9df4e2e7e55a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
