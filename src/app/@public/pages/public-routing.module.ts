import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
        {
          path: 'home',
          loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
        },
        {
          path: 'contact',
          loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
