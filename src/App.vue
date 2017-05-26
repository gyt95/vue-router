<template>
  <div id="app">

    <img src="./assets/logo.png">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <p>导航：
      <router-link to="/">首页</router-link> |
      <router-link to='/hi'>Hi页面</router-link> |
      <router-link to='/hi/hi1'>--Hi页面1--</router-link> |
      <router-link :to="{name:'hi1',params:{username:'kwan'}}">--Hi页面1(传参)--</router-link> |
      
      <router-link to='/hi/hi2'>--Hi页面2--</router-link> |
      <br/><br/>
      <router-link to="/params/198/gary website is very good">url传参params</router-link> |

      <router-link to="/goParams/255/fighting">带参重定向到params</router-link> |
      
      <router-link to="/goback">重定向到首页</router-link> |

      <router-link to="/bbbbbb">路径是瞎写的</router-link>
    </p>
    
    <button @click="goforward">前进</button>
    <button @click="goback">后退</button>


    <button @click="goHome">回到首页</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    goback(){
      this.$router.go(-1);
    },
    goforward(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
