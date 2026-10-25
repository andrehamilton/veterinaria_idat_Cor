import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({ selector: 'app-registro-citas', standalone: true, imports: [FormsModule, RouterLink], templateUrl: './registro-citas.html', styleUrl: './registro-citas.css' })
export class RegistroCitas {
  datosCita = { responsable: '', mascota: '', servicio: 'Consulta general', fecha: '', hora: '', motivo: '' };
  enviado = false;
  codigoRegistro = '';
  guardar(): void {
    const d = this.datosCita;
    if (!d.responsable.trim() || !d.mascota.trim() || !d.fecha || !d.hora) return;
    this.enviado = true;
    this.codigoRegistro = `CIT-${Date.now().toString().slice(-6)}`;
    this.datosCita = { responsable: '', mascota: '', servicio: 'Consulta general', fecha: '', hora: '', motivo: '' };
  }
}
