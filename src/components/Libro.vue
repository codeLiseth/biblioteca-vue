<template>
  <div class="libro-card">

    <h3>{{ libro.titulo }}</h3>

    <p>
      <strong>Autor:</strong>
      {{ libro.autor }}
    </p>

    <p>
      <strong>Categoría:</strong>
      {{ libro.categoria }}
    </p>

    <div class="acciones-libro">

      <router-link :to="`/libros/${libro.id}`">
        Ver detalle
      </router-link>

      <button @click="$emit('eliminar', libro.id)">
        Eliminar
      </button>

    </div>

  </div>
</template>

<script>
export default {
  name: "Libro",

  props: {
    libro: {
      type: Object,
      required: true
    }
  },

  emits: ["eliminar"]
}
</script>