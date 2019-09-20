import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SpinnerService } from '@app/core';

/**
 * Error component
 */
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent implements OnInit {
  /**
   * Error code
   */
  code: any;
  /**
   * Error message
   */
  message: string;

  /**
   * Constructor
   * @param route
   */
  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private spinner: SpinnerService
  ) {
    this.code    = this.route.snapshot.queryParams.code;
    this.message = this.route.snapshot.queryParams.message;
    this.spinner.stop();
  }
  /**
   * @ignore
   */
  ngOnInit() {
    scroll(0, 0);
  }

}
