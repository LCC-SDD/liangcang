<template>
    <div class="footer">
      <mt-navbar v-model="selected">
        <mt-tab-item class="update" id="1">
          <router-link to="/">商店</router-link>
        </mt-tab-item>  
        <mt-tab-item class="update" id="2">
          <router-link to="/class">分类</router-link>
        </mt-tab-item>
        <mt-tab-item class="update" id="3">
          <router-link to="/car">购物车</router-link>
        </mt-tab-item>
        <mt-tab-item class="update" id="4">
          <router-link to="/personal">个人</router-link>
        </mt-tab-item>
      </mt-navbar>
    </div>
</template>
<script>
export default {
    name:'tab',
    data(){
        return {
            selected:'0'
        }
    }
}
</script>
<style lang="scss" scoped>
.footer{
    margin: 0;
    padding: 0;
    list-style: none;
    position: fixed;
    bottom: 0;
    width: 100%;
    a{
        text-decoration: none;
        font-size: .32rem;
    }
    a.router-link-active{
        color:skyblue;
    }
} 
</style>
