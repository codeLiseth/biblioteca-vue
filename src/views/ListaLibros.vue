<template>
  <div>
    <h2>Lista de Libros</h2>

    <FormLibro @agregar="agregarLibro" />

    <button @click="mostrarLista = !mostrarLista">
      {{ mostrarLista ? "Ocultar lista" : "Mostrar lista" }}
    </button>

    <p v-if="libros.length === 0">No hay libros disponibles.</p>

    <div v-show="mostrarLista">
      <Libro
        v-for="libro in libros"
        :key="libro.id"
        :libro="libro"
        @eliminar="eliminarLibro"
      />
    </div>
  </div>
</template>

<script>
import FormLibro from "../components/FormLibro.vue"
import Libro from "../components/Libro.vue"
import { libros } from "../data/libros"

export default {
  name: "ListaLibros",
  components: {
    FormLibro,
    Libro
  },
  data() {
    return {
      mostrarLista: true,
      libros
    }
  },
  methods: {
    agregarLibro(libro) {
      this.libros.push(libro)
    },
    eliminarLibro(id) {
      const index = this.libros.findIndex(libro => libro.id === id)
      if (index !== -1) {
        this.libros.splice(index, 1)
      }
    }
  }
}
</script>

