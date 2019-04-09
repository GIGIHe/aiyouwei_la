<template>
    <div>
       <Header></Header>
       <Content></Content>
       <test></test>
       <Footer></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import Content from "@/components/Content.vue"
import test from "@/components/test.vue"
    export default {
        components:{
            Header,
            Footer,
            Content,
            test
        }
    }
</script>

<style lang="scss" scoped>

</style>