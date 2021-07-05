mapboxgl.accessToken = 'pk.eyJ1IjoiZWthbnNoMTYwMiIsImEiOiJja3ByYXo2YjMwM3V4MnZwbW8zamNiaXZ5In0.t-zGLJW5QoWI2vYvEEvYiw';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })
  
  function successLocation(position) {
    console.log(position);
    setMap([position.coords.longitude, position.coords.latitude]);
  }
  
  function errorLocation() {
    setMap([78.8718,21.7679]);
  }

  function setMap(center){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/ekansh1602/ckqqw9vc53pxe17mnmfzeh4dq',
        center: center,
        zoom: 16
    });

    const navControl = new mapboxgl.NavigationControl()
    map.addControl(navControl)

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      })
    
    map.addControl(directions, "top-left")
  }
