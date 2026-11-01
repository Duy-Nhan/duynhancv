# CLAUDE.md: Dự án CV & blog cá nhân của Nguyen Huynh Duy Nhan

## Tổng quan
CV online một trang theo phong cách Silicon Valley, dùng để ứng tuyển vị trí **COBOL Developer** (bảo hiểm nhân thọ, SMART/400). Website tĩnh viết bằng HTML/CSS/JS thuần, không cần bước build, host trên GitHub Pages. Nội dung trên website viết bằng **tiếng Anh**. Chủ dự án trao đổi bằng **tiếng Việt**.

## Cấu trúc
```
JD.md                 # Job description đang nhắm tới (gitignored, không push)
README.md             # Mô tả repo trên GitHub
.github/workflows/deploy.yml   # CI/CD: kiểm tra placeholder rồi deploy site/ lên Pages
CV_Updated.md         # NGUỒN NỘI DUNG CHÍNH của CV (tiếng Anh)
BLOG_GUIDE.md         # Hướng dẫn cho chủ dự án: cấu trúc, thiết kế, SEO, deploy, phát triển blog (tiếng Việt)
site/                 # Thư mục được deploy bởi GitHub Actions
  index.html          # Toàn bộ trang: meta SEO, JSON-LD Person, icon sprite, các section
  styles.css          # Design tokens, light/dark, responsive, @media print
  script.js           # Theme toggle, menu mobile, active nav, nút in, năm ở footer
  favicon.svg, sitemap.xml   # không có robots.txt: site là project page /duynhancv/, crawler chỉ đọc robots ở gốc domain
  assets/avatar.jpg                                     # ảnh chân dung 3x4 (600x800), chủ dự án tự thêm
  assets/certificates/azure-ai-engineer-associate.pdf   # chủ dự án tự thêm file
```

## Quy tắc nội dung (quan trọng)
- **Không bịa**: không thêm kỹ năng, số liệu, dự án hay chứng chỉ khi chủ dự án chưa xác nhận. Số liệu chưa có thì để `[X]`.
- **Công nghệ đã xác nhận**: COBOL, SQL, IBM i (AS/400), DXC SMART/400, LifeAsia, Business Object (BO of CSC), DB2 for i, Claude Code, Microsoft Copilot, Azure AI. Phụ: Python, JavaScript, React, HTML/CSS, REST API, Git.
- **Không được đưa vào**: ILE COBOL, eCOBOL, COBOL II/COBOLII (chủ dự án đã yêu cầu bỏ), ngày sinh, xếp loại tốt nghiệp, MS Office, tính từ tự khen.
- **Bảo mật khách hàng**: không đưa code, tên chương trình, dữ liệu hay tài liệu nội bộ của DXC, NN Life hoặc BIDV MetLife.
- **Đồng bộ**: khi sửa nội dung thì sửa cả `CV_Updated.md` và `site/index.html` (gồm `<meta description/keywords>`, JSON-LD `knowsAbout`, phần hero và phần About).
- **Cách viết**: ngắn gọn, bám theo JD. Bullet theo công thức *Động từ + việc làm + kết quả có số*, mỗi dự án tối đa 4 bullet.

## Dữ kiện chính
- DXC Technology Vietnam, COBOL Developer, 04/2023 – nay. Fresher training 10/2022 – 01/2023. Tổng cộng khoảng 4 năm.
- Dự án NN Life Japan, hệ thống Life/J: 08/2023 – nay, team 39 người. Coding, thiết kế và thực hiện unit test.
- Dự án BIDV MetLife Vietnam, sản phẩm bảo hiểm mới: 04/2023 – 08/2023, team 17 người. Support UAT.
- Chứng chỉ: Microsoft Certified: Azure AI Engineer Associate (AI-102).
- Học vấn: HCMUT, B.Eng. Electrical Engineering, 2018 – 2022.
- Liên hệ: nhduynhan@gmail.com · +84 854 664 885 · Ho Chi Minh City.

## Placeholder & link
- Tất cả placeholder đã được điền. Bước kiểm tra trong GitHub Actions sẽ chặn deploy nếu `site/` còn `[X]`, `_URL]` hoặc `GITHUB_USERNAME`.
- Link "Verify on Microsoft Learn" là link chia sẻ credential cá nhân (`learn.microsoft.com/api/credentials/share/...`). Không thay bằng link trang giới thiệu chứng chỉ chung.

