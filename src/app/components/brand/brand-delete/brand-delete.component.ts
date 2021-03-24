import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-delete',
  templateUrl: './brand-delete.component.html',
  styleUrls: ['./brand-delete.component.css'],
})
export class BrandDeleteComponent implements OnInit {
  brandAddForm: FormGroup;
  brands: Brand[] = [];
  filterText = '';

  constructor(
    private brandService: BrandService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createBrandAddForm();
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  createBrandAddForm() {
    this.brandAddForm = this.formBuilder.group({
      brandName: ['', Validators.required],
    });
  }

  deleteBrand(brand: Brand) {
    this.brandService.deleteBrand(brand).subscribe((response) => {
      this.toastrService.success(response.message, 'Brand deleted');
    });
    setTimeout(() => {  window.location.reload(); }, 1000);
  }
}
