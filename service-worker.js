"use strict";var precacheConfig=[["/glugpace/index.html","19958538e21f8e103a12d73db06694aa"],["/glugpace/static/css/main.031df80c.css","2bdfa9f5a16b4588307512427ba0f99b"],["/glugpace/static/js/main.3139b5ff.js","d1c60ccf04ebb7fa456458f25799f2fb"],["/glugpace/static/media/android-session.8799f36d.jpg","8799f36dd152fa72e308cdad7f3075be"],["/glugpace/static/media/bg.eb22f49e.png","eb22f49e90dbf7a88aebd398c7ef7230"],["/glugpace/static/media/bytestruck2015.3f32fbbd.jpg","3f32fbbda04c0c1471e211c7ea7c1729"],["/glugpace/static/media/chars.a3869264.png","a3869264d1902df5db7125c6a37bf26c"],["/glugpace/static/media/git-post.4f87a9e4.jpeg","4f87a9e45a26616efc90d558bc0eaceb"],["/glugpace/static/media/ignite16.ecf7b0d8.jpg","ecf7b0d84d9f1e15ea7c504b48115903"],["/glugpace/static/media/ignite19.f0c577ac.png","f0c577ace7e48ba84eabccca14d4a145"],["/glugpace/static/media/laravel-php.36032f37.jpg","36032f372c3eb9c8ed08fbddb861970d"],["/glugpace/static/media/logo.646313ff.png","646313ff15461da4cb84fb89a730b4fe"],["/glugpace/static/media/python-workshop.423a7f0a.jpg","423a7f0a7aa7c783909d27a6df7d4cc1"],["/glugpace/static/media/students.08113490.png","081134903c6f83c80e2a9e9e1804daa6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/glugpace/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});