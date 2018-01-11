/* find . -type f > FilesWithPaths.txt */
const version = 'v2';

self.addEventListener('install', function(event) {
    console.log('Installing service worker for DDD Scotland');
    event.waitUntil(
        caches.open(version).then(function(cache) {
          return cache.addAll([
            'api/sessions.json',
            'css/site.css',
            'css/spectre-icons.min.css',
            'css/spectre.min.css',
            'img/ddd-logo.png',
            'img/davidrankin.jpg',
            'img/donwibier.jpg',
            'img/filipw.jpg',
            'img/galiyawarrier.jpg',
            'img/garyfleming.jpg',
            'img/garypark.jpg',
            'img/heatherburns.jpg',
            'img/ismailmayat.jpg',
            'img/jamesmaciver.jpg',
            'img/joannaisabelleolszewska.jpg',
            'img/joestead.jpg',
            'img/jonathanchannon.jpg',
            'img/kevinsmith.jpg',
            'img/martingoodfellow.jpg',
            'img/mattellis.jpg',
            'img/matteoemili.jpg',
            'img/paulaikman.jpg',
            'img/petershaw.jpg',
            'img/robinminto.jpg',
            'img/stuartashworth.jpg',
            'img/placeholder.jpg',
            'index.html',
            'schedule-session.html',
            'schedule.html',
            'social.html'
          ])
          .catch(error => console.error('Failed to install service worker', error);
        })
      );
});

self.addEventListener('fetch', function(event) {
    console.log('Service worker processing fetch event', event);

    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});