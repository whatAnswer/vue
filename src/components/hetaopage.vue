<template>
  <div class="DetailPlayPage">
      <!--<headerBar :items="items"></headerBar>-->
      <headerBar></headerBar>
      <banner></banner>
  </div>
</template>

<script>
    import headerBar from '@/components/header'
    import banner from '@/components/banner'
    export default {
        name: 'DetailPlayPage',
        components: { headerBar, banner },
        data () {
            return{
                   items: [
                        {message: '进入学习系统'},
                        {message: '关于我们'},
                        {message: '加入我们'},
                        {message: '核桃编程'}
                    ]
            }
        },
        created() {

        },
        methods: {
            jumpDetail(){
            // router.push('home')
            }
            
        }
    }
</script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
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

</style>
