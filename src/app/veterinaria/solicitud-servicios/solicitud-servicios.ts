import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({ selector: 'app-solicitud-servicios', standalone: true, imports: [FormsModule, RouterLink], templateUrl: './solicitud-servicios.html', styleUrl: './solicitud-servicios.css' })
export class SolicitudServicios {
  solicitud = { responsable: '', mascota: '', servicio: 'Baño y peluquería', fecha: '', detalle: '' };
  enviado = false;
  codigoRegistro = '';
  guardar(): void {
    if (!this.solicitud.responsable.trim() || !this.solicitud.mascota.trim() || !this.solicitud.fecha) return;
    this.enviado = true;
    this.codigoRegistro = `SER-${Date.now().toString().slice(-6)}`;
    this.solicitud = { responsable: '', mascota: '', servicio: 'Baño y peluquería', fecha: '', detalle: '' };
  }
}
