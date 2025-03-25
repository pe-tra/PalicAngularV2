import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/sharedModule.module';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, SharedModule, RouterModule ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
