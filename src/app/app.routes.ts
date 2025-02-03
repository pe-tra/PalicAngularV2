import { Routes } from '@angular/router';
import { HomeBodyComponent } from './home-body/home-body.component';
import { BlogComponent } from './blog/blog.component';
import { EventsComponent } from './events/events.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { ZooComponent } from './zoo/zoo.component';
import { WineriesComponent } from './wineries/wineries.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { VinarijaZBComponent } from './eachWinerie/vinarijaZB.component';
import { VinarijaPComponent } from './eachWinerie/vinarijaP.component';
import { VinskiDvorComponent } from './eachWinerie/vinskiDvor.component';
import { CorsaroUnoComponent } from './eachRestaurant/corsaroUno.component';
import { GostionaAbrahamComponent } from './eachRestaurant/gostionaAbraham.component';
import { PaligoPalataComponent } from './eachRestaurant/paligoPalata.component';
import { PepperMillaComponent } from './eachRestaurant/pepperMill.component';
import { RibljaCardaComponent } from './eachRestaurant/ribljaCarda.component';
import { ImageGalleryComponent } from './imageGallery/imageGallery.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: HomeBodyComponent,
        data: { title: 'Pocetna - Palic' }
    },
    {
        path: 'blog',
        component: BlogComponent,
        data: { title: 'Blog - Palic' }
    },
    {
        path: 'events',
        component: EventsComponent,
        data: { title: 'Desavanja - Palic' }
    },
    {
        path: 'accommodation',
        component: AccommodationComponent,
        data: { title: 'Smestaj - Palic' }
    },
    {
        path: "zoo",
        component: ZooComponent,
        data: { title: 'Zoo Vrt - Palic' }
    },
    {
        path: "wineries",
        component: WineriesComponent,
        data: { title: 'Vinarije - Palic' }
    },
    {
        path: "restaurants",
        component: RestaurantsComponent,
        data: { title: 'Restorani - Palic' }
    },
    {
        path: "vinarijaZB",
        component: VinarijaZBComponent,
        data: { title: 'Vinarija Zvonko Bogdan - Palic' }
    },
    {
        path: "vinarijaP",
        component: VinarijaPComponent,
        data: { title: 'Vinarija Petra - Palic' }
    },
    {
        path: "vinskiDvor",
        component: VinskiDvorComponent,
        data: { title: 'Vinski Dvor - Palic' }
    },
    {
        path: "corsaroUno",
        component: CorsaroUnoComponent,
        data: { title: 'Corsaro Uno - Palic' }
    },
    {
        path: "gostionaAbraham",
        component: GostionaAbrahamComponent,
        data: { title: 'Gostiona Abraham - Palic' }
    },
    {
        path: "paligoPalata",
        component: PaligoPalataComponent,
        data: { title: 'Paligo Palata - Palic' }
    },
    {
        path: "pepperMill",
        component: PepperMillaComponent,
        data: { title: 'Pepper Mill - Palic' }
    },
    {
        path: "ribljaCarda",
        component: RibljaCardaComponent,
        data: { title: 'Riblja Carda - Palic' }
    },
    {
        path: "imageGallery",
        component: ImageGalleryComponent,
        data: { title: 'Galerija - Palic' }
    }
];
