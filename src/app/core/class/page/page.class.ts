/**
 * Pagination class
 */
export class Page {
  /**
   * Page number
   */
  number: any = 0;
  /**
   * Page size
   */
  size = 10;
  /**
   * Total element
   */
  // tslint:disable-next-line:variable-name
  total_elements: number;
  /**
   * Total pages
   */
  // tslint:disable-next-line:variable-name
  total_pages: number;

  /**
   * Get paginate values
   * @param page
   */
  static getPaginateValues(page) {

    const values: any = {};

    if (page.number !== 0) {
      values.number = page.number;
    }

    if (page.size !== 10) {
      values.size = page.size;
    }

    return values;
  }
}
