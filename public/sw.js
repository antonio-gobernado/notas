const staticCacheName="site-static";
const assetss=[
'/',
//'/views/index.ejs',
//'/views/portada.ejs',
//'/assets/js/app.js',
'/images/download.jpg'

];


//install service
self.addEventListener('install',evt=>{
    //console.log('service worker has been installed')
    evt.waitUntil(
    caches.open(staticCacheName).then(cache=>{
        console.log("catching shell assests")
        cache.addAll(assetss);
    })
    );
});

//service activated
self.addEventListener('activate',evt=>{
    console.log("service worker activated")
});
// fetch event
self.addEventListener('fetch',evt=>{
  // console.log("fetch evet",evt)
   evt.respondWith(
       caches.match(evt.request).then(cacheRes=>{
           return cacheRes || fetch(evt.request);
       })
   );
});

// para limpiar la cache, no obstante se puede limpiar la cache manualmente yendo a Aplication dentro del isnpector
self.addEventListener('activate', (e) => {
    e.waitUntil(
      caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
          if(key !== cacheName) {
            return caches.delete(key);
          }
        }));
      })
    );
  });