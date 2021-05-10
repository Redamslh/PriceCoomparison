import {ViewChild, Component, OnInit, ElementRef,Renderer2, OnDestroy,NgZone } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';
import { HttpClient } from '@angular/common/http';
import {GMapModule} from 'primeng/gmap';
import {MessageService} from 'primeng/api';
import { ɵmarkDirty as markDirty } from '@angular/core';
import { Layer } from 'ng-esri-map';
import { map } from 'rxjs-compat/operator/map';
declare var google: any;
@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit{

zoom: number = 14;
  lat: number = 44.445248;
  lng: number = 26.099672;
  styles: any[] = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];
    data : Date = new Date();
    focus;
    focus1;
users :any ; 
opt: any;
public map;
overlays: any[];
options: any;
  constructor(private http:HttpClient) { }
  infoWindow: google.maps.InfoWindow;
  locations: any = [
  ];
  mapMarkers: any = [];

  ngOnInit(){  
    let pos= this.http.get("http://localhost:8080/position/getpos");
    pos.subscribe((data)=>{
      this.locations=data;
    console.log("------------------"+this.locations);
    });
    var markers = 
      {
        position: new google.maps.LatLng(40.73061, 73.935242),
        map: this.map,
        title: "Marker 1"
      };

        var mapProp = {
            center: new google.maps.LatLng(20.5937, 78.9629),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
            this.map = new google.maps.Map(document.getElementById("gmap"), mapProp);
            var centerControlDiv = document.createElement('div');   

            for (let i of this.locations){
              const tempMarker = new google.maps.Marker({position: i, map: this.map});
              tempMarker.addListener('click',((tempMarker, map, infoWindow) => {
              return () => {
              infoWindow.setContent('<p><b>Longitude</b> : ' + i[0] + '</p><p><b>Latitude</b> : ' + i[1] +'</p>');
              infoWindow.open(map, tempMarker);
              }
              })(tempMarker, this.map, this.infoWindow));
           this.mapMarkers.push(tempMarker);
          }

              //centerControlDiv.index = 1;
this.map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(centerControlDiv);
        let rp= this.http.get("http://localhost:8080/user/all");
        console.log("-------------------->" + rp);
        rp.subscribe((data)=>console.log(data));
  
          var body = document.getElementsByTagName('body')[0];
          body.classList.add('profile-page');
          var navbar = document.getElementsByTagName('nav')[0];
      }
      createMarker() {

        // list of hardcoded positions markers 
         var myLatLngList = {
             myLatLng : [{ lat: 37.76487, lng: -122.41948 }, { lat: 59.33555, lng: 18.029851 }]    
             };
            //iterate latLng and add markers 
           for(const data of myLatLngList.myLatLng){
             var marker = new google.maps.Marker({
                 position: data,
                 map: this.map,
                 title: 'markers'
             });
          }
     };
    };
          
