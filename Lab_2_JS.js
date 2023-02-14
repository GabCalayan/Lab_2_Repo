//Adding a default public token from Mapbox 
mapboxgl.accessToken = 'pk.eyJ1IjoiaGVpc2VuemlsbGEiLCJhIjoiY2xjcXlmaHlqMGE5eTNwbjJsZDhxODhpMSJ9.Ib4qz6M3pZ7pBDGXJr8DiA'

//Adding map style 
const map = new mapboxgl.Map ({
    container: 'map',
    style: 'mapbox://styles/heisenzilla/cle3bwyyp000j01miidfecf9t',
    center: [-79.3832, 43.6532],
    zoom: 8,
});

//Adding a GEOJSON source 
map.addSource('Neighborhood', {
    type: 'geojson',
    data: 'https://gabcalayan.github.io/Lab_2_Repo/Neighbourhoods.geojson'
});

//Drawing the layer itself 
map.addLayer({
    id: 'Toronto_N',
    type: 'fill',
    source: 'Neigborhood',
    paint: {
        'fill-color': '#223b53'
    }
});