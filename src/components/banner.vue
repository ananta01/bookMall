<template>
    <div class="banner-wrap" @mouseover="clearAuto" @mouseout="autoBanner">
        <div class="banner-img" >
          <a :href="bannerImg[nowIndex].href">
            <transition name="banner-trans">
              <img v-if="isShow" :src="bannerImg[nowIndex].src" :alt="bannerImg[nowIndex].title">
            </transition>
            <transition name="banner-trans-old">
              <img v-if="!isShow" :src="bannerImg[nowIndex].src" :alt="bannerImg[nowIndex].title">
            </transition>
          </a>
        </div>

        <div class="banner-title">
          <h3>{{ bannerImg[nowIndex].title }}</h3>
          <ul>
            <li :class="{ 'banner-active' : nowIndex === index }" v-for="(item,index) in bannerImg"
                @click="going(index)"></li>
          </ul>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      bannerImg: {
        type: Array,
        default: []
      },
      bannerTime: {
        type: Number,
        default: 1000
      }
    },
    data() {
      return {
        nowIndex: 0,
        isShow: false,
        isHide: true
      }

    },
    methods: {
      going (index) {
        this.isShow = false;
        setTimeout(() => {
          this.isShow = true;
          this.nowIndex = index
        }, 10)
      },
      autoBanner () {
        this.timer = setInterval(() => {
          this.going(this.nextGoing)
        }, this.bannerTime)
      },
      clearAuto () {
        clearInterval(this.timer)
      }
    },
    mounted () {
      this.autoBanner();
    },
    computed: {
      prevGoing () {
        if(this.nowIndex === 0) {
          return this.bannerImg.length - 1;
        }else {
          return this.nowIndex - 1;
        }
      },
      nextGoing () {
        if(this.nowIndex === this.bannerImg.length - 1) {
          return 0;
        }else {
          return this.nowIndex + 1;
        }
      }
    },
    components: {}
  }
</script>

<style scoped lang="less">
  .banner-wrap {
    overflow: hidden;
    width: 780px;
    height: 400px;
    position: relative;

    .banner-img a img{
      width: 100%;
      position: absolute;
      top: 0;
    }

    .banner-title {
      position: absolute;
      bottom: 0;
      height: 40px;
      width: 100%;
      background: rgba(0,0,0, .2);

      h3 {
        margin: 14px 0 0 45px;
        color: #fff;
        text-decoration: underline;
        width: 200px;
        overflow: hidden;
      }

      ul {
        position: absolute;
        left: 50%;
        bottom: 12px;
        margin-left: -50px;

        li {
          display: inline-block;
          float: left;
          width: 15px;
          height: 15px;
          background: #ffffff;
          margin-right: 15px;
          border-radius: 50%;
          cursor: pointer;
        }

        .banner-active {
          background: #43BAF1;
        }
      }
    }

    .banner-doing-hide {
      display: none;
    }

    .banner-left,.banner-right {
      position: absolute;
      font-size: 100px;
      color: rgba(255,255,255, .8);
      top: 50%;
      margin-top: -50px;
      cursor: pointer;
    }
    .banner-left {
      left: 20px;
    }
    .banner-right {
      right: 20px;
    }
  }
  .banner-trans-enter-active {
    transition: all .5s;
  }
  .banner-trans-enter {
    transform: translateX(780px);
  }
  .banner-trans-old-leave-active {
    transition: all .5s;
    transform: translateX(-780px);
  }
</style>
