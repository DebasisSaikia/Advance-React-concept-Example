const map = L.map("map").setView([22.9074872, 79.07306671], 5);

// open street map url
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors-Debasis Saikia';

const tiles = L.tileLayer(tileUrl, { attribution });

// adding to map
tiles.addTo(map);

// adding layers to map
const CLayer = L.circle([26.524075, 93.963188], {
  radius: 20000,
  color: "coral",
  fillColor: "blue",
}); //stroke:false
CLayer.addTo(map);

// adding rectangle
const bounds = [
  [54.559322, -5.767822],
  [56.1210604, -3.02124],
];
const rectangle = L.rectangle(bounds);
rectangle.addTo(map);

// polygon
const Btringle = [
  [
    [25.774, -80.19],
    [18.466, -66.118],
    [32.321, -64.757],
  ],
];
const polygon = L.polygon(Btringle);
polygon.addTo(map);

// polyline
const latlngs = [
  [45.51, -122.68],
  [37.77, -122.43],
  [34.04, -118.2],
];
const polyline = L.polyline(latlngs);
polyline.addTo(map);

// adding marker to map