## Quy ước code
- Không dùng framework, không có bước build, không dùng thư viện JS. Phụ thuộc bên ngoài duy nhất là Google Fonts (Inter, JetBrains Mono).
- **Màu sắc**: chỉ dùng biến CSS trên `:root`. Dark mode được định nghĩa ở hai chỗ, phải sửa đồng thời: `@media (prefers-color-scheme: dark) :root:not([data-theme="light"])` và `:root[data-theme="dark"]`. Có một màu nhấn duy nhất (`--accent`).
- **Icon**: dùng sprite `<symbol id="i-*">` ở đầu `<body>`, gọi bằng `<svg class="i"><use href="#i-name"/></svg>`. Muốn thêm icon thì thêm `<symbol>` (path kiểu Lucide, stroke).
- **Thêm section mới**: `<section id="..." class="section">` + `<h2><span class="num">NN</span>Title</h2>`, đánh lại số thứ tự 01–07, rồi thêm link vào `#navLinks` (active nav tự chạy nhờ IntersectionObserver).
- **Skills**: chip `chip--key` (màu xanh) dành cho kỹ năng khớp với JD; chip thường cho các kỹ năng còn lại.
- **Responsive**: mobile-first, gutter 16px. Breakpoint 640px cho grid; dưới 720px menu chuyển sang dạng thu gọn. Không được có thanh cuộn ngang.
- **Print** (`@media print` cuối `styles.css`): nút "Download CV" gọi `window.print()`. Khi thêm phần tử chỉ để trang trí, nhớ ẩn nó trong print. Class `.print-only` chỉ hiện khi in. Bản in cần gọn trong 1–2 trang A4.
- **Hero**: `.hero__top` là grid gồm cột ảnh 3:4 (`.hero__photo`, rộng 96px trên mobile và 150px từ 640px) và cột tên + giới thiệu (`.hero__intro`). Nếu không có `avatar.jpg`, ảnh bị `onerror` xóa và khung `.hero__photo-empty` hiện ra; khung này ẩn khi in.
- `localStorage` chỉ dùng để nhớ theme, luôn bọc trong try/catch.
- Mỗi lần deploy nội dung mới, cập nhật `<lastmod>` trong `sitemap.xml`.

## Kiểm tra trước khi deploy
1. `open site/index.html`, rồi kiểm tra ở các độ rộng 375 / 768 / 1280px bằng DevTools.
2. Bật tắt light/dark, xem Print preview.
3. Bấm thử link chứng chỉ PDF.
4. Chạy Lighthouse (mục tiêu ≥ 90) và Rich Results Test (JSON-LD).
5. Lệnh grep placeholder ở trên không còn ra kết quả nào.

## Deploy
- Site: https://duy-nhan.github.io/duynhancv/. Repo `Duy-Nhan/duynhancv` (public), branch `main`.
- `.github/workflows/deploy.yml`: push lên `main` thì chạy kiểm tra placeholder rồi publish thư mục `site/` (actions configure-pages v5 / upload-pages-artifact v3 / deploy-pages v4). Pages Source: **GitHub Actions**.
- `.gitignore` loại `JD.md` (không công khai JD), `.DS_Store`, `.vscode/`.
- Git author cấu hình riêng cho repo này (`git config user.name/user.email`). Push qua HTTPS bằng fine-grained token; chủ dự án tự chạy `git push`.
- Mỗi lần deploy nội dung mới, cập nhật `<lastmod>` trong `sitemap.xml`. Nếu đổi domain, sửa canonical, og:url, JSON-LD `url`, `sitemap.xml`.

## Hướng phát triển
- Thêm mục Blog (1 bài/tháng). Khi có từ 3–5 bài thì cân nhắc chuyển sang Astro + Markdown, giữ nguyên thiết kế hiện tại.
- Thêm mục Projects khi đã có dự án cá nhân thật (ví dụ chương trình tính phí bảo hiểm bằng GnuCOBOL, hoặc công cụ dùng AI để giải thích code COBOL).
- Khi ứng tuyển JD khác: thay `JD.md`, rồi tailor lại Summary, Skills (`chip--key`) và từ khóa SEO.
