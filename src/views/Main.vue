<template>
  <el-container>
    <el-header class="header">
      <Header/>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <NavMenu/>
      </el-aside>
      <el-main>
        <div class="content">
          <div class="section">
            <router-view></router-view>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavMenu from '@/components/NavMenu'
import Header from '@/components/Header'

export default {
  name: '',
  components: {
    NavMenu,
    Header
  },
  beforeCreate () {
    console.log('register tron web Action dispatched from Home.vue')
    if (!this.$store.state.web3.web3Data.web3Instance){
      this.$store.dispatch('GET_WEB3_INSTANCE').then(() => {
        this.$store.dispatch('GET_FACTORY_INSTANCE')
      })
    }
  },
  computed: {

  }
}

</script>

<style>
.header {
  background-color: #409EFF;
  color: #fff;
  line-height: 60px;
}
</style>