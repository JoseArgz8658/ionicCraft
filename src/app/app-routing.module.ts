import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'biomas',
    loadChildren: () => import('./Pages/biomas/biomas.module').then( m => m.BiomasPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./Pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'bioma-contenido',
    loadChildren: () => import('./Pages/bioma-contenido/bioma-contenido.module').then( m => m.BiomaContenidoPageModule)
  },
  {
    path: 'read',
    loadChildren: () => import('./CRUD/read/read.module').then( m => m.ReadPageModule)
  },

  {
    path: 'update',
    loadChildren: () => import('./CRUD/update/update.module').then( m => m.UpdatePageModule)
  },

  {
    path: 'delete',
    loadChildren: () => import('./CRUD/delete/delete.module').then( m => m.DeletePageModule)
  },

  {
    path: 'create',
    loadChildren: () => import('./CRUD/create/create.module').then( m => m.CreatePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
