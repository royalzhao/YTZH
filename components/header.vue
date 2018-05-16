<template>
  <div class="container">
    <b-navbar toggleable="md" type="light" variant="info">
      
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      
        <b-navbar-brand href="/">
          <img class="logo" src="~assets/img/logo_header.png" alt="">
        </b-navbar-brand>
      
        <b-collapse is-nav id="nav_collapse">
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item :class="{active:$store.state.show==1}" @click="selectIndex()">首页</b-nav-item>
            <b-nav-item :class="{active:$store.state.show==2}" @click="selectCompanyProfile()" >企业概况</b-nav-item>
            <b-nav-item :class="{active:$store.state.show==3}" @click="selectNews()">新闻中心</b-nav-item>
            <b-nav-item :class="{active:$store.state.show==4}" @click="selectProductShow()">产品展示</b-nav-item>
            <b-nav-item :class="{active:$store.state.show==5}" @click="selectHealthy()">肽与健康</b-nav-item>
            <b-nav-item :class="{active:$store.state.show==6}" @click="selectContact()">联系我们</b-nav-item>
          
          </b-navbar-nav>
      
        </b-collapse>
      </b-navbar>
  </div>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'
  export default {
    data(){
      return{
        
      }
    },
    methods:{
      // 导航切换，不能直接使用href链接的原因是在设置store里的show状态的状态可能会发生冲突设置无效，也就导致active无法顺利切换
      selectIndex(){
        this.$store.commit('selectIndex')
        this.$router.push('/')
      },
      selectCompanyProfile(){
        this.$store.commit('selectCompanyProfile')
        this.$router.push('/companyProfile')
      },
      selectNews(){
        this.$store.commit('selectNews')
        this.$router.push('/news')
      },
      selectProductShow(){
        this.$store.commit('selectProductShow')
        this.$router.push('/productShow')
      },
      selectHealthy(){
        this.$store.commit('selectHealthy')
        this.$router.push('/healthy')
      },
      selectContact(){
        this.$store.commit('selectContact')
        this.$router.push('/contact')
      },
      // 导航切换部分结束
      
    }
  }
</script>

<style scoped>
  .container{
    margin: 10px auto;
  }
  .logo{
    width: 160px;
  }
  .bg-info{
    background-color:white !important;
  }
  .navbar-expand-md .navbar-nav .nav-link{
    padding-right: 1.2rem;
    padding-left: 1.2rem;
  }
  .navbar-light .navbar-nav .show > .nav-link, .navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .nav-link.active{
    background: #009acc;
    border-radius: 20px;
    color: #fff !important;
  }
  .navbar-toggler{
    border: 1px solid #ddd;
  }
  .navbar-dark .navbar-toggler{
    color: #ddd;
    border-color: #ddd;
  }
  @media screen and (max-width: 992px) {
    .navbar-expand-md .navbar-nav .nav-link{
      padding-right: 1rem;
      padding-left: 1rem;
    }
    
  }
  @media screen and (max-width: 768px) {
    .navbar{
      flex-direction: row-reverse;
    }
  }
</style>
