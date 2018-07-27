<template>
    <div class="login-wrap">
      <h2>帐号登录</h2>
      <div class="login-main">
        <div class="name-input">
          <label for="login-name" class="name-label"></label>
          <input v-model="username" type="text" id="login-name" placeholder="邮箱/用户名/已验证手机">
        </div>
        <div class="pwd-input">
          <label for="login-pwd" class="pwd-label"></label>
          <input v-model="pwdname" type="password" id="login-pwd" placeholder="密码">
        </div>
        <span class="forgetPwd">忘记密码</span>
        <div class="login-btn">
          <a class="button" @click="goLogin">登 录</a>
          <span class="errorText">{{ errorText }}</span>
        </div>
        <img src="../assets/login.jpg">
      </div>

    </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        pwdname: '',
        errorText: ''
      }
    },
    methods: {
      goLogin () {
        if(this.inUserName.succeed || this.inPwdName.succeed) {
          this.username = '';
          this.$http.get('/api/post').then((res) => {
              this.$emit('user-data', res.data.login)
          }, (err) => {
            console.log(err);
          })


        }else {
          this.errorText = '⨂用户名或密码错误'
        }

      }
    },
    computed: {
      inUserName () {
        let succeed, errorText, reg;
        reg = /^\w{1,8}$/g;
        if(reg.test(this.username)) {
          succeed = true;
          errorText = ''
        }else {
          succeed = false;
          errorText = '请勿输入非法字符'
        }

        if(!this.userInit) {
          errorText = '';
          this.userInit = true
        }

        return {
          succeed,
          errorText
        }
      },

      inPwdName () {
        let succeed, errorText, reg;
        reg = /^\w{1,8}$/g;
        if(reg.test(this.username)) {
          succeed = true;
          errorText = ''
        }else {
          succeed = false;
          errorText = '密码不是1-8位'
        }

        if(!this.pwdInit) {
          errorText = '';
          this.pwdInit = true
        }

        return {
          succeed,
          errorText
        }
      }
    },
    components: {}
  }
</script>

<style scoped lang="less">

  .login-wrap {
    margin: 20px 0 0 40px;
    height: 400px;

    h2 {
      font-size: 18px;
      font-weight: bold;
      padding: 10px 0 20px 0;
    }

    .login-main {
      width: 288px;
      min-height: 400px;

      .name-input, .pwd-input {
          position: relative;

        #login-name, #login-pwd {
          width: 240px;
          height: 34px;
          font-size: 16px;
          padding-left: 10px;
          margin: 0 0 15px 38px;
          outline:none;
        }

        .pwd-label, .name-label {
          width: 38px;
          height: 38px;
          position: absolute;
          border: 1px solid #afafaf;
        }
        .name-label {
          background: url("../assets/pwd-icons-new.png") no-repeat 0 0;
        }
        .pwd-label {
          background: url("../assets/pwd-icons-new.png") no-repeat -48px 0;
        }

        .pwd-label:hover {
          background: url("../assets/pwd-icons-new.png") no-repeat -48px -48px;
        }

        .name-label:hover {
          background: url("../assets/pwd-icons-new.png") no-repeat 0 -48px;
        }
      }

      .forgetPwd {
        float: right;
        color: #b1b1b1;
        margin-top: -5px;
        cursor: pointer;
      }

      .forgetPwd:hover {
        color: #ff2b00;
      }

      .login-btn {
        margin-top: 25px;
        .button {
          width: 292px;
          height: 35px;
          background: #43baf1;
          display: block;
          color: #fff;
          line-height: 35px;
          text-align: center;
          font-size: 16px;
          cursor: pointer;
        }

        .button:hover {
          background: #00a5eb;
        }
        .errorText {
          display: inline-block;
          padding: 8px 0 0 90px;
          color: #ff2b00;
        }
      }

      img {
        position: absolute;
        top: 25px;
        right: 130px;
      }

    }
  }
</style>
