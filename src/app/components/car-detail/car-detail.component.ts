import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  car: Car;
  carId: number;
  images: CarImage[] = [];
  apiUrl = 'https://localhost:44350';
  dataLoaded = false;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private localStorageService:LocalStorageService,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getCarDetails(params['id']);
        this.getCarImages(params['id']);
      }
    });
  }

  getCarDetails(id: number) {
    this.carService.getCarDetailById(id).subscribe((response) => {
      this.car = response.data;
      this.localStorageService.setItem("MFP", this.car.minFindexPoint.toString())
      this.carId = response.data.id;
      this.dataLoaded = true;
    });
  }

  getCarImages(id: number) {
    this.carService.getImagesById(id).subscribe((response) => {
      this.images = response.data;
      this.dataLoaded = true;
    });
  }

  backClicked() {
    this._location.back();
  }
}
