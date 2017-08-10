<template>
  <div class="mine">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-arrowleft mui-pull-left"></a>
      <button id="btnpublish" class="mui-btn mui-btn-link mui-btn-nav mui-pull-right">
        确认发布
      </button>
      <h1 class="mui-title">我的</h1>
    </header>
    <div id="personHTML" class="mui-content" style="padding-bottom: 80px;">
      <ul class="mui-table-view" style="margin-top: 0px;height: auto; ">
        <li id="setaccount" class="mui-table-view-cell mui-media" style="background-color:#BDF0FD ;height: 13rem;-moz-background-size:100% 100%;background-size:100% 100%;">

          <div class="mui-media-body" style="margin-top: 35px;">
            <div class="mui-pull-left" style="width:100px; height:100px; border-radius:100px; overflow:hidden;">
              <img id="iconhead" src="../../assets/logo.png" style="width:100px; height:100px; margin: auto 0" />
            </div>
            <div class="mui-pull-left" style="margin-top: 30px;margin-left:10px;">
              <span id="nickname" style="font-size: 18px;">昵称</span>
              <p  class="mui-ellipsis">金牌会员</p>
              <p id="Mobile" class="mui-ellipsis">手机号</p>
            </div>
          </div>

        </li>
        <li id="balance" class="mui-table-view-cell">
          <div class="divleft">
            <p id="sumbal" class="money">3张</p>
            <p>优惠券</p>
          </div>
          <div class="divright">
            <p id="operatebal" class="money">5009</p>
            <p>会员卡余额</p>
          </div>
        </li>
      </ul>
      <ul class="mui-table-view" style="margin-top: 10px;">
        <li class="mui-table-view-cell">
          <a id="fund" class="mui-navigate-right">
            <span class="mui-icon iconfont icon-zijinguanli mcolor" style="font-size: 19px;margin-top: -3px;"></span> 历史订单
          </a>
        </li>
      </ul>
      <ul class="mui-table-view" style="margin-top: 10px;">
        <li class="mui-table-view-cell">
          <a id="safecenter" class="mui-navigate-right">
            <span class="mui-icon iconfont icon-anquanzhongxin mcolor"></span> 安全中心
          </a>
        </li>
      </ul>
      <ul class="mui-table-view" style="margin-top: 10px;">
        <li class="mui-table-view-cell">
          <a id="setting" class="mui-navigate-right">
            <span class="mui-icon iconfont icon-zhanghaoxinxi mcolor" style="font-size: 21px;"></span> 账号设置
          </a>
        </li>
      </ul>
      <ul class="mui-table-view" style="margin-top: 10px;">
        <li class="mui-table-view-cell">
          <a id="feedback" class="mui-navigate-right">
            <span class="mui-icon iconfont icon-wodefankui mcolor" style="font-size: 18px;margin-top: -3px;"></span> 帮助与反馈
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus">

  .ui-logo {
    width: 60px;
    height: 600px;
    margin: 60px auto 25px auto;
    background-image: url(../../assets/logo.png);
    background-position: left center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 60px;
  }

  .money {
    font-size: 18px;
    color: #ee6a6a;
  }

  .span_money {
    position: absolute;
    right: 15px;
    font-size: 18px;
    color: #ee6a6a;
  }

  .span_money_unit {
    position: absolute;
    right: 15px;
    font-size: 18px;
    color: #777777;
  }

  .mcolor {
    color: #999;
    font-size: 20px;
    vertical-align: middle;
  }
  #personHTML .iconfont{
    margin-right: 5px;
  }
  .divleft {
    float: left;
    width: 50%;
    text-align: center;
  }


  .divright {
    border-left-style: dotted;
    border-left-color: #BBBBBB;
    border-left-width: thin;
    float: left;
    width: 50%;
    text-align: center;
  }

  .release {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 11111;
  }

  .li_release {
    list-style-type: none;
    float: left;
    width: 30%;
    margin-right: 5%;
    text-align: center;
    margin-bottom: 20px;
  }

  .end {
    margin-right: 0;
  }

  .mui-ios .mui-table-view-cell,
  .mui-android .mui-table-view-cell {
    /*清除点击后的背景*/
    background: none;
  }

  .mui-pull-top-pocket {
    top: -80px !important;
  }
  #copyorder{
    width:27.3rem;
    background:url(../../assets/logo.png) no-repeat;
    background-size:100% 100%;
    height:43.3rem;
    position: absolute;
    top: 10%;
    margin-left: 2.3rem;
    box-shadow: none;
  }
  .mui-table-view:after{
    background-color: #e7e7e7;
  }
  .mui-table-view:before{
    background-color: #e7e7e7;
  }
  .mui-table-view-cell:after{
    height: 0;
  }
  .mui-table-view-cell{
    font-size: 14px;
  }
  .mui-table-view{
    color: #444;
  }

  p{
    color: #444;
  }

  /*底部导航*/
  #Nav{
    padding-top: 5px;
    border-top:1px solid #ededed;
  }
  #Nav a{
    /*	display: table-cell;*/

    width: 25%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    /* white-space: nowrap;
     text-overflow: ellipsis;*/
    color: #929292;
    float: left;
    padding: 0;
    margin: 0;
  }
  #Nav .active{
    color: #38a3eb;
  }
  #Nav .navtab {
    display:block;
    overflow:hidden;
    font-size:14px;
    text-overflow:ellipsis
  }

  html,body,#Nav{
    max-width: 640px;
    margin: 0 auto;
  }
</style>
