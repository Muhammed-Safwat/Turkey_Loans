# 🚀 دليل النشر على Vercel

## 📋 المتطلبات المسبقة

- حساب Vercel (مجاني)
- Git repository (GitHub, GitLab, أو Bitbucket)
- Node.js 18+ مثبت محلياً

## 🔧 خطوات النشر

### 1. **إعداد المشروع محلياً**

```bash
# تثبيت التبعيات
npm install

# اختبار البناء
npm run build

# اختبار التطبيق محلياً
npm start
```

### 2. **رفع الكود إلى Git**

```bash
# إضافة جميع الملفات
git add .

# عمل commit
git commit -m "Prepare for Vercel deployment"

# رفع إلى repository
git push origin main
```

### 3. **النشر على Vercel**

#### الطريقة الأولى: عبر الموقع
1. اذهب إلى [vercel.com](https://vercel.com)
2. سجل دخول بحساب GitHub/GitLab
3. اضغط "New Project"
4. اختر repository الخاص بك
5. Vercel سيكتشف تلقائياً أنه Angular project
6. اضغط "Deploy"

#### الطريقة الثانية: عبر Vercel CLI
```bash
# تثبيت Vercel CLI
npm i -g vercel

# تسجيل الدخول
vercel login

# النشر
vercel

# النشر للإنتاج
vercel --prod
```

## ⚙️ إعدادات Vercel

### Build Settings
- **Framework Preset**: Angular
- **Build Command**: `npm run vercel-build`
- **Output Directory**: `dist/turkey-loans/browser`
- **Install Command**: `npm install`

### Environment Variables
لا حاجة لمتغيرات بيئة إضافية لهذا المشروع.

## 🔍 التحقق من النشر

### 1. **فحص الموقع**
- اذهب إلى الرابط المقدم من Vercel
- تأكد من عمل جميع الصفحات
- اختبر التنقل بين الصفحات
- تأكد من عمل الروابط

### 2. **فحص الأداء**
- استخدم Google PageSpeed Insights
- تأكد من Core Web Vitals
- اختبر على أجهزة مختلفة

### 3. **فحص SEO**
- تأكد من meta tags
- اختبر hreflang tags
- تأكد من sitemap.xml

## 🛠️ استكشاف الأخطاء

### مشاكل شائعة:

#### 1. **404 Error على الصفحات**
```json
// تأكد من وجود vercel.json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

#### 2. **مشاكل في Assets**
```json
// في angular.json
"assets": [
  "src/favicon.ico",
  "src/assets",
  "src/public"
]
```

#### 3. **مشاكل في Build**
```bash
# تنظيف cache
rm -rf node_modules
rm -rf .angular
npm install
npm run build
```

## 📊 مراقبة الأداء

### Vercel Analytics
- تفعيل Vercel Analytics
- مراقبة Core Web Vitals
- تتبع الأخطاء

### Google Analytics
- إضافة Google Analytics
- تتبع الزوار
- مراقبة السلوك

## 🔄 التحديثات المستقبلية

### النشر التلقائي
- كل push إلى main branch
- Vercel سيبني ويحدث تلقائياً
- Preview deployments للـ pull requests

### النشر اليدوي
```bash
# تحديث محلي
git add .
git commit -m "Update feature"
git push origin main

# Vercel سيبني تلقائياً
```

## 📱 اختبار متعدد الأجهزة

### Desktop
- Chrome, Firefox, Safari, Edge
- أحجام شاشات مختلفة
- دقة عالية ومنخفضة

### Mobile
- iOS Safari
- Android Chrome
- أحجام شاشات مختلفة

### Tablet
- iPad
- Android tablets
- اتجاهات مختلفة

## 🎯 نصائح الأداء

### 1. **تحسين الصور**
- استخدم WebP format
- ضغط الصور
- Lazy loading

### 2. **تحسين الخطوط**
- استخدم font-display: swap
- ضغط الخطوط
- استخدام system fonts

### 3. **تحسين JavaScript**
- Tree shaking
- Code splitting
- Minification

## 🆘 الدعم

### Vercel Support
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

### المشروع
- **Email**: info@intechdev.net
- **Website**: https://www.intechdev.net

---

## ✅ قائمة التحقق النهائية

- [ ] المشروع يبني محلياً بدون أخطاء
- [ ] جميع الصفحات تعمل
- [ ] الروابط تعمل بشكل صحيح
- [ ] التصميم متجاوب
- [ ] الأداء مقبول
- [ ] SEO محسن
- [ ] الموقع يعمل على Vercel

**🎉 مبروك! موقعك الآن على الهواء!**
