import {Component, OnInit} from '@angular/core';
import {ImageService} from "../services/image.service";

@Component({
  selector: 'app-bright-contrast',
  templateUrl: './bright-contrast.component.html',
  styleUrls: ['./bright-contrast.component.css']
})
export class BrightContrastComponent implements OnInit {

  private contrast: any = 1;
  private brightness: any = 0;

  constructor(private imageService: ImageService) {
  }


  private brightContrast = () => {
    // change brighness and contrast

    this.imageService.context.clearRect(0, 0, this.imageService.canvas.width, this.imageService.canvas.height);
    this.imageService.context.putImageData(this.imageService.imageData, 0, 0);

  };

  ngOnInit() {
    // Uncomment the following
    // this.imageService.functions.brightContrast = this.brightContrast;
  }

}
