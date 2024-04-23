import {Component, OnInit} from '@angular/core';
import {View, Map } from 'ol';
import {olExtended} from 'geoportal-extensions-openlayers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bug-import-olExtended';

  ngOnInit() {
    var map = new Map({
      target : "map",
      layers : [
        new olExtended.layer.GeoportalWMTS({
          layer : "GEOGRAPHICALGRIDSYSTEMS.MAPS"
        })
      ],
      view : new View({
        center : [288074.8449901076, 6247982.515792289],
        zoom : 8
      })
    });
  }
}
