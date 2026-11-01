# Hướng dẫn blog CV cá nhân

Website nằm trong thư mục `site/`. Nội dung lấy từ `CV_Updated.md`, nên khi sửa CV thì sửa cả hai file.

---

## 0. Tài nguyên & kiểm tra trước khi đăng

| Mục | Nằm ở đâu |
| --- | --- |
| Ảnh 3×4 | `site/assets/avatar.jpg` (tỉ lệ 3:4, 600×800px) |
| Chứng chỉ PDF | `site/assets/certificates/azure-ai-engineer-associate.pdf` |
| Link "Verify on Microsoft Learn" | Đang tạm ẩn (comment trong `index.html`). Bỏ comment và dán link chia sẻ credential cá nhân của bạn vào |

GitHub Actions sẽ tự chặn deploy nếu trong `site/` còn placeholder. Muốn kiểm tra trước trên máy thì chạy:
```bash
grep -rn "\[X\]\|_URL\]\|GITHUB_USERNAME" site/
```

--- | --- | --- |
| `[X]` | `index.html`, `CV_Updated.md` | Số liệu thật (số chương trình, số test case, % giảm lỗi...). Nếu không nhớ số thì xóa phần số đi, **không được đoán** |
| `[LINKEDIN_URL]` | `index.html` (4 chỗ), `CV_Updated.md` | Link LinkedIn, ví dụ `https://www.linkedin.com/in/...` |
| `[GITHUB_URL]` | `index.html` (2 chỗ), `CV_Updated.md` | Link GitHub |
| `[VERIFY_URL]` | `index.html`, `CV_Updated.md` | Link xác thực chứng chỉ trên Microsoft Learn |
| `GITHUB_USERNAME` | `index.html`, `robots.txt`, `sitemap.xml` | Username GitHub (hoặc tên miền riêng) |
| File PDF | `site/assets/certificates/azure-ai-engineer-associate.pdf` | Chép file chứng chỉ vào, đặt đúng tên này |
| Ảnh 3×4 | `site/assets/avatar.jpg` | Ảnh chân dung tỉ lệ 3:4 (600×800px) |

Kiểm tra lại xem còn sót placeholder nào không:
```bash
grep -rn "\[X\]\|_URL\]\|GITHUB_USERNAME" site/
```

---

## 1. Cấu trúc nội dung

Thứ tự các phần được sắp theo cách recruiter đọc lướt (thường chỉ khoảng 6–10 giây):

1. **Hero**: tên, vị trí, một câu nêu giá trị, nút Email / LinkedIn / Download CV, và 3 con số nhanh (4 năm · 2 công ty bảo hiểm · AI-102). Recruiter đọc phần này đầu tiên.
2. **About**: 2 đoạn ngắn, chứa sẵn các từ khóa của JD (SMART/400, LifeAsia, BO, DB2, SDLC).
3. **Skills**: chia nhóm theo thứ tự trong JD. Các chip màu xanh là kỹ năng JD yêu cầu, để recruiter so khớp ngay bằng mắt.
4. **Experience**: timeline, mỗi dự án là một card gồm bối cảnh, thành tựu và tech tag. Các dự án đã được trình bày dạng case study ngay trong phần này, nên không làm thêm phần "Featured Projects" riêng để khỏi lặp nội dung.
5. **AI-assisted development**: điểm khác biệt của bạn so với các ứng viên COBOL khác.
6. **Certification**: kèm link PDF và link xác thực.
7. **Education**: để ngắn, đặt cuối vì kinh nghiệm quan trọng hơn bằng cấp.
8. **Contact**.

**Cách viết**
- Mỗi bullet theo công thức **Động từ mạnh + việc đã làm + kết quả có số** (Developed / Designed / Resolved / Reduced...).
- Mỗi dự án tối đa 4 bullet, mỗi bullet một dòng.
- Không dùng tính từ tự khen ("hard-working", "friendly"). Để thành tựu tự chứng minh.

**Những gì đã bỏ khỏi CV cũ và lý do**

| Đã bỏ | Lý do |
| --- | --- |
| Ngày sinh | CV chuẩn quốc tế không ghi, tránh bị đánh giá theo tuổi |
| "Level – Average" | Không giúp gì cho hồ sơ |
| "Proficient in Microsoft Office" | Ai cũng biết, chỉ chiếm chỗ |
| "friendly and sociable" | Chuyển thành bằng chứng cụ thể: giải thích lỗi cho business user, làm UAT |

---

## 2. Thiết kế

| Yếu tố | Lựa chọn | Lý do |
| --- | --- | --- |
| Bố cục | Một cột, rộng tối đa 760px, nhiều khoảng trắng | Giống phong cách Linear, Vercel, Stripe; dễ đọc trên mọi màn hình |
| Font | **Inter** (chữ thường) + **JetBrains Mono** (label, tag) | Inter là font chuẩn của các công ty tech; font mono gợi đúng chất lập trình viên mainframe |
| Màu | Nền xám trung tính (zinc) + một màu nhấn xanh `#2563eb` | Dùng một màu nhấn trông chuyên nghiệp; nhìn vào là biết đâu là điểm quan trọng |
| Dark mode | Tự theo cài đặt hệ thống, có nút đổi trên nav | Dân tech thường dùng dark mode |
| Icon | SVG inline (kiểu Lucide), không cần thư viện | Tải nhanh, sắc nét, đổi màu theo theme |
| Điểm nhấn | Đoạn code COBOL `PROGRAM-ID. NHAN-CV.` kiểu màn hình terminal | Tạo cá tính, recruiter dễ nhớ |
| Responsive | Mobile-first; menu thu gọn khi màn hình dưới 720px; skills/cards chuyển thành nhiều cột từ 640px | Hiển thị tốt trên điện thoại, tablet và desktop |
| In / PDF | Nút **Download CV** → hộp thoại in → chọn "Save as PDF" | Bản in trắng đen, gọn 1–2 trang A4, đã ẩn menu và nút bấm |

