function initMap() {

  // Constants:
  const markerIcon = 'http://nieodlegla.pl/files/marker.svg';
  const pinIcon = 'http://nieodlegla.pl/files/pin.svg';
  const mapStyles = [
    {"featureType": "poi.park", "stylers": [{"color": "#3ea967"}]},
    {"featureType": "water", "stylers": [{"color": "#d4ecff"}]}
  ];
  const optionsFeatPopup = {
    center: {lat: 52.09, lng: 19.3225117},
    zoom: 5.6,
    disableDefaultUI: true,
    styles: mapStyles
  };
  const mapsCoords = [
    {lat: 51.1749981, lng: 20.749157},
    {lat: 49.285541, lng: 19.9885733},
    {lat: 53.8666571, lng: 22.9939883},
    {lat: 50.0347937, lng: 19.9096777},
    {lat: 53.4193096, lng: 14.548524},
    {lat: 51.2093459, lng: 19.3907827},
    {lat: 51.2456946, lng: 19.2535775},
    {lat: 53.52811, lng: 16.5703644}, // wyczyn 8
    {lat: 52.5166338, lng: 21.4514252}, // wyczyn 8 bis
    {lat: 51.5235848, lng: 23.5554526},
    {lat: 50.2198012, lng: 19.1212018}, // wyczyn 10
    {lat: 54.2336451, lng: 19.2176015},
    {lat: 49.2936607, lng: 19.9522104},
    {lat: 54.4470062, lng: 18.5713076},
    {lat: 50.3620476, lng: 19.4428066},
    {lat: 52.703156, lng: 21.0483585},
    {lat: 49.8841718, lng: 21.5155957},
    {lat: 54.3706336, lng: 20.5877029},
    {lat: 54.3060186, lng: 20.683152},
    {lat: 54.8349015, lng: 18.3005727},
    {lat: 49.002472, lng: 22.8298418}, // wyczyn 20
    {lat: 53.0881298, lng: 19.7006663},
    {lat: 52.8515902, lng: 14.1281456},
    {lat: 50.8527829, lng: 24.0789761},
    {lat: 0, lng: 0},
    {lat: 50.166665, lng: 18.6658234},
    {lat: 0, lng: 0},
    {lat: 0, lng: 0},
    {lat: 53.5156823, lng: 18.1107251},
    {lat: 51.4353551, lng: 17.2464202},
    {lat: 50.3060695, lng: 22.2651605}, // wyczyn 30
    {lat: 49.5937423, lng: 19.5290073},
    {lat: 50.3483043, lng: 20.6566535},
    {lat: 0, lng: 0},
    {lat: 51.4106252, lng: 21.9606346},
    {lat: 50.6928438, lng: 22.9724656},
    {lat: 54.263458, lng: 22.7757606},
    {lat: 50.2454899, lng: 21.7738203},
    {lat: 0, lng: 0},
    {lat: 53.4263909, lng: 14.5433613},
    {lat: 51.1689757, lng: 15.2117285}, // wyczyn 40
    {lat: 50.8647292, lng: 16.6903392},
    {lat: 51.0559913, lng: 15.7611188},
    {lat: 53.214163, lng: 14.4735418},
    {lat: 54.2177802, lng: 17.8378629},
    {lat: 53.55, lng: 19.9667},
    {lat: 0, lng: 0},
    {lat: 0, lng: 0},
    {lat: 53.9773197, lng: 16.8057619},
    {lat: 52.4117264, lng: 18.8390728},
    {lat: 50.5582976, lng: 21.6373614}, // wyczyn 50
    {lat: 0, lng: 0},
    {lat: 52.8714, lng: 17.5328113},
    {lat: 53.4798473, lng: 22.4272448},
    {lat: 50.4977328, lng: 23.4357954},
    {lat: 49.2675053, lng: 19.7754914},
    {lat: 51.9187578, lng: 18.7828993},
    {lat: 50.0540495, lng: 19.9332236},
    {lat: 50.0637135, lng: 19.9558993},
    {lat: 52.1143385, lng: 19.4236714},
    {lat: 0, lng: 0}, // wyczyn 60
    {lat: 49.73554, lng: 21.263310000000047},
    {lat: 52.6913518, lng: 16.3710932},
    {lat: 53.3479718, lng: 18.4196592},
    {lat: 50.1271245, lng: 18.9382892},
    {lat: 53.687928, lng: 20.500425},
    {lat: 52.1326674, lng: 21.0392388},
    {lat: 52.8397304, lng: 18.8478467},
    {lat: 49.7511886, lng: 18.6234958},
    {lat: 53.2145476, lng: 16.4948471},
    {lat: 51.0616286, lng: 17.1656501}, // wyczyn 70
    {lat: 51.947996, lng: 21.5819708},
    {lat: 0, lng: 0},
    {lat: 52.349306, lng: 14.560361},
    {lat: 52.797778, lng: 17.749722},
    {lat: 52.197778, lng: 17.660278},
    {lat: 52.031111, lng: 23.114167},
    {lat: 51.740746, lng: 19.462660},
    {lat: 51.027580, lng: 19.968358},
    {lat: 51.488288, lng: 21.873285},
    {lat: 49.6261, lng: 21.2829}, // wyczyn 80
    {lat: 51.799152, lng: 19.298691},
    {lat: 50.5241, lng: 16.8745},
    {lat: 0, lng: 0},
    {lat: 50.4638, lng: 17.0051},
    {lat: 0, lng: 0},
    {lat: 52.0693, lng: 19.4798},
    {lat: 0, lng: 0},
    {lat: 49.647198, lng: 18.7129727},
    {lat: 0, lng: 0},
    {lat: 52.02, lng: 21.3416}, // wyczyn 90
    {lat: 49.6840871, lng: 22.6257876},
    {lat: 54.6073, lng: 18.8034},
    {lat: 52.283566, lng: 23.178689},
    {lat: 52.2255, lng: 21.1088},
    {lat: 52.29849, lng: 20.87502},
    {lat: 50.9038652, lng: 15.7309372},
    {lat: 0, lng: 0}, // wyczyn 97
  ];
  const featContent = $('.feat-content');
  const listOfMaps = document.querySelectorAll('.feat-map-block > div');
  const bgModal = document.querySelector('.bg-modal');

  //Maps' options depending on screen width:
  let options = {};

  if (featContent.css('display') === 'block') {
    //Add your javascript for large screens here
    options = {
      center: {lat: 53.827132, lng: 18.6794054},
      zoom: 7,
      disableDefaultUI: true,
      styles: mapStyles
    }
  }

  else if ($(window).width() > 769 && featContent.css('display') === 'none') {
    //Add your javascript for large screens here
    options = {
      center: {lat: 53.827132, lng: 18.6794054},
      zoom: 7,
      disableDefaultUI: true,
      styles: mapStyles
    }
  }

  else if ($(window).width() > 480 && featContent.css('display') === 'none') {
    options = {
      center: {lat: 52.0646186, lng: 19.3225117},
      zoom: 5.8,
      disableDefaultUI: true,
      styles: mapStyles
    }
  }

  else if ($(window).width() > 200 && featContent.css('display') === 'none') {
    options = {
      center: {lat: 52.09, lng: 19.3225117},
      zoom: 5.6,
      disableDefaultUI: true,
      styles: mapStyles
    }
  }

  else if (featContent.css('display') === 'block') {
    options = {
      center: {lat: 52.09, lng: 19.3225117},
      zoom: 5.6,
      disableDefaultUI: true,
      styles: mapStyles
    }
  }

  const map = new google.maps.Map(document.getElementById('map'), options);

  //Functions for generating maps and markers:
  function generateMapOnPopup(mapId) {
    return new google.maps.Map(document.getElementById(mapId), optionsFeatPopup);
  }

  function addMarkersOnMainPage(coords, iconLarge, iconSmall, index) {
    const marker = new google.maps.Marker({position: coords, map: map});

    if (iconLarge) {
      marker.setIcon(iconLarge);
    }

    google.maps.event.addListener(marker, "click", function () {
      bgModal.style.display = 'block';
      featContent[index].style.display = 'block';
      featContent[index].style.position = 'fixed';
      addMarkerOnPopup(coords, iconSmall, index);
    });

  }

  function addMarkerOnPopup(coords, icon, index) {
    const marker = new google.maps.Marker(
        {position: coords, map: generateMapOnPopup(listOfMaps[index].id)});

    if (icon) {
      marker.setIcon(icon);
    }
  }

  mapsCoords.forEach((mapCoords, index) => {
    addMarkersOnMainPage(mapCoords, markerIcon, pinIcon, index);
  });

}