import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // 개발 서버 설정
  server: {
    port: 3000,
    open: true, // 브라우저 자동 열기
    host: true // 외부 접근 허용
  },
  
  // 빌드 설정
  build: {
    outDir: 'dist',
    sourcemap: true, // 소스맵 생성
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vite']
        }
      }
    }
  },
  
  // 경로 별칭 설정
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  
  // CSS 설정
  css: {
    devSourcemap: true
  },
  
  // 플러그인 설정
  plugins: [
    // 필요에 따라 플러그인 추가
  ]
})
