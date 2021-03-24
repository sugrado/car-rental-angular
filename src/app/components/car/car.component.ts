import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
=======
>>>>>>> ddbf76170f500f304760d940b4de7fd8160c6f3a
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  dataLoaded = false;
  cars2: Car[];
  brands: Brand[] = [];
  colors: Color[] = [];
  colorId:number = 0;
  brandId:number = 0;

<<<<<<< HEAD
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private brandService: BrandService,
    private colorService: ColorService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId'] && params['colorId']) {
        this.getCarsByBrandAndColor(params['brandId'], params['colorId'])
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
=======
  constructor(private carService: CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getCarsByBrand(params["id"]);
      }
      else if(params["id"]){
        this.getCarsByColor(params["id"]);
      }
      else {
        this.getCars();
      }
    })
>>>>>>> ddbf76170f500f304760d940b4de7fd8160c6f3a
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

<<<<<<< HEAD
  getCarsByBrand(id: number) {
    this.carService.getCarsByBrand(id).subscribe((response) => {
=======
  getCarsByBrand(brandId:number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
>>>>>>> ddbf76170f500f304760d940b4de7fd8160c6f3a
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

<<<<<<< HEAD
  getCarsByColor(id: number) {
    this.carService.getCarsByColor(id).subscribe((response) => {
=======
  getCarsByColor(colorId:number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
>>>>>>> ddbf76170f500f304760d940b4de7fd8160c6f3a
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
<<<<<<< HEAD

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
=======
>>>>>>> ddbf76170f500f304760d940b4de7fd8160c6f3a
}
