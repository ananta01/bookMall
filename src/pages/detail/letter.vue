<template>
  <div class="detail-wrap">
    <div class="detail-wrap-left">
      <navbooks :getBooksClass="computedData" :getBooks="computedClass"></navbooks>
    </div>
    <div class="detail-wrap-right">
      <banner :bannerImg="bannerImg" :bannerTime="bannerTime"></banner>
      <detail-show :computedClass="computedClass"></detail-show>
    </div>
  </div>
</template>

<script>
  import Navbooks from '../../components/navbooks';
  import DetailShow from '../../pages/detail/detailShow';
  import Banner from '../../components/banner';

  export default {
    data() {
      return {
        computedData: [],
        computedClass: {},
        bannerTime: 2000,
        bannerImg: [
          {
            src: require('../../assets/banner/letter/1.jpg'),
            title: '计算机/互联网',
            href: ''
          },
          {
            src: require('../../assets/banner/letter/2.jpg'),
            title: '普林斯顿公开课',
            href: ''
          },
          {
            src: require('../../assets/banner/letter/3.jpg'),
            title: 'python数据分析',
            href: ''
          },
          {
            src: require('../../assets/banner/letter/4.jpg'),
            title: '破茧成蝶2',
            href: ''
          }
        ]
      }
    },
    methods: {
    },
    computed: {},
    components: {
      Navbooks,
      DetailShow,
      Banner
    },
    created() {
      this.$http.get("/api/post").then(res => {
        this.computedData = res.data.getLetterBooks[0].bookclass;
        this.computedClass = res.data.getLetterBooks[1].booksTitle;
      })
    },
  }
</script>

<style scoped lang="less">
  .detail-wrap {
    width: 1080px;
    margin: 20px auto 0;

    .detail-wrap-left {
      float: left;
      margin-right: 20px;
    }
  }
</style>
