import { createContext, useContext, useState, useEffect } from 'react';

const ThemeCtx = createContext();
const LangCtx  = createContext();

export const TRANSLATIONS = {
  en: {
    statusbar: {
      location: 'Based in Hà Nội, Vietnam',
      available: 'Available · Q2 2026',
      build: 'Build 2026.05',
    },
    nav: { home: 'Home', portfolio: 'Portfolio', about: 'About', contact: 'Contact', email: 'Email me' },
    home: {
      heroTag1: 'Generalist 3D · Technical Artist',
      heroTag2: 'Unity · Unreal',
      heroTag3: '3+ years shipping games',
      heroTitle: 'Building maps, shaders &',
      heroStrong: 'tools that ship on real hardware.',
      s01label: '01 / Credits', s01span: 'Productions',
      s01h2: "Games I've helped ship.",
      s01lede: 'Mobile MMORPGs and console titles for studios across Vietnam and Japan — environment art, lighting, shaders and tooling.',
      s02label: '02 / Personal', s02span: 'Independent Work',
      s02h2: 'Side projects & self-directed R&D.',
      s02lede: 'Work done outside studio hours — a game jam entry and anatomy studies that sharpen fundamentals.',
      s03label: '03 / About', s03span: 'About',
      s03h2: "I'm Tùng — 3+ years building game art that ships.",
      s03lede: 'Environment art, shaders and editor tools across mobile MMORPG and console titles. Currently deepening into Technical Art at SaboGame.',
      readBio: 'Read full bio',
      ctaLabel: 'Get in touch',
      ctaH2: 'Have a build that needs an extra hand?',
      ctaLede: 'Open to full-time technical art roles, contract environment work, and short shader / tool gigs. Studios in Hà Nội welcome — remote also fine.',
      emailBtn: 'Email me',
    },
    about: {
      heading: 'Artist & Technical Artist',
      sub: 'Profile',
      engineLabel: 'Engine', roleLabel: 'Role', platformLabel: 'Platforms', studioLabel: 'Studio · Year',
    },
    detail: {
      back: '← All productions',
      s01: '01 / Overview', aboutProject: 'About this project',
      s02: '02 / Contributions', myRole: 'My role',
      s03: '03 / Stack', techStack: 'Tech stack',
      s04: '04 / Videos', videoShowcase: 'Video showcase',
      gallery: 'Image gallery', images: 'images',
      prev: '← Previous project', next: 'Next project →',
      store: 'View on store ↗',
    },
    projects: {
      heading: 'Portfolio',
      sub: 'All work',
      lede: 'Every shipped title and personal project — environment art, shaders, tooling.',
      all: 'All', modeling: 'Modeling', vfx: 'VFX', shader: 'Shader',
    },
    contact: {
      heading: "Let's work",
      lede: 'Open to full-time roles, contract work and short gigs.',
    },
  },
  vi: {
    statusbar: {
      location: 'Tại Hà Nội, Việt Nam',
      available: 'Sẵn sàng · Q2 2026',
      build: 'Build 2026.05',
    },
    nav: { home: 'Trang chủ', portfolio: 'Portfolio', about: 'Giới thiệu', contact: 'Liên hệ', email: 'Email tôi' },
    home: {
      heroTag1: 'Generalist 3D · Technical Artist',
      heroTag2: 'Unity · Unreal',
      heroTag3: '3+ năm làm game',
      heroTitle: 'Dựng map, shader &',
      heroStrong: 'tool thật — chạy trên máy thật.',
      s01label: '01 / Credits', s01span: 'Productions',
      s01h2: 'Game tôi đã tham gia làm.',
      s01lede: 'Mobile MMORPG và console cho studio Việt Nam và Nhật Bản — environment art, lighting, shader và tool.',
      s02label: '02 / Personal', s02span: 'Dự án cá nhân',
      s02h2: 'Side project & R&D tự thân.',
      s02lede: 'Làm ngoài giờ studio — game jam và nghiên cứu anatomy để giữ nền tảng vững.',
      s03label: '03 / About', s03span: 'Giới thiệu',
      s03h2: 'Tôi là Tùng — 3+ năm làm art game thực tế.',
      s03lede: 'Environment art, shader và editor tool cho mobile MMORPG và console. Đang deepening vào Technical Art tại SaboGame.',
      readBio: 'Xem thêm',
      ctaLabel: 'Liên hệ',
      ctaH2: 'Cần thêm người cho build?',
      ctaLede: 'Mở cho vị trí technical art full-time, contract environment, và shader/tool ngắn hạn. Studio ở Hà Nội welcome — remote cũng ổn.',
      emailBtn: 'Email tôi',
    },
    about: {
      heading: 'Artist & Technical Artist',
      sub: 'Hồ sơ',
      engineLabel: 'Engine', roleLabel: 'Vai trò', platformLabel: 'Nền tảng', studioLabel: 'Studio · Năm',
    },
    detail: {
      back: '← Tất cả dự án',
      s01: '01 / Tổng quan', aboutProject: 'Về dự án này',
      s02: '02 / Đóng góp', myRole: 'Vai trò của tôi',
      s03: '03 / Stack', techStack: 'Tech stack',
      s04: '04 / Video', videoShowcase: 'Video showcase',
      gallery: 'Thư viện ảnh', images: 'ảnh',
      prev: '← Dự án trước', next: 'Dự án tiếp →',
      store: 'Xem trên store ↗',
    },
    projects: {
      heading: 'Portfolio',
      sub: 'Tất cả dự án',
      lede: 'Toàn bộ dự án đã ship và cá nhân — environment art, shader, tooling.',
      all: 'Tất cả', modeling: 'Modeling', vfx: 'VFX', shader: 'Shader',
    },
    contact: {
      heading: 'Liên hệ',
      lede: 'Mở cho vị trí full-time, contract và gig ngắn hạn.',
    },
  },
};

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [lang,  setLang]  = useState(() => localStorage.getItem('lang')  || 'en');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
  const toggleLang  = () => setLang(l  => l  === 'en'   ? 'vi'    : 'en');

  return (
    <ThemeCtx.Provider value={{ theme, toggleTheme }}>
      <LangCtx.Provider value={{ lang, toggleLang, t: TRANSLATIONS[lang] }}>
        {children}
      </LangCtx.Provider>
    </ThemeCtx.Provider>
  );
}

export const useTheme = () => useContext(ThemeCtx);
export const useLang  = () => useContext(LangCtx);
