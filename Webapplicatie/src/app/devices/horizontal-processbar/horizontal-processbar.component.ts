import {Component, Input} from '@angular/core';
import {Device} from '../../model/device.model';

@Component({
selector: 'app-horizontal-processbar',
templateUrl: './horizontal-processbar.component.html',
styleUrls: ['./horizontal-processbar.component.css'],
})

export class HorizontalProcessbarComponent {
  dottes = 8;
  dottesWidth = 100 / this.dottes;

  @Input() device: Device;

}
