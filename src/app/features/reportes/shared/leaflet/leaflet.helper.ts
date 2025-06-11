import * as L from 'leaflet'

export class leafletHelper {
    static alertIcon = L.icon({
        iconUrl: '/icons/alert.png',
        iconSize: [50, 54],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    })
}
