<template>
  <div class="wraper">
    <ul>
      <li
        class="item"
        v-for="(item,index) in listData"
        :key="index"
        @mouseover="hover(index)"
        @mouseout="showUpdate = -1"
        :class="showUpdate == index?'boxshow':''"
      >
        <img v-lazy="item.img" alt>
        <h2 class="title">{{item.name}}</h2>
        <p class="price">{{item.price}}</p>
        <transition name="my_transition">
          <div class="comment" v-show="showUpdate == index">
            <p>{{item.comment}}</p>
            <p>{{item.user}}</p>
            <p class="gouwuche" @click="addCar(item._id)">加入购物车</p>
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script >
import "../common/common.scss"
import {mapState} from "vuex"
export default {
  props:{
    listData:{
      type:Array
    }
  },
  data() {
    return {
      showUpdate: -1,
    };
  },
  computed:{
...mapState(["userInfo"])
  },
  methods: {
    hover: function(index) {
      //   console.log(index)
      this.showUpdate = index;
    },
    addCar(id){
      console.log(id)
      if(this.userInfo){
   this.$axios.post().then(res=>{

   })
      }else{
        this.$message({
          type:"warning",
          message:'请先登录'
        })
      }
    }
  }
};
</script>

<style lang="scss" scoped>

</style>