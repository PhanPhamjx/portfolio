// ============================================
// PORTFOLIO DATA — Phạm Thanh Tùng
// Order matches AllProject folder numbering
// ============================================

export const publishedProjects = [

  // ── 1 ── Dragon Quest HD-2D Remake ──────────────────────────────────────
  {
    id: 'dragon-quest',
    title: 'Dragon Quest HD-2D Remake',
    role: '3D Artist',
    client: 'Square Enix · Artdink',
    engine: 'Unreal Engine',
    year: '2024',
    platform: 'Nintendo Switch · PC · PlayStation',
    status: 'Published',
    featured: true,
    category: ['modeling', 'texturing'],
    thumbnail: 'images/projects/dragon-quest/panel_BG.png',
    credit:    'images/projects/dragon-quest/credit.png',
    storeLink: 'https://store.steampowered.com/app/2551220/DRAGON_QUEST_HD2D_Remake/',
    images: [
      'images/projects/dragon-quest/panelmain.png',
      'images/projects/dragon-quest/ingame01.png',
      'images/projects/dragon-quest/ingame02.png',
      'images/projects/dragon-quest/ingame04.png',
      'images/projects/dragon-quest/ingame_statue.png',
      'images/projects/dragon-quest/ingame_statue2.png',
      'images/projects/dragon-quest/ModuleCongtrinh.png',
      'images/projects/dragon-quest/ModuleCongtrinhingame.png',
      'images/projects/dragon-quest/moduleWall01.png',
      'images/projects/dragon-quest/moduleWall02.png',
      'images/projects/dragon-quest/prop01.png',
      'images/projects/dragon-quest/prop02.png',
      'images/projects/dragon-quest/prop03.png',
      'images/projects/dragon-quest/prop05.png',
      'images/projects/dragon-quest/status01.png',
      'images/projects/dragon-quest/Status01_01.png',
      'images/projects/dragon-quest/Status01_02.png',
      'images/projects/dragon-quest/Status01_03.png',
      'images/projects/dragon-quest/Status01_04.png',
      'images/projects/dragon-quest/Status01_ingame.png',
      'images/projects/dragon-quest/Status01_ingame2.png',
      'images/projects/dragon-quest/Screenshot_1.png',
      'images/projects/dragon-quest/Screenshot_2.png',
      'images/projects/dragon-quest/Screenshot_3.png',
      'images/projects/dragon-quest/Screenshot_4.png',
      'images/projects/dragon-quest/Screenshot_5.png',
      'images/projects/dragon-quest/Screenshot_6.png',
      'images/projects/dragon-quest/Screenshot_7.png',
      'images/projects/dragon-quest/Screenshot_8.png',
      'images/projects/dragon-quest/Screenshot_9.png',
    ],
    description:
      'Modeling công trình kiến trúc và môi trường theo concept art được cung cấp, giữ đúng phong cách HD-2D đặc trưng của Square Enix. Setup model trong Unreal Engine, kiểm tra material và lighting để đảm bảo asset hoạt động đúng trong scene cuối.',
    contributions: [
      'Modeling công trình kiến trúc và môi trường 3D theo concept art của Square Enix, giữ đúng phong cách HD-2D',
      'Setup asset trong Unreal Engine: scale, pivot, naming convention, LOD, collision; kiểm tra material và lighting',
      'Phát triển custom normal map tool để tái sử dụng vật liệu trên nhiều asset, giảm đáng kể thời gian texturing',
      'Xây dựng smart materials (hoa văn, bề mặt cứng) và pipeline checklist tool nội bộ cho team',
    ],
    tags: ['Hardsurface', 'Environment Art', 'Smart Materials', 'Normal Map Tool', 'Unreal Engine', 'Substance Painter'],
  },

  // ── 2 ── A-Train 9 — Train Construction ─────────────────────────────────
  {
    id: 'a-train9',
    title: 'A-Train 9 — Train Construction',
    role: '3D Artist',
    client: 'Artdink',
    engine: 'Unreal Engine',
    year: '2025',
    platform: 'Nintendo Switch · PC',
    status: 'Published',
    featured: false,
    category: ['modeling', 'texturing'],
    thumbnail: 'images/projects/a-train9/panel_BG.png',
    storeLink: 'https://store.steampowered.com/app/400480/ATrain_9_V40_Railway_Simulator/',
    images: [
      'images/projects/a-train9/panelmain.png',
      'images/projects/a-train9/a9_10.png',
      'images/projects/a-train9/a9_11.png',
      'images/projects/a-train9/a9_14.png',
      'images/projects/a-train9/a9_07.png',
      'images/projects/a-train9/a9_08.png',
      'images/projects/a-train9/a9_tau01.png',
      'images/projects/a-train9/a9_tau02.png',
      'images/projects/a-train9/a9_tau03.png',
      'images/projects/a-train9/a9_05.png',
      'images/projects/a-train9/a9_06.png',
      'images/projects/a-train9/a9_4.png',
      'images/projects/a-train9/a9_1.png',
      'images/projects/a-train9/a9_2.png',
      'images/projects/a-train9/a9_panel.png',
    ],
    description:
      'Modeling và texturing các công trình kiến trúc và phương tiện hard-surface theo concept art của Artdink. Thiết kế thành phần kiến trúc dạng module để tái sử dụng và lắp ráp linh hoạt giữa các scene.',
    contributions: [
      'Modeling & texturing 3D công trình kiến trúc và phương tiện hard-surface (tàu hỏa, nhà ga, cầu vượt) theo concept art',
      'Thiết kế hệ thống component dạng module để tái sử dụng và lắp ráp linh hoạt, tiết kiệm thời gian sản xuất',
      'Setup asset trong Unreal, đảm bảo đúng chuẩn kỹ thuật và mỹ thuật của khách hàng',
    ],
    tags: ['Hardsurface', 'Modular Design', 'Train', 'Architecture', 'Unreal Engine', 'Blender'],
  },

  // ── 3 ── A-Train: All Aboard! Tourism ───────────────────────────────────
  {
    id: 'a-train-tourism',
    title: 'A-Train: All Aboard! Tourism',
    role: '3D Artist',
    client: 'Artdink',
    engine: 'Unity (Custom Render)',
    year: '2024',
    platform: 'Nintendo Switch · PC',
    status: 'Published',
    featured: false,
    category: ['modeling', 'texturing'],
    thumbnail: 'images/projects/a-train-tourism/panel_BG.png',
    storeLink: 'https://store.steampowered.com/app/1740880/ATrain_All_Aboard_Tourism/',
    images: [
      'images/projects/a-train-tourism/panelmain.png',
      'images/projects/a-train-tourism/at01.png',
      'images/projects/a-train-tourism/at02.png',
      'images/projects/a-train-tourism/at2.png',
      'images/projects/a-train-tourism/at03.png',
      'images/projects/a-train-tourism/at04.png',
      'images/projects/a-train-tourism/at05.png',
      'images/projects/a-train-tourism/panel.png',
      'images/projects/a-train-tourism/ui.png',
    ],
    description:
      'Remaster và nâng chất lượng đồ hoạ asset từ phiên bản cũ — upscale texture, tăng mật độ lưới và chỉnh lại topology để asset trông tốt hơn ở khoảng cách camera mới.',
    contributions: [
      'Remaster asset: upscale texture, tăng mật độ lưới và chỉnh lại topology cho camera mới',
      'Modeling & texturing công trình kiến trúc đô thị và điểm du lịch theo style của game',
      'Đảm bảo asset đáp ứng đúng chuẩn kỹ thuật của Artdink trước khi bàn giao',
    ],
    tags: ['Architecture', 'Remaster', 'Tourism', 'Unreal Engine', 'Blender'],
  },

  // ── 4 ── MU Shader & VFX ────────────────────────────────────────────────
  {
    id: 'mu-vfx',
    title: 'Shader & VFX Demo — MU',
    role: 'Technical Artist',
    client: 'Internal',
    engine: 'Unity (Built-in)',
    year: '2024',
    platform: 'PC · Mobile',
    status: 'Published',
    featured: false,
    category: ['vfx', 'shader'],
    thumbnail: 'images/projects/mu-vfx/panel_BG.png',
    images: [],
    videos: ['videos/mu-shader-char.mp4', 'videos/mu-vfx-levelup.mp4'],
    description:
      'Shader nhân vật và VFX demo — character skin shader và effect level-up cho nhân vật 3D trong game.',
    contributions: [
      'Character shader: skin material, ambient occlusion, rim light, stylised shading',
      'VFX nhân vật level-up: particle system, dissolve effect, glow khi tăng cấp',
      'Tối ưu shader cho target platform, cân bằng visual quality và frame budget',
    ],
    tags: ['HLSL', 'Shader Graph', 'VFX', 'Unity Built-in', 'Character Shader', 'Particles'],
  },

  // ── 5 ── Phong Thần 3D ───────────────────────────────────────────────────
  {
    id: 'phong-than-3d',
    title: 'Phong Thần 3D',
    role: 'Generalist 3D Artist & TA',
    client: '',
    engine: 'Unity (Built-in)',
    year: '2025',
    platform: 'Mobile',
    status: 'Demo',
    featured: false,
    category: ['modeling', 'vfx', 'shader'],
    thumbnail: 'images/projects/phong-than-3d/panelBG.png',
    images: [
      'images/projects/phong-than-3d/panel__main.png',
      'images/projects/phong-than-3d/Screenshot_1.png',
      'images/projects/phong-than-3d/Screenshot_2.png',
      'images/projects/phong-than-3d/Screenshot_3.png',
      'images/projects/phong-than-3d/Screenshot_4.png',
      'images/projects/phong-than-3d/Screenshot_5.png',
      'images/projects/phong-than-3d/Screenshot_6.png',
      'images/projects/phong-than-3d/Screenshot_7.png',
      'images/projects/phong-than-3d/Screenshot_8.png',
      'images/projects/phong-than-3d/Screenshot_9.png',
      'images/projects/phong-than-3d/te.png',
    ],
    description:
      'Build map cho các scene trong game: từ blockout layout, sắp xếp asset, set-dressing chi tiết đến lighting cuối, đảm bảo bố cục phù hợp với gameplay và camera in-game.',
    contributions: [
      'Build map cho các scene từ blockout layout, sắp xếp asset, set-dressing chi tiết đến lighting cuối',
      'Làm shader và VFX cho môi trường (water, fog, foliage wind, dissolve…) trên Unity URP; tối ưu cho mobile tầm trung',
      'Tham gia tối ưu draw call, batching và texture cho từng map, đảm bảo game chạy ổn định trên thiết bị cấu hình thấp',
      'Viết tool trong Unity Editor (C#) để tự động hoá batch import/export, asset audit, đặt lại pivot',
    ],
    tags: ['Scene Build', 'Lighting', 'VFX', 'Unity URP', 'Shader Graph', 'Mobile Optimization', 'Editor Tools'],
  },

  // ── 6 ── Võ Lâm Truyền Kỳ — JX1 Remaster ───────────────────────────────
  {
    id: 'jx1-remaster',
    title: 'Võ Lâm Truyền Kỳ 1 — JX1 Remaster',
    role: 'Generalist 3D Artist',
    client: 'ADNX',
    engine: 'Unity (Built-in)',
    year: '2025',
    platform: 'Mobile',
    status: 'Published',
    featured: false,
    category: ['modeling'],
    thumbnail: 'images/projects/jx1-remaster/panel_BG.png',
    images: [
      'images/projects/jx1-remaster/mainpanel.png',
      'images/projects/jx1-remaster/Screenshot_1.png',
      'images/projects/jx1-remaster/Screenshot_2.png',
      'images/projects/jx1-remaster/Screenshot_3.png',
      'images/projects/jx1-remaster/Screenshot_4.png',
      'images/projects/jx1-remaster/Screenshot_5.png',
      'images/projects/jx1-remaster/Screenshot_6.png',
      'images/projects/jx1-remaster/Screenshot_7.png',
      'images/projects/jx1-remaster/Screenshot_8.png',
      'images/projects/jx1-remaster/Screenshot_9.png',
      'images/projects/jx1-remaster/Screenshot_10.png',
      'images/projects/jx1-remaster/Screenshot_11.png',
      'images/projects/jx1-remaster/BienKinh_wip01_01_v02.png',
      'images/projects/jx1-remaster/ConLon_wip01_01_v01.png',
      'images/projects/jx1-remaster/DuocVuongDong_wip01_01_v01.png',
      'images/projects/jx1-remaster/KhoaLangDong_wip02_03_v01.png',
      'images/projects/jx1-remaster/KhoaLangDong_wip02_04_v01.png',
      'images/projects/jx1-remaster/KhoaLangDong_wip02_05_v01.png',
      'images/projects/jx1-remaster/KiemChungChoKiemChungwip01_01_v01.png',
      'images/projects/jx1-remaster/KiemChungKiemChungBangNguyenDaowip01_01_v01.png',
      'images/projects/jx1-remaster/KiemChungKiemChungDoPhuongwip01_01_v01.png',
      'images/projects/jx1-remaster/KiemChungKiemChungThanhTranwip01_01_v01.png',
      'images/projects/jx1-remaster/KiemChungTraPhong_wip01_01_v01.png',
      'images/projects/jx1-remaster/LamAn_wip02_01_v01.png',
      'images/projects/jx1-remaster/LamDuQuan_wip01_01_v01.png',
      'images/projects/jx1-remaster/LaoHoDong_wip02_01_v01.png',
      'images/projects/jx1-remaster/LoanChienCuuChausanhcho_wip01_01_v01.png',
      'images/projects/jx1-remaster/TanLangTang1_wip01_01_v01.png',
      'images/projects/jx1-remaster/ThienVuong_wip01_01_v01.png',
      'images/projects/jx1-remaster/ThuyYen_wip01_01_v01.png',
      'images/projects/jx1-remaster/ThuyYen_wip01_02_v01.png',
      'images/projects/jx1-remaster/ThuyYen_wip01_03_v01.png',
      'images/projects/jx1-remaster/TruongBachSon_wip01_01_v01.png',
      'images/projects/jx1-remaster/TruongBachSon_wip01_02_v01.png',
      'images/projects/jx1-remaster/TruongBachSon_wip01_03_v01.png',
      'images/projects/jx1-remaster/TruongBachSon_wip01_04_v01.png',
      'images/projects/jx1-remaster/TruongBachSon_wip01_05_v01.png',
      'images/projects/jx1-remaster/VuotAi_wip01_01_v01.png',
      'images/projects/jx1-remaster/image.png',
      'images/projects/jx1-remaster/image_1.png',
      'images/projects/jx1-remaster/image_2.png',
      'images/projects/jx1-remaster/image_3.png',
      'images/projects/jx1-remaster/image_4.png',
    ],
    description:
      'Build map game và quản lý hệ thống asset; đồng bộ kỹ thuật với team Dev thông qua GitLab trong suốt quá trình sản xuất.',
    contributions: [
      'Build map game và quản lý hệ thống asset; đồng bộ qua GitLab (branch, LFS, code review)',
      'Dùng generative AI cho asset 2D với quy trình hậu kỳ riêng, đảm bảo asset đạt chuẩn mỹ thuật và kỹ thuật khi import vào Unity',
      'Viết tool Unity Editor & Python để giảm việc lặp lại khi sản xuất hàng loạt asset',
    ],
    tags: ['MMORPG', 'Remaster', 'Generative AI', 'GitLab', 'Unity', 'Pipeline Tools'],
  },

  // ── 7 ── Kiếm Hiệp Tình ─────────────────────────────────────────────────
  {
    id: 'kiem-hiep-tinh',
    title: 'Kiếm Hiệp Tình',
    role: 'Generalist 3D Artist',
    client: '',
    engine: 'Unity (Built-in)',
    year: '2025',
    platform: 'Mobile',
    status: 'Published',
    featured: false,
    category: ['modeling'],
    thumbnail: 'images/projects/kiem-hiep-tinh/panel_BG.png',
    images: [
      'images/projects/kiem-hiep-tinh/mainpanel.png',
      'images/projects/kiem-hiep-tinh/Screenshot_1.png',
      'images/projects/kiem-hiep-tinh/Screenshot_2.png',
      'images/projects/kiem-hiep-tinh/Screenshot_3.png',
      'images/projects/kiem-hiep-tinh/Screenshot_4.png',
      'images/projects/kiem-hiep-tinh/Screenshot_12.png',
      'images/projects/kiem-hiep-tinh/20260508-161458.jpg',
      'images/projects/kiem-hiep-tinh/20260508-161513.jpg',
      'images/projects/kiem-hiep-tinh/20260508-161518.jpg',
    ],
    description:
      'Build map in-game theo phong cách 2D: từ blockout layout đến set-dressing chi tiết; xử lý tile map blending để các vùng địa hình chuyển tiếp tự nhiên.',
    contributions: [
      'Build map in-game theo phong cách 2D: blockout layout đến set-dressing chi tiết',
      'Xử lý tile map blending để các vùng địa hình chuyển tiếp tự nhiên giữa các loại terrain',
      'Dùng generative AI tạo asset 2D (môi trường, decal, prop) rồi chỉnh tay lại; xây dựng quy trình hậu kỳ để asset đạt chuẩn trước khi đưa vào Unity',
      'Tối ưu cách bố trí map phù hợp với logic và codebase hiện có, hạn chế thay đổi cấu trúc gốc',
    ],
    tags: ['2D Mobile', 'Tilemap', 'Generative AI', 'Set-dressing', 'Unity URP'],
  },

  // ── Audition Mobile ──────────────────────────────────────────────────────
  {
    id: 'audition-mobile',
    title: 'Audition Online Mobile',
    role: '3D Artist',
    client: 'VTC',
    engine: 'Unity',
    year: '2023',
    platform: 'Mobile',
    status: 'Published',
    featured: false,
    category: ['modeling', 'texturing'],
    thumbnail: '',
    thumbColor: 'linear-gradient(135deg,#1a0030,#6b21a8)',
    images: [],
    description:
      'Modeling và texturing nhân vật cùng trang phục cho phiên bản mobile. Tối ưu mesh và texture cho mobile GPU.',
    contributions: [
      'Modeling & texturing nhân vật và trang phục theo art style của game',
      'Tối ưu mesh & texture cho mobile GPU (polycount budget, texture atlasing)',
      'Đảm bảo visual quality ổn định trên nhiều dòng thiết bị mobile khác nhau',
    ],
    tags: ['Character Art', 'Costume', 'Mobile Optimization', 'PBR Texturing', 'Unity'],
  },
];

