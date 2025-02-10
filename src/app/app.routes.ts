import { Routes } from '@angular/router';
import { HomeBodyComponent } from './home-body/home-body.component';
import { BlogComponent } from './blog/blog.component';
import { EventsComponent } from './events/events.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { ZooComponent } from './zoo/zoo.component';
import { WineriesComponent } from './wineries/wineries.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ZvonkoBogdanComponent } from './wineries/eachWinerie/zvonkoBogdan.component';
import { PetraComponent } from './wineries/eachWinerie/petra.component';
import { VinskiDvorComponent } from './wineries/eachWinerie/vinskiDvor.component';
import { CorsaroUnoComponent } from './restaurants/eachRestaurant/corsaroUno.component';
import { AbrahamComponent } from './restaurants/eachRestaurant/abraham.component';
import { PaligoPalaceComponent } from './restaurants/eachRestaurant/paligoPalace.component';
import { PepperMillaComponent } from './restaurants/eachRestaurant/pepperMill.component';
import { RibljaCardaComponent } from './restaurants/eachRestaurant/ribljaCarda.component';
import { ImageGalleryComponent } from './imageGallery/imageGallery.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: HomeBodyComponent,
        data: { title: 'Početna - Palić' }
    },
    {
        path: 'blog',
        component: BlogComponent,
        data: { title: 'Blog - Palić' }
    },
    {
        path: 'events',
        component: EventsComponent,
        data: { title: 'Dešavanja - Palić' }
    },
    {
        path: 'accommodation',
        component: AccommodationComponent,
        data: { title: 'Smeštaj - Palić' }
    },
    {
        path: "zoo",
        component: ZooComponent,
        data: { title: 'Zoo Vrt - Palić' }
    },
    {
        path: "wineries",
        component: WineriesComponent,
        data: { title: 'Vinarije - Palić' }
    },
    {
        path: "wineries/zvonkoBogdan",
        component: ZvonkoBogdanComponent,
        data: { title: 'Vinarija Zvonko Bogdan - Palić' }
    },
    {
        path: "wineries/petra",
        component: PetraComponent,
        data: { title: 'Vinarija Petra - Palić' }
    },
    {
        path: "wineries/vinskiDvor",
        component: VinskiDvorComponent,
        data: { title: 'Vinski Dvor - Palić' }
    },
    {
        path: "restaurants",
        component: RestaurantsComponent,
        data: { title: 'Restorani - Palić' }
    },
    {
        path: "restaurants/corsaroUno",
        component: CorsaroUnoComponent,
        data: { title: 'Corsaro Uno - Palić' }
    },
    {
        path: "restaurants/abraham",
        component: AbrahamComponent,
        data: { title: 'Gostiona Abraham - Palić' }
    },
    {
        path: "restaurants/paligoPalace",
        component: PaligoPalaceComponent,
        data: { title: 'Paligo Palata - Palić' }
    },
    {
        path: "restaurants/pepperMill",
        component: PepperMillaComponent,
        data: { title: 'Pepper Mill - Palić' }
    },
    {
        path: "restaurants/ribljaCarda",
        component: RibljaCardaComponent,
        data: { title: 'Riblja Carda - Palić' }
    },
    {
        path: "imageGallery",
        component: ImageGalleryComponent,
        data: { title: 'Galerija - Palić' }
    }
];
