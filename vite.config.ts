import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    proxy:{
      // https://i.maoyan.com
      '/chat':{
        target:'http://35.76.105.127:8000',//替换的服务端地址
        changeOrigin:true,//开启代理，允许跨域
      }
    }
  }
})
