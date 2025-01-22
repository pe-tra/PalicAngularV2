import { NgModule } from "@angular/core";
import { NavComponent } from "../nav/nav.component";
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [NavComponent],
    exports: [NavComponent],
    imports: [CommonModule]
})
export class SharedModule {}