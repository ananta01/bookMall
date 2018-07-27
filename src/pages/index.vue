<template>
    <div class="content-wrap">
      <div class="content-wrap-left">
        <navbooks :getBooksClass="getBooksClass" :getBooks="getBooks"></navbooks>
      </div>
      <div class="content-wrap-main">
        <banner :bannerImg="bannerImg" :bannerTime="bannerTime"></banner>
        <headline></headline>
        <book-show></book-show>
      </div>
      <div class="content-wrap-right">
        <sidebar></sidebar>
      </div>
    </div>
</template>

<script>
  import Banner from '../components/banner';
  import Headline from '../components/headline';
  import BookShow from '../components/bookShow';
  import Sidebar from '../components/sidebar';
  import Navbooks from '../components/navbooks';

  export default {
    components: {
      Banner,
      Headline,
      BookShow,
      Sidebar,
      Navbooks
    },
    data() {
      return {
        getBooksClass: [],
        getBooks: {},
        bannerTime: 2000,
        bannerImg: [
          {
            src: require('../assets/banner/1.jpg'),
            title: '计算机/互联网',
            href: ''
          },
          {
            src: require('../assets/banner/2.jpg'),
            title: '普林斯顿公开课',
            href: ''
          },
          {
            src: require('../assets/banner/3.jpg'),
            title: 'python数据分析',
            href: ''
          },
          {
            src: require('../assets/banner/4.jpg'),
            title: '破茧成蝶2',
            href: ''
          }
        ]
      }
    },
    created() {
      this.$http.get("/api/post").then(res => {
        this.getBooksClass = res.data.getAllBooksClass[0].bookclass;
        this.getBooks = res.data.getAllBooksClass[1].booksTitle;
      })
    },
    methods: {},
    computed: {}
  }
</script>

<style scoped lang="less">

  .content-wrap {
    width: 1280px;
    margin: 20px auto;
    overflow: hidden;
    .content-wrap-left {
      width: 240px;
      float: left;


    }
    .content-wrap-main {
      float: left;
    }
    .content-wrap-right {
      overflow: hidden;
    }

  }
</style>
