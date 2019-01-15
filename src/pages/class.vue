<template>
    <div class="page">
       <div class="left">
           <ul>
               <li v-for="(item,index) in list.lists" :key="index" @click="awitch(index)">
                   <span>{{item.name}}</span>
               </li>
           </ul>
       </div>
       <div class="right" v-for="(item,index) in list.secondlist" :key="'info'+index" v-show="index == num">
           <div class="second">
               <div class="img">
                   <img :src="item.bigsimg" alt="">
               </div>
               <div class="text">{{item.title}}</div>
           </div>
           <div class="list" v-for="(ite,index) in item.content" :key="index">
               <div class="picter">
                   <img :src="ite.simg" alt="">
               </div>
               <p>{{ite.name}}</p>
           </div>
       </div>
       <Tab></Tab>
    </div>
</template>
<script>
import {mapActions} from "vuex"
import Tab from '../component/tab'
export default {
    name:'class',
    data(){
        return {
            list:[],
            num:0
        }
    },
    created(){
        this.getList(this)
        .then(res=>{
            this.list = res
        })
    },
    components:{
        Tab
    },
    methods:{
        ...mapActions([
            "getList"
        ]),
        awitch(index){
            this.num = index
        }
    }
}
</script>
<style lang="scss" scoped>
.page{
    width: 100%;
    height: 100%;
    .left{
        width: 2rem;
        height: calc(17.786667rem - 1.333333rem);
        float: left;
        overflow: scroll;
        overflow-x: hidden;
        li{
            list-style: none;
            span{
                display: block;
                font-weight: bold;
                width: 2rem;
                text-align: center;
                border: solid .013333rem #dadada;
                background-color: #dadada;
                font-size: .45rem;
                height: 2rem;
                line-height: 2rem;
            }
        }
    }
    .right{
        width: 8rem;
        height: calc(17.786667rem - 1.333333rem);
        float: right;
        background-color: #fff;
        position: absolute;
        top: 0;
        right: 0;
        overflow: scroll;
        .second{
            width: 100%;
            height: 4rem; 
            overflow: hidden;
            .img{
                width: 5.653333rem;
                height: 2.666667rem;
                margin-top: .32rem;
                margin-left: 1.333333rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .text{
                font-size: .40rem;
                color: #666666;
                margin-top: .4rem;
                text-align: center;
            }
        }
        .list{
            width: 1.6rem;
            height: 2.16rem;
            margin-left: .8rem;
            float: left;
            margin-top: 1rem;
            .picter{
                width: 1.6rem;
                height: 1.6rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            p{
                text-align: center;
                margin-top: .2rem;
                font-size: .4rem;
            }
        }
    }
}
</style>
