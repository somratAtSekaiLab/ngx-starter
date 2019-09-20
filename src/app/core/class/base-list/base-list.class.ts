import { OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Page } from '../page/page.class';
import { SortOptions } from '../sort/sort-options.class';
import { Alert } from '../alert/alert.class';
import { SessionService, SpinnerService } from '@app/core/services';


/**
 * Base List Class
 */
export class BaseList implements OnInit {

  /**
   * Search options
   */
  options: object;
  /**
   * Page options
   */
  page: Page = new Page();
  /**
   * Sort options
   */
  sort: SortOptions = new SortOptions();
  /**
   * Alert
   */
  alert = new Alert();
  /**
   * Data items
   */
  dataItems: any[] = [];
  /**
   * Data url
   */
  dataUrl = 'manage-list';
  /**
   * Define current page
   */
  currentPage = 1;

  /**
   * Constructor
   * @param route
   * @param router
   * @param session
   * @param spinner
   */
  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected session: SessionService,
    protected spinner: SpinnerService
  ) {
    if (router.getCurrentNavigation().extras && router.getCurrentNavigation().extras.state) {
      const alert = router.getCurrentNavigation().extras.state.alert;
      this.alert.type = alert.type;
      this.alert.message =  alert.message;
    }
  }

  /**
   * @ignore
   */
  ngOnInit() {
    scroll(0, 0);
    this.syncSearchParams();
    this.fetchDataItems();
  }

  /**
   * Fetch Data items and sync to search hash
   */
  protected fetchDataItems() {
    this.syncSearchHash();
  }

  /**
   * Reset search
   */
  protected resetSearch() {
    return {};
  }

  /**
   * Sync search params
   */
  syncSearchParams(): void {
    const params: Params = this.route.snapshot.queryParams;

    if (Object.keys(params).length === 0 || params.constructor !== Object) {
      return;
    }

    // for options
    this.options = this.resetSearch();
    this.syncValues(params, this.options);

    // for page todo
    this.page = new Page();
    this.syncValues(params, this.page);

    // Set current page
    this.currentPage = parseInt(this.page.number, 10) + 1;

    // for sort
    this.sort = new SortOptions();
    this.syncValues(params, this.sort);

  }

  /**
   * Sync values
   * @param src
   * @param dest
   */
  protected syncValues(src, dest) {

    Object.keys(dest).forEach((key) => {
      if (dest.hasOwnProperty(key)) {
        if (src[key] !== undefined && src[key] !== '') {
          dest[key] = src[key];
        }
      }
    });

  }

  /**
   * Sort
   * @param $event
   */
  doSort($event) {

    this.sort = {
      key: $event.key,
      order: $event.order
    };

    this.fetchDataItems();
  }

  /**
   * Search
   * @param options
   */
  doSearch(options) {
    this.options = options;
    this.page = new Page();
    this.fetchDataItems();
  }

  /**
   * Paginate
   * @param page
   */
  doPaginate(page) {
    if (this.currentPage === page.page) { return; }
    this.page.number = page.page - 1;
    this.fetchDataItems();
  }

  /**
   * Fires when page size changes
   * @param pageSize
   */
  changePageSize(pageSize) {
    this.page.size = pageSize;
    this.fetchDataItems();
  }

  /**
   * Sync search hash update route
   */
  protected syncSearchHash(): void {

    const params = [];
    // for search option
    for (const key in this.options) {
      if (this.options.hasOwnProperty(key)) {
        if (this.options[key] !== undefined && this.options[key] !== '') {
          params[key] = this.options[key].toString();
        }
      }
    }

    // for pagination
    for (const key in Page.getPaginateValues(this.page)) {
      if (this.page.hasOwnProperty(key)) {
        params[key] = this.page[key];
      }
    }

    // for sorting
    for (const key in this.sort) {
      if (this.sort[key] !== '') {
        params[key] = this.sort[key];
      }
    }

    this.router.navigate([this.dataUrl], { queryParams: params, replaceUrl: true });
  }


}
