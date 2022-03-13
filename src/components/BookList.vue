<template>
    <div id="book-list">
        <div class="book" v-for="book in books" :key="book.id">
            <img :src="'/covers/' + book.image" />
            <div class="info">
                <h3 class="title">{{ book.title }}</h3>
                <p class="author">{{ book.author }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BookList',
    props: {
        books: Array
    }
}
</script>

<style scoped>
.book {
    display: flex;
    flex-direction: row;
    margin: 10px;
    margin-top: 20px;
}

.book img {
    width: 50%;
}

.info {
    margin-left: 10px;
}

.author {
    margin-left: 20px;
}
</style>