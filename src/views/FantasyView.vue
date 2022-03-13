<template>
  <div class="fantasy-books">
    <BookList :books="books" />
  </div>
</template>

<script>
import BookList from '@/components/BookList.vue'

export default {
  name: 'FantasyView',
  components: {
      BookList
  },
  computed: {
      books() {
          return this.$root.$data.books.filter(
              (book) => book.genre === "fantasy"
          );
      }
  }
}
</script>