// ── Personal Projects ────────────────────────────────────────────────────────
export const personalProjects = [
  {
    id: 'death-ball',
    title: 'Death Ball — GMTK Game Jam 2024',
    role: 'Solo Developer',
    engine: 'Unity',
    year: '2024',
    platform: 'PC',
    status: 'Personal',
    featured: true,
    category: ['modeling', 'vfx'],
    thumbnail: 'images/personal/death-ball/panel_BG.png',
    images: [],
    videoLocal: 'videos/death-ball-v1.mp4',
    description:
      'Dự án game jam độc lập cho GMTK Game Jam 2024. Solo development — đảm nhiệm toàn bộ từ game design, 3D art đến code (C#/Unity).',
    contributions: [
      'Game Design: concept, mechanics, và level design từ đầu đến cuối',
      '3D Art: toàn bộ asset, environment, và visual effects',
      'Code (C#/Unity): gameplay systems, physics, và game loop',
      'Hoàn thành game playable trong thời gian giới hạn của game jam',
    ],
    tags: ['Game Jam', 'Unity', 'Solo Dev', 'C#', 'GMTK 2024', '3D Art'],
  },
  {
    id: 'anatomy-study',
    title: 'Anatomy Study — Figure Drawing',
    role: 'Artist',
    engine: '',
    year: '2024',
    platform: 'Personal',
    status: 'Personal',
    featured: false,
    category: ['modeling'],
    thumbnail: 'images/personal/anatomy/40.jpg',
    images: [
      'images/personal/anatomy/40.jpg',
      'images/personal/anatomy/41.jpg',
    ],
    description:
      'Nghiên cứu giải phẫu học và vẽ hình người — nền tảng cho character art và animation.',
    contributions: [
      'Nghiên cứu tỷ lệ cơ thể, cơ bắp, khung xương cho character art',
      'Luyện tập figure drawing để cải thiện kỹ năng model và sculpt nhân vật',
    ],
    tags: ['Figure Drawing', 'Anatomy', 'Character Art', 'Study'],
  },
];

