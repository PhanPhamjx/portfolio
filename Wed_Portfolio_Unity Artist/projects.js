/* ==========================================================================
   PT.TUNG — project data
   7 productions (rich) + 30 portfolio entries (lighter)
   ========================================================================== */

window.PROJECTS = {
  "phong-than-3d": {
    title: "Phong Thần 3D",
    studio: "SaboGame",
    year: "2025",
    engine: "Unity Built-in RP",
    platforms: ["mobile"],
    category: { en: "Mobile MMORPG", vi: "MMORPG Mobile" },
    role:     { en: "Environment · Lighting · Shaders / VFX",
                vi: "Môi trường · Lighting · Shader / VFX" },
    summary: {
      en: "A 3D mobile MMORPG built on Unity's Built-in render pipeline. I joined as part of the environment and tech-art team, building maps end-to-end and authoring the environment shader / VFX library that the rest of the team shares.",
      vi: "MMORPG mobile 3D dựng trên Unity Built-in. Tôi tham gia với vai trò environment và tech art — build map từ blockout đến lighting cuối, đồng thời viết bộ shader / VFX môi trường dùng chung cho cả team."
    },
    contributions: {
      en: [
        "Built scene maps end-to-end — blockout layout, asset placement, detailed set-dressing and final lighting — so that composition reads well on the in-game gameplay camera.",
        "Authored environment shaders and VFX (water, height fog, foliage wind, dissolve …) on Unity Built-in RP, balancing fidelity and performance for mid-tier mobile.",
        "Participated in draw-call, batching and texture optimisation passes so the build stays smooth on lower-end devices."
      ],
      vi: [
        "Build map cho các scene trong game — từ blockout layout, sắp xếp asset, set-dressing chi tiết đến lighting cuối, đảm bảo bố cục phù hợp với gameplay camera.",
        "Làm shader và VFX cho môi trường (water, fog, foliage wind, dissolve…) trên Unity Built-in; tinh chỉnh thông số để cân bằng giữa chất lượng hình ảnh và hiệu năng trên mobile tầm trung.",
        "Tham gia tối ưu draw call, batching và texture, đảm bảo game chạy ổn định trên cả thiết bị cấu hình thấp."
      ]
    },
    stack: ["Unity", "Built-in RP", "C#", "HLSL", "Shader Graph", "VFX"],
    gallery: 6,
  },

  "kiem-hiep-tinh": {
    title: "Kiếm Hiệp Tình",
    studio: "SaboGame",
    year: "2025",
    engine: "Unity 2D",
    platforms: ["mobile"],
    category: { en: "2D MMORPG", vi: "MMORPG 2D" },
    role:     { en: "2D Map Build · Tile Blending · Gen-AI Pipeline",
                vi: "Build Map 2D · Tile Blending · Pipeline Gen-AI" },
    summary: {
      en: "A 2D mobile MMORPG with a long-living codebase. The job was to deliver new maps and assets at scale without disturbing the existing structure — which meant building a generative-AI asset pipeline that fits the game's visual language.",
      vi: "MMORPG 2D mobile với codebase đã chạy nhiều năm. Việc của tôi là đưa map và asset mới ra với số lượng lớn nhưng không phá cấu trúc cũ — kéo theo một pipeline gen-AI cho asset bám phong cách game."
    },
    contributions: {
      en: [
        "Built in-game maps in a 2D style — from blockout layout to detailed set-dressing — and handled tile-map blending so terrain transitions read naturally.",
        "Used generative AI to source 2D assets (environments, decals, props) and hand-tuned each one to match the game's style. Built a custom post-processing routine so assets met the bar before going into Unity.",
        "Found map-layout strategies that fit the existing logic and the multi-year-old codebase, minimising structural change."
      ],
      vi: [
        "Build map in-game theo phong cách 2D — từ blockout đến set-dressing chi tiết; xử lý tile map blending để các vùng địa hình chuyển tiếp tự nhiên.",
        "Dùng generative AI tạo asset 2D (môi trường, decal, prop) rồi chỉnh tay lại cho đồng bộ. Xây quy trình hậu kỳ riêng để asset đạt chuẩn trước khi vào Unity.",
        "Tìm cách bố trí map phù hợp với logic và codebase đã có sẵn nhiều năm, hạn chế thay đổi cấu trúc gốc."
      ]
    },
    stack: ["Unity 2D", "Tile Maps", "Generative AI", "Photoshop", "Python"],
    gallery: 5,
  },

  "jx1-remaster": {
    title: "Võ Lâm Truyền Kỳ 1 — JX1 Remaster",
    studio: "ADNX",
    year: "2025",
    engine: "Unity",
    platforms: ["mobile"],
    category: { en: "MMORPG Remaster · Mobile", vi: "Remaster MMORPG · Mobile" },
    role:     { en: "Map Build · Asset System · Editor Tools",
                vi: "Build Map · Asset System · Editor Tool" },
    summary: {
      en: "Remaster of a long-running Vietnamese MMORPG for mobile. Focus was on map output and on the asset system that supports it — keeping a tight feedback loop with the dev team via GitLab through the whole build.",
      vi: "Remaster cho MMORPG lâu đời của VN trên mobile. Trọng tâm là output map và asset system hỗ trợ — giữ vòng phản hồi với team Dev qua GitLab trong suốt quá trình."
    },
    contributions: {
      en: [
        "Built game maps and managed the asset system; synchronised technically with the dev team through GitLab (branches, LFS, small code reviews) across the whole production.",
        "Used generative AI for 2D assets with a dedicated post-processing routine so artwork met both visual and technical bars on import to Unity.",
        "Wrote small Unity Editor and Python tools to cut repeat work during bulk asset production, speeding up the team's throughput."
      ],
      vi: [
        "Build map game và quản lý hệ thống asset; đồng bộ kỹ thuật với team Dev qua GitLab (branch, LFS, code review nhỏ) trong suốt quá trình.",
        "Dùng generative AI cho asset 2D với một quy trình hậu kỳ riêng, đảm bảo asset đạt chuẩn về mỹ thuật và kỹ thuật khi import vào Unity.",
        "Viết một số tool nhỏ (Unity Editor & Python) để giảm việc lặp lại trong sản xuất hàng loạt asset, đẩy nhanh tốc độ làm việc của team."
      ]
    },
    stack: ["Unity", "C#", "Python", "GitLab LFS", "Generative AI"],
    gallery: 5,
  },

  "atrain-9": {
    title: "A-Train 9 — Train Construction",
    studio: "Artdink",
    year: "2025",
    engine: "Unreal Engine",
    platforms: ["switch", "pc"],
    category: { en: "Simulation · Console / PC", vi: "Mô phỏng · Console / PC" },
    role:     { en: "Hard-surface · Modular Architecture",
                vi: "Hard-surface · Kiến trúc Module" },
    summary: {
      en: "Hard-surface modeling and texturing for a Japanese train-building simulation. Worked from client concept art under strict technical and visual specs, and contributed a modular architecture system that was reused across scenes.",
      vi: "Modeling và texturing hard-surface cho game mô phỏng xây dựng tàu của Nhật. Làm từ concept art khách hàng theo yêu cầu kỹ thuật và mỹ thuật chặt; đóng góp hệ thống kiến trúc dạng module được tái sử dụng giữa các scene."
    },
    contributions: {
      en: [
        "Modeled and textured architectural structures and hard-surface vehicles from client concept art, holding to strict technical and visual specs.",
        "Designed modular architectural components for flexible reuse and assembly across scenes — saving production time during the project's peak."
      ],
      vi: [
        "Modeling và texturing các công trình kiến trúc và phương tiện hard-surface theo concept art của khách hàng, tuân thủ chặt chẽ yêu cầu kỹ thuật và mỹ thuật.",
        "Thiết kế các thành phần kiến trúc dạng module để tái sử dụng và lắp ráp linh hoạt giữa các scene, giúp tiết kiệm thời gian sản xuất ở giai đoạn cao điểm."
      ]
    },
    stack: ["Unreal", "Maya", "Substance Painter", "Marmoset"],
    gallery: 5,
  },

  "atrain-tourism": {
    title: "A-Train: All Aboard! Tourism",
    studio: "Artdink",
    year: "2024",
    engine: "Unreal Engine",
    platforms: ["switch", "pc"],
    category: { en: "Simulation · Remaster", vi: "Mô phỏng · Remaster" },
    role:     { en: "Asset Remaster · Topology · Texture Upscale",
                vi: "Remaster Asset · Topology · Texture Upscale" },
    summary: {
      en: "Remaster pass on assets carried over from earlier titles. The bar was higher camera distance and modern displays — meaning higher mesh density, cleaner topology, and upscaled textures across the existing asset base.",
      vi: "Pass remaster cho asset từ các bản trước. Tiêu chuẩn mới yêu cầu camera gần hơn và màn hình hiện đại — đồng nghĩa với mật độ lưới cao hơn, topology sạch hơn và texture upscale cho cả bộ asset."
    },
    contributions: {
      en: [
        "Remastered and upgraded the visual quality of legacy assets — texture upscaling, increased mesh density, topology cleanup — so they hold up on the title's new camera distance.",
        "Verified and ensured assets met the client's technical specifications before delivery."
      ],
      vi: [
        "Remaster, nâng chất lượng đồ hoạ asset từ phiên bản cũ — upscale texture, tăng mật độ lưới và chỉnh lại topology để asset trông tốt hơn ở khoảng cách camera mới.",
        "Kiểm tra và đảm bảo asset đáp ứng đúng chuẩn kỹ thuật của khách hàng trước khi bàn giao."
      ]
    },
    stack: ["Unreal", "Maya", "ZBrush", "Substance Painter"],
    gallery: 5,
  },

  "dragon-quest-hd2d": {
    title: "Dragon Quest HD-2D Remake",
    studio: "Square Enix · Artdink",
    year: "2024",
    engine: "Unreal Engine",
    platforms: ["switch", "pc", "ps"],
    category: { en: "JRPG · Multi-platform", vi: "JRPG · Đa nền tảng" },
    role:     { en: "Architecture · Environment · UE Setup",
                vi: "Kiến trúc · Môi trường · Setup Unreal" },
    summary: {
      en: "Architectural and environment modeling for a Dragon Quest HD-2D remake — Square Enix's signature look that combines high-detail 3D worlds with 2D characters. Strong emphasis on holding the franchise visual identity through every prop.",
      vi: "Modeling kiến trúc và môi trường cho bản remake Dragon Quest HD-2D — phong cách đặc trưng của Square Enix kết hợp thế giới 3D chi tiết và nhân vật 2D. Yêu cầu rất cao về giữ phong cách thương hiệu trong từng asset."
    },
    contributions: {
      en: [
        "Modeled architecture and environment pieces from the supplied concept art, holding the HD-2D look that's a Square Enix signature.",
        "Set up models in Unreal Engine and verified materials and lighting so the asset reads correctly in the final scene."
      ],
      vi: [
        "Modeling công trình kiến trúc và môi trường theo concept art được cung cấp, giữ đúng phong cách HD-2D đặc trưng của Square Enix.",
        "Setup model trong Unreal Engine, kiểm tra material và lighting để asset hoạt động đúng trong scene cuối."
      ]
    },
    stack: ["Unreal", "Maya", "ZBrush", "Substance Painter"],
    gallery: 6,
  },

  "audition-mobile": {
    title: "Audition Online Mobile",
    studio: "VTC",
    year: "2023",
    engine: "Unity",
    platforms: ["mobile"],
    category: { en: "Music / Dance · Mobile", vi: "Âm nhạc / Dance · Mobile" },
    role:     { en: "Character · Costumes · Mobile Optimisation",
                vi: "Nhân vật · Trang phục · Tối ưu Mobile" },
    summary: {
      en: "Mobile port of a long-standing Vietnamese music-and-dance title. Character and costume work — modelling and texturing — under tight mobile-GPU budgets, balancing visual detail against frame-rate on a wide install base.",
      vi: "Bản mobile của một tựa game âm nhạc / dance lâu đời tại VN. Làm nhân vật và trang phục — modeling và texturing — dưới ngân sách GPU mobile chặt, cân bằng độ chi tiết và frame-rate trên dải thiết bị rộng."
    },
    contributions: {
      en: [
        "Modeled and textured characters and costumes for the mobile version of a long-standing Vietnamese title.",
        "Optimised mesh and textures for mobile GPUs — balancing artistic detail against the platform's performance budget."
      ],
      vi: [
        "Modeling và texturing nhân vật cùng trang phục cho phiên bản mobile của một thương hiệu game lâu đời tại Việt Nam.",
        "Tối ưu mesh và texture cho mobile GPU, cân bằng giữa độ chi tiết mỹ thuật và ngân sách hiệu năng trên thiết bị di động."
      ]
    },
    stack: ["Unity", "Maya", "Substance Painter", "Photoshop"],
    gallery: 4,
  },
};

