<template>
    <div class="login">
        <div class="layer"></div>
        <div class="loginContent">
            <form action="">
                <ul>
                    <li class="logo">
                        <img src="../assets/img/600277060168200038.png" alt="">
                    </li>
                    <li class="userBox">
                        <span class="userimg"></span>
                        <input type="text" placeholder="用户名/邮箱/手机号">
                    </li>
                    <li class="pwdBox">
                        <span class="pwdimg"></span>
                        <input type="password" placeholder="密码">
                    </li>
                    <li class="autoLogin">
                        <input type="checkbox">
                        <span>自动登录</span>
                    </li>
                    <li class="btnBox">
                        <button>登录良仓</button>
                    </li>
                    <li class="bottomli">
                        <div class="iconBox">
                            <span class="qq_icon"></span>
                            <span class="wb_icon"></span>
                            <span class="dou_icon"></span>
                        </div>
                        <div class="toRegisterBox">
                            <router-link to="/me">注册良仓</router-link>
                        </div>
                    </li>
                </ul>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name:'login',
    data(){
        return{
            
        }
    }
}
</script>
<style lang="scss" scoped>
.login{
    width:100%;
    height:17.786667rem;
    background:url("../assets/img/65973558557496515.jpg");
    background-size:cover;
    position: relative;
    .layer{
        width:100%;
        height:17.786667rem;
        background:rgba(0,0,0,.7);
    }
    .loginContent{
        width:100%;
        padding:1rem 0;
        position: absolute;
        top:0;
        ul{
            padding:0 1rem;
            .logo{
                text-align: center;
                padding-bottom:1.5rem;
                margin-left: 2.5rem;
                img{
                    width:2.7rem;
                    height:2.6rem;
                }
            }
            .userBox,.pwdBox{
                margin-top:.3rem;
                border-bottom:1px solid #fff;
                height:.8rem;
                .userimg{
                    background:url("../assets/img/412688215508798100.png") no-repeat;
                    background-size:.4rem .453333rem;

                }
                .pwdimg{
                    background:url("../assets/img/158143426800011024.png") no-repeat;
                    background-size:.4rem .453333rem;
                }
                span{
                    margin-left:.2rem;
                    width:.5rem;
                    height:.5rem;
                    display:inline-block;
                    vertical-align:middle;
                }
                input{
                    margin-left:.3rem;
                    border-left:1px solid #fff;
                    background:0;
                    height:.5rem;
                    font-size:.45rem;
                    padding-left:.3rem;
                    vertical-align:middle;
                    border: none;
                    outline: none;
                }
            }
            .autoLogin{
                margin-top:.8rem;
                height:.5rem;
                padding-left:.1rem;
                input{
                    vertical-align:middle;
                    border: none;
                    outline: none;
                }
                span{
                    margin-left:.1rem;
                    font-size:.4rem;
                    color:#fff;
                    vertical-align:middle;
                }
            }
            .btnBox{
                margin-top:1rem;
                button{
                    width:100%;
                    height:1.2rem;
                    background:#25292e;
                    font-size:.4rem;
                    color:#fff;
                    border: none;
                    outline: none;
                }
            }
            .bottomli{
                margin-top:.6rem;
                .iconBox{
                    float:left;
                    span{
                        display:inline-block;
                        width:.6rem;
                        height:.6rem;
                        background:#fff;
                        margin-left:.3rem;
                    }
                    .qq_icon{
                        background:url("../assets/img/701580000857738554.png") no-repeat center;
                        background-size:.6rem .52rem;
                    }
                    .wb_icon{
                        background:url("../assets/img/564196789113066256.png") no-repeat center;
                        background-size:.6rem .52rem;
                    }
                    .dou_icon{
                        background:url("../assets/img/327405763723401182.png") no-repeat center;
                        background-size:.6rem .52rem;
                    }
                }
                .toRegisterBox{
                    float:right;
                    a{
                        font-size:.4rem;
                        color:#fff;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}
</style>