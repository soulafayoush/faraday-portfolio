# Faraday Portfolio - Vercel Deployment Guide

## خطوات النشر على Vercel (Deployment Steps)

### الطريقة الأولى: عبر GitHub (الأسهل والأفضل)
1. **أنشئ مستودع GitHub جديد** على [github.com/new](https://github.com/new)
2. **ارفع جميع ملفات المشروع** إلى المستودع:
   - افتح سطر الأوامر (Terminal) في مجلد المشروع
   - نفذ الأوامر التالية:
   ```
   git init
   git add .
   git commit -m "Initial commit - Faraday Portfolio"
   git remote add origin https://github.com/USERNAME/faraday-portfolio.git
   git push -u origin main
   ```
3. **اذهب إلى Vercel**: [vercel.com/new](https://vercel.com/new)
4. **اختر المستودع** الذي أنشأته
5. **اضغط "Deploy"** وانتظر حتى يكتمل النشر (2-3 دقائق)

---

### الطريقة الثانية: عبر Vercel CLI
1. **ثبّت Vercel CLI**:
   ```
   npm i -g vercel
   ```
2. **افتح Terminal في مجلد المشروع**
3. **نفذ الأمر**:
   ```
   vercel
   ```
4. **اتبع التعليمات** على الشاشة (اختر الإعدادات الافتراضية)
5. **للنشر النهائي**:
   ```
   vercel --prod
   ```

---

### الطريقة الثالثة: رفع الملفات المضغوطة مباشرة
1. **اذهب إلى** [vercel.com/new](https://vercel.com/new)
2. **اختر "Upload"** أو "Import from Local Directory"
3. **ارفع المجلد المضغوط** أو اسحب وأفلت مجلد المشروع
4. **اضغط "Deploy"**

---

### الإعدادات المطلوبة على Vercel
- **Framework Preset**: Next.js (يُكتشف تلقائياً)
- **Build Command**: `next build` (افتراضي)
- **Output Directory**: `.next` (افتراضي)
- **Node.js Version**: 18.x أو أحدث
- **Environment**: لا حاجة لمتغيرات بيئة إضافية

---

### ملاحظات مهمة
- المشروع يستخدم `output: "standalone"` في `next.config.ts` وهذا متوافق تماماً مع Vercel
- الصور في مجلد `public/images/` ستعمل تلقائياً
- الخطوط تُحمّل من Google Fonts CDN
- الموقع يدعم: Dark/Light Mode + English/Arabic + RTL
