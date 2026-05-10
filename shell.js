/* ==========================================================================
   PT.TUNG — i18n + shell
   ========================================================================== */

window.I18N = {
  en: {
    "nav.home": "Home",
    "nav.portfolio": "Portfolio",
    "nav.about": "About",
    "nav.contact": "Contact",
    "brand.role": "Generalist 3D · Technical Artist",

    "status.online": "Online",
    "status.based": "Based in Hà Nội, Việt Nam",
    "status.avail": "Available · 2026 Q2",
    "status.build": "Build 2026.05.09",
    "status.viewport": "Viewport",

    "hero.tag.role": "Generalist 3D · Technical Artist",
    "hero.tag.engine": "Unity · Unreal",
    "hero.tag.years": "3+ years shipping games",
    "hero.title.line1": "Building maps, shaders &",
    "hero.title.line2": "tools that ship on real hardware.",
    "hero.meta.reel": "Demo Reel · 2026",
    "hero.meta.runtime": "Runtime 02:14",
    "hero.meta.codec": "H.264 · 1080p",
    "hero.play": "Play Reel",
    "hero.placeholder": "Drop demo reel poster (16:9)",

    "credits.label": "Productions",
    "credits.num": "01 / Credits",
    "credits.title": "Games I've helped ship.",
    "credits.lede": "Mobile MMORPGs and console titles for studios across Vietnam and Japan — environment art, lighting, shaders and tooling. Roles vary; what's common is making the build run on the device the player actually has.",
    "credits.engine": "Engine",

    "selected.label": "Selected Work",
    "selected.num": "02 / Portfolio",
    "selected.title": "Shaders, environments &  in-engine tools.",
    "selected.lede": "A slice of recent work — URP shaders, hand-painted modular kits, lighting studies, editor tools. Drop your screenshots into any tile.",
    "selected.viewall": "View all 30",

    "about.label": "About",
    "about.num": "03 / About",
    "about.title": "I'm Tùng — a 3D artist who likes shipping.",
    "about.lede": "I care more about the game running smoothly on a 4-year-old phone than about the prettiest screenshot. Tooling and TA work tends to follow.",
    "about.readmore": "Read full bio",

    "cta.label": "Get in touch",
    "cta.title": "Have a build that needs an extra hand?",
    "cta.lede": "Open to full-time technical art roles, contract environment work, and short shader / tool gigs. Studios in Hà Nội welcome — remote also fine.",
    "cta.email": "Email me",
    "cta.artstation": "ArtStation",

    "page.portfolio.title": "All work",
    "page.portfolio.titleem": "30 pieces.",
    "page.portfolio.lede": "Environment art, shaders, VFX, modular kits, and editor tooling — pulled from shipped projects, freelance and personal R&D. Tap any tile to drop in your own screenshots.",

    "page.about.title": "Phạm Thanh Tùng,",
    "page.about.titleem": "Generalist 3D & Technical Artist.",
    "page.about.lede": "3+ years building maps, shaders and tools for mobile MMORPGs and Nintendo Switch / PC / PS titles. Currently at SaboGame, headed deeper into Technical Art.",

    "about.bio.p1": "I'm a Generalist 3D Artist with a Technical Art lean, based in Hà Nội. My day-to-day is building scenes and maps that ship — blockout, set-dressing, lighting, and the optimization pass that makes them run on the target device.",
    "about.bio.p2": "I've worked on mobile MMORPGs as well as a handful of titles for Nintendo Switch, PC and PlayStation. My main engine is Unity (Built-in, URP, Shader Graph, Editor scripting) and I work in Unreal for console projects.",
    "about.bio.p3": "Alongside art, I write tools — Unity Editor utilities in C# and pipeline / DCC automation in Python (with Qt UIs) — to cut repeat work and keep our team's builds clean. I'm comfortable enough in HLSL and Shader Graph to author production shaders and VFX for environments.",
    "about.bio.p4": "What I'm chasing right now: going deeper as a Technical Artist, raising visual quality without hurting frame budgets, and shortening the path from concept to a playable scene.",

    "skills.label": "Skills & Tools",
    "skills.num": "04 / Stack",
    "skills.title": "What's in the inspector.",
    "skills.lede": "Day-to-day tools, organised the way I'd lay them out in an Inspector panel. Items in mint are the ones I reach for first.",

    "skills.engines": "Engines & Pipelines",
    "skills.dcc": "3D / 2D Software",
    "skills.programming": "Programming",
    "skills.specialties": "Specialties",
    "skills.other": "Other",

    "tools.label": "Tools / Scripts",
    "tools.num": "05 / Builds",
    "tools.title": "Tools I've written for art teams.",
    "tools.lede": "Small Unity Editor utilities and Python pipeline scripts that pay for themselves in a sprint. Each one was born out of a repeat task that was eating 30+ minutes a day from somebody on the team.",

    "tool.batch.title": "Batch Asset Importer",
    "tool.batch.body": "Unity Editor window for art-team batch import / export with naming convention checks, FBX import preset routing, and a dry-run preview. Handles a few hundred meshes per pass.",
    "tool.batch.foot": "shipped · in daily use",

    "tool.audit.title": "Asset Audit Tool",
    "tool.audit.body": "Editor scanner that walks a Resources folder and flags poly-count, texture size, draw call and memory budget violations against per-tier rules. Outputs a CSV report for producers.",
    "tool.audit.foot": "shipped · MMORPG mobile",

    "tool.pivot.title": "Pivot & Origin Reset",
    "tool.pivot.body": "Right-click context menu in the Project window — pick a vertex, the bottom-center, or the bounding box, and the script bakes a new pivot via a dummy parent transform. Also fixes scale-baking on imported FBX.",
    "tool.pivot.foot": "shipped · saves 20m / day",

    "tool.validator.title": "Pre-build Validator",
    "tool.validator.body": "Pre-build hook that runs before pushing to GitLab — checks LOD setup, collider presence, texture compression overrides, missing references, and breaks the build with a readable report if anything's off.",
    "tool.validator.foot": "shipped · CI gate",

    "tool.dcc.title": "DCC Automation (Python)",
    "tool.dcc.body": "Maya / Blender side-scripts with PySide / Qt UIs — batch UV layout, retopo cleanup helpers, and an export-to-Unity wrapper that enforces our scale, axis and naming rules at source.",
    "tool.dcc.foot": "internal · 2 studios",

    "tool.shaders.title": "Environment Shader Pack",
    "tool.shaders.body": "URP Shader Graph + HLSL hybrid: water with foam masks, height-fog, vertex foliage wind, and a generic dissolve with edge-glow. Tuned for mid-tier mobile (Adreno 6xx and up).",
    "tool.shaders.foot": "shipped · Phong Thần 3D",

    "contact.title": "Let's build something",
    "contact.titleem": "that ships.",
    "contact.lede": "Best place to reach me is email or ArtStation. I read both within a day. For studios in Hà Nội we can also meet for cà phê.",
    "contact.copy": "Copy",
    "contact.copied": "Copied",
    "contact.k.email": "Email",
    "contact.k.phone": "Phone",
    "contact.k.location": "Based",
    "contact.k.github": "GitHub",
    "contact.k.artstation": "ArtStation",
    "contact.k.avail": "Status",
    "contact.v.location": "Hà Nội, Việt Nam (UTC+7)",
    "contact.v.avail": "Open · Q2 2026 · FT or Contract",

    "footer.role": "Generalist 3D · Technical Artist",
    "footer.copy": "© 2026 PHẠM THANH TÙNG · ALL RIGHTS RESERVED",

    "viewport.work": "Selected Work",
    "common.viewproject": "View Project",
  },
  vi: {
    "nav.home": "Trang chủ",
    "nav.portfolio": "Portfolio",
    "nav.about": "Giới thiệu",
    "nav.contact": "Liên hệ",
    "brand.role": "Generalist 3D · Technical Artist",

    "status.online": "Đang hoạt động",
    "status.based": "Hà Nội, Việt Nam",
    "status.avail": "Sẵn sàng · 2026 Q2",
    "status.build": "Build 2026.05.09",
    "status.viewport": "Khung nhìn",

    "hero.tag.role": "Generalist 3D · Technical Artist",
    "hero.tag.engine": "Unity · Unreal",
    "hero.tag.years": "Hơn 3 năm trong ngành game",
    "hero.title.line1": "Build map, shader &",
    "hero.title.line2": "tool chạy được trên thiết bị thật.",
    "hero.meta.reel": "Demo Reel · 2026",
    "hero.meta.runtime": "Thời lượng 02:14",
    "hero.meta.codec": "H.264 · 1080p",
    "hero.play": "Xem reel",
    "hero.placeholder": "Thả poster demo reel (16:9)",

    "credits.label": "Productions",
    "credits.num": "01 / Credits",
    "credits.title": "Những game tôi đã tham gia.",
    "credits.lede": "Mobile MMORPG và game console cho studio Việt Nam và Nhật — environment art, lighting, shader và tool. Vai trò khác nhau; điểm chung là làm cho build chạy được trên thiết bị mà người chơi đang dùng.",
    "credits.engine": "Engine",

    "selected.label": "Tác phẩm chọn lọc",
    "selected.num": "02 / Portfolio",
    "selected.title": "Shader, môi trường & tool in-engine.",
    "selected.lede": "Một phần công việc gần đây — URP shader, modular kit hand-painted, lighting study, editor tool. Bạn có thể thả ảnh vào bất kỳ ô nào.",
    "selected.viewall": "Xem tất cả 30",

    "about.label": "Giới thiệu",
    "about.num": "03 / About",
    "about.title": "Mình là Tùng — 3D artist thích ship game.",
    "about.lede": "Mình quan tâm việc game chạy mượt trên điện thoại 4 năm tuổi hơn là một screenshot đẹp. Tool và TA work theo đó mà ra.",
    "about.readmore": "Đọc tiểu sử đầy đủ",

    "cta.label": "Liên hệ",
    "cta.title": "Có build cần thêm người làm không?",
    "cta.lede": "Mở cho vị trí Technical Artist full-time, contract environment, và shader / tool gig ngắn hạn. Studio Hà Nội ưu tiên — remote cũng được.",
    "cta.email": "Gửi email",
    "cta.artstation": "ArtStation",

    "page.portfolio.title": "Toàn bộ tác phẩm",
    "page.portfolio.titleem": "30 mảnh.",
    "page.portfolio.lede": "Environment art, shader, VFX, modular kit và editor tool — lấy từ project đã ship, freelance và R&D cá nhân. Click bất kỳ ô nào để thả ảnh của bạn.",

    "page.about.title": "Phạm Thanh Tùng,",
    "page.about.titleem": "Generalist 3D & Technical Artist.",
    "page.about.lede": "Hơn 3 năm build map, shader và tool cho mobile MMORPG và game Switch / PC / PS. Hiện làm tại SaboGame, định hướng đi sâu hơn theo Technical Art.",

    "about.bio.p1": "Mình là Generalist 3D Artist có thiên hướng Technical Art, sống tại Hà Nội. Công việc hằng ngày là build scene và map trong game — blockout, set-dressing, lighting, và pass tối ưu để chạy ổn trên thiết bị mục tiêu.",
    "about.bio.p2": "Mình đã làm cho mobile MMORPG cũng như một vài tựa cho Nintendo Switch, PC và PlayStation. Engine chính là Unity (Built-in, URP, Shader Graph, Editor scripting), ngoài ra có làm Unreal cho dự án console.",
    "about.bio.p3": "Bên cạnh art, mình viết tool — Unity Editor utilities trong C# và pipeline / DCC automation bằng Python (Qt UI) — để giảm việc lặp lại và giữ build sạch cho team. Đủ thoải mái với HLSL và Shader Graph để viết shader / VFX cho môi trường.",
    "about.bio.p4": "Định hướng hiện tại: đi sâu hơn theo Technical Artist, nâng chất lượng hình ảnh mà không phá ngân sách hiệu năng, và rút ngắn đường từ concept đến scene playable.",

    "skills.label": "Kỹ năng & Công cụ",
    "skills.num": "04 / Stack",
    "skills.title": "Những thứ trong inspector.",
    "skills.lede": "Công cụ làm việc hằng ngày, sắp xếp như một Inspector panel. Item màu xanh là cái mình hay dùng nhất.",

    "skills.engines": "Engines & Pipelines",
    "skills.dcc": "Phần mềm 3D / 2D",
    "skills.programming": "Lập trình",
    "skills.specialties": "Chuyên môn",
    "skills.other": "Khác",

    "tools.label": "Tool / Script",
    "tools.num": "05 / Builds",
    "tools.title": "Tool mình viết cho team art.",
    "tools.lede": "Unity Editor utility nhỏ và Python pipeline script — thường tự hoàn vốn trong một sprint. Mỗi tool ra đời từ một việc lặp lại ngốn 30+ phút mỗi ngày của ai đó trong team.",

    "tool.batch.title": "Batch Asset Importer",
    "tool.batch.body": "Cửa sổ Unity Editor cho team art batch import / export với check naming convention, routing FBX import preset và dry-run preview. Xử lý vài trăm mesh mỗi lượt.",
    "tool.batch.foot": "đã ship · dùng hằng ngày",

    "tool.audit.title": "Asset Audit Tool",
    "tool.audit.body": "Editor scanner duyệt thư mục Resources, flag vi phạm về poly-count, texture size, draw call và memory budget theo rule từng tier. Xuất CSV cho producer.",
    "tool.audit.foot": "đã ship · MMORPG mobile",

    "tool.pivot.title": "Pivot & Origin Reset",
    "tool.pivot.body": "Context menu chuột phải trong Project window — chọn vertex, đáy-trung tâm hoặc bounding box, script bake pivot mới qua transform parent ảo. Cũng fix scale-baking cho FBX.",
    "tool.pivot.foot": "đã ship · tiết kiệm 20p / ngày",

    "tool.validator.title": "Pre-build Validator",
    "tool.validator.body": "Hook chạy trước khi push lên GitLab — check LOD setup, collider, texture compression override, reference thiếu, và break build với báo cáo dễ đọc nếu sai.",
    "tool.validator.foot": "đã ship · CI gate",

    "tool.dcc.title": "DCC Automation (Python)",
    "tool.dcc.body": "Maya / Blender side-script với PySide / Qt UI — batch UV layout, helper dọn retopo, và wrapper export sang Unity ép đúng scale, axis và naming rule ngay từ DCC.",
    "tool.dcc.foot": "nội bộ · 2 studio",

    "tool.shaders.title": "Environment Shader Pack",
    "tool.shaders.body": "URP Shader Graph + HLSL: water với foam mask, height-fog, vertex foliage wind, và dissolve generic có edge-glow. Tinh chỉnh cho mobile tầm trung (Adreno 6xx trở lên).",
    "tool.shaders.foot": "đã ship · Phong Thần 3D",

    "contact.title": "Cùng làm thứ gì đó",
    "contact.titleem": "rồi ship.",
    "contact.lede": "Cách tốt nhất để liên hệ là email hoặc ArtStation. Mình check trong vòng 1 ngày. Studio Hà Nội có thể hẹn cà phê.",
    "contact.copy": "Sao chép",
    "contact.copied": "Đã chép",
    "contact.k.email": "Email",
    "contact.k.phone": "Điện thoại",
    "contact.k.location": "Địa điểm",
    "contact.k.github": "GitHub",
    "contact.k.artstation": "ArtStation",
    "contact.k.avail": "Trạng thái",
    "contact.v.location": "Hà Nội, Việt Nam (UTC+7)",
    "contact.v.avail": "Sẵn sàng · Q2 2026 · FT hoặc Contract",

    "footer.role": "Generalist 3D · Technical Artist",
    "footer.copy": "© 2026 PHẠM THANH TÙNG · BẢO LƯU MỌI QUYỀN",

    "viewport.work": "Tác phẩm chọn lọc",
    "common.viewproject": "Xem dự án",
  }
};

