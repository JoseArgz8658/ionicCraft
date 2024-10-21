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
    loadChildren: () => import('./User/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./User/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./User/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  {
    path: 'bioma-contenido',
    loadChildren: () => import('./Pages/bioma-contenido/bioma-contenido.module').then( m => m.BiomaContenidoPageModule)
  },
  {
    path: 'read',
    loadChildren: () => import('./CrudBiomas/read/read.module').then( m => m.ReadPageModule)
  },

  {
    path: 'update',
    loadChildren: () => import('./CrudBiomas/update/update.module').then( m => m.UpdatePageModule)
  },

  {
    path: 'create',
    loadChildren: () => import('./CrudBiomas/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'read-usuarios',
    loadChildren: () => import('./crudUsuarios/read-usuarios/read-usuarios.module').then( m => m.ReadUsuariosPageModule)
  },
  {
    path: 'create-usuarios',
    loadChildren: () => import('./crudUsuarios/create-usuarios/create-usuarios.module').then( m => m.CreateUsuariosPageModule)
  },
  {
    path: 'update-usuarios',
    loadChildren: () => import('./crudUsuarios/update-usuarios/update-usuarios.module').then( m => m.UpdateUsuariosPageModule)
  },
  {
    path: 'fotos',
    loadChildren: () => import('./Pages/fotos/fotos.module').then( m => m.FotosPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
