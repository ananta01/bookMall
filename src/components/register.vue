<template>
    <div class="login-wrap">
      <h2>帐号注册</h2>
      <div class="login-main">
        <div class="name-input">
          <label for="login-name" class="name-label"></label>
          <input type="text" id="login-name" placeholder="请输入用户名">
        </div>
        <div class="pwd-input">
          <label for="login-pwdtwo" class="pwd-label"></label>
          <input type="password" id="login-pwdtwo" placeholder="请输入密码">
        </div>
        <div class="pwd-input">
          <label for="login-pwd" class="pwd-label"></label>
          <input type="password" id="login-pwd" placeholder="请再次输入密码">
        </div>
        <div class="login-btn">
          <a class="button">注 册</a>
        </div>
        <img src="../assets/login.jpg">
      </div>

    </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>

<style scoped lang="less">

  .login-wrap {
    margin: 20px 0 0 40px;

    h2 {
      font-size: 18px;
      font-weight: bold;
      padding: 10px 0 20px 0;
    }

    .login-main {
      width: 288px;

      .name-input, .pwd-input {
          position: relative;

        #login-name, #login-pwd, #login-pwdtwo {
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
      }

      img {
        position: absolute;
        top: 25px;
        right: 130px;
      }

    }
  }
</style>
