import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorHelper } from 'src/app/helpers/errorHelper';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-delete',
  templateUrl: './color-delete.component.html',
  styleUrls: ['./color-delete.component.css'],
})
export class ColorDeleteComponent implements OnInit {
  colorAddForm: FormGroup;
  colors: Color[] = [];
  filterText = '';

  constructor(
    private colorService: ColorService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createColorAddForm();
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  createColorAddForm() {
    this.colorAddForm = this.formBuilder.group({
      colorName: ['', Validators.required],
    });
  }

  deleteColor(color: Color) {
    this.colorService.deleteColor(color).subscribe(
      (response) => {
        this.toastrService.success(response.message, 'Color deleted');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },
      (responseError) => {
        this.toastrService.error(
          ErrorHelper.getMessage(responseError),
          'Error'
        );
      }
    );
  }
}
