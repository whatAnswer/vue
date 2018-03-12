<template>
    <div class="headerBar">
        <div class="secondDiv">
            <img src="./../assets/logo2.png" alt="">
            <ul>
                <!--<li class="headerName" v-bind:class="{active1: activea1, active2: activea2, active3: activea3}" v-for="(item,index) in items" @mouseenter="test(item,index)">{{item.message}}
                </li>-->
                <li class="headerName" v-for="(item,index) in items" :class="[active===index?'actives':'']" @mouseenter="test(item,index)">{{item.message}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        // props: ['items'],
        name: 'headerBar',
        data() {
            return {
                'active': 3,
                items: [
                    { message: '进入学习系统' },
                    { message: '关于我们' },
                    { message: '加入我们' },
                    { message: '核桃编程' }
                ]
            }
        },
        created() {

        },
        methods: {
            jumpDetail() {
                // router.push('home')
            },
            test(obj, i) {
                this.active = i;
            },
            turnBanner() {
                
            }
        },
        mounted() {
            this.$nextTick(() => {

            })
        },
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
    }
    
    li {
        display: inline-block;
        margin: 0 10px;
    }
    
    a {
        color: #42b983;
    }
    
    .headerBar {
        width: 100%;
        background-color: #ed6d0f;
        height: 65px;
        margin: auto;
    }
    
    .secondDiv {
        width: 80%;
        margin: auto;
    }
    
    .headerName {
        float: right;
        cursor: pointer;
        color: #fff;
        height: 65px;
        padding: 0 3px;
        margin: 0 20px;
        line-height: 65px;
        text-align: center;
        /*border-bottom: 3px #ed6d0f solid;*/
    }
    
    li:first-child {
        cursor: pointer;
        color: #ed6d0f;
        padding: 0 18px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
        margin: 18px 20px;
        background-color: #fff;
    }
    
    img {
        float: left;
        margin-top: 7px;
    }
    
    .active {
        border-bottom: 2px;
    }
    .actives{
        background: #42b983;
    }

</style>