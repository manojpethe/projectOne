import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { Settings } from '../pages/settings/settings';
// import { About } from '../pages/about/about';
import { PageNotFound } from '../pages/page-not-found/page-not-found';
import { DynamicRoute } from '../pages/dynamic-route/dynamic-route';
import { Company } from '../pages/company/company';
import { People } from '../pages/people/people';
import { ReactiveForms } from '../pages/reactive-forms/reactive-forms';

export const routes: Routes = [
    {path:"",component:Home},
    {path:"dynamic/:id",component:DynamicRoute},
    {path:"settings",component:Settings},
    {path:"form",component:ReactiveForms},
    {path:"about", loadComponent:()=>import('../pages/about/about').then((c)=>c.About),
        children:[
        { path: "", redirectTo:"company",pathMatch:"full" },
        { path: "company", component: Company},
        { path: "people", component: People}
    ]},
    {path:"**",component:PageNotFound},
];
