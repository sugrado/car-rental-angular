import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  car: Car;
  images: CarImage[]=[];
  apiUrl = "https://localhost:44350"
  dataLoaded = false;

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) 
  {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["id"]){
        this.getCarDetails(params["id"]);
        this.getCarImages(params["id"])
      }
    })
  }

  getCarDetails(id: number) {
    this.carService.getCarDetailById(id).subscribe((response) => {
      this.car = response.data;
      this.dataLoaded = true;
    });
  }

  getCarImages(id:number){
    this.carService.getImagesById(id).subscribe((response) => {
      this.images = response.data
      this.dataLoaded = true;
      console.log(this.images)
    })
  }
}
