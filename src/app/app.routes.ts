import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { Settings } from '../pages/settings/settings';
import { About } from '../pages/about/about';
import { PageNotFound } from '../pages/page-not-found/page-not-found';
import { DynamicRoute } from '../pages/dynamic-route/dynamic-route';

export const routes: Routes = [
    {path:"",component:Home},
    {path:"dynamic/:id",component:DynamicRoute},
    {path:"settings",component:Settings},
    {path:"about",component:About},
    {path:"**",component:PageNotFound},
];
