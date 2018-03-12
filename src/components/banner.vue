<template>
    <div class="headerBar">
        <div class="secondDiv">
            <div class="bannerText1">
                <p class="ama">在美国，1/3的孩子都在学少儿编程 </p>
                <p class="future">未来，编程将成为孩子的必备技能</p>
            </div>
            <div class="bannerVideoOne">
                <video poster="./../assets/Wechat1_2.jpg" src="http://mpv.videocc.net/f452063ebd/6/f452063ebde4ddc53f5f7f9b15f5a916_3.mp4?pid=1520572048588X1861700"
                    width="622" height="350" controls="controls">
                </video>
            </div>
        </div>

        <div class="thirdDiv">
            <div class="oclass">
                0基础入门班=<span class="price">¥199</span>/7课时
            </div>
            <div class="weChat">微信扫码报名/免费试听</div>
            <img class="wechatpic" src="./../assets/baidu_wechat.jpg" alt="">
            <div class="indoor">
                <div>7次课帮孩子入门编程</div>
                <div>做出朋友圈爆款小作品</div>
            </div>
        </div>

        <div class="turnBannerDiv">
            <ul>
                <li class="turnBanner firstImg" ref="firstImg"><img src="./../assets/snapshoot_1.jpg" alt=""></li>
                <li class="turnBanner secImg" ref="secondImg"><img src="./../assets/snapshoot_2.jpg" alt=""></li>
                <li class="turnBanner thiImg" ref="thirdImg"><img src="./../assets/snapshoot_3.jpg" alt=""></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'banner',
        data() {
            return {
                'intervals': null,
                'animate': false
            }
        },
        created() {

        },
        mounted() {
            let self = this;
            this.$nextTick(() => {
                self.autoPlay();
                self.turnBanner();
            })
        },
        methods: {
            turnBanner() {
                this.animate = true;
                // let imgID = document.getElementsByClassName('secImg');
                // imgID.className = 'turnBanner secImg animationleft';
                let first = document.getElementsByClassName('firstImg')[0];
                let second = document.getElementsByClassName('secImg')[0];
                let third = document.getElementsByClassName('thiImg')[0];

                // let second = this.$refs.secondImg;
                // let third = this.$refs.thirdImg;
                // let self = this;
                clearInterval(this.intervals);
                let self = this;
                this.intervals = setInterval(() => {
                    // this.getLeftPosition(first);
                    // this.getLeftPosition(second);
                    // this.getLeftPosition(third);
                    let one = Promise.resolve(self.getLeftPosition(first));
                    let two = Promise.resolve(self.getLeftPosition(second));
                    let three = Promise.resolve(self.getLeftPosition(third));
                    Promise.all([one, two, three]).then(function (results) {
                        console.log('成功',results);  // [1, 2, 3]
                    });
                }, 2000);
            },
            getLeftPosition(element) {
                if (element) {
                    element.style.transition = 'all 1s linear';
                    element.style.left = element.offsetLeft + 255 + 'px';
                    if (element.offsetLeft >= 800) {
                        element.style.left = element.offsetLeft - 540 + 'px';
                    }
                }
            },


            // 轮播
            autoPlay() {
                // let first = self.$refs.firstImg;
                // let second = this.$refs.secondImg;
                // let third = this.$refs.thirdImg;

                // 状态1


                // 状态2


                // 状态3

            },
            changePosition() {

            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    html,
    body {
        margin: 0;
        padding: 0;
    }
    
    h1,
    h2 {
        font-weight: normal;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
        margin-top: 100px;
    }
    
    li {
        display: inline-block;
        margin: 0 10px;
    }
    /*li:nth-child(2) {
        margin-top: -50px;
    }*/
    
    a {
        color: #42b983;
    }
    
    .bannerText1 {
        font-size: 60px;
        color: #ed6d0f;
    }
    
    .ama {
        margin-bottom: 10px;
    }
    
    .future {
        margin-top: 0px;
    }
    
    video {
        border-radius: 3px;
    }
    
    .oclass {
        color: #7a6e67;
        font-size: 38px;
    }
    
    .weChat {
        color: #fff;
        height: 80px;
        font-size: 28px;
        line-height: 60px;
        margin: 20px auto;
        background: url(./../assets/hint.png) no-repeat center;
        background-size: 360px 80px;
    }
    
    .wechatpic {
        width: 243px;
        height: 243px;
    }
    
    .price {
        color: #ed6d0f;
        font-size: 60px;
    }
    
    .indoor div {
        display: inline-block;
        color: #7a6e67;
        font-size: 20px;
        padding-left: 25px;
        padding-right: 40px;
        /* margin-bottom: 70px; */
        background: url(./../assets/lightspot.png) no-repeat center left;
    }
    
    .turnBannerDiv {
        width: 100%;
        position: relative;
        margin-top: 150px;
        margin: auto;
    }
    
    .turnBanner {
        position: absolute;
        width: 240px;
        height: 462px;
    }
    
    .firstImg {
        left: 270px;
        top: 0px;
    }
    
    .secImg {
        left: 535px;
        top: 0px;
    }
    
    .thiImg {
        left: 800px;
        top: 0px;
    }
    
    li img {
        width: 100%;
    }
    
    .animationleft {
        animation: myfirst 1s linear 1s 1 normal;
        -moz-animation: myfirst 1s linear 1s 1 normal;
        /* Firefox */
        -webkit-animation: myfirst 1s linear 1s 1 normal;
        /* Safari 和 Chrome */
        -o-animation: myfirst 1s linear 1s 1 normal;
        /* Opera */
    }
    
    @keyframes myfirst {
        0% {
            left: 535px;
            top: 0px;
        }
        100% {
            left: 270px;
            top: 0px;
            width: 240px;
            height: 462px;
        }
        101% {
            left: 270px;
            top: 0px;
            width: 240px;
            height: 462px;
        }
    }
</style>