import {Injectable} from '@angular/core';
import {forEach} from '@angular/router/src/utils/collection';
import {AngularProfiler} from '@angular/platform-browser/src/browser/tools/common_tools';

@Injectable()
export class ImageService {

  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  image: HTMLImageElement = new Image();
  imageData: any;
  pixels: any;
  numPixels: number;
  functions: Object = {};

  constructor() {
  }

  setCanvas = (c) => {
    this.canvas = c;
    this.context = this.canvas.getContext('2d');
  };

  filetoCanvas = (fileElement) => {
    if (fileElement.target.files && fileElement.target.files[0]) {
      // create new FileReader object. Name it 'reader'
      const reader = new FileReader();
      // create eventlistener: When load event of 'reader' is complete
      reader.onload = function(e) {
        const img = new Image();
        img.addEventListener('load', function() {
          context.drawImage(img, 0.0);
        });
        img.src = e.target.result;
      };
      // set the src of this.image to file data and when data is loaded to this.image, call resetImage().
      // Use addEventListener instead of onload
      // some help: http://stackoverflow.com/questions/22255580/javascript-upload-image-file-and-draw-it-into-a-canvas

      // uncomment the following
      reader.readAsDataURL(fileElement.target.files[0]);
    }
  };

  resetImage = () => {
    // set canvas width and height to be the same as of image

    // use drawImage method to draw image to canvas

    // Uncomment the following
    // this.imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    // this.pixels = this.imageData.data;
    // this.numPixels = this.imageData.width * this.imageData.height;
  };

  applyFilters = () => {
    this.resetImage();

    for (let i in this.functions) {
      if (this.functions.hasOwnProperty(i)) {
        this.functions[i]();
      }
    }

  };
}
