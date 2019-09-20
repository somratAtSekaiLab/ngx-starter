import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment as env } from '@env';

/**
 * Initialize supported Image types
 */
export const supportedImageTypes = [
  'image/png',
  'image/jpg',
  'image/jpeg',
];

/**
 * Initialize supported file types
 */
export const supportedFileTypes = [
];

/**
 * Initialize default file max size
 * default 2Mb
 */
export const fileMaxSize = 2000000;


/**
 * File Upload Service
 */
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  /**
   * Constructor
   * @param http
   */
  constructor(
    private http: HttpClient
  ) { }

  /**
   * Validate file types
   * @param file
   * @param size
   * @param type
   * @param validationMsg
   */
  validateFile(file, size: number = fileMaxSize, type?, validationMsg?): Observable<any> {

    return new Observable((observer) => {

      if (!file) {
        const msg = 'This field is requried';
        return observer.error(msg);
      }
      /* Checking file type */
      if (type && type.indexOf(file.type) < 0) {
        const msg = validationMsg ? validationMsg : 'Invalid file type.';
        return observer.error(msg);
      }

      /* Checking file size */
      if (file.size > size) {
        const sizeInMb = size * 1e-6;
        const msg = `Maximum file size is ${sizeInMb}MB`;
        return observer.error(msg);
      }

      if (!FileReader) {
        const msg = 'File Reader is not supported by browser';
        return observer.error(msg);
      }

      observer.next(true);
      observer.complete();

    });
  }

  /**
   * Get AWS signature
   * @param file
   * @param accessToken
   * @param directory
   */
  private getAwsSingnature(file, directory?) {

    let params = new HttpParams();

    params = params.append('mime_type', file.type);

    if (directory) {
      params = params.append('directory', directory);
    }

    return this.http
               .get(`${env.api}/file-upload/signed-url`, { params });
  }

  /**
   * Upload File
   * @param file
   * @param accessToken
   * @param directory
   */
  upload(file, directory?): Observable<any> {

    return new Observable((observer) => {
      this.getAwsSingnature(file, directory)
          .subscribe((data: any) => {
            const xhr = new XMLHttpRequest();
            xhr.open('PUT', data.signed_url, true);
            xhr.setRequestHeader('Content-Type', file.type);

            xhr.onload = () => {

              if (xhr.status === 200) {
                observer.next({ url: data.access_key });
                return observer.complete();
              }

              return observer.error(xhr.response);
            };

            xhr.send(file);
          }, (error) => {
            return observer.error(error);
          });
    });
  }

  /**
   * Get File preview
   * @param fileUrl
   */
  getFilePreview(fileUrl: string): Observable<any> {

    let params = new HttpParams();

    params = params.append('signed_url', fileUrl);

    return this.http
               .get(`${env.api}/file-preview`, { params });
  }
}
