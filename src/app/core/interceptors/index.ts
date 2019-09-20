import { CommonInterceptor } from './common.interceptor';
import { ResponseInterceptor } from './response.interceptor';
import { TokenInterceptor } from './token.interceptor';

export const interceptors: any[] = [CommonInterceptor, ResponseInterceptor, TokenInterceptor];

export * from './common.interceptor';
export * from './response.interceptor';
export * from './token.interceptor';