(function shell() {
  const STORAGE_KEY = "ptt_lang";

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || "en";
  }
  function setLang(l) {
    localStorage.setItem(STORAGE_KEY, l);
    applyLang(l);
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;
    const dict = window.I18N[lang] || window.I18N.en;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const pairs = el.getAttribute("data-i18n-attr").split(";");
      pairs.forEach((p) => {
        const [attr, key] = p.split(":").map((s) => s.trim());
        if (dict[key] !== undefined) el.setAttribute(attr, dict[key]);
      });
    });
    document.querySelectorAll(".langtoggle button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
  }
  window.applyLang = applyLang;

  function buildHeader(currentPage) {
    const links = [
      ["index.html", "nav.home", "home"],
      ["portfolio.html", "nav.portfolio", "portfolio"],
      ["about.html", "nav.about", "about"],
      ["contact.html", "nav.contact", "contact"],
    ];
    const navHTML = links
      .map(([href, key, page]) =>
        `<a href="${href}"${page === currentPage ? ' aria-current="page"' : ""} data-i18n="${key}">${key}</a>`
      )
      .join("");
    return `
      <div class="statusbar top">
        <span class="pill"><span class="dot"></span><span data-i18n="status.online">Online</span></span>
        <span class="sep">/</span>
        <span data-i18n="status.based">Based in Hà Nội, Việt Nam</span>
        <span class="sep">/</span>
        <span class="tag-mint" data-i18n="status.avail">Available · 2026 Q2</span>
        <span class="spacer"></span>
        <span data-i18n="status.build">Build 2026.05.09</span>
        <span class="sep">/</span>
        <span>v0.4.2</span>
      </div>
      <header class="appheader">
        <a class="brand" href="index.html">
          <span class="brand-mark">PT</span>
          <span>Phạm Thanh Tùng</span>
          <span class="brand-sep">·</span>
          <span class="brand-sub" data-i18n="brand.role">Generalist 3D · Technical Artist</span>
        </a>
        <nav class="nav">${navHTML}</nav>
        <div class="headeractions">
          <div class="langtoggle" role="group" aria-label="Language">
            <button data-lang="en" type="button">EN</button>
            <button data-lang="vi" type="button">VI</button>
          </div>
        </div>
      </header>
    `;
  }

  function buildFooter() {
    return `
      <div class="statusbar bottom">
        <span data-i18n="footer.role">Generalist 3D · Technical Artist</span>
        <span class="sep">/</span>
        <span data-i18n="footer.copy">© 2026 PHẠM THANH TÙNG · ALL RIGHTS RESERVED</span>
        <span class="spacer"></span>
        <span class="tag-warm">phamtung.gamedev@gmail.com</span>
        <span class="sep">/</span>
        <span id="vp-size">—</span>
      </div>
    `;
  }

  function mountReveal() {
    const els = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((e) => io.observe(e));
  }

  function mountViewportReadout() {
    const el = document.getElementById("vp-size");
    if (!el) return;
    function update() {
      el.textContent = `${window.innerWidth}×${window.innerHeight}`;
    }
    update();
    window.addEventListener("resize", update);
  }

  function mountCopy() {
    document.querySelectorAll("[data-copy]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const target = btn.getAttribute("data-copy");
        try {
          await navigator.clipboard.writeText(target);
          const lang = getLang();
          const dict = window.I18N[lang];
          const old = btn.textContent;
          btn.classList.add("copied");
          btn.textContent = dict["contact.copied"];
          setTimeout(() => {
            btn.classList.remove("copied");
            btn.textContent = dict["contact.copy"];
          }, 1300);
        } catch {}
      });
    });
  }

  window.PTT = {
    mount(currentPage) {
      const headerHost = document.getElementById("shell-header");
      const footerHost = document.getElementById("shell-footer");
      if (headerHost) headerHost.innerHTML = buildHeader(currentPage);
      if (footerHost) footerHost.innerHTML = buildFooter();

      document.querySelectorAll(".langtoggle button").forEach((btn) => {
        btn.addEventListener("click", () => setLang(btn.dataset.lang));
      });

      applyLang(getLang());
      mountReveal();
      mountViewportReadout();
      mountCopy();
    },
  };
})();
