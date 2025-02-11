import { NgModule } from "@angular/core";
import { BrowserModule} from "@angular/platform-browser";
import { RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';
import { LightboxModule } from 'ngx-lightbox';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/sharedModule.module";
import { appRoutes } from "./app.routes";

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { HomeBodyComponent } from "./home-body/home-body.component";

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
    }), BrowserModule, NgxScrollTopModule, LightboxModule, CommonModule, HomeBodyComponent, SharedModule, RouterModule.forRoot(appRoutes, { useHash: true })],
    providers: [provideHttpClient(), {provide: LocationStrategy, useClass: HashLocationStrategy}],
})
export class AppModule {}
