<template>
    <div>
      <div class="layout-header">
        <div class="header-container">
          <div class="header-container-left">
            <router-link to="/">
              <img src="../assets/logo.png" alt="书城LOGO" title="欢迎来到书城测试首页">
            </router-link>
          </div>
          <div class="header-container-right">
            <ul>
              <li><span class="back-active" v-if="username !== ''">{{ username }}</span>
              </li>
              <li><span :class="{ 'back-active': nowIndex === '1'}"
                        @click="activePopover('1', 'showLogin')"
                        v-if="username === ''">登录</span>
              </li>
              <li><span :class="{ 'back-active': nowIndex === '2'}"
                        @click="activePopover('2', 'showReg')"
                        v-if="username === ''">注册</span>
              </li>
              <li><span @click="quit"
                        v-if="username !== ''">退出</span>
              </li>
              <li><span :class="{ 'back-active': nowIndex === '3'}"
                        @click="activePopover('3', 'showAbout')">关于书城</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="layout-content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <div class="layout-footer">
        <div class="footer-container">
          <p>&copy; 2018 vue书城项目(仅供测试)</p>
        </div>
      </div>
      <popover :is-show="showLogin" @popover-close="closePopover('showLogin')">
        <login @user-data="userData"></login>
      </popover>
      <popover :is-show="showReg" @popover-close="closePopover('showReg')">
        <register></register>
      </popover>
      <popover :is-show="showAbout" @popover-close="closePopover('showAbout')"></popover>
    </div>
</template>

<script>
  import Popover from './base/popover';
  import Login from './login';
  import Register from './register';

  export default {
    data() {
      return {
        nowIndex: 1,
        showAbout: false,
        showLogin: false,
        showReg: false,
        showQuit: false,
        username: ''
      }
    },
    methods: {
      activePopover (index, attr) {
        this.nowIndex = index;
        this[attr] = true;
      },
      closePopover (attr) {
        this[attr] = false;
      },
      userData (data) {
        console.log(data);
        this.closePopover('showLogin');
        this.username = data.username
      },
      quit () {
        let quitLogin = confirm('您确定要退出吗？');
        quitLogin == true ? this.username = '' : ''
      }
    },
    computed: {},
    components: {
      Popover,
      Login,
      Register
    }
  }
</script>

<style lang="less">
/*layout组件做为布局header和footer*/

html, body, div, span, applet, object, iframe,
h1, h2, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}

body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}

  .layout-header {
    width: 100%;
    height: 100px;
    background: #393939;
    overflow: hidden;

    .header-container {
      width: 1200px;
      margin: 0 auto;

      .header-container-left {
        float: left;

        img {
          width: 120px;
        }
      }

      .header-container-right {
        float: right;

        ul {
          margin-top: 40px;
          overflow: hidden;

          li {
            float: left;
            color: #f1f1f1;
            margin-right: 35px;

            span {
              display: inline-block;
              width: 100%;
              padding: 0 12px 0 12px;
              height: 30px;
              text-align: center;
              line-height: 30px;
              border-radius: 20px;
              cursor: pointer;
            }
            span:hover {
              background: #161616;
            }
            .back-active {
              background: #161616;
            }
          }
        }
      }
    }
  }

.layout-footer {
  width: 100%;
  height: 150px;
  clear: both;
  margin-top: 30px;
  background-color: #eaebef;

  .footer-container {
    width: 1200px;
    margin: 0 auto;
    text-align: center;

    p {
      padding-top: 50px;
    }
  }

}


</style>
