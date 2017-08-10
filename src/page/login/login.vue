<template>
  <div class="login">
    <header class="mui-bar mui-bar-nav">
      <h1 class="mui-title">登录</h1>
    </header>
    <div class="mui-content">
      <form id='login-form' class="mui-input-group">
        <div class="mui-input-row">
          <label>账号</label>
          <input type="text" class="mui-input-clear mui-input" v-model="account" placeholder="请输入账号">
        </div>
        <div class="mui-input-row">
          <label >密码</label>
          <input type="password" class="mui-input-clear mui-input" v-model="password" placeholder="请输入密码">
        </div>
      </form>
      <form class="mui-input-group">
        <ul class="mui-table-view mui-table-view-chevron">
          <li class="mui-table-view-cell">
            自动登录
            <div  class="mui-switch">
              <div class="mui-switch-handle"></div>
            </div>
          </li>
        </ul>
      </form>
      <div class="mui-content-padded">
        <button class="mui-btn mui-btn-block mui-btn-primary" @click="login">登录</button>
        <div class="link-area"><a id='reg'>注册账号</a> <span class="spliter">|</span> <a id='forgetPassword'>忘记密码</a>
        </div>
      </div>
      <div class="mui-content-padded oauth-area">

      </div>
    </div>
    <!--导航遮罩-->
    <!--<div id="Navmask" class="hide" style="width: 100%;height:100%;opacity:0.2;background: #000;z-index:999;position: fixed;top: 0; left: 0;"></div>-->
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        account: "",
        password: ""
      }
    },
    methods: {
      login (){
        if(!this.account){
          this.mui.toast('账号不能为空');
          return;
        }
        if(this.account.length < 6){
          this.mui.toast('账号长度不小于6位');
          return;
        }
        if(!this.password){
          this.mui.toast('密码不能为空');
          return;
        }
        if(this.password.length < 6){
          this.mui.toast('密码长度不小于6位');
          return;
        }
        this.$router.push({ path: 'goodsList', query: { plan: 'private' }})
      }
    }
  }
</script>

<style>
  .area {
    margin: 20px auto 0px auto;
  }

  .mui-input-group {
    margin-top: 10px;
  }

  .mui-input-group:first-child {
    margin-top: 20px;
  }

  .mui-input-group label {
    width: 22%;
  }

  .mui-input-row label~input,
  .mui-input-row label~select,
  .mui-input-row label~textarea {
    width: 78%;
  }

  .mui-checkbox input[type=checkbox],
  .mui-radio input[type=radio] {
    top: 6px;
  }

  .mui-content-padded {
    margin-top: 25px;
  }

  .mui-btn {
    padding: 10px;
  }

  .link-area {
    display: block;
    margin-top: 25px;
    text-align: center;
  }

  .spliter {
    color: #bbb;
    padding: 0px 8px;
  }

  .oauth-area {
    position: absolute;
    bottom: 20px;
    left: 0px;
    text-align: center;
    width: 100%;
    padding: 0px;
    margin: 0px;
  }

  .oauth-area .oauth-btn {
    display: inline-block;
    width: 50px;
    height: 50px;
    background-size: 30px 30px;
    background-position: center center;
    background-repeat: no-repeat;
    margin: 0px 20px;
    /*-webkit-filter: grayscale(100%); */
    border: solid 1px #ddd;
    border-radius: 25px;
  }

  .oauth-area .oauth-btn:active {
    border: solid 1px #aaa;
  }

  .oauth-area .oauth-btn.disabled {
    background-color: #ddd;
  }
</style>
