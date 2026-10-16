# SMUCT i-EMS Student Portal — v2 (ভিডিও-২ এর মতো)

`index.html` ডাবল-ক্লিক করলেই চলে (build/install লাগে না; Font Awesome ও Google Font এর জন্য internet লাগবে)।
Login: User ID আগে থেকে বসানো, password যেকোনো কিছু। ভুল ID দিলে ভিডিওর মতো লাল "Sorry! Invalid Username or Password." alert আসে।
(পাসওয়ার্ড ঠিক করতে `data/config.js` → `demoPassword`)

## Folder structure
```
smuct-portal-v2/
├─ index.html                  Login (error alert সহ)
├─ pages/
│  ├─ dashboard.html           কার্ড + Registered Courses (Fall 2026 (4M))
│  ├─ profile.html             Profile (Personal / Previous Education / Academic)
│  ├─ change-password.html     Change Password
│  ├─ online-payment.html      bKash Online Payment
│  ├─ due-payments.html        Payment Summary · Payment History (Credit) · All Bill (Debit) · Online Payment History
│  ├─ registered-courses.html  Online Course Registration (rules, procedure, contacts, course table)
│  ├─ course-report.html       Course Registration By Semester
│  ├─ faculty-evaluation.html  Faculty Evaluation
│  ├─ course-pane.html         Attendance (Present/Absent, "Not Found!" অবস্থা) / Materials / Notices / Online Classes
│  └─ generic.html             বাকি পেজের ফাঁকা template (?title=...)
├─ data/                       ★ সব তথ্য এখানে
│  ├─ config.js  student.js  courses.js  payments.js  registration.js  menu.js  dashboard.js
└─ assets/
   ├─ css/ base · components · dashboard · login
   ├─ js/  layout.js · login.js · pages/*.js
   └─ img/ logo.png · avatar.svg · vendor.png · campus.svg
```

## ভিডিও-২ থেকে যা মেলানো হয়েছে
- সেমিস্টার নাম: Fall 2024 (4M) … Fall 2026 (4M) (৭টা), dropdown এ সব
- Due & Payments: সেমিস্টার বদলালে summary বদলায় (Due ↔ Advance লেবেল), লাল due chip, পেজ খোলার মুহূর্তে raw `{{...}}` template ঝলক (বন্ধ করতে `config.showTemplateFlash=false`),
  Credit ট্যাবে Payslip ID, দুই ট্যাবেই নিচে Current Bill / Total Paid / Current Due/Balance, Online Payment History (Payslip বাটন, লাল failed সারি)
- Online Course Registration: নিয়ম ০১–০৮ ও procedure হুবহু, Attention বক্স, কালো-বর্ডার টেবিল
- Course Pane: Absent লাল chip, ফাঁকা হলে লাল "Not Found!" alert
- ৩টা কোর্স (ENG-2301/2303/2305), teacher ও routine ভিডিওর মতো

## ⚠ যা demo
- ভিডিওর student এর ব্যক্তিগত তথ্য (নাম, ID, ছবি, ফোন, ঠিকানা, parents) ও টাকার অংক — সবই demo; `data/student.js` ও `data/payments.js` এ নিজের মতো বসান।
  Summary/Overall নিজে হিসাব হয় (`DATA.calc`), তাই bill/payment বদলালে সব জায়গায় মিলে যায়।
- Registration পেজের contact তালিকার শেষ কয়েকটা নম্বর ভিডিওতে কাটা ছিল (IS, Bangla, GP, FineArt) — `data/registration.js` এ যোগ করুন।
- Regular Exam Result, Admit Card, Library ইত্যাদি পেজ ভিডিওতে খোলা হয়নি → `generic.html`।
