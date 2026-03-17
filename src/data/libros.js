import { reactive } from 'vue'

export const libros = reactive([
  {
    id: 1,
    titulo: '1984',
    autor: 'George Orwell',
    categoria: 'Novela',
    descripcion: 'Una novela distópica clásica.'
  },
  {
    id: 2,
    titulo: 'Harry Potter y la piedra filosofal',
    autor: 'J.K. Rowling',
    categoria: 'Fantasía',
    descripcion: 'El inicio de una saga muy conocida.'
  }
])