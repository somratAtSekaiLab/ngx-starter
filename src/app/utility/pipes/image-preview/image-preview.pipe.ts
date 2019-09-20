import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUploadService } from '@app/core';

/**
 * Image secure preview pipe
 */
@Pipe({
  name: 'imagePreview'
})
export class ImagePreviewPipe implements PipeTransform {

  /**
   * Constructor
   * @param service
   */
  constructor(
    private service: FileUploadService
  ) {
  }

  /**
   * Transform
   * @param fileUrl
   */
  transform(fileUrl: any): Observable<any> {

    return new Observable((observer) => {
      this.service
          .getFilePreview(fileUrl)
          .subscribe(res => {
            observer.next(res.view_link);
            return observer.complete();
          }, (error) => {
            return observer.complete();
          });
    });

  }

}
