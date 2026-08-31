import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        canvaCourse: resolve(import.meta.dirname, 'canva-course.html'),
        youtubeCourse: resolve(import.meta.dirname, 'youtube-course.html'),
        videoEditingCourse: resolve(import.meta.dirname, 'video-editing-course.html'),
        freelancingCourse: resolve(import.meta.dirname, 'freelancing-course.html'),
        socialMediaCourse: resolve(import.meta.dirname, 'social-media-course.html'),
        personalBrandingCourse: resolve(import.meta.dirname, 'personal-branding-course.html'),
        aiToolsCourse: resolve(import.meta.dirname, 'ai-tools-course.html'),
        wordpressCourse: resolve(import.meta.dirname, 'wordpress-course.html'),
      },
    },
  },
})
