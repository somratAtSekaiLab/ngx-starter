import { Component, OnInit } from '@angular/core';
/**
 * Under construction page component
 */
@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html'
})
export class UnderConstructionComponent implements OnInit {
  /**
   * @ignore
   */
  constructor() { }
  /**
   * @ignore
   */
  ngOnInit() {
    scroll(0, 0);
  }

}