export const animationProjects = [];

export function getAllProjects() {
  return [...publishedProjects, ...personalProjects];
}

// ── Tools ────────────────────────────────────────────────────────────────────
export const tools = [
  {
    id: 'unity-art-tools',
    name: 'unity-art-tools',
    icon: '⚙',
    description: 'Unity Editor utilities: batch import/export, asset audit, pivot baking, pre-build CI gate.',
    stack: ['C#', 'Unity Editor API'],
    github: 'https://github.com/PhanPhamjx/unity-art-tools',
  },
  {
    id: 'material-name-validator',
    name: 'material-name-validator',
    icon: '🔍',
    description: 'Blender add-on + Maya script: validates and auto-fixes material naming conventions.',
    stack: ['Python', 'Blender API', 'Maya API'],
    github: 'https://github.com/PhanPhamjx/material-name-validator',
  },
  {
    id: 'pipeline-checklist-tool',
    name: 'pipeline-checklist-tool',
    icon: '✅',
    description: 'PySide6 Qt desktop app: 5-stage art-pipeline checklist with JSON save and text export.',
    stack: ['Python', 'PySide6 / Qt'],
    github: 'https://github.com/PhanPhamjx/pipeline-checklist-tool',
  },
];

// ── Experience ───────────────────────────────────────────────────────────────
export const experience = [
  { title: 'Generalist 3D Artist & Technical Artist', company: '', period: '2025 – Present', highlights: ['Làm và tối ưu asset cho MMORPG mobile — tinh chỉnh poly count, texture size, draw call và memory budget', 'Viết tool Unity Editor (C#) tự động hoá batch import/export, asset audit', 'Làm shader và VFX cho môi trường in-game trên Unity URP', 'Tham gia level design, lighting setup; đề xuất module để tái sử dụng asset'] },
  { title: 'Generalist 3D Artist', company: 'Kamework Studio', period: '2023 – 2025', highlights: ['Modeling và texturing môi trường, nhân vật cho dự án console và mobile (Artdink, Square Enix)', 'Import và setup asset trong Unity / Unreal — scale, pivot, naming, LOD, collision', 'Xử lý note từ art director theo đúng yêu cầu kỹ thuật và mỹ thuật'] },
  { title: '3D Artist Intern', company: 'Thunder Cloud Studio', period: '2022', highlights: ['Modeling và texturing asset 3D theo yêu cầu dự án', 'Làm quen với pipeline outsource quy mô studio'] },
  { title: 'Freelance 3D Artist', company: 'Self-employed', period: '2022 – Present', highlights: ['Nhận dự án 3D ngắn hạn — hard-surface, prop và environment cho game indie', 'Thử nghiệm kỹ thuật mới ngoài phạm vi công việc full-time'] },
];

