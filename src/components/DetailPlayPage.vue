<template>
  <div class="DetailPlayPage">
      <div class="playDiv">
        <div class="videoDiv">
            <video src="./../assets/movie.ogg" width="600" controls="controls">
                    Your browser does not support the video tag.
            </video>
        </div>
        <div class="scrollDiv">
            <ul v-for="item in items">
                <li>{{item.message}}</li>
            </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailPlayPage',
  data () {
    return{
        items: [
      { message: 'CCTV1' },
      { message: 'CCTV1' },
      { message: 'CCTV1' },
      { message: 'CCTV1' },
      { message: 'CCTV1' },
      { message: 'CCTV1' },  
      { message: 'CCTV1' },
      { message: 'CCTV1' },
      { message: 'CCTV1' },
      { message: 'CCTV1' },
      { message: 'CCTV1' },
      { message: 'CCTV1' },
      { message: 'CCTV1' },
      { message: 'CCTV1' },
      { message: 'CCTV1' },
      { message: 'CCTV1' },
      { message: 'CCTV1' },
      { message: 'CCTV1' },
      { message: 'CCTV1' },
      { message: 'CCTV1' },
      { message: 'CCTV1' },
      { message: 'CCTV1' }
    ]
    }
  },
  method() {
    function jumpDetail(){
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
.playDiv{
    width: 80%;
    margin: auto;
}
.DetailPlayPage{
    width: 100%;
    background-color: #42b983;
}
.scrollDiv{
    width:207px;
    height:449px;
    overflow: scroll;
}
video{
    float: left;
}
</style>
