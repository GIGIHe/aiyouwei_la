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
        <img :src="item.img" alt>
        <h2 class="title">{{item.name}}</h2>
        <p class="price">{{item.price}}</p>
        <transition name="my_transition">
          <div class="comment" v-show="showUpdate == index">
            <p>{{item.comment}}</p>
            <p>{{item.user}}</p>
            <i class="iconfont icon-gouwuche"></i>
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script >
import "../common/common.scss"
export default {
  data() {
    return {
      showUpdate: -1,
      isShow: false,
      listData: [
        {
          img: "https://i1.mifile.cn/a1/pms_1546491118.91317371!220x220.jpg",
          name: "小米米米",
          price: 149,
          comment:
            "小米真好真好真好真好真好真好真好真好真好真好真好真好真好真好真好",
          user: "来自米家族的超级大帅叔"
        },
        {
          img: "https://i1.mifile.cn/a1/pms_1492999959.43955760!220x220.jpg",
          name: "小米米米",
          price: 149,
          comment:
            "小米真好真好真好真好真好真好真好真好真好真好真好真好真好真好真好",
          user: "来自米家族的超级大帅叔"
        },
        {
          img: "https://i1.mifile.cn/a1/pms_1522309592.89679012!220x220.jpg",
          name: "小米米米",
          price: 149,
          comment:
            "小米真好真好真好真好真好真好真好真好真好真好真好真好真好真好真好",
          user: "来自米家族的超级大帅叔"
        },
        {
          img: "https://i1.mifile.cn/a1/pms_1536571975.28359503!220x220.jpg",
          name: "小米米米",
          price: 149,
          comment:
            "小米真好真好真好真好真好真好真好真好真好真好真好真好真好真好真好",
          user: "来自米家族的超级大帅叔"
        },
        {
          img: "https://i1.mifile.cn/a1/pms_1546508755.29828342!220x220.jpg",
          name: "小米米米",
          price: 149,
          comment:
            "小米真好真好真好真好真好真好真好真好真好真好真好真好真好真好真好",
          user: "来自米家族的超级大帅叔"
        }
      ]
    };
  },
  methods: {
    hover: function(index) {
      //   console.log(index)
      this.showUpdate = index;
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>