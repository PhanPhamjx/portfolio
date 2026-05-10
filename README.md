# 🎮 Phan — 3D Environment Artist Portfolio

Portfolio website hiện đại cho 3D Environment Artist & Technical Artist.
Built with **React + Vite**, dark cinematic theme.

---

## ✨ Features

- 🎬 **Hero với Showreel video** (YouTube hoặc local MP4)
- 🎨 **Published Projects** với filter (Unity / Unreal)
- 🚧 **Personal Projects** & WIP showcase
- 🛠️ **Tools section** cho GitHub repos
- 👤 **About** với skills detailed
- 📧 **Contact** với social links
- 🌙 **Dark cinematic theme** (giống AAA games)
- 📱 **Fully responsive** (mobile, tablet, desktop)

---

## 🚀 Cách chạy project (Quick Start)

### 1. Cài Node.js
Tải từ [nodejs.org](https://nodejs.org) (version 18 trở lên).

### 2. Cài dependencies
Mở terminal trong folder này và chạy:

```bash
npm install
```

### 3. Chạy development server
```bash
npm run dev
```

Mở browser tại `http://localhost:5173` để xem website.

### 4. Build production
```bash
npm run build
```

Folder `dist/` sẽ chứa file để deploy.

---

## ✏️ Cách chỉnh sửa nội dung

**TẤT CẢ nội dung được tập trung trong 1 file duy nhất:**

📁 `src/data/projects.js`

Mở file này để chỉnh:

### A. Thông tin cá nhân
```js
export const personalInfo = {
  name: 'Phan',
  email: 'your.email@example.com',
  bio: '...',
  socials: {
    artstation: 'https://...',
    github: 'https://...',
    // ...
  },
};
```

### B. Showreel video
```js
export const showreel = {
  youtubeId: 'ABC123',  // ID YouTube video
  // HOẶC dùng video local:
  localVideo: '/videos/showreel.mp4',
  duration: '1:42',
};
```

**Cách lấy YouTube ID:**
- Link YouTube: `https://youtube.com/watch?v=dQw4w9WgXcQ`
- ID là phần sau `v=`: `dQw4w9WgXcQ`

### C. Thêm Published Project mới
```js
{
  id: 'unique-id',
  title: 'Tên Game',
  role: 'Environment Artist',
  engine: 'Unity',
  year: '2024',
  platform: 'Steam',
  status: 'Published',
  featured: false,  // true = card to hơn
  thumbnail: '/images/projects/your-image.jpg',
  description: 'Mô tả ngắn...',
  tags: ['Tag1', 'Tag2'],
  links: {
    trailer: 'https://youtube.com/...',
    store: 'https://store.steampowered.com/...',
    breakdown: '#',
  },
},
```

### D. Thêm Tool/Script mới
```js
{
  id: 'tool-id',
  name: 'Tool Name',
  icon: '⚡',  // emoji
  description: 'Mô tả...',
  stack: ['C#', 'Unity'],
  stars: 47,
  github: 'https://github.com/yourusername/repo',
},
```

---

## 📁 Cấu trúc thư mục

```
phan-portfolio/
├── public/
│   ├── images/
│   │   └── projects/        ← Đặt ảnh projects ở đây
│   └── videos/
│       └── showreel.mp4     ← Showreel local (optional)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx         ← Showreel section
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Tools.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── projects.js      ⭐ FILE QUAN TRỌNG NHẤT - CHỈNH Ở ĐÂY
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🖼️ Cách thêm ảnh projects

1. Đặt ảnh vào folder `public/images/projects/`
   - Ví dụ: `public/images/projects/forest-realm.jpg`
2. Trong `src/data/projects.js`, set:
   ```js
   thumbnail: '/images/projects/forest-realm.jpg'
   ```

**Khuyến nghị:**
- Kích thước: 1920×1080 (16:9)
- Định dạng: `.jpg` (file nhẹ) hoặc `.webp` (chất lượng tốt)
- Optimize tại [tinypng.com](https://tinypng.com) trước khi upload

---

## 🌐 Deploy lên Vercel (MIỄN PHÍ)

### Cách 1: Deploy từ GitHub (recommended)
1. Push code lên GitHub
2. Vào [vercel.com](https://vercel.com) → đăng nhập bằng GitHub
3. Click "New Project" → chọn repo
4. Click "Deploy" → xong!

### Cách 2: Deploy bằng CLI
```bash
npm install -g vercel
vercel
```

Website sẽ live tại: `https://phan-portfolio.vercel.app`

---

## 🎨 Customize theme

Mở `src/styles/index.css`, chỉnh các CSS variables ở đầu file:

```css
:root {
  --bg-primary: #050505;
  --accent: #ff6b35;        /* Đổi màu nhấn (cam → màu khác) */
  --accent-glow: rgba(255, 107, 53, 0.4);
  /* ... */
}
```

**Gợi ý màu accent thay thế:**
- Cyan: `#00d9ff`
- Purple: `#a855f7`
- Green: `#10b981`
- Pink: `#ec4899`

---

## 📝 Checklist trước khi publish

- [ ] Cập nhật `personalInfo` trong `projects.js` (email, social links)
- [ ] Thêm YouTube ID hoặc video local cho showreel
- [ ] Update thông tin tất cả projects
- [ ] Thêm ảnh thumbnails cho projects
- [ ] Cập nhật danh sách tools/GitHub repos
- [ ] Thay ảnh "YOUR PHOTO" trong About section
- [ ] Test trên mobile (mở DevTools → toggle device)
- [ ] Build production và test: `npm run build && npm run preview`
- [ ] Deploy

---

## 💡 Tips

- **Showreel:** 1-2 phút là đủ, highlight 5-10s mỗi project
- **Project order:** Đặt project mạnh nhất lên đầu (featured: true)
- **Image quality:** Quan trọng! Recruiters sẽ judge qua ảnh đầu tiên
- **Performance:** Optimize ảnh trước khi upload (< 500KB/ảnh)
- **SEO:** Update meta tags trong `index.html`

---

Made with ❤️ for Phan's portfolio
