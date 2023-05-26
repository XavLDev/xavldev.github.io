<template>
  <NavBar/>
  <PortfolioMain msg="Welcome to Your Vue.js App"/>
</template>

<script>
import PortfolioMain from './components/PortfolioMain.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    PortfolioMain,
    NavBar
  }
}
</script>

