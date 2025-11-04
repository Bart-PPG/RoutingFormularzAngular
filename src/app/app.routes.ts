import { Routes } from '@angular/router';
import { NwdComponent } from './nwd/nwd.component';
import { CiagComponent } from './ciag/ciag.component';
import { FilmyComponent } from './filmy/filmy.component';

export const routes: Routes = [
    {path:"", component:NwdComponent},
    {path:"nwd", component:NwdComponent},
    {path:"ciagi", component:CiagComponent},
    {path:"filmy", component:FilmyComponent}
];
