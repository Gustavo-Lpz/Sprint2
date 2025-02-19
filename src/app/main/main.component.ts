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

  private limpiarDatos() {
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
      this.productos.push({ ...this.datos }); 
      this.datos = {
        imageUrl: '',
        titulo: '',
        precio: '',
        cantidad: '',
        descripcion: ''
      };
    } else {
      alert('Complete todos los campos');
    }
  }




} /* Fin*/
