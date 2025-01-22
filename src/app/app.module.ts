import { NgModule } from "@angular/core";
import { BrowserModule} from "@angular/platform-browser";
import { RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';
import { LightboxModule } from 'ngx-lightbox';

import { AppComponent } from "./app.component";
import { PocetnaBComponent } from "./pocetna-b/pocetna-b.component";
import { SharedModule } from "./shared/sharedModule.module";
import { appRoutes } from "./app.routes";

@NgModule({
    declarations:[AppComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, LightboxModule, CommonModule, PocetnaBComponent, SharedModule, RouterModule.forRoot(appRoutes)]
})
export class AppModule {}