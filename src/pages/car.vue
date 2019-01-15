<template>
    <div class="box">
        <div class="top">购物车</div>
        <div class="content">
            <div class="img">
                <img :src="data.empty" alt="">
            </div>
        </div>
        <div class="like">
            <span class="left"></span>
            <img :src="data.guess" alt="">
            <span class="right"></span>
        </div>
        <div class="main">
            <dl class="dl_left" v-for="(item,index) in data.youlike" :key="index">
                <dt class="img">
                    <img :src="item.img" alt="">
                </dt>
                <dt class="introduction">
                    <div class="divName">{{item.title}}</div>
                    <div class="divBrand">{{item.txt}}</div>
                    <div class="divPrice">{{item.price}}</div>
                </dt>
            </dl>
        </div>
        <div class="result">
            <div class="election">
                <input type="checkbox"> <span>全部选中</span>
            </div>
            <div class="price_all">
                <p>合计:￥0.00</p>
                <p>已节省:￥0.00</p>
            </div>
            <button>结算</button>
        </div>
        <Tab></Tab>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import Tab from '../component/tab'
export default {
    name:'car',
    data(){
        return {
            data:[]
        }
    },
    components:{
        Tab
    },
    created(){
        this.getList(this)
        .then(res=>{
            this.data = res
        })
    },
    methods:{
        ...mapActions([
            "getList"
        ])
    }
}
</script>
<style lang="scss" scoped>
    @import '../assets/car.scss'
</style>
