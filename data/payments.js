/* ===== payments.js — bill (debit), payment (credit), online payment history।
   ⚠ সব টাকার অংকই DEMO (ভিডিওর structure হুবহু, সংখ্যা নিজের মতো বসান)। Summary/Overall নিজে হিসাব হয় (DATA.calc) ===== */
DATA.payments = {
  semesters: ["Fall 2024 (4M)","Spring 2025 (4M)","Summer 2025 (4M)","Fall 2025 (4M)","Spring 2026 (4M)","Summer 2026 (4M)","Fall 2026 (4M)"], // পুরনো → নতুন
  /* bills: lines = [[লেখা, লাল(Excluded)?]] */
  bills: [
   { sem:"Fall 2024 (4M)", items:[
     { d:"1/11/24 12:42 AM", t:"Admission Form Sale", lines:[["Admission Form Sale (500.00)"]], a:500 },
     { d:"28/12/24 1:21 PM", t:"Admission Fee", lines:[["Admission Fee (20,000.00)"]], a:20000 },
     { d:"28/12/24 1:21 PM", t:"Admission Fee Waiver(-)", lines:[["Admission Fee Waiver(-) (-10,000.00) (Excluded)",1]], a:-10000 },
     { d:"27/1/25 9:40 AM", t:"**Semester Fees Fall 2024 (4M) [1st Semester]**", lines:[["Session Fee (3,000.00)"],["Tuition Fee (19,000.00) (9x2111)"]], a:22000 },
     { d:"3/3/25 11:27 AM", t:"[-] 20% Scholarship on Tuition Fee (SSC+HSC+Others, GPA:4.50 to 4.74)", lines:[["[-] 20% Scholarship on Tuition Fee (SSC+HSC+Others, GPA:4.50 to 4.74) (-3,800.00) (Excluded)",1]], a:-3800 } ] },
   { sem:"Spring 2025 (4M)", items:[
     { d:"25/5/25 12:52 PM", t:"**Semester Fees Spring 2025 (4M) [2nd Semester]**", lines:[["Session Fee (3,000.00)"],["Tuition Fee (25,000.00) (12x2083)"]], a:28000 } ] },
   { sem:"Summer 2025 (4M)", items:[
     { d:"25/9/25 10:29 AM", t:"**Semester Fees Summer 2025 (4M) [3rd Semester]**", lines:[["Session Fee (3,000.00)"],["Tuition Fee (12,500.00) (6x2083)"]], a:15500 },
     { d:"12/10/25 9:26 AM", t:"[-] 20% Scholarship on Tuition Fee (SSC+HSC+Others, GPA:4.50 to 4.74)", lines:[["[-] 20% Scholarship on Tuition Fee (SSC+HSC+Others, GPA:4.50 to 4.74) (-2,500.00) (Excluded)",1]], a:-2500 } ] },
   { sem:"Fall 2025 (4M)", items:[
     { d:"12/8/25 7:00 PM", t:"[-] Session Fee Waiver Fall-2025 (4M)", lines:[["[-] Session Fee Waiver Fall-2025 (4M) (-3,000.00) (Excluded) (Session Fee Waiver)",1]], a:-3000 },
     { d:"22/11/25 10:24 AM", t:"**Semester Fees Fall 2025 (4M) [4th Semester]**", lines:[["Session Fee (3,000.00)"],["Tuition Fee (12,500.00) (6x2083)"]], a:15500 },
     { d:"10/12/25 3:02 PM", t:"[-] 20% Scholarship on Tuition Fee (SSC+HSC+Others, GPA:4.50 to 4.74)", lines:[["[-] 20% Scholarship on Tuition Fee (SSC+HSC+Others, GPA:4.50 to 4.74) (-2,500.00) (Excluded)",1]], a:-2500 },
     { d:"10/1/26 5:01 PM", t:"ID Card Re-Issue", lines:[["ID Card Re-Issue (150.00) (Excluded)",1]], a:150 } ] },
   { sem:"Spring 2026 (4M)", items:[
     { d:"31/1/26 8:16 PM", t:"**Semester Fees Spring 2026 (4M) [5th Semester]**", lines:[["Session Fee (3,000.00)"],["Tuition Fee (22,000.00) (10.5x2095)"]], a:25000 } ] },
   { sem:"Summer 2026 (4M)", items:[
     { d:"16/6/26 8:41 PM", t:"**Semester Fees Summer 2026 (4M) [6th Semester]**", lines:[["Session Fee (3,000.00)"],["Tuition Fee (22,000.00) (10.5x2095)"]], a:25000 } ] },
   { sem:"Fall 2026 (4M)", items:[
     { d:"4/10/26 10:31 AM", t:"**Semester Fees Fall 2026 (4M) [7th Semester]**", lines:[["Session Fee (3,000.00)"],["Tuition Fee (19,000.00) (9x2111)"]], a:22000 },
     { d:"11/10/26 11:27 AM", t:"[-] 20% Scholarship on Tuition Fee (SSC+HSC+Others, GPA:4.50 to 4.74)", lines:[["[-] 20% Scholarship on Tuition Fee (SSC+HSC+Others, GPA:4.50 to 4.74) (-4,000.00) (Excluded)",1]], a:-4000 } ] }
  ],
  /* credits: id = Payslip ID */
  credits: (function(){
    const B="Semester Payment (bKash PGW 1 (Student Portal) Online)", M="Semester Payment";
    const bk=(d,id,a)=>({d,id,t:B,lines:[["Semester Payment ("+fmt0(a)+")"]],a});
    const mn=(d,id,a,slip)=>({d,id,t:M,lines:[["Semester Payment ("+fmt0(a)+") (Manual Slip No: "+slip+". )"]],a});
    function fmt0(n){return Number(n).toLocaleString('en-US',{minimumFractionDigits:2})}
    return [
     { sem:"Fall 2024 (4M)", items:[
       { d:"28/12/24 1:27 PM", id:"747318", t:"Bill Collection", lines:[["Admission Form Sale (500.00)"],["Admission Fee (10,000.00)"],["Session Fee (3,000.00)",1]], a:13500 },
       bk("5/3/25 3:05 PM","63407 [CC53D2XO3N]",7500), bk("6/5/25 8:44 AM","66741 [CE60V1SMF8]",7500),
       { d:"25/5/25 12:49 PM", id:"797680", t:"Session Fee", lines:[["Session Fee (3,000.00) (2nd semester session fee)",1]], a:3000 } ] },
     { sem:"Spring 2025 (4M)", items:[ bk("11/7/25 4:14 PM","74088 [CGB2KSZ194]",12500), mn("1/9/25 12:44 PM","81555 [17e26322f14f40]",12500,"29957"), mn("25/9/25 10:07 AM","91570 [d7ad93b1692f47]",3000,"35788") ] },
     { sem:"Summer 2025 (4M)", items:[ mn("15/10/25 10:16 AM","96003 [6c4728b99fd349]",10000,"39339") ] },
     { sem:"Fall 2025 (4M)", items:[ mn("10/12/25 11:20 AM","109912 [7aec90e3957941]",12500,"48906"), mn("7/1/26 11:02 AM","115510 [6b89bc6f9a9548]",150,"52953") ] },
     { sem:"Spring 2026 (4M)", items:[ mn("31/1/26 2:35 PM","124425 [d0372dafd93e46]",500,"60352"), bk("2/4/26 9:15 PM","136657 [DD23Q4B33L]",11000), bk("10/5/26 8:06 PM","144162 [DEA72YJME4]",11000),
       { d:"16/6/26 8:40 PM", id:"150677 [DFG2ZE0N7K]", t:"Registration Fee (bKash PGW 1 (Student Portal) Online)", lines:[["Registration Fee (3,000.00)"]], a:3000 } ] },
     { sem:"Summer 2026 (4M)", items:[ bk("16/7/26 2:13 PM","153528 [DGG7FPN5SF]",10700), mn("7/9/26 12:00 PM","164162 [DEFA7V0BC1]",11000,"57331"), mn("3/10/26 12:49 PM","168983 [0dda4d34d747]",3000,"61204") ] },
     { sem:"Fall 2026 (4M)", items:[] }
    ];
  })(),
  /* Online Payment History: [particular, semester, amount, gatewayCharge, isPaid, remark, gateway, time, status] — status ≠ Success হলে লাল সারি */
  online: (function(){
    const BK="bKash PGW 1 (Student Portal)", CB="City Bank Over The Counter", PB="Semester Payment (bKash PGW 1 (Student Portal) Online)", PO="Semester Payment (Online)", RF="Registration Fee (bKash PGW 1 (Student Portal) Online)";
    return [
     [PO,"Summer 2026 (4M)",3000,0,"Yes","",CB,"Oct 3, 2026 12:49:08 PM","Success"],
     [PO,"Summer 2026 (4M)",11000,0,"Yes","",CB,"Sep 7, 2026 12:00:50 PM","Success"],
     [PB,"Summer 2026 (4M)",10700,163.5,"Yes","",BK,"Jul 16, 2026 2:12:38 PM","Success"],
     [RF,"Spring 2026 (4M)",3000,45.69,"Yes","",BK,"Jun 16, 2026 8:39:43 PM","Success"],
     [RF,"Spring 2026 (4M)",3000,45.69,"No","",BK,"Jun 16, 2026 8:37:51 PM","Initiated"],
     [PB,"Spring 2026 (4M)",11000,167.2,"Yes","",BK,"May 10, 2026 8:04:48 PM","Success"],
     [PB,"Spring 2026 (4M)",11000,167.2,"Yes","",BK,"Apr 2, 2026 9:14:31 PM","Success"],
     [PO,"Spring 2026 (4M)",500,0,"Yes","",CB,"Jan 31, 2026 2:35:47 PM","Success"],
     [PO,"Fall 2025 (4M)",150,0,"Yes","",CB,"Jan 7, 2026 11:02:10 AM","Success"],
     [PO,"Fall 2025 (4M)",12500,0,"Yes","",CB,"Dec 10, 2025 11:20:13 AM","Success"],
     [PO,"Summer 2025 (4M)",10000,0,"Yes","",CB,"Oct 15, 2025 10:16:19 AM","Success"],
     [PO,"Spring 2025 (4M)",3000,0,"Yes","",CB,"Sep 25, 2025 10:07:27 AM","Success"],
     [PO,"Spring 2025 (4M)",12500,0,"Yes","",CB,"Sep 1, 2025 12:44:45 PM","Success"],
     [PB,"Spring 2025 (4M)",12500,190.2,"Yes","",BK,"Jul 11, 2025 4:13:21 PM","Success"],
     [PB,"Fall 2024 (4M)",7500,114.2,"Yes","",BK,"May 6, 2025 8:43:35 AM","Success"],
     [PB,"Fall 2024 (4M)",7500,114.2,"No","",BK,"May 6, 2025 8:43:35 AM","Recheck Failed"]
    ];
  })()
};
/* ---- হিসাব: group total, semester summary, overall ---- */
DATA.calc = (function () {
  const P = DATA.payments, sum = (a) => a.reduce((x, i) => x + i.a, 0);
  const grp = (arr, s) => (arr.find((g) => g.sem === s) || { items: [] }).items;
  const billTotal = (s) => sum(grp(P.bills, s)), paidTotal = (s) => sum(grp(P.credits, s));
  function summary(sem) {                       // আগের semester এর শেষ balance হয়ে যায় prev
    let prev = 0;
    for (const s of P.semesters) {
      const bill = billTotal(s), paid = paidTotal(s), end = prev + paid - bill;
      if (s === sem) return { prev, bill, paid, mid: prev + paid - bill * 0.5, end };
      prev = end;
    }
  }
  const totals = () => { const bill = P.semesters.reduce((a, s) => a + billTotal(s), 0), paid = P.semesters.reduce((a, s) => a + paidTotal(s), 0); return { bill, paid, due: bill - paid }; };
  return { billTotal, paidTotal, summary, totals };
})();
