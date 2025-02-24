import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [FormsModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  datos = {
    imageUrl:"",
    titulo: "",
    precio:"",
    cantidad:"",
    descripcion:"",
  };

  onImageChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.datos.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(file); 
    }
  }

  cancelarProducto() {
    this.limpiarDatos();
  }

  limpiarDatos() {
    this.datos = {
      imageUrl: '',
      titulo: '',
      precio: '',
      cantidad: '',
      descripcion: ''
    };
  }

  
  productos: any[] = [];

  agregarProducto() {
    if (this.datos.titulo && this.datos.precio && this.datos.cantidad && this.datos.descripcion && this.datos.imageUrl) {
      const nuevoProducto = {
        imageUrl: this.datos.imageUrl,
        titulo: this.datos.titulo,
        precio: this.datos.precio,
        cantidad: this.datos.cantidad, 
        descripcion: this.datos.descripcion
      };
      this.productos.push(nuevoProducto);
      this.limpiarDatos(); 
    } else {
      alert('Complete todos los campos');
    }
  }

  modificarCantidad(producto: any, cambio: number) {
    let nuevaCantidad = producto.cantidad + cambio;
    if (nuevaCantidad >= 0) {  
      producto.cantidad = nuevaCantidad;
    }
  }

  
  menuVisible = false;
  toggleMenu() {
    this.menuVisible = !this.menuVisible;  // Cambia el estado del menú de visible a invisible
  }

  seleccionarOpcion(opcion: string) {
    this.menuVisible = false;  // Oculta el menú después de seleccionar una opción
    this.actualizarCampos(opcion);  // Actualiza los campos de acuerdo con la opción seleccionada
  }

  // Función para actualizar los campos de acuerdo con la opción
  actualizarCampos(opcion: string) {
    switch (opcion) {
      case 'opcion1':
        this.datos.imageUrl = '';
        this.datos.titulo = '';
        this.datos.precio = '';
        this.datos.cantidad = '';
        this.datos.descripcion = '';
        break;
      case 'opcion2':
        this.datos.imageUrl = '';
        this.datos.titulo = '';
        this.datos.precio = '';
        this.datos.cantidad = '';
        this.datos.descripcion = '';
        break;
      case 'opcion3':
        this.datos.imageUrl = '';
        this.datos.titulo = '';
        this.datos.precio = '';
        this.datos.cantidad = '';
        this.datos.descripcion = '';
        break;
      default:
        break;
    }
  }


} /* Fin*/