// ── Education ────────────────────────────────────────────────────────────────
export const education = [
  { school: 'Dẫu Phải Rigging', degree: 'Technical Artist Bootcamp', period: 'Jun 2024 – Feb 2025' },
  { school: 'Unity Learn & Udemy', degree: 'C# Programming for Unity', period: '2023–2024' },
  { school: 'TA Studio', degree: 'Model & Sculpt', period: '2022' },
  { school: 'ĐH Hutech', degree: 'Công nghệ Thông tin', period: '2023–2026' },
  { school: 'ĐH Kinh doanh & Công nghệ', degree: 'Thiết kế Đồ họa', period: '2018–2023' },
];

// ── Personal Info ────────────────────────────────────────────────────────────
export const personalInfo = {
  name: 'Phạm Thanh Tùng',
  shortName: 'PhamTung',
  title: 'Generalist 3D Artist & Technical Artist',
  email: 'phamtung.gamedev@gmail.com',
  phone: '0332 577 358',
  location: 'Hà Nội, Việt Nam',
  avatar: 'images/avatar/avatar.jpg',
  bio: `3D Artist với hơn <strong>3 năm kinh nghiệm</strong> trong ngành game — chuyên build scene và map in-game, bao gồm blockout, set-dressing, lighting và tối ưu để map chạy ổn trên thiết bị mục tiêu.`,
  bio2: `Bên cạnh công việc art, có kiến thức về <strong>Technical Art</strong> — shader (Shader Graph, HLSL), viết tool Unity Editor và Python để hỗ trợ workflow team.`,
  socials: {
    artstation: 'https://artstation.com/phanpham2k',
    github: 'https://github.com/PhanPhamjx',
    linkedin: '#',
    youtube: '#',
  },
};

