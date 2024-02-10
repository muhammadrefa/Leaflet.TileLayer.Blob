Leaflet.TileLayer.Blob
======================================

Leaflet plugin for viewing map tiles using Blob as tile source  
Derived from [Leaflet.TileLayer.Base64](https://github.com/bmcbride/Leaflet.TileLayer.Base64)

## How to use
Write a function that returns tile blob URL with coordinates as function argument
```javascript
function getTileBlobUrl(coords) {
    // get z, x, and y value
    const z = coords["z"];
    const x = coords["x"];
    const y = coords["y"];

    // ...
    // do something
    // ...
    
    // return blob URL
    return window.URL.createObjectURL(new Blob([tile_blob]));
}
```


Pass function as argument to tile layer constructor
```javascript
const map = L.map('map').setView([0, 0], 0);
const lyr = L.tileLayer.blob(getTileBlobUrl).addTo(map);
```
