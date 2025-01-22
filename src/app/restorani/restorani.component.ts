import { Component } from '@angular/core';

import { SharedModule } from '../shared/sharedModule.module';

@Component({
    selector: 'app-restorani',
    imports: [SharedModule],
    templateUrl: './restorani.component.html',
    styleUrl: './restorani.component.scss'
})

export class RestoraniComponent {}