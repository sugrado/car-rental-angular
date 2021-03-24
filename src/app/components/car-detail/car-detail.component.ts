import { ThisReceiver } from '@angular/compiler';
<<<<<<< HEAD
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Location} from '@angular/common';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> ddbf76170f500f304760d940b4de7fd8160c6f3a
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
<<<<<<< HEAD
  carId:number;
  images: CarImage[]=[];
  apiUrl = "https://localhost:44350"
  dataLoaded = false;
 

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute, private _location: Location) 
=======
  images: CarImage[]=[];
  apiUrl = "https://localhost:44350"
  dataLoaded = false;

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) 
>>>>>>> ddbf76170f500f304760d940b4de7fd8160c6f3a
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
<<<<<<< HEAD
      this.carId = response.data.id;
=======
>>>>>>> ddbf76170f500f304760d940b4de7fd8160c6f3a
      this.dataLoaded = true;
    });
  }

  getCarImages(id:number){
    this.carService.getImagesById(id).subscribe((response) => {
      this.images = response.data
      this.dataLoaded = true;
<<<<<<< HEAD
    })
  }

  backClicked() {
    this._location.back();
  }
=======
      console.log(this.images)
    })
  }
>>>>>>> ddbf76170f500f304760d940b4de7fd8160c6f3a
}
