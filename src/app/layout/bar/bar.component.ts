import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  @Output() bar = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.bar.next(`Subject at ${new Date()}`);
    }, 2000);
  }

}
