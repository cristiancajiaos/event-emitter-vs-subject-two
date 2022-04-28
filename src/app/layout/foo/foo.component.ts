import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss'],
})
export class FooComponent implements OnInit {

  @Output() foo = new EventEmitter<string>();
  
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.foo.emit(`Event Emitter at ${new Date()}`);
    }, 2000);
  }
}
