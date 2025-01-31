import { NgModule } from "@angular/core";
import { NavComponent } from "../nav/nav.component";
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [NavComponent],
    exports: [NavComponent],
    imports: [CommonModule, TranslateModule]
})
export class SharedModule {}