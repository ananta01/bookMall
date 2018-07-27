<template>
  <div class="book-show-wrap">
    <h4 class="book-show-title">新书排行榜</h4>
    <ul class="book-show-list">
      <li v-for="(bookItem, index) in booksShow" :key="index">
        <a href="#">
          <img :src="bookItem.src" :alt="bookItem.name" :title="bookItem.name">
          <div class="book-show--name">{{bookItem.name}}</div>
          <div class="book-show-price">
            <em>{{ bookItem.price }}</em>
            <del>{{ bookItem.oldPrice }}</del>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        booksShow: [
          {
            id: 1,
            src: require('../assets/sidebar/1.jpg'),
            name: '时间看得见',
            price: '¥44.30',
            oldPrice: '¥59.00'
          },
          {
            id: 2,
            src: require('../assets/sidebar/2.jpg'),
            name: '故事经济学（好莱坞编剧教父罗伯特·麦基最新力作',
            price: '¥43.90',
            oldPrice: '¥68.00'
          },
          {
            id: 3,
            src: require('../assets/sidebar/3.jpg'),
            name: '给忙碌者的天体物理学',
            price: '¥37.80',
            oldPrice: '¥62.80'
          }
        ]
      }
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>

<style scoped lang="less">

  .book-show-wrap {
    width: 195px;
    height: 100%;
    overflow: hidden;
    margin-left: 20px;

    .book-show-title {
      background: #393939;
      height: 30px;
      color: #fff;
      padding-left: 20px;
      line-height: 30px;

    }

    .book-show-list {
      width: 780px;



      li {
        width: 25%;
        background: #fff;
        position: relative;

        a {
          display: block;
          width: 100%;
          height: 100%;

          img {
            display: inline-block;
            padding: 10px 10px 10px 15px;
          }

          .book-show--name {
            font-size: 12px;
            float: right;
            padding: 0 18px 12px 0;
            width: 162px;
            overflow: hidden;
            white-space:nowrap;
            text-overflow:ellipsis

          }
          .book-show--name:hover {
            color: #fa2846;
          }

          .book-show-price {
            padding: 25px 0 11px 16px;

            em {
              font-size: 20px;
              color: #fa2846;
            }

            del {
              font-size: 12px;
              color: #666;
            }
          }
        }
      }
    }
  }
</style>
