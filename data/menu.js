/* ===== menu.js — sidebar এর মেনু। নতুন আইটেম যোগ করতে এখানে লাইন বসান ===== */
DATA.menu = [
  { key:"dashboard",  label:"Dashboard",       icon:"fa-house",        href:"dashboard.html" },
  { key:"profile",    label:"Profile",         icon:"fa-user",         href:"profile.html" },
  { key:"password",   label:"Change Password", icon:"fa-lock",         href:"change-password.html" },
  { key:"academic",   label:"Academic",        icon:"fa-building-columns",
    children:[
      { key:"registered", label:"Registered Courses",     href:"registered-courses.html" },
      { key:"report",     label:"Course Complete Report", href:"course-report.html" },
      { key:"faculty",    label:"Faculty Evaluation",     href:"faculty-evaluation.html" }
    ] },
  { key:"result",     label:"Regular Exam Result",             icon:"fa-file-lines", href:"generic.html?title=Regular Exam Result" },
  { key:"transfer",   label:"Transferred Course Result",       icon:"fa-file-lines", href:"generic.html?title=Transferred Course Result", small:true },
  { key:"deptchange", label:"Internal Department Change Result",icon:"fa-file-lines", href:"generic.html?title=Internal Department Change Result", small:true },
  { key:"supple",     label:"Supplementary Result",            icon:"fa-file-lines", href:"generic.html?title=Supplementary Result" },
  { key:"admit",      label:"Admit Card Download",             icon:"fa-file-lines", href:"generic.html?title=Admit Card Download" },
  { key:"pay",        label:"Online Payment",                  icon:"fa-money-bill-1", href:"online-payment.html" },
  { key:"due",        label:"Due & Payments",                  icon:"fa-money-bill-1", href:"due-payments.html" },
  { key:"library",    label:"My Library", icon:"fa-book",
    children:[
      { key:"lib1", label:"Borrowed Books", href:"generic.html?title=Borrowed Books" },
      { key:"lib2", label:"Library Fines",  href:"generic.html?title=Library Fines" }
    ] }
];
