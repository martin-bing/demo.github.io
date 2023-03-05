

<template>
  <main class="">
    <section>
      <textarea
        class="input"
        placeholder="请输入"
        v-model="diary"
      />
      <span class="btn" @click="upload">上传日记</span>

    </section>
    <section>
      <h3>对话</h3>
       <textarea
        class="result"
        placeholder="chatgpt的回复"
        v-model="result"
      />
      <input
        class="input"
        type="text"
        name="text"
        placeholder="请输入"
        v-model="word"
      />
      <span class="btn" @click="onSubmit">发送</span>
    </section>
    
  </main>
</template>
<script setup lang="ts">
import axios from "axios";
import { ref } from 'vue'

const word = ref('')
const diary = ref('')
const result = ref('')

const onSubmit = async()=>{
   try {
    axios.post(`/chat/`,{ prompt: word.value })
    .then(res=>{
        console.log('res=>',res);         
        const {data} = res
        result.value = data.result.resp
    })
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      // alert(error.message);
    }
}
const upload = async()=>{
   try {
    axios.post(`/chat/`,{ prompt: diary.value })
    .then(res=>{
        alert('上传成功')
        console.log('res=>',res);         
        // const {data} = res
        // result.value = data.result.resp
    })
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      // alert(error.message);
    }
}
</script>
<style scoped>
  .btn{
    margin-left: 10px;
    color:#1a73e8;
  }
  .input{
    padding: 10px;
    border-radius: 5px;
    width: 200px;
  }
  .result{
    width: 300px;
    height: 300px;
    border-radius: 5px;
    display: block;
    margin-bottom: 10px;
  }
</style>