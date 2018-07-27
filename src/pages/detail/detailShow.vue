<template>
    <div class="book-show-wrap">
      <h4 class="book-show-title">{{computedClass.title }}</h4>
      <ul class="book-show-list">
        <li v-for="(bookItem, index) in booksShow" :key="index">
          <a href="#">
            <span :class="[{'book-show-line' : booksShow.length - 1 !== index}]"></span>
            <img :src="bookItem.src" :alt="bookItem.name" :title="bookItem.name">
            <div class="book-show--name">{{bookItem.name}}</div>
            <div class="book-show-price">
              <em>{{ bookItem.price }}</em>
              <del>{{ bookItem.oldPrice }}</del>
              <span></span>
            </div>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    props: {
      computedClass: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {
        booksShow: [
          {
            id: 1,
            src: require('../../assets/bookShow/1.jpg'),
            name: '苏珊·桑塔格全集（套装16册）',
            price: '¥539.00',
            oldPrice: '¥1060.00'
          },
          {
            id: 2,
            src: require('../../assets/bookShow/2.jpg'),
            name: '别在吃苦的年纪选择安逸',
            price: '¥9.90',
            oldPrice: '¥35.00'
          },
          {
            id: 3,
            src: require('../../assets/bookShow/3.jpg'),
            name: '朝花夕拾 鲁讯原著 教育部推荐',
            price: '¥14.80',
            oldPrice: '¥32.80'
          },
          {
            id: 4,
            src: require('../../assets/bookShow/4.jpg'),
            name: 'Java高并发编程详解：多线程与架构设计',
            price: '¥74.80',
            oldPrice: '¥89.80'
          },
          {
            id: 5,
            src: require('../../assets/bookShow/3.jpg'),
            name: '朝花夕拾 鲁讯原著 教育部推荐',
            price: '¥14.80',
            oldPrice: '¥32.80'
          },
          {
            id: 1,
            src: require('../../assets/bookShow/1.jpg'),
            name: '苏珊·桑塔格全集（套装16册）',
            price: '¥539.00',
            oldPrice: '¥1060.00'
          },
          {
            id: 2,
            src: require('../../assets/bookShow/2.jpg'),
            name: '别在吃苦的年纪选择安逸',
            price: '¥9.90',
            oldPrice: '¥35.00'
          },
          {
            id: 3,
            src: require('../../assets/bookShow/3.jpg'),
            name: '朝花夕拾 鲁讯原著 教育部推荐',
            price: '¥14.80',
            oldPrice: '¥32.80'
          },
          {
            id: 4,
            src: require('../../assets/bookShow/4.jpg'),
            name: 'Java高并发编程详解：多线程与架构设计',
            price: '¥74.80',
            oldPrice: '¥89.80'
          },
          {
            id: 5,
            src: require('../../assets/bookShow/3.jpg'),
            name: '朝花夕拾 鲁讯原著 教育部推荐',
            price: '¥14.80',
            oldPrice: '¥32.80'
          },
          {
            id: 1,
            src: require('../../assets/bookShow/1.jpg'),
            name: '苏珊·桑塔格全集（套装16册）',
            price: '¥539.00',
            oldPrice: '¥1060.00'
          },
          {
            id: 2,
            src: require('../../assets/bookShow/2.jpg'),
            name: '别在吃苦的年纪选择安逸',
            price: '¥9.90',
            oldPrice: '¥35.00'
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
    width: 780px;
    height: 100%;
    overflow: hidden;
    margin-top: 20px;

    .book-show-title {
      font-size: 20px;
      font-weight: 700;
      color: #fff;
      padding: 15px 0 8px 15px;
      width: 765px;
      background: #43baf1;
    }

    .book-show-list {
      width: 780px;



      li {
        width: 25%;
        float: left;
        background: #fff;
        position: relative;
        margin-bottom: 10px;

        a {
          display: block;
          width: 100%;
          height: 100%;

          .book-show-line {
            width: 1px;
            height: 160px;
            background: #e3e3e3;
            position: absolute;
            right: 0;
            top: 45px;
          }

          img {
            display: inline-block;
            padding: 10px 10px 10px 15px;
          }

          .book-show--name {
            font-size: 12px;
            float: right;
            padding: 0 18px 20px 0;
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
            position: relative;

            em {
              font-size: 20px;
              color: #fa2846;
            }

            del {
              font-size: 12px;
              color: #666;
            }

            span {
              display: inline-block;
              width: 18px;
              height: 16px;
              background: url("../../assets/car.png") no-repeat;
              position: absolute;
              right: 30px;
            }
          }
        }
      }
    }
  }
</style>
