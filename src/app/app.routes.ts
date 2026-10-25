import { Routes } from '@angular/router';
import { HomeVeterinaria } from './veterinaria/home/home';
import { RegistroUsuario } from './veterinaria/registro-usuario/registro-usuario';
import { RegistroMascotas } from './veterinaria/registro-mascotas/registro-mascotas';
import { RegistroCitas } from './veterinaria/registro-citas/registro-citas';
import { RegistroReclamos } from './veterinaria/registro-reclamos/registro-reclamos';
import { SolicitudServicios } from './veterinaria/solicitud-servicios/solicitud-servicios';

export const routes: Routes = [
  { path: '', component: HomeVeterinaria, title: 'Huellitas | Clínica Veterinaria' },
  { path: 'registro-usuario', component: RegistroUsuario, title: 'Registro de usuario | Huellitas' },
  { path: 'registro-mascotas', component: RegistroMascotas, title: 'Registro de mascotas | Huellitas' },
  { path: 'registro-citas', component: RegistroCitas, title: 'Registro de citas | Huellitas' },
  { path: 'registro-reclamos', component: RegistroReclamos, title: 'Libro de reclamaciones | Huellitas' },
  { path: 'solicitud-servicios', component: SolicitudServicios, title: 'Solicitud de servicios | Huellitas' },
  { path: '**', redirectTo: '' },
];
