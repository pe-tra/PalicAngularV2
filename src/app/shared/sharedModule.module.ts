import { NgModule } from "@angular/core";
import { NavComponent } from "../nav/nav.component";
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NavAdminComponent } from "../nav/nav-admin.component";

@NgModule({
    declarations: [NavComponent, NavAdminComponent],
    exports: [NavComponent, NavAdminComponent],
    imports: [CommonModule, TranslateModule, RouterModule]
})
export class SharedModule {}