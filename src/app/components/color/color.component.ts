import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  currentColor: Color;
<<<<<<< HEAD
  colorForReset:Color={colorId:-1, colorName:""}
  dataLoaded = false;
  filterText = "";
=======
  colorForReset:Color={id:-1, name:""}
  dataLoaded = false;
>>>>>>> ddbf76170f500f304760d940b4de7fd8160c6f3a

  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentColor(color: Color) {
    this.currentColor = color;
  }

  resetCurrentColor() {
    this.setCurrentColor(this.colorForReset)
  }

  getCurrentColorClass(color: Color) {
    if (color == this.currentColor) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
