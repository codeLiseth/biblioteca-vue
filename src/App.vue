<template>
  <div class="contenedor">

    <header class="header">

      <h1>Biblioteca SPA</h1>

      <div class="usuario-info">
        <p>Bienvenido, <strong>{{ usuario }}</strong></p>
        <p>Total de libros: <strong>{{ totalLibros }}</strong></p>
      </div>

      <nav>
        <router-link to="/">Inicio</router-link>
        <router-link to="/libros">Lista de Libros</router-link>
      </nav>

    </header>

    <hr />

    <router-view></router-view>

  </div>
</template>

<script>

import { libros } from "./data/libros"

export default {

  data() {
    return {
      usuario: "Liseth"
    }
  },

  computed: {
    totalLibros() {
      return libros.length
    }
  }

}

</script>