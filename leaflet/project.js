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

    div.appendChild(a);
    div.appendChild(p);
    li.appendChild(div);
    ul.appendChild(li);
  });
}

generateList();


// markups
function onEachFeature(){

}

const shopLayer=L.geoJSON(shopList,{
    onEachFeature:onEachFeature,
    pointToLayer:function(feature,latlng){}
})
