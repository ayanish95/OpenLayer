import { Component } from '@angular/core';
import { View } from 'ol';
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
        center: [10, 0],
        zoom: 4,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'ol-map'
    });
  }
}
