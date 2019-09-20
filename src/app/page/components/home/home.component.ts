import { Component, OnInit } from '@angular/core';

/**
 * Home page component
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  /**
   * Constructor
   */
  constructor(
  ) {
  }

  /**
   * @ignore
   */
  ngOnInit() {
    scroll(0, 0);
  }

}
