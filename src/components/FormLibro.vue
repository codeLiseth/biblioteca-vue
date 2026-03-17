<template>
  <div class="card">
    <h3>Agregar libro</h3>

    <form @submit.prevent="agregarLibro">
      <label>Título</label>
      <input
        v-model="nuevoLibro.titulo"
        type="text"
        placeholder="Ingrese el título"
      />

      <label>Autor</label>
      <input
        v-model="nuevoLibro.autor"
        type="text"
        placeholder="Ingrese el autor"
      />

      <label>Categoría</label>
      <select v-model="nuevoLibro.categoria">
        <option disabled value="">Seleccione una categoría</option>
        <option>Novela</option>
        <option>Fantasía</option>
        <option>Ciencia</option>
        <option>Historia</option>
        <option>Drama</option>
      </select>

      <label>Descripción</label>
      <textarea
        v-model="nuevoLibro.descripcion"
        placeholder="Ingrese una descripción"
      ></textarea>

      <button type="submit">Agregar libro</button>
      <button type="button" @click.once="cargarEjemplo">
        Cargar ejemplo
      </button>
    </form>

    <div class="preview">
      <h4>Vista previa</h4>

      <p><strong>Título:</strong> {{ nuevoLibro.titulo }}</p>
      <p><strong>Autor:</strong> {{ nuevoLibro.autor }}</p>
      <p><strong>Categoría:</strong> {{ nuevoLibro.categoria }}</p>
      <p><strong>Descripción:</strong> {{ nuevoLibro.descripcion }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormLibro",

  emits: ["agregar"],

  data() {
    return {
      nuevoLibro: {
        titulo: "",
        autor: "",
        categoria: "",
        descripcion: ""
      }
    }
  },

  methods: {
    agregarLibro() {

      if (
        !this.nuevoLibro.titulo.trim() ||
        !this.nuevoLibro.autor.trim() ||
        !this.nuevoLibro.categoria.trim()
      ) {
        alert("Completa título, autor y categoría")
        return
      }

      this.$emit("agregar", {
        id: Date.now(),
        titulo: this.nuevoLibro.titulo,
        autor: this.nuevoLibro.autor,
        categoria: this.nuevoLibro.categoria,
        descripcion: this.nuevoLibro.descripcion
      })

      this.nuevoLibro = {
        titulo: "",
        autor: "",
        categoria: "",
        descripcion: ""
      }
    },

    cargarEjemplo() {
      this.nuevoLibro = {
        titulo: "Harry Potter",
        autor: "J.K. Rowling",
        categoria: "Fantasía",
        descripcion: "Libro de ejemplo cargado automáticamente."
      }
    }
  }
}
</script>