<template>
  <div class="bigbox">
    <!-- <div class="box" v-if="popupIstrue">
      <img @click="jump()" :src="zhe.imgUrl" alt="">
      <div class="close-btn" @click.stop="close()">x</div>
    </div> -->
    <swiper :data='list' @click="btnClassContent()"></swiper>
    <!-- 专题 -->
    <!-- <div class="special">
      <div class="name">{{lists.name}}</div>
      <div class="special-bottom">
        <img v-for="(item,index) in lists.picter" :key="'info'+index" :src="item.src" alt="">
      </div>
    </div> -->
    <!-- 圣诞清单 梦幻圣诞夜 -->
    <!-- <div class="suprice" v-for="(items,index) in lists.shengdan" :key="'info1'+index">
      <div class="name">
        {{items.name}}
      </div>
      <div class="txt">
        {{items.txt}}
      </div>
      <div class="contents">
        <div class="smallbox"  v-for="(it,index) in items.content" :key="'info2'+index">
          <img :src="it.img" alt="">
          <div class="jianjie">
            {{it.shuoming}}
          </div>
          <div class="price">
            <span>{{it.newprice}}</span>
            <span>{{it.oldprice}}</span>
          </div>  
        </div>
      </div>
    </div>    -->
    <!-- 八张图 -->
    <!-- <div class="fourpricter" v-for="(is,index) in lists.container" :key="'info3'+index">
      <div class="small_picter">
        <img v-for="(i,index) in is.img" :key="'info4'+index" :src="i.imgs" alt="">
      </div>
    </div> -->
    <!-- 新品速递  好污热卖 -->
    <!-- <div class="suprice" v-for="(items,index) in lists.newgood" :key="'info5'+index">
      <div class="name">
        {{items.name}}
      </div>
      <div class="txt">
        {{items.txt}}
      </div>
      <div class="contents">
        <div class="smallbox"  v-for="(it,index) in items.content" :key="'info6'+index">
          <img :src="it.img" alt="">
          <div class="jianjie">
            {{it.shuoming}}
          </div>
          <div class="price">
            <span>{{it.newprice}}</span>
            <span>{{it.oldprice}}</span>
          </div>  
        </div>
      </div>
    </div>   -->
    <!-- 良仓大人心爱之物 -->
    <!-- <div class="beloved">
      <img :src="lists.beloved" alt="">
    </div>  -->
    <!-- 摩羯座 -->
    <!-- <div class="appera" v-for="(ite,index) in lists.appearance" :key="'info7'+index">
      <div class="title">{{ite.title}}</div>
      <div class="txt">{{ite.txt}}</div>
      <img :src="ite.bigimg" alt="">
      <div class="data">
        <div class="smallbox" v-for="(ites,index) in ite.arr" :key="'info8'+index">
          <img :src="ites.smallimg" alt="">
          <div class="name">
            {{ites.name}}
          </div>
          <div class="price">
            {{ites.price}}
          </div>
        </div>
      </div>
      <div class="sees">
        {{ite.sees}}
      </div>
    </div> -->
    <!-- 最美日历 寒冬保暖 -->
    <!-- <div class="suprice" v-for="(items,index) in lists.detailed" :key="'info9'+index">
      <div class="name">
        {{items.name}}
      </div>
      <div class="txt">
        {{items.txt}}
      </div>
      <div class="contents">
        <div class="smallbox"  v-for="(it,index) in items.content" :key="'info10'+index">
          <img :src="it.img" alt="">
          <div class="jianjie">
            {{it.shuoming}}
          </div>
          <div class="price">
            <span>{{it.newprice}}</span>
            <span>{{it.oldprice}}</span>
          </div>  
        </div>
      </div>
    </div>  -->
    <!-- 每一次亲密接触 -->
    <!-- <div class="appera" v-for="(ite,index) in lists.close" :key="'info11'+index">
      <div class="title">{{ite.title}}</div>
      <div class="txt">{{ite.txt}}</div>
      <img :src="ite.bigimg" alt="">
      <div class="data">
        <div class="smallbox" v-for="(ites,index) in ite.arr" :key="'info12'+index">
          <img :src="ites.smallimg" alt="">
          <div class="name">
            {{ites.name}}
          </div>
          <div class="price">
            {{ites.price}}
          </div>
        </div>
      </div>
      <div class="sees">
        {{ite.sees}}
      </div>
    </div> -->
    <!-- 产品  水具  家居... -->
    <!-- <div class="bigproduct" v-for="(iten,index) in lists.productes" :key="'info13'+index">
      <div class="middlebox">
        <div class="name">
          {{iten.name}}
        </div>
        <div class="smallproduct">
          <dl  v-for="(it,index) in iten.product" :key="index">
            <dt class="imgs">
              <img :src="it.img" alt="">
            </dt>
            <dt class="texts">
              <div class="name1">
                {{it.name1}}
              </div>
              <div class="name2">
                {{it.name2}}
              </div>
              <div class="txt">
                {{it.txt}}
              </div>
              <div class="price">
                {{it.price}}
              </div>
            </dt>
          </dl>
        </div>
        <div class="mores">
          {{iten.sees}}
        </div>
      </div>
    </div> -->
    {{this.$store.state.num}}
    {{text}}
    {{txt}}
    <Tab></Tab>
  </div>
</template>

<script>
import { mapActions, mapState, } from 'vuex'
import swiper from '@/component/swiper'
import Tab from '../component/tab'
export default {
  name: 'index',
  data () {
    return {
      popupIstrue:false,
      // zhe:{},
      // list:[],  
      // userTrue:'',
      // datas:[], //轮播图
      // lists:{}  //页面数据

      list:[]
    }
  },
  computed:{
    ...mapState("twoModules/threeModules",[
      'txt'
    ]),
    ...mapState("twoModules",[
      "text"
    ])
  },
  components:{
    swiper,
    Tab
  },
  created(){
    // this.$axios('/class')
    // .then(res=>{
    //   console.log(res)
    //   this.list = res
    // })
    //轮播图
    // this.getData(this)
    // .then(res=>{
    //   this.datas = res
    // })
    //页面数据
    // this.getList(this)
    // .then(res=>{
    //   this.lists = res
    // })
    //遮罩数据
    // this.getZhe(this)
    // .then(res=>{
    //   this.zhe = res
    // })

    // this.getHttp(this)
    // .then(res=>{
    //   this.list = res
    // })

    // this.$Error(this,'/httpstate')
    this.suibian()
    
  },
  methods:{
    ...mapActions([
      // 'getData',
      // 'getHttp',
      // 'getList',
      // 'getZhe' 

      // 'getData'

      'suibian'
    ]),
    btnClassContent(num){
      // this.$axios('/classContent?pages='+num)
      // .then(res=>{
      //   console.log(res)
      // })
    }
    // jump(){
    //   window.localStorage.setItem('lq','1')
    //   if(this.userTrue == '1'){
    //      this.popupIstrue = false
    //   }
    //   window.location.href = this.zhe.url
    // },
    // close(){
    //   this.popupIstrue = false
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../assets/home.scss'
</style>
