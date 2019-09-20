import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '@app/core';

/**
 * App component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  /**
   * Flag for loader
   */
  isLoading = false;

  /**
   * Constructor
   * @param spinner
   */
  constructor(
    private spinner: SpinnerService
  ) {
    this.fetchLoadingStatus();
  }

  /**
   * @ignore
   */
  ngOnInit() {
  }

  /**
   * Loading status
   */
  fetchLoadingStatus() {
    this.spinner
        .status()
        .subscribe( spinning => {
          setTimeout(() => {
            this.isLoading = spinning;
          }, 10);
        });
  }
}
