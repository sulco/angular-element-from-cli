import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button (click)="handleClick()">{{label}}</button>`,
  styleUrls: [
    `
    button {
      border: solid 3px;
      padding: 8px 10px;
      background: #bada55;
      font-size: 20px;
    }
    `
  ],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent {
  @Input() label = 'default label';
  @Output() action = new EventEmitter<number>();
  private clicksCt = 0;

  handleClick() {
    this.clicksCt++;
    this.action.emit(this.clicksCt);
  }
}
