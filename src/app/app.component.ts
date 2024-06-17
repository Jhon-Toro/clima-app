import { Component } from '@angular/core';
import { ClimaService } from './clima.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clima-app';
  lat = 6.0911;
  lng = -75.6357;
  constructor(private ClimaService:ClimaService){}
  selectedCity: any;
  cities = [
    { name: 'Caldas', lat: '6.2518', lng: '-75.5636'},
    { name: 'Medellín', lat: '6.0911', lng: '-75.6357'},
    { name: 'San Antonio de Prado', lat: '6.1839', lng: '-75.6573'},
    { name: 'Cali', lat: '3.4372', lng: '-76.5225'},
    { name: 'Jardín', lat: '5.599', lng: '-75.8198'},
    { name: 'Bogotá', lat: '4.6097', lng: '-74.0817'}
  ]

  weatherDetails:any
  ngOninit(){
    console.log('**')
    this.weatherDetails.getWeatherDetails(this.lat,this.lng).subscribe((res:any )=>{
      this.weatherDetails = res
    })
  }
  selectedCityChanged (){
    console.log("Click registrado ", this.selectedCity)
    this.lat = this.selectedCity.lat
    this.lng = this.selectedCity.lng

    this.ClimaService.getWeatherDetails(this.lat, this.lng).subscribe((res:any)=> {
      console.log({res})
      this.weatherDetails = res
    })
  }
}
