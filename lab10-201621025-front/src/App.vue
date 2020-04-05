<template>
  <div id="app">
    <div id="nav">
      <h2>게시글 리스트</h2>
        <div id = "cotent">
          <div v-for="post in posts" :key="post.id">
            <li><router-link :to="{ name: 'Post', params:{id: + post.id}}">{{post.title}}</router-link></li>
          </div>
        </div>
    </div>
    <br><br><br>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script>
  export default{
    name:"Vue",
    data:function(){
      return {
        posts : []
      }
    },
    methods:{
      getPost(){
        // 게시글 목록을 불러오는 함수.
        // 각각 목록을 불러온 후에, posts 에 push 해준다.
        const baseURI = 'http://localhost:8000/post/';
                this.$http.get(`${baseURI}`)
                    .then((result) => {
                        console.log(result.data.list);
                        for (var i = 0 ; i < result.data.list.length ; i++){
                        this.posts.push({
                          id : result.data.list[i].id,
                          title : result.data.list[i].title,
                          });
                        }
                    })
      }
    },
        beforeMount(){
            this.getPost()
        },
  }
</script>
