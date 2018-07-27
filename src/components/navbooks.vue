<template>
  <div class="content-wrap-left-book">
    <router-link :to="{ path: getBooks.path }" class="content-wrap-left-book-all">
      {{ getBooks.title }}
    </router-link>
    <template v-for="(classBooks, index) in getBooksClass">
      <div class="wrap-left-books">
        <router-link :to="{ path: classBooks.path }" class="h4-class" @click="classBooksItem(classBooks.className)">
          {{classBooks.className }}
        </router-link>
        <div class="wrap-left-books-main" :class="{' wrap-left-books-main-line': getBooksClass.length - 1 !== index }">
          <a href="" v-for="books in classBooks.classBooks">{{books}}</a>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      getBooksClass: {
        type: Array,
        default: []
      },
      getBooks: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {}
    },
    methods: {
      classBooksItem (item) {
        this.$emit('class-books-item', item)
      }
    },
    computed: {},
    components: {}
  }
</script>

<style scoped lang="less">
  .content-wrap-left-book {
    width: 230px;
    background: #fff;

  .content-wrap-left-book-all {
    display: block;
    background: #43baf1;
    height: 30px;
    color: #fff;
    padding-left: 20px;
    line-height: 30px;
  }

  .wrap-left-books {
    margin: 10px 10px 10px 20px;

  .h4-class {
    display: block;
    font-weight: bold;
    padding: 15px 0;
    text-decoration: underline;
  }
  .book-hover-underline {
    text-decoration: underline;
  }
  .wrap-left-books-main {
    padding-bottom: 10px;

  a {
    display: inline-block;
    margin: 0px 20px 10px 0;
    font-size: 14px;
  }

  }

  .wrap-left-books-main-line {
    border-bottom: 1px solid #ccc;
  }

  }
  }
</style>