// ── Skills ───────────────────────────────────────────────────────────────────
export const skills = {
  art: ['Blender', 'Maya', 'ZBrush', 'Substance Painter', 'Marmoset', 'Photoshop'],
  engines: ['Unity (URP, Shader Graph, Addressables, Animator)', 'Unreal Engine'],
  technical: ['C# (Unity scripting & editor tools)', 'Python (DCC automation, Qt UI)', 'HLSL / Shader Graph', 'Git · GitLab'],
  specialties: ['Low/High Poly Modeling', 'Retopology · UV · Baking', 'PBR · Hand-paint', 'Mobile Optimization', 'Scene Build · Lighting', 'VFX · Particle Systems'],
};

export const skillTiers = [
  { level: 'Expert', color: '#7c6aff', skills: ['Blender', 'Substance Painter', 'Low/High Poly Modeling', 'UV Unwrapping', 'PBR Texturing', 'Mobile Asset Optimization', 'Scene Build & Lighting'] },
  { level: 'Professional', color: '#a78bfa', skills: ['Maya', 'Unity (URP)', 'Unreal Engine', 'C# (Unity Editor tools)', 'Python (DCC automation)', 'Git · GitLab', 'Normal Map Baking', 'VFX / Particle Systems'] },
  { level: 'Proficient', color: '#7a9ab8', skills: ['ZBrush', 'Photoshop', 'Marmoset', 'HLSL / Shader Graph', 'Generative AI (asset)', 'Qt UI', 'Retopology'] },
  { level: 'Learning', color: '#4a6280', skills: ['Houdini', 'Procedural Generation', 'Blueprints (UE5)', 'Real-time Rendering (Lumen/Nanite)', 'Tiếng Anh giao tiếp'] },
];

export const stats = [
  { num: '3+', label: 'YEARS EXPERIENCE' },
  { num: '7+', label: 'SHIPPED TITLES' },
  { num: '4',  label: 'STUDIOS WORKED' },
  { num: 'TA', label: 'CAREER GOAL' },
];

export const showreel = {
  youtubeId: '',
  localVideo: 'videos/portfolio-v1.mp4',
  year: '2025',
};
