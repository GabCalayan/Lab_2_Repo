//Adding a default public token from Mapbox 
mapboxgl.accessToken = 'pk.eyJ1IjoiaGVpc2VuemlsbGEiLCJhIjoiY2xjcXlmaHlqMGE5eTNwbjJsZDhxODhpMSJ9.Ib4qz6M3pZ7pBDGXJr8DiA'

//Adding map style 
const map = new mapboxgl.Map ({
    container: 'map',
    style: 'mapbox://styles/heisenzilla/cle0cuziq004g01qkf33v39lg',
    center: [-79.3832, 43.6532],
    zoom: 8,
});

//Adding GEOJSON URL direct file 
map.addSource ('Toronto', {
    type: 'geojson',
    data: 'https://raw.githubusercontent.com/GabCalayan/Lab_2_Repo/main/Neighbourhoods.geojson'

});

//Adding map layer 
map.addLayer ({
    'id': 'Toronto_Neighbourhood',
    'type': 'fill',
    'source': 'Toronto',
});
