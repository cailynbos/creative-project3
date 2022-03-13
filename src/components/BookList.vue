<template>
    <div class="book-list">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <div class="book" v-for="book in books" :key="book.id">
            <img :src="'/covers/' + book.image" />
            <div class="info">
                <p class="title">{{ book.title }}</p>
                <p class="author">{{ book.author }}</p>
                <p class="desc">{{ book.description }}</p>
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
}

.book img {
    margin: 10px;
    margin-top: 20px;
    width: 50%;
}

.info {
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
}

.title {
    font-weight: bold;
}

.author {
    margin-left: 20px;
    color: #62929e;
}

.desc {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 12;
    line-clamp: 12;
    -webkit-box-orient: vertical;
}


@media (min-width: 48em) {
    .book-list {
        display: grid;
        grid-auto-flow: row;
        grid-template-columns: repeat(4, 1fr);
        margin: 30px 20px;
    }

    .book {
        flex-direction: column;
        margin: 10px;
    }

    .book img {
        width: 180px;
        height: 315px;
        object-fit: cover;
    }

    .info {
        margin: 0px;
    }

    .title {
        font-weight: bold;
        margin-left: 20px;
    }

    .author {
        margin-left: 40px;
    }

    .desc {
        margin-left: 10px;
    }
}
</style>