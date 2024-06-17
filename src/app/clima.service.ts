import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private http:HttpClient) { }

  
  getWeatherDetails(lat:any, lng:any){
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&lang=sp&appid=e8c05d42fa99e65de05c954c4e036c08`)
  }
  
}
