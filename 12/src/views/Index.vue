<template>
    <div>
       <Header></Header>
       <Content :listData = "listData"></Content>
       <Content :listData = "listData"></Content>
       <Footer></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import Content from "@/components/Content.vue"
// import test from "@/components/test.vue"
    export default {
        components:{
            Header,
            Footer,
            Content,
            // test
        },
        data(){
            return{
                 listData: [
        {
          img: "https://i1.mifile.cn/a1/pms_1546491118.91317371!220x220.jpg",
          name: "小米米米",
          price: 149,
          comment:
            "小米真好真好真好真好真好真好真好真好真好真好真好真好真好真好真好",
          user: "来自米家族的超级大帅叔",
          _id:0
        },
        {
          img: "https://i1.mifile.cn/a1/pms_1492999959.43955760!220x220.jpg",
          name: "小米米米",
          price: 149,
          comment:
            "小米真好真好真好真好真好真好真好真好真好真好真好真好真好真好真好",
          user: "来自米家族的超级大帅叔",
          _id:1
        },
        {
          img: "https://i1.mifile.cn/a1/pms_1522309592.89679012!220x220.jpg",
          name: "小米米米",
          price: 149,
          comment:
            "小米真好真好真好真好真好真好真好真好真好真好真好真好真好真好真好",
          user: "来自米家族的超级大帅叔",
          _id:2
        },
        {
          img: "https://i1.mifile.cn/a1/pms_1536571975.28359503!220x220.jpg",
          name: "小米米米",
          price: 149,
          comment:
            "小米真好真好真好真好真好真好真好真好真好真好真好真好真好真好真好",
          user: "来自米家族的超级大帅叔",
          _id:3
        },
        {
          img: "https://i1.mifile.cn/a1/pms_1546508755.29828342!220x220.jpg",
          name: "小米米米",
          price: 149,
          comment:
            "小米真好真好真好真好真好真好真好真好真好真好真好真好真好真好真好",
          user: "来自米家族的超级大帅叔",
          _id:4
        }
      ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>