<template>
    <div>
       <Header></Header>
       <Nav></Nav>
       <Footer></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import Nav from "@/components/Nav.vue"
    export default {
        components:{
            Header,
            Footer,
            Nav
        }
    }
</script>

<style lang="scss" scoped>

</style>