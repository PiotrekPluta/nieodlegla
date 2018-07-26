function initMap() {
  //map options

  let options = {};
  const mapStyles = [
    {"featureType": "poi.park", "stylers": [{"color": "#3ea967"}]},
    {"featureType": "water", "stylers": [{"color": "#d4ecff"}]}
  ];

  if ($('.feat-content').css('display') === 'block') {
    //Add your javascript for large screens here
    options = {
      center: {lat: 53.827132, lng: 18.6794054},
      zoom: 7,
      disableDefaultUI: true,
      styles: mapStyles
    }
  }

  else if ($(window).width() > 769 && $('.feat-content').css('display') === 'none') {
    //Add your javascript for large screens here
    options = {
      center: {lat: 53.827132, lng: 18.6794054},
      zoom: 7,
      disableDefaultUI: true,
      styles: mapStyles
    }
  }

  else if ($(window).width() > 480 && $('.feat-content').css('display') === 'none') {
    options = {
      center: {lat: 52.0646186, lng: 19.3225117},
      zoom: 5.8,
      disableDefaultUI: true,
      styles: mapStyles
    }
  }

  else if ($(window).width() > 200 && $('.feat-content').css('display') === 'none') {
    options = {
      center: {lat: 52.09, lng: 19.3225117},
      zoom: 5.6,
      disableDefaultUI: true,
      styles: mapStyles
    }
  }

  else if ($('.feat-content').css('display') === 'block') {
    options = {
      center: {lat: 52.09, lng: 19.3225117},
      zoom: 5.6,
      disableDefaultUI: true,
      styles: mapStyles
    }
  }

  //map options for feat-description pop-ups
  var optionsFeatPopup = {
    center: {lat: 52.09, lng: 19.3225117},
    zoom: 5.6,
    disableDefaultUI: true,
    styles: mapStyles
  };

  //map for a main page
  var map = new google.maps.Map(document.getElementById('map'), options);
  //map for 1st feat from main page

  //add maps for pop-ups (all popups have to be in index so they can be call out on marker click)
  // var mapWyczyn = new google.maps.Map(document.getElementById(''), optionsFeatPopup);

  var map_wyczyn1 = new google.maps.Map(document.getElementById('map_wyczyn1'), optionsFeatPopup);
  var map_wyczyn2 = new google.maps.Map(document.getElementById('map_wyczyn2'), optionsFeatPopup);
  var map_wyczyn3 = new google.maps.Map(document.getElementById('map_wyczyn3'), optionsFeatPopup);
  var map_wyczyn4 = new google.maps.Map(document.getElementById('map_wyczyn4'), optionsFeatPopup);
  var map_wyczyn5 = new google.maps.Map(document.getElementById('map_wyczyn5'), optionsFeatPopup);
  var map_wyczyn6 = new google.maps.Map(document.getElementById('map_wyczyn6'), optionsFeatPopup);
  var map_wyczyn7 = new google.maps.Map(document.getElementById('map_wyczyn7'), optionsFeatPopup);
  var map_wyczyn8 = new google.maps.Map(document.getElementById('map_wyczyn8'), optionsFeatPopup);
  var map_wyczyn9 = new google.maps.Map(document.getElementById('map_wyczyn9'), optionsFeatPopup);
  var map_wyczyn10 = new google.maps.Map(document.getElementById('map_wyczyn10'), optionsFeatPopup);
  var map_wyczyn11 = new google.maps.Map(document.getElementById('map_wyczyn11'), optionsFeatPopup);
  var map_wyczyn12 = new google.maps.Map(document.getElementById('map_wyczyn12'), optionsFeatPopup);
  var map_wyczyn13 = new google.maps.Map(document.getElementById('map_wyczyn13'), optionsFeatPopup);
  var map_wyczyn14 = new google.maps.Map(document.getElementById('map_wyczyn14'), optionsFeatPopup);
  var map_wyczyn15 = new google.maps.Map(document.getElementById('map_wyczyn15'), optionsFeatPopup);
  var map_wyczyn16 = new google.maps.Map(document.getElementById('map_wyczyn16'), optionsFeatPopup);
  var map_wyczyn17 = new google.maps.Map(document.getElementById('map_wyczyn17'), optionsFeatPopup);
  var map_wyczyn18 = new google.maps.Map(document.getElementById('map_wyczyn18'), optionsFeatPopup);
  var map_wyczyn19 = new google.maps.Map(document.getElementById('map_wyczyn19'), optionsFeatPopup);
  var map_wyczyn20 = new google.maps.Map(document.getElementById('map_wyczyn20'), optionsFeatPopup);
  var map_wyczyn21 = new google.maps.Map(document.getElementById('map_wyczyn21'), optionsFeatPopup);
  var map_wyczyn22 = new google.maps.Map(document.getElementById('map_wyczyn22'), optionsFeatPopup);
  var map_wyczyn23 = new google.maps.Map(document.getElementById('map_wyczyn23'), optionsFeatPopup);
  var map_wyczyn24 = new google.maps.Map(document.getElementById('map_wyczyn24'), optionsFeatPopup);
  var map_wyczyn25 = new google.maps.Map(document.getElementById('map_wyczyn25'), optionsFeatPopup);
  var map_wyczyn26 = new google.maps.Map(document.getElementById('map_wyczyn26'), optionsFeatPopup);
  var map_wyczyn27 = new google.maps.Map(document.getElementById('map_wyczyn27'), optionsFeatPopup);
  var map_wyczyn28 = new google.maps.Map(document.getElementById('map_wyczyn28'), optionsFeatPopup);
  var map_wyczyn29 = new google.maps.Map(document.getElementById('map_wyczyn29'), optionsFeatPopup);
  var map_wyczyn30 = new google.maps.Map(document.getElementById('map_wyczyn30'), optionsFeatPopup);
  var map_wyczyn31 = new google.maps.Map(document.getElementById('map_wyczyn31'), optionsFeatPopup);
  var map_wyczyn32 = new google.maps.Map(document.getElementById('map_wyczyn32'), optionsFeatPopup);
  var map_wyczyn33 = new google.maps.Map(document.getElementById('map_wyczyn33'), optionsFeatPopup);
  var map_wyczyn34 = new google.maps.Map(document.getElementById('map_wyczyn34'), optionsFeatPopup);
  var map_wyczyn35 = new google.maps.Map(document.getElementById('map_wyczyn35'), optionsFeatPopup);
  var map_wyczyn36 = new google.maps.Map(document.getElementById('map_wyczyn36'), optionsFeatPopup);
  var map_wyczyn37 = new google.maps.Map(document.getElementById('map_wyczyn37'), optionsFeatPopup);
  var map_wyczyn38 = new google.maps.Map(document.getElementById('map_wyczyn38'), optionsFeatPopup);
  var map_wyczyn39 = new google.maps.Map(document.getElementById('map_wyczyn39'), optionsFeatPopup);
  var map_wyczyn40 = new google.maps.Map(document.getElementById('map_wyczyn40'), optionsFeatPopup);
  var map_wyczyn41 = new google.maps.Map(document.getElementById('map_wyczyn41'), optionsFeatPopup);
  var map_wyczyn42 = new google.maps.Map(document.getElementById('map_wyczyn42'), optionsFeatPopup);
  var map_wyczyn43 = new google.maps.Map(document.getElementById('map_wyczyn43'), optionsFeatPopup);
  var map_wyczyn44 = new google.maps.Map(document.getElementById('map_wyczyn44'), optionsFeatPopup);
  var map_wyczyn45 = new google.maps.Map(document.getElementById('map_wyczyn45'), optionsFeatPopup);
  var map_wyczyn46 = new google.maps.Map(document.getElementById('map_wyczyn46'), optionsFeatPopup);
  var map_wyczyn47 = new google.maps.Map(document.getElementById('map_wyczyn47'), optionsFeatPopup);
  var map_wyczyn48 = new google.maps.Map(document.getElementById('map_wyczyn48'), optionsFeatPopup);
  var map_wyczyn49 = new google.maps.Map(document.getElementById('map_wyczyn49'), optionsFeatPopup);
  var map_wyczyn50 = new google.maps.Map(document.getElementById('map_wyczyn50'), optionsFeatPopup);
  var map_wyczyn51 = new google.maps.Map(document.getElementById('map_wyczyn51'), optionsFeatPopup);
  var map_wyczyn52 = new google.maps.Map(document.getElementById('map_wyczyn52'), optionsFeatPopup);
  var map_wyczyn53 = new google.maps.Map(document.getElementById('map_wyczyn53'), optionsFeatPopup);
  var map_wyczyn54 = new google.maps.Map(document.getElementById('map_wyczyn54'), optionsFeatPopup);
  var map_wyczyn55 = new google.maps.Map(document.getElementById('map_wyczyn55'), optionsFeatPopup);
  var map_wyczyn56 = new google.maps.Map(document.getElementById('map_wyczyn56'), optionsFeatPopup);
  var map_wyczyn57 = new google.maps.Map(document.getElementById('map_wyczyn57'), optionsFeatPopup);
  var map_wyczyn58 = new google.maps.Map(document.getElementById('map_wyczyn58'), optionsFeatPopup);
  var map_wyczyn59 = new google.maps.Map(document.getElementById('map_wyczyn59'), optionsFeatPopup);
  var map_wyczyn60 = new google.maps.Map(document.getElementById('map_wyczyn60'), optionsFeatPopup);
  var map_wyczyn61 = new google.maps.Map(document.getElementById('map_wyczyn61'), optionsFeatPopup);
  var map_wyczyn62 = new google.maps.Map(document.getElementById('map_wyczyn62'), optionsFeatPopup);
  var map_wyczyn63 = new google.maps.Map(document.getElementById('map_wyczyn63'), optionsFeatPopup);
  var map_wyczyn64 = new google.maps.Map(document.getElementById('map_wyczyn64'), optionsFeatPopup);
  var map_wyczyn65 = new google.maps.Map(document.getElementById('map_wyczyn65'), optionsFeatPopup);
  var map_wyczyn66 = new google.maps.Map(document.getElementById('map_wyczyn66'), optionsFeatPopup);
  var map_wyczyn67 = new google.maps.Map(document.getElementById('map_wyczyn67'), optionsFeatPopup);
  var map_wyczyn68 = new google.maps.Map(document.getElementById('map_wyczyn68'), optionsFeatPopup);
  var map_wyczyn69 = new google.maps.Map(document.getElementById('map_wyczyn69'), optionsFeatPopup);
  var map_wyczyn70 = new google.maps.Map(document.getElementById('map_wyczyn70'), optionsFeatPopup);
  var map_wyczyn71 = new google.maps.Map(document.getElementById('map_wyczyn71'), optionsFeatPopup);
  var map_wyczyn72 = new google.maps.Map(document.getElementById('map_wyczyn72'), optionsFeatPopup);
  var map_wyczyn73 = new google.maps.Map(document.getElementById('map_wyczyn73'), optionsFeatPopup);
  var map_wyczyn74 = new google.maps.Map(document.getElementById('map_wyczyn74'), optionsFeatPopup);
  var map_wyczyn75 = new google.maps.Map(document.getElementById('map_wyczyn75'), optionsFeatPopup);
  var map_wyczyn76 = new google.maps.Map(document.getElementById('map_wyczyn76'), optionsFeatPopup);
  var map_wyczyn77 = new google.maps.Map(document.getElementById('map_wyczyn77'), optionsFeatPopup);
  var map_wyczyn78 = new google.maps.Map(document.getElementById('map_wyczyn78'), optionsFeatPopup);
  var map_wyczyn79 = new google.maps.Map(document.getElementById('map_wyczyn79'), optionsFeatPopup);
  var map_wyczyn80 = new google.maps.Map(document.getElementById('map_wyczyn80'), optionsFeatPopup);
  var map_wyczyn81 = new google.maps.Map(document.getElementById('map_wyczyn81'), optionsFeatPopup);
  var map_wyczyn82 = new google.maps.Map(document.getElementById('map_wyczyn82'), optionsFeatPopup);
  var map_wyczyn83 = new google.maps.Map(document.getElementById('map_wyczyn83'), optionsFeatPopup);
  var map_wyczyn84 = new google.maps.Map(document.getElementById('map_wyczyn84'), optionsFeatPopup);
  var map_wyczyn85 = new google.maps.Map(document.getElementById('map_wyczyn85'), optionsFeatPopup);
  var map_wyczyn86 = new google.maps.Map(document.getElementById('map_wyczyn86'), optionsFeatPopup);
  var map_wyczyn87 = new google.maps.Map(document.getElementById('map_wyczyn87'), optionsFeatPopup);
  var map_wyczyn88 = new google.maps.Map(document.getElementById('map_wyczyn88'), optionsFeatPopup);
  var map_wyczyn89 = new google.maps.Map(document.getElementById('map_wyczyn89'), optionsFeatPopup);
  var map_wyczyn90 = new google.maps.Map(document.getElementById('map_wyczyn90'), optionsFeatPopup);
  var map_wyczyn91 = new google.maps.Map(document.getElementById('map_wyczyn91'), optionsFeatPopup);
  var map_wyczyn92 = new google.maps.Map(document.getElementById('map_wyczyn92'), optionsFeatPopup);
  var map_wyczyn93 = new google.maps.Map(document.getElementById('map_wyczyn93'), optionsFeatPopup);
  var map_wyczyn94 = new google.maps.Map(document.getElementById('map_wyczyn94'), optionsFeatPopup);
  var map_wyczyn95 = new google.maps.Map(document.getElementById('map_wyczyn95'), optionsFeatPopup);
  var map_wyczyn96 = new google.maps.Map(document.getElementById('map_wyczyn96'), optionsFeatPopup);
  var map_wyczyn97 = new google.maps.Map(document.getElementById('map_wyczyn97'), optionsFeatPopup);

  //Adding markers to main page - each marker has function to call out the pop-

  // function addMarkerMainPage (props) {
  //
  //   var marker = new google.maps.Marker({position: props.coords, map: map,});
  //
  //   if (props.iconImage) {
  //     marker.setIcon(props.iconImage);
  //   }
  //
  //   google.maps.event.addListener(marker, "click", function () {
  //     document.querySelector('.bg-modal').style.display = 'block';
  //     document.querySelector('').style.display = 'block';
  //     document.querySelector('').style.position = 'fixed';
  //   });
  // }
  //
  // function addMarkerPopup (props) {
  //   var marker = new google.maps.Marker({position: props.coords, map: mapWyczyn});
  //   if (props.iconImage) {
  //     marker.setIcon(props.iconImage);
  //   }
  // }

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_1
  //marker for main page
  addMarker_w1_main({
    coords: {lat: 51.1749981, lng: 20.749157},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w1_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn1_content').style.display = 'block';
      document.querySelector('#wyczyn1_content').style.position = 'fixed';
    });
  }
  //Marker for pop-up
  addMarker_w1({
    coords: {lat: 51.1749981, lng: 20.749157},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w1(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn1,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  }

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_2
  //marker for main page
  addMarker_w2_main({
    coords: {lat: 49.285541, lng: 19.9885733},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w2_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn2_content').style.display = 'block';
      document.querySelector('#wyczyn2_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w2({
    coords: {lat: 49.285541, lng: 19.9885733},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w2(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn2,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_3
  //marker for main page
  addMarker_w3_main({
    coords: {lat: 53.8666571, lng: 22.9939883},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w3_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn3_content').style.display = 'block';
      document.querySelector('#wyczyn3_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w3({
    coords: {lat: 53.8666571, lng: 22.9939883},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w3(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn3,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_4
  //marker for main page
  addMarker_w4_main({
    coords: {lat: 50.0347937, lng: 19.9096777},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w4_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn4_content').style.display = 'block';
      document.querySelector('#wyczyn4_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w4({
    coords: {lat: 50.0347937, lng: 19.9096777},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w4(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn4,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_5
  //marker for main page
  addMarker_w5_main({
    coords: {lat: 53.4193096, lng: 14.548524},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w5_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn5_content').style.display = 'block';
      document.querySelector('#wyczyn5_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w5({
    coords: {lat: 53.4193096, lng: 14.548524},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w5(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn5,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_6
  //marker for main page
  addMarker_w6_main({
    coords: {lat: 51.2093459, lng: 19.3907827},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w6_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn6_content').style.display = 'block';
      document.querySelector('#wyczyn6_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w6({
    coords: {lat: 51.2093459, lng: 19.3907827},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w6(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn6,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_7
  //marker for main page
  addMarker_w7_main({
    coords: {lat: 51.2456946, lng: 19.2535775},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w7_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn7_content').style.display = 'block';
      document.querySelector('#wyczyn7_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w7({
    coords: {lat: 51.2456946, lng: 19.2535775},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w7(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn7,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_8
  //marker for main page
  addMarker_w8_main({
    coords: {lat: 53.52811, lng: 16.5703644},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w8_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn8_content').style.display = 'block';
      document.querySelector('#wyczyn8_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w8({
    coords: {lat: 53.52811, lng: 16.5703644},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w8(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn8,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_8 bis
  //marker for main page
  addMarker_w801_main({
    coords: {lat: 52.5166338, lng: 21.4514252},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w801_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn8_content').style.display = 'block';
      document.querySelector('#wyczyn8_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w801({
    coords: {lat: 52.5166338, lng: 21.4514252},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w801(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn8,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_9
  //marker for main page
  addMarker_w9_main({
    coords: {lat: 51.5235848, lng: 23.5554526},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w9_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn9_content').style.display = 'block';
      document.querySelector('#wyczyn9_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w9({
    coords: {lat: 51.5235848, lng: 23.5554526},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w9(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn9,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_10
  //marker for main page
  addMarker_w10_main({
    coords: {lat: 50.2198012, lng: 19.1212018},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w10_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn10_content').style.display = 'block';
      document.querySelector('#wyczyn10_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w10({
    coords: {lat: 50.2198012, lng: 19.1212018},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w10(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn10,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_11
  //marker for main page
  addMarker_w11_main({
    coords: {lat: 54.2336451, lng: 19.2176015},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w11_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn11_content').style.display = 'block';
      document.querySelector('#wyczyn11_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w11({
    coords: {lat: 54.2336451, lng: 19.2176015},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w11(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn11,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_12
  //marker for main page
  addMarker_w12_main({
    coords: {lat: 49.2936607, lng: 19.9522104},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w12_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn12_content').style.display = 'block';
      document.querySelector('#wyczyn12_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w12({
    coords: {lat: 49.2936607, lng: 19.9522104},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w12(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn12,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_13
  //marker for main page
  addMarker_w13_main({
    coords: {lat: 54.4470062, lng: 18.5713076},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w13_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn13_content').style.display = 'block';
      document.querySelector('#wyczyn13_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w13({
    coords: {lat: 54.4470062, lng: 18.5713076},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w13(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn13,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_14
  //marker for main page
  addMarker_w14_main({
    coords: {lat: 50.3620476, lng: 19.4428066},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w14_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn14_content').style.display = 'block';
      document.querySelector('#wyczyn14_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w14({
    coords: {lat: 50.3620476, lng: 19.4428066},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w14(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn14,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_15
  //marker for main page
  addMarker_w15_main({
    coords: {lat: 52.703156, lng: 21.0483585},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w15_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn15_content').style.display = 'block';
      document.querySelector('#wyczyn15_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w15({
    coords: {lat: 52.703156, lng: 21.0483585},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w15(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn15,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_16
  //marker for main page
  addMarker_w16_main({
    coords: {lat: 49.8841718, lng: 21.5155957},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w16_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn16_content').style.display = 'block';
      document.querySelector('#wyczyn16_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w16({
    coords: {lat: 49.8841718, lng: 21.5155957},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w16(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn16,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_17
  //marker for main page
  addMarker_w17_main({
    coords: {lat: 54.3706336, lng: 20.5877029},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w17_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn17_content').style.display = 'block';
      document.querySelector('#wyczyn17_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w17({
    coords: {lat: 54.3706336, lng: 20.5877029},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w17(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn17,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_18
  //marker for main page
  addMarker_w18_main({
    coords: {lat: 54.3060186, lng: 20.683152},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w18_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn18_content').style.display = 'block';
      document.querySelector('#wyczyn18_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w18({
    coords: {lat: 54.3060186, lng: 20.683152},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w18(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn18,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_19
  //marker for main page
  addMarker_w19_main({
    coords: {lat: 54.8349015, lng: 18.3005727},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w19_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn19_content').style.display = 'block';
      document.querySelector('#wyczyn19_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w19({
    coords: {lat: 54.8349015, lng: 18.3005727},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w19(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn19,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_20
  //marker for main page
  addMarker_w20_main({
    coords: {lat: 49.002472, lng: 22.8298418},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w20_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn20_content').style.display = 'block';
      document.querySelector('#wyczyn20_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w20({
    coords: {lat: 49.002472, lng: 22.8298418},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w20(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn20,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_21
  //marker for main page
  addMarker_w21_main({
    coords: {lat: 53.0881298, lng: 19.7006663},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w21_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn21_content').style.display = 'block';
      document.querySelector('#wyczyn21_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w21({
    coords: {lat: 53.0881298, lng: 19.7006663},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w21(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn21,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_22
  //marker for main page
  addMarker_w22_main({
    coords: {lat: 52.8515902, lng: 14.1281456},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w22_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn22_content').style.display = 'block';
      document.querySelector('#wyczyn22_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w22({
    coords: {lat: 52.8515902, lng: 14.1281456},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w22(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn22,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_23
  //marker for main page
  addMarker_w23_main({
    coords: {lat: 50.8527829, lng: 24.0789761},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w23_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn23_content').style.display = 'block';
      document.querySelector('#wyczyn23_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w23({
    coords: {lat: 50.8527829, lng: 24.0789761},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w23(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn23,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_24
  //marker for main page
  addMarker_w24_main({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w24_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn24_content').style.display = 'block';
      document.querySelector('#wyczyn24_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w24({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w24(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn24,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_25
  //marker for main page
  addMarker_w25_main({
    coords: {lat: 50.166665, lng: 18.6658234},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w25_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn25_content').style.display = 'block';
      document.querySelector('#wyczyn25_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w25({
    coords: {lat: 50.166665, lng: 18.6658234},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w25(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn25,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_26
  //marker for main page
  addMarker_w26_main({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w26_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn26_content').style.display = 'block';
      document.querySelector('#wyczyn26_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w26({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w26(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn26,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_27
  //marker for main page
  addMarker_w27_main({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w27_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn27_content').style.display = 'block';
      document.querySelector('#wyczyn27_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w27({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w27(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn27,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_28
  //marker for main page
  addMarker_w28_main({
    coords: {lat: 53.5156823, lng: 18.1107251},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w28_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn28_content').style.display = 'block';
      document.querySelector('#wyczyn28_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w28({
    coords: {lat: 53.5156823, lng: 18.1107251},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w28(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn28,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_29
  //marker for main page
  addMarker_w29_main({
    coords: {lat: 51.4353551, lng: 17.2464202},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w29_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn29_content').style.display = 'block';
      document.querySelector('#wyczyn29_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w29({
    coords: {lat: 51.4353551, lng: 17.2464202},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w29(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn29,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_30
  //marker for main page
  addMarker_w30_main({
    coords: {lat: 50.3060695, lng: 22.2651605},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w30_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn30_content').style.display = 'block';
      document.querySelector('#wyczyn30_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w30({
    coords: {lat: 50.3060695, lng: 22.2651605},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w30(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn30,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_31
  //marker for main page
  addMarker_w31_main({
    coords: {lat: 49.5937423, lng: 19.5290073},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w31_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn31_content').style.display = 'block';
      document.querySelector('#wyczyn31_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w31({
    coords: {lat: 49.5937423, lng: 19.5290073},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w31(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn31,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_32
  //marker for main page
  addMarker_w32_main({
    coords: {lat: 50.3483043, lng: 20.6566535},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w32_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn32_content').style.display = 'block';
      document.querySelector('#wyczyn32_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w32({
    coords: {lat: 50.3483043, lng: 20.6566535},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w32(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn32,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_33
  //marker for main page
  addMarker_w33_main({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w33_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn33_content').style.display = 'block';
      document.querySelector('#wyczyn33_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w33({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w33(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn33,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_34
  //marker for main page
  addMarker_w34_main({
    coords: {lat: 51.4106252, lng: 21.9606346},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w34_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn34_content').style.display = 'block';
      document.querySelector('#wyczyn34_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w34({
    coords: {lat: 51.4106252, lng: 21.9606346},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w34(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn34,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_35
  //marker for main page
  addMarker_w35_main({
    coords: {lat: 50.6928438, lng: 22.9724656},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w35_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn35_content').style.display = 'block';
      document.querySelector('#wyczyn35_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w35({
    coords: {lat: 50.6928438, lng: 22.9724656},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w35(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn35,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_36
  //marker for main page
  addMarker_w36_main({
    coords: {lat: 54.263458, lng: 22.7757606},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w36_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn36_content').style.display = 'block';
      document.querySelector('#wyczyn36_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w36({
    coords: {lat: 54.263458, lng: 22.7757606},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w36(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn36,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_37
  //marker for main page
  addMarker_w37_main({
    coords: {lat: 50.2454899, lng: 21.7738203},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w37_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn37_content').style.display = 'block';
      document.querySelector('#wyczyn37_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w37({
    coords: {lat: 50.2454899, lng: 21.7738203},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w37(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn37,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_38
  //marker for main page
  addMarker_w38_main({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w38_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn38_content').style.display = 'block';
      document.querySelector('#wyczyn38_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w38({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w38(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn38,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_39
  //marker for main page
  addMarker_w39_main({
    coords: {lat: 53.4263909, lng: 14.5433613},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w39_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn39_content').style.display = 'block';
      document.querySelector('#wyczyn39_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w39({
    coords: {lat: 53.4263909, lng: 14.5433613},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w39(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn39,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_40
  //marker for main page
  addMarker_w40_main({
    coords: {lat: 51.1689757, lng: 15.2117285},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w40_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn40_content').style.display = 'block';
      document.querySelector('#wyczyn40_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w40({
    coords: {lat: 51.1689757, lng: 15.2117285},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w40(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn40,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_41
  //marker for main page
  addMarker_w41_main({
    coords: {lat: 50.8647292, lng: 16.6903392},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w41_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn41_content').style.display = 'block';
      document.querySelector('#wyczyn41_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w41({
    coords: {lat: 50.8647292, lng: 16.6903392},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w41(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn41,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_42
  //marker for main page
  addMarker_w42_main({
    coords: {lat: 51.0559913, lng: 15.7611188},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w42_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn42_content').style.display = 'block';
      document.querySelector('#wyczyn42_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w42({
    coords: {lat: 51.0559913, lng: 15.7611188},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w42(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn42,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_43
  //marker for main page
  addMarker_w43_main({
    coords: {lat: 53.214163, lng: 14.4735418},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w43_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn43_content').style.display = 'block';
      document.querySelector('#wyczyn43_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w43({
    coords: {lat: 53.214163, lng: 14.4735418},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w43(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn43,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_44
  //marker for main page
  addMarker_w44_main({
    coords: {lat: 54.2177802, lng: 17.8378629},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w44_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn44_content').style.display = 'block';
      document.querySelector('#wyczyn44_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w44({
    coords: {lat: 54.2177802, lng: 17.8378629},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w44(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn44,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_45
  //marker for main page
  addMarker_w45_main({
    coords: {lat: 53.55, lng: 19.9667},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w45_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn45_content').style.display = 'block';
      document.querySelector('#wyczyn45_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w45({
    coords: {lat: 53.55, lng: 19.9667},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w45(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn45,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_46
  //marker for main page
  addMarker_w46_main({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w46_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn46_content').style.display = 'block';
      document.querySelector('#wyczyn46_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w46({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w46(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn46,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_47
  //marker for main page
  addMarker_w47_main({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w47_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn47_content').style.display = 'block';
      document.querySelector('#wyczyn47_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w47({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w47(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn47,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_48
  //marker for main page
  addMarker_w48_main({
    coords: {lat: 53.9773197, lng: 16.8057619},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w48_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn48_content').style.display = 'block';
      document.querySelector('#wyczyn48_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w48({
    coords: {lat: 53.9773197, lng: 16.8057619},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w48(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn48,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_49
  //marker for main page
  addMarker_w49_main({
    coords: {lat: 52.4117264, lng: 18.8390728},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w49_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn49_content').style.display = 'block';
      document.querySelector('#wyczyn49_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w49({
    coords: {lat: 52.4117264, lng: 18.8390728},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w49(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn49,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_50
  //marker for main page
  addMarker_w50_main({
    coords: {lat: 50.5582976, lng: 21.6373614},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w50_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn50_content').style.display = 'block';
      document.querySelector('#wyczyn50_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w50({
    coords: {lat: 50.5582976, lng: 21.6373614},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w50(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn50,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_51
  //marker for main page
  addMarker_w51_main({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w51_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn51_content').style.display = 'block';
      document.querySelector('#wyczyn51_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w51({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w51(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn51,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_52
  //marker for main page
  addMarker_w52_main({
    coords: {lat: 52.8714, lng: 17.5328113},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w52_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn52_content').style.display = 'block';
      document.querySelector('#wyczyn52_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w52({
    coords: {lat: 52.8714, lng: 17.5328113},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w52(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn52,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_53
  //marker for main page
  addMarker_w53_main({
    coords: {lat: 53.4798473, lng: 22.4272448},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w53_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn53_content').style.display = 'block';
      document.querySelector('#wyczyn53_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w53({
    coords: {lat: 53.4798473, lng: 22.4272448},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w53(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn53,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_54
  //marker for main page
  addMarker_w54_main({
    coords: {lat: 50.4977328, lng: 23.4357954},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w54_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn54_content').style.display = 'block';
      document.querySelector('#wyczyn54_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w54({
    coords: {lat: 50.4977328, lng: 23.4357954},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w54(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn54,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_54
  //marker for main page
  addMarker_w54_main({
    coords: {lat: 50.4977328, lng: 23.4357954},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w54_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn54_content').style.display = 'block';
      document.querySelector('#wyczyn54_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w54({
    coords: {lat: 50.4977328, lng: 23.4357954},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w54(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn54,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_55
  //marker for main page
  addMarker_w55_main({
    coords: {lat: 49.2675053, lng: 19.7754914},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w55_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn55_content').style.display = 'block';
      document.querySelector('#wyczyn55_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w55({
    coords: {lat: 49.2675053, lng: 19.7754914},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w55(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn55,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_56
  //marker for main page
  addMarker_w56_main({
    coords: {lat: 51.9187578, lng: 18.7828993},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w56_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn56_content').style.display = 'block';
      document.querySelector('#wyczyn56_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w56({
    coords: {lat: 51.9187578, lng: 18.7828993},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w56(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn56,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_57
  //marker for main page
  addMarker_w57_main({
    coords: {lat: 50.0540495, lng: 19.9332236},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w57_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn57_content').style.display = 'block';
      document.querySelector('#wyczyn57_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w57({
    coords: {lat: 50.0540495, lng: 19.9332236},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w57(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn57,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_58
  //marker for main page
  addMarker_w58_main({
    coords: {lat: 50.0637135, lng: 19.9558993},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w58_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn58_content').style.display = 'block';
      document.querySelector('#wyczyn58_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w58({
    coords: {lat: 50.0637135, lng: 19.9558993},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w58(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn58,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_59
  //marker for main page
  addMarker_w59_main({
    coords: {lat: 52.1143385, lng: 19.4236714},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w59_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn59_content').style.display = 'block';
      document.querySelector('#wyczyn59_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w59({
    coords: {lat: 52.1143385, lng: 19.4236714},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w59(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn59,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_60
  //marker for main page
  addMarker_w60_main({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w60_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn60_content').style.display = 'block';
      document.querySelector('#wyczyn60_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w60({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w60(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn60,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_61
  //marker for main page
  addMarker_w61_main({
    coords: {lat: 49.73554, lng: 21.263310000000047},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w61_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn61_content').style.display = 'block';
      document.querySelector('#wyczyn61_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w61({
    coords: {lat: 49.73554, lng: 21.263310000000047},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w61(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn61,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_62
  //marker for main page
  addMarker_w62_main({
    coords: {lat: 52.6913518, lng: 16.3710932},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w62_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn62_content').style.display = 'block';
      document.querySelector('#wyczyn62_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w62({
    coords: {lat: 52.6913518, lng: 16.3710932},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w62(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn62,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_63
  //marker for main page
  addMarker_w63_main({
    coords: {lat: 53.3479718, lng: 18.4196592},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w63_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn63_content').style.display = 'block';
      document.querySelector('#wyczyn63_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w63({
    coords: {lat: 53.3479718, lng: 18.4196592},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w63(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn63,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_64
  //marker for main page
  addMarker_w64_main({
    coords: {lat: 50.1271245, lng: 18.9382892},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w64_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn64_content').style.display = 'block';
      document.querySelector('#wyczyn64_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w64({
    coords: {lat: 50.1271245, lng: 18.9382892},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w64(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn64,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_65
  //marker for main page
  addMarker_w65_main({
    coords: {lat: 53.687928, lng: 20.500425},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w65_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn65_content').style.display = 'block';
      document.querySelector('#wyczyn65_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w65({
    coords: {lat: 53.687928, lng: 20.500425},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w65(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn65,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_66
  //marker for main page
  addMarker_w66_main({
    coords: {lat: 52.1326674, lng: 21.0392388},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w66_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn66_content').style.display = 'block';
      document.querySelector('#wyczyn66_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w66({
    coords: {lat: 52.1326674, lng: 21.0392388},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w66(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn66,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_67
  //marker for main page
  addMarker_w67_main({
    coords: {lat: 52.8397304, lng: 18.8478467},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w67_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn67_content').style.display = 'block';
      document.querySelector('#wyczyn67_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w67({
    coords: {lat: 52.8397304, lng: 18.8478467},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w67(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn67,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_68
  //marker for main page
  addMarker_w68_main({
    coords: {lat: 49.7511886, lng: 18.6234958},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w68_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn68_content').style.display = 'block';
      document.querySelector('#wyczyn68_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w68({
    coords: {lat: 49.7511886, lng: 18.6234958},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w68(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn68,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_69
  //marker for main page
  addMarker_w69_main({
    coords: {lat: 53.2145476, lng: 16.4948471},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w69_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn69_content').style.display = 'block';
      document.querySelector('#wyczyn69_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w69({
    coords: {lat: 53.2145476, lng: 16.4948471},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w69(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn69,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_70
  //marker for main page
  addMarker_w70_main({
    coords: {lat: 51.0616286, lng: 17.1656501},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w70_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn70_content').style.display = 'block';
      document.querySelector('#wyczyn70_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w70({
    coords: {lat: 51.0616286, lng: 17.1656501},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w70(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn70,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_71
  //marker for main page
  addMarker_w71_main({
    coords: {lat: 51.947996, lng: 21.5819708},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w71_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn71_content').style.display = 'block';
      document.querySelector('#wyczyn71_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w71({
    coords: {lat: 51.947996, lng: 21.5819708},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w71(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn71,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_72
  //marker for main page
  addMarker_w72_main({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w72_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn72_content').style.display = 'block';
      document.querySelector('#wyczyn72_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w72({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w72(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn72,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_73
  //marker for main page
  addMarker_w73_main({
    coords: {lat: 52.349306, lng: 14.560361},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w73_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn73_content').style.display = 'block';
      document.querySelector('#wyczyn73_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w73({
    coords: {lat: 52.349306, lng: 14.560361},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w73(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn73,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_74
  //marker for main page
  addMarker_w74_main({
    coords: {lat: 52.797778, lng: 17.749722},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w74_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn74_content').style.display = 'block';
      document.querySelector('#wyczyn74_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w74({
    coords: {lat: 52.797778, lng: 17.749722},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w74(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn74,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_75
  //marker for main page
  addMarker_w75_main({
    coords: {lat: 52.197778, lng: 17.660278},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w75_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn75_content').style.display = 'block';
      document.querySelector('#wyczyn75_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w75({
    coords: {lat: 52.197778, lng: 17.660278},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w75(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn75,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_76
  //marker for main page
  addMarker_w76_main({
    coords: {lat: 52.031111, lng: 23.114167},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w76_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn76_content').style.display = 'block';
      document.querySelector('#wyczyn76_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w76({
    coords: {lat: 52.031111, lng: 23.114167},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w76(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn76,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_77
  //marker for main page
  addMarker_w77_main({
    coords: {lat: 51.740746, lng: 19.462660},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w77_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn77_content').style.display = 'block';
      document.querySelector('#wyczyn77_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w77({
    coords: {lat: 51.740746, lng: 19.462660},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w77(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn77,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_78
  //marker for main page
  addMarker_w78_main({
    coords: {lat: 51.027580, lng: 19.968358},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w78_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn78_content').style.display = 'block';
      document.querySelector('#wyczyn78_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w78({
    coords: {lat: 51.027580, lng: 19.968358},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w78(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn78,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_79
  //marker for main page
  addMarker_w79_main({
    coords: {lat: 51.488288, lng: 21.873285},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w79_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn79_content').style.display = 'block';
      document.querySelector('#wyczyn79_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w79({
    coords: {lat: 51.488288, lng: 21.873285},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w79(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn79,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_80
  //marker for main page
  addMarker_w80_main({
    coords: {lat: 49.6261, lng: 21.2829},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w80_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn80_content').style.display = 'block';
      document.querySelector('#wyczyn80_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w80({
    coords: {lat: 49.6261, lng: 21.2829},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w80(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn80,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_81
  //marker for main page
  addMarker_w81_main({
    coords: {lat: 51.799152, lng: 19.298691},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w81_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn81_content').style.display = 'block';
      document.querySelector('#wyczyn81_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w81({
    coords: {lat: 51.799152, lng: 19.298691},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w81(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn81,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_82
  //marker for main page
  addMarker_w82_main({
    coords: {lat: 50.5241, lng: 16.8745},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w82_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn82_content').style.display = 'block';
      document.querySelector('#wyczyn82_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w82({
    coords: {lat: 50.5241, lng: 16.8745},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w82(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn82,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_83
  //marker for main page
  addMarker_w83_main({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w83_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn83_content').style.display = 'block';
      document.querySelector('#wyczyn83_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w83({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w83(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn83,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_84
  //marker for main page
  addMarker_w84_main({
    coords: {lat: 50.4638, lng: 17.0051},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w84_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn84_content').style.display = 'block';
      document.querySelector('#wyczyn84_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w84({
    coords: {lat: 50.4638, lng: 17.0051},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w84(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn84,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_85
  //marker for main page
  addMarker_w85_main({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w85_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn85_content').style.display = 'block';
      document.querySelector('#wyczyn85_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w85({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w85(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn85,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_86
  //marker for main page
  addMarker_w86_main({
    coords: {lat: 52.0693, lng: 19.4798},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w86_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn86_content').style.display = 'block';
      document.querySelector('#wyczyn86_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w86({
    coords: {lat: 52.0693, lng: 19.4798},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w86(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn86,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_87
  //marker for main page
  addMarker_w87_main({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w87_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn87_content').style.display = 'block';
      document.querySelector('#wyczyn87_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w87({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w87(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn87,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_88
  //marker for main page
  addMarker_w88_main({
    coords: {lat: 49.647198, lng: 18.7129727},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w88_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn88_content').style.display = 'block';
      document.querySelector('#wyczyn88_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w88({
    coords: {lat: 49.647198, lng: 18.7129727},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w88(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn88,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_89
  //marker for main page
  addMarker_w89_main({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w89_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn89_content').style.display = 'block';
      document.querySelector('#wyczyn89_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w89({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w89(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn89,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_90
  //marker for main page
  addMarker_w90_main({
    coords: {lat: 52.02, lng: 21.3416},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w90_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn90_content').style.display = 'block';
      document.querySelector('#wyczyn90_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w90({
    coords: {lat: 52.02, lng: 21.3416},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w90(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn90,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_91
  //marker for main page
  addMarker_w91_main({
    coords: {lat: 49.6840871, lng: 22.6257876},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w91_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn91_content').style.display = 'block';
      document.querySelector('#wyczyn91_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w91({
    coords: {lat: 49.6840871, lng: 22.6257876},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w91(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn91,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_92
  //marker for main page
  addMarker_w92_main({
    coords: {lat: 54.6073, lng: 18.8034},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w92_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn92_content').style.display = 'block';
      document.querySelector('#wyczyn92_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w92({
    coords: {lat: 54.6073, lng: 18.8034},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w92(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn92,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_93
  //marker for main page
  addMarker_w93_main({
    coords: {lat: 52.283566, lng: 23.178689},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w93_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn93_content').style.display = 'block';
      document.querySelector('#wyczyn93_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w93({
    coords: {lat: 52.283566, lng: 23.178689},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w93(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn93,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_94
  //marker for main page
  addMarker_w94_main({
    coords: {lat: 52.2255, lng: 21.1088},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w94_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn94_content').style.display = 'block';
      document.querySelector('#wyczyn94_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w94({
    coords: {lat: 52.2255, lng: 21.1088},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w94(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn94,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_95
  //marker for main page
  addMarker_w95_main({
    coords: {lat: 52.29849, lng: 20.87502},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w95_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn95_content').style.display = 'block';
      document.querySelector('#wyczyn95_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w95({
    coords: {lat: 52.29849, lng: 20.87502},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w95(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn95,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_96
  //marker for main page
  addMarker_w96_main({
    coords: {lat: 50.9038652, lng: 15.7309372},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w96_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn96_content').style.display = 'block';
      document.querySelector('#wyczyn96_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w96({
    coords: {lat: 50.9038652, lng: 15.7309372},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w96(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn96,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Markers for WYCZYN_97
  //marker for main page
  addMarker_w97_main({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/marker.svg',
  });

  function addMarker_w97_main(props) {
    var marker = new google.maps.Marker({position: props.coords, map: map,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    google.maps.event.addListener(marker, "click", function () {
      document.querySelector('.bg-modal').style.display = 'block';
      document.querySelector('#wyczyn97_content').style.display = 'block';
      document.querySelector('#wyczyn97_content').style.position = 'fixed';
    });
  };
  //Marker for pop-up
  addMarker_w97({
    coords: {lat: 0, lng: 0},
    iconImage: 'http://nieodlegla.pl/files/pin.svg',
  });

  function addMarker_w97(props) {
    var marker = new google.maps.Marker(
        {position: props.coords, map: map_wyczyn97,});
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

}