**Ảnh chân dung 3×4**: nằm ở góc trên bên trái phần hero, tên và lời giới thiệu ở ngay bên phải. Chép ảnh vào `site/assets/avatar.jpg` (tỉ lệ 3:4, nên dùng 600×800px, nền trơn, dung lượng dưới 200KB). Khi chưa có ảnh, website hiện một khung nét đứt ghi "3×4", và khung này tự ẩn khi in.

---

## 3. Deploy (GitHub Pages + GitHub Actions)

Site: **https://duy-nhan.github.io/**. Repo: `Duy-Nhan/duy-nhan.github.io`, chứa cả dự án; `JD.md` đã được gitignore. Workflow `.github/workflows/deploy.yml` kiểm tra placeholder rồi chỉ publish thư mục `site/`.

**Thiết lập lần đầu**
1. Trên github.com: **New repository** → tên `duy-nhan.github.io` → **Public** → không tick README/.gitignore/license.
2. Repo → **Settings → Pages → Source: GitHub Actions**.
3. Tạo token: Settings → Developer settings → **Fine-grained tokens** → chỉ chọn repo `duy-nhan.github.io` → Permissions **Contents: Read and write** và **Workflows: Read and write**.
4. Trên máy: `cd ~/Documents/CV && git push -u origin main`. Username là `Duy-Nhan`, password là token vừa tạo. macOS Keychain sẽ nhớ token cho các lần sau.

**Các lần cập nhật sau**
```bash
git add . && git commit -m "Update experience" && git push
```
Khoảng 1 phút sau site tự cập nhật; xem tiến trình ở tab **Actions** của repo.

**Tên miền riêng (sau này)**: mua domain (ví dụ `duynhan.dev`), thêm vào Settings → Pages → Custom domain, rồi trỏ DNS theo hướng dẫn của GitHub. Sau đó sửa URL trong canonical, og:url, JSON-LD, `robots.txt` và `sitemap.xml`.

---

## 4. Tối ưu hóa

### SEO đã có sẵn trong `index.html`
- `<title>` và `meta description` chứa từ khóa chính.
- Open Graph: khi share link lên LinkedIn hoặc Zalo sẽ hiện đúng tiêu đề và mô tả.
- JSON-LD `Person`: giúp Google hiểu bạn là ai, làm gì, có chứng chỉ gì.
- `sitemap.xml`, `robots.txt`, canonical URL.

### Từ khóa nên dùng (trên website, LinkedIn và trong các bài viết)
- **Chính**: COBOL developer, COBOL developer Vietnam, COBOL developer Ho Chi Minh, AS/400 developer
- **Nền tảng**: IBM i, AS/400, SMART/400, LifeAsia, Business Object (BO), DB2 for i
- **Ngành**: life insurance core system, policy administration, insurance product development
- **Xu hướng**: legacy modernization, mainframe modernization, AI-assisted COBOL development, Azure AI Engineer

### Công cụ
| Mục đích | Công cụ |
| --- | --- |
| Hosting | GitHub Pages (hoặc Netlify, Vercel) |
| Đưa trang lên Google | Google Search Console: thêm site, submit `sitemap.xml` |
| Đo lượt truy cập | Plausible (gọn, không dùng cookie) hoặc Google Analytics |
| Kiểm tra chất lượng | Lighthouse trong Chrome DevTools, Google Rich Results Test (kiểm tra JSON-LD) |
| Sửa code | VS Code + Claude Code |

### Cách phát triển blog
1. **Thêm mục Blog**: 1 bài mỗi tháng, mỗi bài 600–1000 từ. Gợi ý chủ đề:
   - "Using Claude Code to understand a 5,000-line COBOL program" (nhớ không dùng code thật của khách hàng)
   - "COBOL + DB2 on IBM i: reading and updating policy data safely"
   - "How a life insurance policy flows through a core system"
   - "Unit testing COBOL: what I learned on a 39-person project"
   Khi đã có từ 3–5 bài, nên chuyển sang **Astro** để viết bài bằng Markdown; trang CV hiện tại có thể giữ nguyên.
2. **Làm dự án cá nhân trên GitHub** để có mục "Projects" thật (đây là chỗ CV hiện tại còn thiếu):
   - Tính phí bảo hiểm nhân thọ bằng **GnuCOBOL** (miễn phí, chạy được trên Mac), có unit test.
   - Công cụ nhỏ dùng Azure OpenAI hoặc Claude API để giải thích code COBOL, kết hợp được COBOL với chứng chỉ AI của bạn.
3. **LinkedIn**: đặt headline giống hero của website, gắn link website vào phần Featured, chia sẻ mỗi bài blog mới.
4. **Cập nhật mỗi quý**: số liệu mới, chứng chỉ mới (ví dụ IBM i hoặc Azure), dự án mới.

> ⚠️ Bảo mật: không đăng code, tên chương trình, dữ liệu hay tài liệu nội bộ của DXC, NN Life hoặc BIDV MetLife lên blog hay GitHub. Chỉ viết về kiến thức chung và dùng ví dụ do bạn tự tạo.
