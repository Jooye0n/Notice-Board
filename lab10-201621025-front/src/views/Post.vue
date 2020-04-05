<template>
  <div v-bind:key="Post">
    <h2>{{ this.title }}</h2>
    {{ this.content }}
  </div>
</template>

<script>
  export default{
    name:"Post",
    data:function(){
      return {
        id : this.$route.params.id,
        title : "",
        content : ""
      }
    },
    beforeRouteUpdate(to, from, next){
      // 새로운 라우터로 변경될 때마다 바뀔 id 를 가지고 post 를 가져온다.
      this.getPost(to.params.id);
      next()
    },
    methods:{
      getPost(id){
        // 포스트를 가져오는데, id 값을 참조한다. 
        // 가져온 결과값을 content 에 대입한다.
        const baseURI = 'http://localhost:8000/post/' + id;
                this.$http.get(`${baseURI}`)
                    .then((result) => {
                        console.log(result.data);
                        this.title = result.data.title;
                        this.content = result.data.content;
                    })
      }
    }
  }
</script>