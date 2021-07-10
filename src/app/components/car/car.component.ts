import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  dataLoaded = false;
  brands: Brand[] = [];
  colors: Color[] = [];
  colorId: number = 0;
  brandId: number = 0;
  apiUrl = 'https://localhost:44350';

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private rentService: RentService,
    private brandService: BrandService,
    private colorService: ColorService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId'] && params['colorId']) {
        this.getCarsByBrandAndColor(params['brandId'], params['colorId']);
      } else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      } else if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      } else {
        this.getCars();
      }
    });
    this.getBrands();
    this.getColors();
    this.localStorageService.removeItem('MFP');
    this.localStorageService.removeItem('CustomerId');
    this.rentService.clearRentalInfoCache();
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrand(id: number) {
    this.carService.getCarsByBrand(id).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColor(id: number) {
    this.carService.getCarsByColor(id).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrandAndColor(brandId: number, colorId: number) {
    this.carService.getCarsByMultiId(brandId, colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  setSelectedColorId(colorId: number) {
    if (this.colorId == colorId) {
      return true;
    } else {
      return false;
    }
  }

  setSelectedBrandId(brandId: number) {
    if (this.brandId == brandId) {
      return true;
    } else {
      return false;
    }
  }
}
