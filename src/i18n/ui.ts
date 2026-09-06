/** Every UI string on the site, per locale. Adding a language = a strings object here + src/content/legal/<code>/privacy.md. */
export const locales = ['zh', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const ui = {
  zh: {
    'site.name': 'Clover: Notes for Trilium',
    'site.description': 'Clover：TriliumNext 笔记的 iOS 阅读与记录客户端。',
    'nav.home': '首页',
    'nav.privacy': '隐私',
    'nav.support': '支持',
    'nav.switch': 'English',
    'hero.lede': 'TriliumNext 笔记的 iOS 阅读与记录客户端——把自托管服务器上的知识库带进手机，离线可读、全文可搜。',
    'hero.badge': '即将登陆 App Store',
    'hero.note': '上架后这里会换成 App Store 下载按钮。',
    'free.text': '完全免费，没有内购、没有广告、不收集任何数据。',
    'free.strong': '完全免费',
    'footer.disclaimer': 'Clover 是独立开发的第三方客户端，与 TriliumNext 项目无隶属关系。',
    'home.requirements': '同步需要 TriliumNext 服务器（0.99+）。支持 iPhone 与 iPad，简体中文、繁体中文、English、日本語。',
    'privacy.title': '隐私政策',
    'support.title': '支持',
    'support.replies': '回复通常在 1–3 天内',
    'support.contact': '遇到问题、有建议，发邮件到 {email}，附上 App 版本（设置 → 帮助与支持）、iOS 版本和 Trilium 服务器版本。',
    'support.faq': '常见问题',
    'support.server.title': '需要 Trilium 服务器？',
    'support.server.text': 'Clover 连接的是你自己部署的 TriliumNext（0.99 及以上）。最快的启动方式：',
    'updated': '更新于',
  },
  en: {
    'site.name': 'Clover: Notes for Trilium',
    'site.description': 'Clover: the iOS reading & writing client for TriliumNext notes.',
    'nav.home': 'Home',
    'nav.privacy': 'Privacy',
    'nav.support': 'Support',
    'nav.switch': '中文',
    'hero.lede': 'The iOS reading & writing client for TriliumNext — your self-hosted knowledge base on your phone, readable offline, fully searchable.',
    'hero.badge': 'Coming soon to the App Store',
    'hero.note': 'This becomes the App Store button at launch.',
    'free.text': 'Completely free — no in-app purchases, no ads, no data collection.',
    'free.strong': 'Completely free',
    'footer.disclaimer': 'Clover is an independent third-party client, not affiliated with the TriliumNext project.',
    'home.requirements': 'Syncing requires a TriliumNext server (0.99+). iPhone and iPad. English, 简体中文, 繁體中文, 日本語.',
    'privacy.title': 'Privacy Policy',
    'support.title': 'Support',
    'support.replies': 'Replies usually within 1–3 days',
    'support.contact': 'Questions or suggestions: email {email} with the app version (Settings → Help & Support), your iOS version and your Trilium server version.',
    'support.faq': 'FAQ',
    'support.server.title': 'Need a Trilium server?',
    'support.server.text': 'Clover connects to your own TriliumNext (0.99+). Quickest start:',
    'updated': 'Updated',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)['zh'];

/** Feature cards on the landing page. */
export const features: Record<Locale, { title: string; text: string }[]> = {
  zh: [
    { title: '为读而设计', text: '原生排版，纸色 / 字体 / 字号随手调；book 笔记多章连读，进度自动记住。' },
    { title: '中文全文搜索', text: '任意词都能搜到，不用完整关键词；标签、类型、时间过滤。' },
    { title: '离线优先', text: '笔记镜像在本机；所有写入先进队列，断网也不丢，冲突绝不覆盖。' },
    { title: '记录同样顺手', text: '与桌面端兼容的富文本编辑器、日记、分享扩展、语音输入。' },
    { title: '你的服务器，你的数据', text: '与 Trilium 网页端相同的登录方式，支持两步验证、SSO、Cloudflare Access；加密笔记从不落盘。' },
    { title: '没有服务器也能用', text: '内置本地库，先在本机记录，之后随时连接 Trilium 一键上传。' },
  ],
  en: [
    { title: 'Designed for reading', text: 'Native typography with adjustable paper, font and size; continuous multi-chapter reading for book notes.' },
    { title: 'Full-text search', text: 'Works for any language, including CJK; filter by tag, type and time.' },
    { title: 'Offline first', text: 'Your notes are mirrored on the device; every write is queued, nothing is lost offline, conflicts never overwrite.' },
    { title: 'Writing too', text: 'Rich-text editor compatible with desktop Trilium, journal, share extension, voice input.' },
    { title: 'Your server, your data', text: 'Same login as the Trilium web UI with TOTP, SSO and Cloudflare Access; protected notes never touch the disk.' },
    { title: 'Works without a server', text: 'Built-in Local Vault: start on the device, upload to Trilium with one tap later.' },
  ],
};

/** Support page FAQ. */
export const faq: Record<Locale, { q: string; a: string }[]> = {
  zh: [
    { q: '笔记没有显示 / 搜不到', a: '下拉首页触发同步；状态条显示「索引中」时搜索结果会逐步补全。大于 1 MB 的正文在打开时按需下载。' },
    { q: '编辑后提示冲突', a: '这篇笔记在别处（桌面端 / 网页端）同时被改了。可以把你的版本保存为子笔记，或丢弃。Clover 从不覆盖服务器上更新的内容。' },
    { q: '连接不上服务器（http）', a: 'iOS 允许连接局域网 IP、.local 和无点主机名的 http 地址；公网服务器请使用 https。检查地址末尾不要多余路径，Cloudflare Access 需填服务令牌。' },
    { q: 'AI 不可用', a: 'AI 由你的 Trilium 服务端提供：在桌面端 设置 → AI/LLM 配置 provider 并启用，然后在 Clover 对话页右上「模型」里选择。Clover 不存任何 AI 密钥。' },
    { q: '分享到 Clover 后笔记在哪', a: '分享只写入待同步队列，打开 Clover 后自动上传；在 设置 → 待同步写入 可以看到。' },
    { q: '没有服务器可以用吗', a: '可以。首次打开选「先在本机使用」进入本地库；之后连接服务器时会引导你一键上传本机笔记。' },
  ],
  en: [
    { q: 'Notes missing / not found in search', a: 'Pull down on Home to sync; while the status bar says “indexing”, search results fill in progressively. Bodies over 1 MB download on open.' },
    { q: 'Conflict after editing', a: 'The note was changed elsewhere (desktop / web) at the same time. Save your version as a child note or discard it — Clover never overwrites newer content on the server.' },
    { q: "Can't connect (http)", a: 'iOS allows http for LAN IPs, .local and single-label hosts; use https for anything public. Check there is no extra path at the end of the address; Cloudflare Access needs a service token.' },
    { q: 'AI unavailable', a: 'AI comes from your Trilium server: on desktop go to Settings → AI/LLM, configure a provider and enable it, then pick it under “Model” in Clover’s chat. Clover stores no AI keys.' },
    { q: 'Where did my shared note go?', a: 'Sharing only queues the write; it uploads when you open Clover. See Settings → Pending writes.' },
    { q: 'Can I use it without a server?', a: 'Yes. Choose “Use on this device” at first launch for the Local Vault; when you later connect a server, Clover offers a one-tap upload.' },
  ],
};

/** Single place for the support address. Replace before launch. */
export const contactEmail = 'oceanust@hotmail.com';
