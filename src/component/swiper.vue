<template>
    <div class="boxs">
        <ul>
            <li v-for="(item,index) in data" :key="index">
                <span>{{item.name}}</span>
            </li>
            <p style="font-size:.5rem">{{$t("message.hello")}}</p>
        </ul>
        <button>中文/en</button>
    </div>
</template>
<script>
export default {
    name:'swiper',
    props:{
        data:{
            type:Array
        }
    }
}
</script>
<style lang="scss" scoped>
    .boxs{
        width: 100%;
        height: 100%;
        ul{
            width: 100%;
            height: 1.333333rem;
            background-color: red;
            display: flex;
            li{
                flex: 1;
                text-align: center;
                span{
                    display: inline-block;  
                    margin-top: .35rem;
                }
            }
        }
    }
</style>
