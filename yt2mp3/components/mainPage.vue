
<template>
<div class="container">
  <div class="inputContainer">
    <input type="text" v-model="fullUrl">
    <button id="convert" @click="convert()">Convert</button>  
  </div>
  <div id="videoTitle" v-if="showDownload">{{videoTitle}}</div>
  <button v-if="showDownload" id="download" @click="downloadSong()">Download</button>
</div>
</template>

  
<script>
import axios from 'axios'

export default{
  data(){
    return{
      fullUrl:'',
      videoTitle:'',
      downloadLink:'',
      showDownload:false
    }
  },
  methods:{
    convert(){
      let qq = this.fullUrl.substring(32)
      qq = qq.substring(0,11)

      axios.post('http://localhost:3000/',{
        veri:qq
      }).then((res)=>{
        this.videoTitle = res.data.title
        this.downloadLink = res.data.link
        this.showDownload = true
      })
    },
    downloadSong(){
      window.open(this.downloadLink,'_blank').focus()
    }
  }
}

</script>

<style scoped>
.container{
  background: rgb(240, 255, 240);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  height: 200px;
  max-width: 850px;
  margin: auto;
  justify-content: center;
}
#download,#convert{
  border: none;
  background: rgb(216, 65, 14);
  height: 2rem;
  width: 6rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 900;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 100vh !important;
}
#download{
  width: 250px !important;
  height: 2.5rem !important;
}
#videoTitle{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 900;
}
.inputContainer{
  border: 2px solid black;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
input{
  margin-left: 1rem;
  height: 1.7rem;
  border: 0 solid;
  width: 85%;
  background: rgb(240, 255, 240);
}
input:focus{
  outline: none;
}
#convert{
  border-radius: 0 !important;
}
</style>
