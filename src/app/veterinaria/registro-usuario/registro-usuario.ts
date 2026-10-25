import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({ selector: 'app-registro-usuario', standalone: true, imports: [FormsModule, RouterLink], templateUrl: './registro-usuario.html', styleUrl: './registro-usuario.css' })
export class RegistroUsuario {
  datosUsuario = { nombre: '', correo: '', telefono: '', password: '' };
  enviado = false;
  codigoRegistro = '';
  guardar(): void {
    const d = this.datosUsuario;
    if (!d.nombre.trim() || !d.correo.includes('@') || d.telefono.length < 7 || d.password.length < 8) return;
    this.enviado = true;
    this.codigoRegistro = this.generarCodigo('USR');
    this.datosUsuario = { nombre: '', correo: '', telefono: '', password: '' };
  }
  private generarCodigo(tipo: string): string { return `${tipo}-${Date.now().toString().slice(-6)}`; }
}
