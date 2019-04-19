<template>
  <div class="car_wrap">
    <Header></Header>
    <el-table ref="multipleTable" :data="listData" class="table" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column label="商品" width="220" align="center">
        <img src="https://i1.mifile.cn/a1/pms_1536893637.94181701!140x140.jpg" alt class="imgbox">
        <span class="good_name">卡卡</span>
        <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
      </el-table-column>
      <el-table-column prop="price" label="价格" width="120" align="center"></el-table-column>
      <el-table-column label="数量" width="200" align="center">
          <template slot-scope="scope">
        <el-input-number
          v-model="scope.row.num"
          @change="handleChange(scope.$index, scope.row._id)"
          :min="1"
          :max="10"
          class="in_num"
        ></el-input-number>
        </template> 
      </el-table-column>
      <el-table-column label="合计" width="120" align="center">
          <template slot-scope="scope">
        <span>{{scope.row.num * scope.row.price}}</span>
      </template>
      </el-table-column>
      <el-table-column label="编辑" width="120" align="center">
          <template slot-scope="scope">
        <i class="el-icon-delete" @click="handleDel(scope.row._id)"></i>
        </template>
      </el-table-column>
    </el-table>
    <div class="buy">
        <span class="compute">总计{{}}</span>
        <span class="take_it" @click="take_it">购买</span>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  },
  data() {
    return {
      checked: true,
    //   num:2,
      listData: [
        {
          img: "https://i1.mifile.cn/a1/pms_1546491118.91317371!220x220.jpg",
          name: "小米米米",
          price: 149,
          comment:
            "小米真好真好真好真好真好真好真好真好真好真好真好真好真好真好真好",
          user: "来自米家族的超级大帅叔",
          _id: 0,
          num: 1
        },
        {
          img: "https://i1.mifile.cn/a1/pms_1492999959.43955760!220x220.jpg",
          name: "小米米米",
          price: 149,
          comment:
            "小米真好真好真好真好真好真好真好真好真好真好真好真好真好真好真好",
          user: "来自米家族的超级大帅叔",
          _id: 1,
          num: 1
        }
      ]
    };
  },
  computed: {
    
  },
  methods: {
    handleChange(x,y) {

    },
    handleDel(id){
   console.log(id)
   this.$confirm("此操作将永久删除该文件, 是否继续?",'提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(()=>{

        }
            
        ).catch(err=>{
            this.$message({
                type: 'info',
            message: '已取消删除'
            })
        })
    },
    handleSelectionChange(){
        
    },
    take_it(){

    }
  }
};
</script>

<style lang="scss" scoped>
.table {
  max-width: 1000px;
  margin: 60px auto;
  img {
    vertical-align: middle;
  }
}
.buy{
    width: 1000px;
    height: 40px;
    margin: 100px auto;
    background: #fafafa;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .compute{
    color: #ff6700;
    }
    .take_it{
     width: 200px;
     height: 40px;
     background: #ff6700;
     border-radius: 20px;
     text-align: center;
     line-height: 40px;
     color: #fff;
     cursor: pointer;
    }
}
</style>