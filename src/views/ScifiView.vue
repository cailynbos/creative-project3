<template>
  <div class="all-books">
    <BookList :books="books" />
  </div>
</template>

<script>
import BookList from '@/components/BookList.vue'

export default {
  name: 'ScifiView',
  components: {
      BookList
  },
  computed: {
      books() {
          return this.$root.$data.books.filter(
              (book) => book.genre === 'scifi'
          );
      }
  }
}
</script>
