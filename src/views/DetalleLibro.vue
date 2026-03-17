<template>
  <div>
    <h2>Detalle del Libro</h2>

    <div v-if="libro">
      <p><strong>ID:</strong> {{ libro.id }}</p>
      <p><strong>Título:</strong> {{ libro.titulo }}</p>
      <p><strong>Autor:</strong> {{ libro.autor }}</p>
      <p><strong>Categoría:</strong> {{ libro.categoria }}</p>
      <p><strong>Descripción:</strong> {{ libro.descripcion || "Sin descripción" }}</p>
    </div>

    <p v-else>Libro no encontrado.</p>

    <router-link to="/libros">Volver a la lista</router-link>
  </div>
</template>

<script>
import { libros } from "../data/libros"

export default {
  props: ["id"],
  computed: {
    libro() {
      return libros.find(libro => libro.id == this.id)
    }
  }
}
</script>