<template>
  <div class="H_wraper">
    <div class="inner">
      <div class="left">
        <!-- <h2 class="hover logo"></h2> -->
      </div>
      <div class="right">
          <h2 v-show="!isLogin" class="hover">请登录</h2>
        <img src="../assets/logo.png" alt ="天中商城欢迎您"  v-show="isLogin">
        <h2 v-show="isLogin" class="hover">hekukk</h2>
        <h2 v-show="isLogin" class="hover">退出</h2>
        <el-badge :value="num" class="item">
          <i class="iconfont icon-gouwuche"></i>
        </el-badge>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isLogin:false,
            num:1
        }
    }
};
</script>

<style lang="scss" scoped>
.H_wraper {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #eee;
  background: rgb(245,245,245);
  font-size: 12px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.inner {
  width: 80%;
  margin: 0 auto;
  .left {
    float: left;
    height: 100%;
    display: flex;
  }
  .right {
    float: right;
    height: 100%;
    display: flex;
  }
  h2 {
    font-weight: 400;
    color: #666;
    margin-right: 10px;
    cursor: pointer;
  }
  h2.logo{
      width: 603px;
      margin-top: 5px;
      height: 30px;
      background:url("../assets/2.png") no-repeat center;
  }
  img{
      width: 30px;
      height: 30px;
      vertical-align: middle;
      align-self:center;
  }
  .hover:hover{
    color: #f40;
  }
  /deep/ .icon-gouwuche{
      font-size: 26px;
  }
  /deep/ .el-badge__content.is-fixed{
    top: 10px;
    right: 8px;
  }
}
</style>