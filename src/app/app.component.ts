import { Component } from '@angular/core';
import { View } from 'ol';
import { fromLonLat } from 'ol/proj';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'openlayer-angular';

  map!: Map;

  ngOnInit(): void {
    this.map = new Map({
      view: new View({
        center: fromLonLat([78.8718, 21.7679]),
        zoom: 4,
        constrainOnlyCenter: true,
      }),
      layers: [
        new TileLayer({ 
          source: new OSM({
            url:'http://mt{0-3}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
          }),
        }),
      ],
      target: 'ol-map'
    });
  }
}
