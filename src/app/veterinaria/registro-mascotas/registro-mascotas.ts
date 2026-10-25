import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({ selector: 'app-registro-mascotas', standalone: true, imports: [FormsModule, RouterLink], templateUrl: './registro-mascotas.html', styleUrl: './registro-mascotas.css' })
export class RegistroMascotas {
  datosMascota = { nombre: '', especie: 'Perro', raza: '', edad: '', responsable: '', telefono: '' };
  enviado = false;
  codigoRegistro = '';
  guardar(): void {
    const d = this.datosMascota;
    if (!d.nombre.trim() || !d.raza.trim() || !d.edad.trim() || !d.responsable.trim() || d.telefono.length < 7) return;
    this.enviado = true;
    this.codigoRegistro = `MAS-${Date.now().toString().slice(-6)}`;
    this.datosMascota = { nombre: '', especie: 'Perro', raza: '', edad: '', responsable: '', telefono: '' };
  }
}
