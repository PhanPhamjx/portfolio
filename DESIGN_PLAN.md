# Portfolio Redesign — Phân tích wolfvanveen.art & Kế hoạch triển khai

> Phân tích trang **https://wolfvanveen.art/portfolio** và map sang portfolio của Phạm Thanh Tùng

---

## 1. Phân tích Wolf van Veen Portfolio

### 1.1 Navigation
| Feature | Mô tả |
|---|---|
| Tabs | Portfolio · Productions · Resume · Skills · About · Contact |
| Sticky header | Fixed top, scroll không mất nav |
| Social icons | LinkedIn · YouTube · ArtStation · GitHub · CodePen |
| Back to top | Link cuối trang |

### 1.2 Portfolio Section (trang chính)
- **Grid 3 cột** responsive (2 cột tablet, 1 cột mobile)
- **Filter bar**: All · Post-Processing · Shaders · Particles · Models · Textures
- **27 project cards** với animated GIF thumbnail
- **Card layout**: thumbnail 16:9 → title → category badge
- **Hover**: overlay hoặc scale effect
- **Click card** → trang detail riêng (e.g. `/page/xray.html`)

### 1.3 Productions Section (Shipped Titles)
- Liệt kê **7 AAA commercial titles** (Mortal Kombat 1, F1 2021, v.v.)
- Mỗi card: studio logo + game title + role + year + short description
- Visual emphasis: to hơn project cards thường

### 1.4 Resume Section
- **Timeline dọc** từ 2014 → 2025
- Công ty, role, thời gian
- Education riêng ở cuối

### 1.5 Skills Section — 4 Tier Proficiency System
```
Expert        → dày chữ + màu nổi bật
Professional  → cỡ thường
Proficient    → nhỏ hơn / mờ hơn
Know my way   → mờ nhất
```

### 1.6 About Section
- Bio paragraph
- Highlight: available for work + specialization
- Photo

### 1.7 Contact Section
- Email form
- Social links grid

### 1.8 Design Language
- **Background**: Near-black dark mode
- **Cards**: Dark surface, image nổi bật
- **Typography**: Sans-serif, hierarchy rõ ràng
- **Accent**: Minimal — trắng/xám trên nền tối
- **GIF animations** làm nội dung "sống"
- Minimize decoration, maximize content

---

## 2. Map sang Phan Portfolio

### 2.1 Navigation Tabs (cập nhật)
| Wolf | Phan |
|---|---|
| Portfolio | Projects |
| Productions | Productions *(thêm mới)* |
| Resume | About (bao gồm resume) |
| Skills | Tools *(bao gồm skills)* |
| About | About |
| Contact | About (cuối trang) |

### 2.2 Project Categories (cập nhật)
| Wolf | Phan |
|---|---|
| Shaders | Shader / Tech Art |
| Particles | VFX / Animation |
| Models | Modeling |
| Textures | Texturing |
| Post-Processing | *(chưa có)* |
| All | All |
| + | Professional (outsource) |
| + | Personal (game jam, etc.) |

---

## 3. Tính năng cần triển khai

### ✅ Đã có
- [x] Dark theme
- [x] Multi-page routing (React Router)
- [x] Project detail page
- [x] Work experience timeline
- [x] Skills section
- [x] Filter tabs (All / Professional / Personal / Animation)
- [x] Video showcase (2 videos)
- [x] Download CV

### 🔨 Cần triển khai (theo thứ tự ưu tiên)

#### Tính năng 1 — Productions Section (Shipped Titles)
**Route**: `/productions`
- Separate page cho commercial titles
- Cards lớn hơn với client branding (Square Enix, Artdink, VTC)
- Year badge nổi bật
- "AAA Client" highlight

#### Tính năng 2 — Skills Proficiency Tiers
**Route**: `/tools` (Skills tab)
- 4 mức: Expert · Professional · Proficient · Learning
- Blender/Substance Painter → **Expert**
- Python/C# → **Professional**
- HLSL/Shader Graph → **Proficient**
- Unreal Engine → **Proficient**
- Visual phân biệt rõ từng tier

#### Tính năng 3 — Project Grid 3 cột + GIF/Video hover
**Component**: `ProjectCard`
- Grid 3 cột (thay vì 2)
- Featured card span full width
- Hover: play video/GIF preview nếu có
- Thumbnail fallback: gradient với title

#### Tính năng 4 — Filter Categories mở rộng
**Page**: `/projects`
- Thêm categories: Modeling · Texturing · VFX & Animation · Technical Art
- Map với tags của mỗi project
- Số lượng hiển thị trong tab

#### Tính năng 5 — Resume Tab riêng
**Route**: `/resume`
- Timeline đầy đủ: Education + Work + Projects
- Print-friendly layout
- Link download CV PDF

#### Tính năng 6 — Project Detail nâng cao
**Route**: `/projects/:id`
- Image gallery (lightbox) khi có ảnh
- Video embed (YouTube / local)
- Technique breakdown section
- Tools used chips
- Before/after (nếu có)

#### Tính năng 7 — About page ảnh thật
- Placeholder → Real photo
- Short intro video / reel embed

#### Tính năng 8 — Micro-animations
- Page transition fade-in
- Card stagger animation khi load
- Filter transition (fade + reorder)
- Stats counter animation (scroll-triggered)

#### Tính năng 9 — Contact Form
- Form gửi email (EmailJS / Formspree)
- Validation
- Success/error state

#### Tính năng 10 — Mobile Nav
- Hamburger menu (hiện nav-links bị hide)
- Slide-in drawer
- Touch-friendly

---

## 4. Implementation Order

```
Phase 1 (MVP — ngay bây giờ)
├── Productions page
├── Skills proficiency tiers (Tools page)
├── Grid 3 cột
├── Filter categories mở rộng
└── GIF/Video hover preview

Phase 2 (Content)
├── Thêm ảnh thật vào project cards
├── Photo trong About
└── Project detail: gallery + breakdown

Phase 3 (Polish)
├── Page transition animations
├── Card stagger animations
├── Stats counter
└── Mobile hamburger nav

Phase 4 (Complete)
├── Contact form (EmailJS)
├── Resume page
└── Lightbox gallery
```

---

## 5. File Structure mục tiêu

```
src/
├── pages/
│   ├── Home.jsx            ✅
│   ├── ProjectsPage.jsx    ✅
│   ├── ProjectDetail.jsx   ✅
│   ├── ToolsPage.jsx       ✅  ← thêm skill tiers
│   ├── AboutPage.jsx       ✅
│   ├── ProductionsPage.jsx 🔨 cần tạo
│   └── ResumePage.jsx      🔨 cần tạo
├── components/
│   ├── Navbar.jsx          ✅
│   ├── ProjectCard.jsx     ✅  ← cần update hover
│   ├── SkillTier.jsx       🔨 cần tạo
│   ├── ProductionCard.jsx  🔨 cần tạo
│   └── MobileNav.jsx       🔨 cần tạo
└── data/
    └── projects.js         ✅  ← thêm skill tiers, productions
```

---

## 6. Content cần bổ sung (từ Phan)

- [ ] Ảnh đại diện (photo)
- [ ] Screenshots / GIF của Dragon Quest, A-Train9, Audition, Golang Building
- [ ] Screenshot / GIF của GMTK Death Ball
- [ ] Animation & VFX work clips
- [ ] LinkedIn URL thật
- [ ] YouTube channel URL

---

*Tạo ngày: 2025-05-01 · Portfolio: Phạm Thanh Tùng · Tham khảo: wolfvanveen.art*
