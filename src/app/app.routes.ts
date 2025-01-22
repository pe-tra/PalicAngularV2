import { Routes } from '@angular/router';
import { PocetnaBComponent } from './pocetna-b/pocetna-b.component';
import { BlogComponent } from './blog/blog.component';
import { DesavanjaComponent } from './desavanja/desavanja.component';
import { SmestajComponent } from './smestaj/smestaj.component';
import { ZooVrtComponent } from './zooVrt/zooVrt.component';
import { VinarijeComponent } from './vinarije/vinarije.component';
import { RestoraniComponent } from './restorani/restorani.component';
import { VinarijaZBComponent } from './pojedinacnoVinarije/vinarijaZB.component';
import { VinarijaPComponent } from './pojedinacnoVinarije/vinarijaP.component';
import { VinskiDvorComponent } from './pojedinacnoVinarije/vinskiDvor.component';
import { CorsaroUnoComponent } from './pojedinacnoRestorani/corsaroUno.component';
import { GostionaAbrahamComponent } from './pojedinacnoRestorani/gostionaAbraham.component';
import { PaligoPalataComponent } from './pojedinacnoRestorani/paligoPalata.component';
import { PepperMillaComponent } from './pojedinacnoRestorani/pepperMill.component';
import { RibljaCardaComponent } from './pojedinacnoRestorani/ribljaCarda.component';
import { ImageGalleryComponent } from './imageGallery/imageGallery.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: PocetnaBComponent,
        data: { title: 'Pocetna - Palic' }
    },
    {
        path: 'blog',
        component: BlogComponent,
        data: { title: 'Blog - Palic' }
    },
    {
        path: 'desavanja',
        component: DesavanjaComponent,
        data: { title: 'Desavanja - Palic' }
    },
    {
        path: 'smestaj',
        component: SmestajComponent,
        data: { title: 'Smestaj - Palic' }
    },
    {
        path: "zooVrt",
        component: ZooVrtComponent,
        data: { title: 'Zoo Vrt - Palic' }
    },
    {
        path: "vinarije",
        component: VinarijeComponent,
        data: { title: 'Vinarije - Palic' }
    },
    {
        path: "restorani",
        component: RestoraniComponent,
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
