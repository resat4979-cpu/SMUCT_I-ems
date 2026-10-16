/* ===== courses.js — সেমিস্টার ও কোর্স (Dashboard, Registration, Course Pane এর উৎস) ===== */
const _e=(code,title,teacher,routine)=>({code,title,credit:3,type:"Theory",teacher:[teacher],routine});
DATA.semesters = [
 { name:"Fall 2024 (4M)", courses:[] }, { name:"Spring 2025 (4M)", courses:[] }, { name:"Summer 2025 (4M)", courses:[] },
 { name:"Fall 2025 (4M)", courses:[] },  { name:"Spring 2026 (4M)", courses:[] }, { name:"Summer 2026 (4M)", courses:[] },
 { name:"Fall 2026 (4M)", year:"3rd Year 1st Semester", courses:[
   _e("ENG-2301","Victorian Poetry [A]","Tasnim Ahmed",[{day:"Sat",time:"8:30 AM - 10:00 AM",room:"1704-Classroom-1704, Main, Permanent"},{day:"Tue",time:"1:00 PM - 2:30 PM",room:"1703-Classroom-1703, Main, Permanent"}]),
   _e("ENG-2303","History of English Language [A]","Nusrat Tasnim Arna",[{day:"Tue",time:"8:30 AM - 10:00 AM",room:"1703-Classroom-1703, Main, Permanent"},{day:"Wed",time:"11:30 AM - 1:00 PM",room:"1703-Classroom-1703, Main, Permanent"}]),
   _e("ENG-2305","Second Language Acquisition [A]","Nusrat Tasnim Arna",[{day:"Sat",time:"1.00 PM - 2:30 PM",room:"1704-Classroom-1704, Main, Permanent"},{day:"Wed",time:"1.00 PM - 2:30 PM",room:"1704-Classroom-1704, Main, Permanent"}])
 ] }
];
/* কোর্স কার্ডের আইকন/রং ঘুরে ঘুরে বসে */
DATA.cardStyles = [
  {c:"#4457d4",i:"fa-book"}, {c:"#e91e8c",i:"fa-code"}, {c:"#f0a020",i:"fa-flask"},
  {c:"#8b46e0",i:"fa-calculator"}, {c:"#1fbf7a",i:"fa-graduation-cap"}
];
/* Course Pane → Attendance।  rows = [তারিখ, বার, সময়, Exam Term, Type, Status, Absent Reason, Late, Early Left, Faculty]
   rows খালি থাকলে "Not Found!" alert দেখায় (ENG-2305 এর মতো) */
const _r=(d,day,t,st,f)=>[d,day,t,"Mid Term","Regular Class",st,"N/A","No","No",f];
DATA.attendance = {
  "ENG-2301": { classNo:"381006", section:"A", syllabus:"2019 BA Eng Syllabus V1 (B13-26+)", rows:[
    _r("26/09/2026","Saturday","08:30 AM - 09:50 AM","Present","Tasnim Ahmed"), _r("27/09/2026","Sunday","08:30 AM - 11:20 AM","Present","Tasnim Ahmed"),
    _r("03/10/2026","Saturday","08:30 AM - 09:50 AM","Present","Tasnim Ahmed"), _r("04/10/2026","Sunday","08:30 AM - 09:50 AM","Present","Tasnim Ahmed"),
    _r("10/10/2026","Saturday","08:30 AM - 09:50 AM","Present","Tasnim Ahmed"), _r("13/10/2026","Tuesday","10:00 AM - 12:50 PM","Present","Tasnim Ahmed") ] },
  "ENG-2303": { classNo:"381006", section:"A", syllabus:"2019 BA Eng Syllabus V1 (B13-26+)", rows:[
    _r("05/10/2026","Monday","11:30 AM - 12:50 PM","Absent","Nusrat Tasnim Arna"), _r("06/10/2026","Tuesday","08:30 AM - 09:50 AM","Present","Nusrat Tasnim Arna") ] },
  "ENG-2305": { classNo:"381006", section:"A", syllabus:"2019 BA Eng Syllabus V1 (B13-26+)", rows:[] }
};
