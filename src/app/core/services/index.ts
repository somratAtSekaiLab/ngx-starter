import { AuthService } from './auth/auth.service';
import { DataService } from './data/data.service';
import { FileUploadService } from './file-upload/file-upload.service';
import { OptionsService } from './options/options.service';
import { SessionService } from './session/session.service';
import { SpinnerService } from './spinner/spinner.service';
import { StorageService } from './storage/storage.service';

export const services: any[] = [
  AuthService,
  DataService,
  FileUploadService,
  OptionsService,
  SessionService,
  SpinnerService,
  StorageService
];

export * from './auth/auth.service';
export * from './data/data.service';
export * from './file-upload/file-upload.service';
export * from './options/options.service';
export * from './session/session.service';
export * from './spinner/spinner.service';
export * from './storage/storage.service';
