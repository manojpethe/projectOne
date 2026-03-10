import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { Settings } from '../pages/settings/settings';
import { About } from '../pages/about/about';
import { PageNotFound } from '../pages/page-not-found/page-not-found';

export const routes: Routes = [
    {path:"",component:Home},
    {path:"settings",component:Settings},
    {path:"about",component:About},
    {path:"**",component:PageNotFound},
];