/* Productions order matches the home page */
window.PROJECTS_ORDER = [
  "phong-than-3d",
  "kiem-hiep-tinh",
  "jx1-remaster",
  "atrain-9",
  "atrain-tourism",
  "dragon-quest-hd2d",
  "audition-mobile",
];

/* Lightweight metadata for the 30 portfolio tiles (matches portfolio.html). */
window.PORTFOLIO_TILES = [
  {span:8, ratio:"wide",  title:"Phong Thần — Hero Scene",         cat:"ENVIRONMENT", badge:"Unity URP",  featured:true, parent:"phong-than-3d"},
  {span:4, ratio:"tall",  title:"Foliage Wind Shader",             cat:"SHADER",      badge:"HLSL",                       parent:"phong-than-3d"},
  {span:4, ratio:"",      title:"Stylised Water — URP",            cat:"SHADER",      badge:"Shader Graph",               parent:"phong-than-3d"},
  {span:4, ratio:"",      title:"Modular Ruins Kit",               cat:"MODELING",    badge:"Blender"},
  {span:4, ratio:"",      title:"Asset Audit Tool",                cat:"TOOL",        badge:"Editor C#"},
  {span:6, ratio:"",      title:"Dissolve / Edge-Glow VFX",        cat:"VFX",         badge:"Shader Graph",               parent:"phong-than-3d"},
  {span:6, ratio:"",      title:"HD-2D Lighting Study",            cat:"LIGHTING",    badge:"Unreal",                     parent:"dragon-quest-hd2d"},
  {span:4, ratio:"",      title:"Tile Blending Pipeline",          cat:"PIPELINE",    badge:"Unity 2D",                   parent:"kiem-hiep-tinh"},
  {span:4, ratio:"tall",  title:"Hand-Painted Stylised Tree",      cat:"MODELING",    badge:"ZBrush"},
  {span:4, ratio:"",      title:"Height Fog — URP",                cat:"SHADER",      badge:"Shader Graph",               parent:"phong-than-3d"},
  {span:6, ratio:"wide",  title:"Kiếm Hiệp — Map Build",           cat:"ENVIRONMENT", badge:"Unity 2D",                   parent:"kiem-hiep-tinh"},
  {span:6, ratio:"wide",  title:"JX1 Remaster — Map",              cat:"ENVIRONMENT", badge:"Unity",                      parent:"jx1-remaster"},
  {span:4, ratio:"",      title:"Pivot & Origin Reset",            cat:"TOOL",        badge:"Editor C#"},
  {span:4, ratio:"",      title:"Dragon Quest — Architecture",     cat:"MODELING",    badge:"Unreal",                     parent:"dragon-quest-hd2d"},
  {span:4, ratio:"",      title:"A-Train — Train Hard-Surface",    cat:"MODELING",    badge:"Maya",                       parent:"atrain-9"},
  {span:4, ratio:"tall",  title:"Audition — Costume Pack",         cat:"CHARACTER",   badge:"Substance",                  parent:"audition-mobile"},
  {span:8, ratio:"wide",  title:"A-Train Tourism — Remaster",      cat:"ENVIRONMENT", badge:"Unreal",                     parent:"atrain-tourism"},
  {span:4, ratio:"",      title:"Pre-build Validator",             cat:"TOOL",        badge:"CI Hook"},
  {span:4, ratio:"",      title:"Foam Mask — Beach Water",         cat:"SHADER",      badge:"HLSL",                       parent:"phong-than-3d"},
  {span:4, ratio:"",      title:"Stylised Cliff Material",         cat:"SHADER",      badge:"Shader Graph"},
  {span:4, ratio:"",      title:"Rocks & Boulders — Trim Sheet",   cat:"MODELING",    badge:"Substance"},
  {span:6, ratio:"",      title:"Batch Asset Importer",            cat:"TOOL",        badge:"Editor C#"},
  {span:6, ratio:"",      title:"DCC Automation — Qt UI",          cat:"PIPELINE",    badge:"Python"},
  {span:4, ratio:"tall",  title:"Hero Prop — Sword",               cat:"MODELING",    badge:"ZBrush"},
  {span:4, ratio:"",      title:"Forest Decals & Particles",       cat:"VFX",         badge:"Particles",                  parent:"phong-than-3d"},
  {span:4, ratio:"",      title:"Hand-Paint — Stone Bridge",       cat:"TEXTURING",   badge:"Photoshop"},
  {span:4, ratio:"",      title:"Lantern — Glow Material",         cat:"SHADER",      badge:"Shader Graph"},
  {span:4, ratio:"",      title:"Editor — Asset Snapshot",         cat:"TOOL",        badge:"Editor C#"},
  {span:4, ratio:"",      title:"Personal — Stylised Diorama",     cat:"PERSONAL",    badge:"Blender"},
  {span:12,ratio:"wide",  title:"Reel — End Card",                 cat:"REEL",        badge:"H.264"},
];
