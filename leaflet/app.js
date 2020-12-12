const map = L.map("map").setView([22.9074872, 79.07306671], 5);

// open street map url
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors Debasis Saikia';

const tiles = L.tileLayer(tileUrl, attribution);

// adding to map
tiles.addTo(map);

// adding layers to map
