<template>
    <div class="headline-wrap" @mouseover.stop="claerHead" @mouseout.stop="autoHead">
      <div class="headline-left"></div>
      <div class="headline-right">
        <transition name="headline-trans">
          <span class="headline-right-data" v-if="isShow">{{ headlineData[nowIndex].title }}</span>
        </transition>
        <transition name="headline-trans-old">
          <span class="headline-right-data" v-if="!isShow">{{ headlineData[nowIndex].title }}</span>
        </transition>
      </div>
    </div>
</template>
<script>


  export default {
    data() {
      return {
        nowIndex: 0,
        isShow: false,
        headlineData : [
          {
            title: '读享夏日 经管励志每满100减30'
          },
          {
            title: '文学小说 每满100减30'
          },
          {
            title: '夏日阅读季 满99减30'
          }
        ]
      }
    },
    methods: {
      gotoHead (index) {
        this.isShow = false;
        setTimeout(() => {
          this.isShow = true;
          this.nowIndex = index
        }, 10)
      },

      autoHead () {
        this.timerHead = setInterval(() => {
          this.gotoHead(this.prevHead);
        }, 3000)
      },

      claerHead () {
        clearInterval(this.timerHead)
      }

    },
    computed: {
      prevHead () {
        if(this.nowIndex === this.headlineData.length - 1) {
          return 0;
        }else {
          return this.nowIndex + 1;
        }
      },
    },
    components: {},
    mounted () {
      this.autoHead();
    }
  }
</script>

<style scoped lang="less">
  .headline-wrap {
    width: 780px;
    height: 50px;
    overflow: hidden;
    background: #fff;

    .headline-left {
      width: 83px;
      height: 40px;
      padding-top: 5px;
      float: left;
      background: url("../assets/mes.png") no-repeat 0 5px;
    }

    .headline-right {
      position: relative;

      .headline-right-data {
        display: block;
        height: 50px;
        font-size: 22px;
        line-height: 50px;
        margin-left: 110px;
        cursor: pointer;
      }
      .headline-right-data:hover {
        text-decoration: underline;
      }

    }
  }
  ul {
    position: absolute;
    top: 0;
  }
  .headline-trans-enter-active {
    transition: all .5s;
  }
  .headline-trans-enter {
    transform: translateY(50px);
  }
  .headline-trans-old-leave {
    transform: translateY(-100px);
  }


</style>
