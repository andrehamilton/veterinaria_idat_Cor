import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({ selector: 'app-registro-reclamos', standalone: true, imports: [FormsModule, RouterLink], templateUrl: './registro-reclamos.html', styleUrl: './registro-reclamos.css' })
export class RegistroReclamos {
  datosReclamo = { nombre: '', correo: '', motivo: '', detalle: '' };
  enviado = false;
  codigoRegistro = '';
  guardar(): void {
    const d = this.datosReclamo;
    if (!d.nombre.trim() || !d.correo.includes('@') || !d.motivo || d.detalle.trim().length < 12) return;
    this.enviado = true;
    this.codigoRegistro = `REC-${Date.now().toString().slice(-6)}`;
    this.datosReclamo = { nombre: '', correo: '', motivo: '', detalle: '' };
  }
}
