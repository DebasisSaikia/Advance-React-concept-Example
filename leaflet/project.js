const map = L.map("map").setView([22.9074872, 79.07306671], 5);

// open street map url
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors-Debasis Saikia';

const tiles = L.tileLayer(tileUrl, { attribution });
// adding to map
tiles.addTo(map);

// generating markup
function generateList() {
  const ul = document.querySelector(".list");
  shopList.forEach((shop) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const a = document.createElement("a");
    const p = document.createElement("p");

    div.classList.add("shop_item");
    a.innerText = shop.properties.name;
    a.href = "#";
    p.innerText = shop.properties.address;

    // adding locate eventListener
    a.addEventListener('click',()=>{
        locateStore(shop)
    })

    div.appendChild(a);
    div.appendChild(p);
    li.appendChild(div);
    ul.appendChild(li);
  });
}

generateList();

// markups
function popUpContent(shop){
    return `
        <div>
        <h4>${shop.properties.name}</h4>
        <p>${shop.properties.address}</p>
        <div class="phone_no">
        <a href="tel:${shop.properties.phone}">${shop.properties.phone}</a>
        </div>
        </div>
    `;
}

function onEachFeature(feature, layer) {
  layer.bindPopup(popUpContent(feature), {
    closeButton: false,
    offset: L.point(0, -8),
  });
}

// icons
const icon = L.icon({
  iconUrl: "https://cdn.onlinewebfonts.com/svg/img_319799.png",
  iconSize: [30, 30],
});

const shopLayer = L.geoJSON(shopList, {
  onEachFeature: onEachFeature,
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon });
  },
});
shopLayer.addTo(map);

// locate shops
function locateStore(store){
map.flyTo([store.geometry.coordinates[1], store.geometry.coordinates[0]]);
}
