<template>
    <div>
      <div class="popover-wrap">
        <div class="popover-mask" v-if="isShow"  @click="closePopover"></div>
        <transition name="popover-drop">
          <div class="popover-main" v-if="isShow">
            <span class="popover-close" @click="closePopover">&xotime;</span>
            <slot><h3>这是一个单页面项目书城(仅供练习测试!!!!!)</h3></slot>
          </div>
        </transition>
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {}
    },
    methods: {
      closePopover () {
        this.$emit('popover-close')
      }
    },
    computed: {},
    components: {}
  }
</script>

<style scoped lang="less">
  .popover-wrap {
    position: fixed;
    width: 100%;
    height: 100%;

    .popover-mask {
      position: fixed;
      width: 100%;
      height: 100%;
      background: #000;
      opacity: 0.6;
      top: 0;
      left: 0;
      z-index: 10;
    }

    .popover-main {
      width: 50%;
      height: 50%;
      position: fixed;
      background: #fff;
      top: 20%;
      left: 50%;
      margin-left: -25%;
      z-index: 11;
      line-height: 1.6;

      .popover-close {
        font-size: 20px;
        position: absolute;
        right: 15px;
        top: 5px;
        width: 25px;
        height: 25px;
        text-align: center;
        cursor: pointer;
      }
      h3 {
        font-size: 20px;
        margin: 100px 0 0 100px;
      }

    }
  }

  .popover-drop-enter-active {
   transition: all .5s ease;
  }
  .popover-drop-leave-active {
    transition: all .3s ease;
  }
  .popover-drop-enter {
    transform: translateY(-500px);
  }
  .popover-drop-leave-active {
    transform: translateY(-500px);
  }
</style>
