import { Component, OnInit } from '@angular/core';

/**
 * Page Not found / 404
 */
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html'
})
export class PageNotFoundComponent implements OnInit {

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
