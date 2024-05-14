function openHome() {
    window.location.href = "index.html";
}

function openEvents() {
    window.location.href = "events.html";
}

function openMenu() {
    window.location.href = "menu.html";
}

function openMembership() {
    window.location.href = "membership.html";
}

function openTrustees() {
    window.location.href = "trustees.html";
}

function openContact() {
    window.location.href = "contact.html";
}

// Initialize and add the map
let map;

async function initMap() {
  // The location of Steeleville Eagles
  const position = { lat: 38.00722, lng: -89.65966 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Steeleville Eagles
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Steeleville Eagles
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Steeleville Eagles",
  });
}

initMap();