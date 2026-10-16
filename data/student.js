/* ===== student.js — student এর তথ্য। ভিডিওর মূল student এর ব্যক্তিগত তথ্য (নাম, ID, ফোন, ঠিকানা, ছবি) এখানে demo দিয়ে বদলানো আছে —
   নিজের তথ্য বসিয়ে নিন ===== */
DATA.student = {
  id: "243431017",
  name: "Sinthya Akter Roshni",
  program: "BA in English (Language & Literature)(Eng)",
  batch: "39th",
  photo: "../assets/img/avatar.jpg",
  contact: {
    mobile: "#",
    email: "#",
    presentAddress: "#",
    permanentAddress: "#"
  },
  personal: [
    ["Full Name","Sinthya Akter Roshni"], ["Date of Birth","27 July 2005"], ["Gender","Female"],
    ["Blood","A+"], ["Nationality","Bangladeshi"], ["Marital Status","Unknown"], ["Religion","Muslim"]
  ],
  parents: [
    ["Father's Name","#"], ["Father's Mobile","#"],
    ["Mother's Name","#"], ["Mother's Mobile","#"],
    ["Emergency Contact Name","#"], ["Emergency Contact Mobile","#","red"],
    ["Emergency Contact Address",""]
  ],
  previousEducation: [
    { exam:"", group:"Science", board:"Dhaka", year:"2023", gpa:"4.33" },
    { exam:"", group:"Science", board:"Dhaka", year:"2021", gpa:"5.00" }
  ],
  academic: [
    ["Program","BA in English (Language & Literature)"], ["Admission Semester","Fall 2024 (4M)"],
    ["Class Roll","243431017"], ["Registered Semester","7"]
  ]
};
