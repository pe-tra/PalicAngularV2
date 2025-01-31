import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom, } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes} from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './i18n/', '.json');

export const appConfig: ApplicationConfig = {
providers: [
  provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(appRoutes),
  provideHttpClient(),
  importProvidersFrom([TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: httpLoaderFactory,
      deps: [HttpClient],
    },
  })])
],
};