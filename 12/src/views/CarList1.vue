<template>
    <div class="car_wrap">
    <Header></Header>  
     <ul class="row">
       <li>商品</li> 
       <li>价格</li> 
       <li>数量</li> 
       <li>总价</li> 
       <li>编辑</li> 
     </ul>
     <ul class="car_list">
         <li v-for="(item,index) in listData" :key = "index">
             <div class="goods">
            <input type="checkbox" v-model="checked" class="ch_box">
             <img src="https://i1.mifile.cn/a1/pms_1536893637.94181701!140x140.jpg" alt="" class="imgbox">
             <p class="good_name" v-text="item.name">卡卡</p>
             </div>
             <p class="price" v-text="item.price">1222</p>
             <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字" class="in_num"></el-input-number>
              <p class="t_price" v-text="total_price">1222</p>
           <i class="el-icon-delete dele" @click="handleDel(item._id)"></i>
         </li>
     </ul>
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
export default {
    components:{
       Header 
    },
        data(){
            return{
        checked:true,
        num:1,
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
        }
        ]
        }

    },
    computed:{
        total_price(){
         return this.num * 100
        }
    },
    methods:{
        handleEdit(id){

        },
        handleChange(){

        }
    }
}
</script>

<style lang="scss" scoped>
.row{
    display: flex;
    width: 1000px;
    margin: 100px auto;
    li{
        border: 1px solid #eee;
        line-height: 60px;
        text-align: center;
        color: #fff;
        background-color: rgb(148, 144, 144);
    }
    li:nth-child(1){
     width: 40%;
    }
    li:nth-child(2){
    width: 10%;
    }
    li:nth-child(3){
     width: 20%;
    }
    li:nth-child(4){
    width: 20%;
    }
    li:nth-child(5){
    width: 10%;
    }
}
.car_list{
    width: 1000px;
    margin: 10px auto;
    text-align: center;
    li{
        display: flex;
        align-items: center;
        background: #fff;
        border: 1px solid #eee;
        height: 100px;
    .goods{
         width: 40%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .price{
        width: 10%;
        }
    .t_price{
         width: 20%;
    }
    .in_num{
        width: 20%;
    }
    .dele{
        flex:1;
    }
    }
    .imgbox{
        width: 40px;
        height: 80px;
        // border: 1px solid red;
    }
}
</style>