import { NgModule } from "@angular/core";
import { BrowserModule} from "@angular/platform-browser";
import { RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';
import { LightboxModule } from 'ngx-lightbox';

import { AppComponent } from "./app.component";
import { PocetnaBComponent } from "./pocetna-b/pocetna-b.component";
import { SharedModule } from "./shared/sharedModule.module";
import { appRoutes } from "./app.routes";

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
    declarations:[AppComponent],
    bootstrap: [AppComponent],
    imports: [TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }), BrowserModule, LightboxModule, CommonModule, PocetnaBComponent, SharedModule, RouterModule.forRoot(appRoutes)],
    providers: [provideHttpClient()],
})
export class AppModule {}
