/* ===== payments.js — bill (debit), payment (credit), online payment history।
   ⚠ সব ডেটা ভিডিও অনুযায়ী বসানো হয়েছে। Summary/Overall নিজে হিসাব হয় (DATA.calc) ===== */
DATA.payments = {
  semesters: ["Fall 2024 (4M)","Spring 2025 (4M)","Summer 2025 (4M)","Fall 2025 (4M)","Spring 2026 (4M)","Summer 2026 (4M)","Fall 2026 (4M)"],
  
  /* bills: lines = [[লেখা, লাল(Excluded)?]] */
  bills: [
    { sem:"Fall 2024 (4M)", items:[
      { d:"1/11/24 12:42 AM", t:"Admission Form Sale", lines:[["Admission Form Sale (500.00)"]], a:500 },
      { d:"28/12/24 1:21 PM", t:"Admission Fee", lines:[["Admission Fee (20,000.00)"]], a:20000 },
      { d:"28/12/24 1:21 PM", t:"Admission Fee Waiver(-)", lines:[["Admission Fee Waiver(-) (-10,000.00) (Excluded)",1]], a:-10000 },
      { d:"27/1/25 9:40 AM", t:"**Semester Fees Fall 2024 (4M) [1st Semester]**", lines:[["Session Fee (3,000.00)"],["Tuition Fee (19,170.00) (9x2130)"]], a:22170 },
      { d:"3/3/25 11:27 AM", t:"[-] 20% Scholarship on Tuition Fee (SSC+HSC+Others, GPA:4.50 to 4.74)", lines:[["[-] 20% Scholarship on Tuition Fee (SSC+HSC+Others, GPA:4.50 to 4.74) (-3,834.00) (Excluded)",1]], a:-3834 } ] },
    { sem:"Spring 2025 (4M)", items:[
      { d:"25/5/25 12:52 PM", t:"**Semester Fees Spring 2025 (4M) [2nd Semester]**", lines:[["Session Fee (3,000.00)"],["Tuition Fee (25,560.00) (12x2130)"]], a:28560 } ] },
    { sem:"Summer 2025 (4M)", items:[
      { d:"25/9/25 10:29 AM", t:"**Semester Fees Summer 2025 (4M) [3rd Semester]**", lines:[["Session Fee (3,000.00)"],["Tuition Fee (12,780.00) (6x2130)"]], a:15780 },
      { d:"12/10/25 9:26 AM", t:"[-] 20% Scholarship on Tuition Fee (SSC+HSC+Others, GPA:4.50 to 4.74)", lines:[["[-] 20% Scholarship on Tuition Fee (SSC+HSC+Others, GPA:4.50 to 4.74) (-2,556.00) (Excluded)",1]], a:-2556 } ] },
    { sem:"Fall 2025 (4M)", items:[
      { d:"12/8/25 7:00 PM", t:"[-] Session Fee Waiver Fall-2025 (4M)", lines:[["[-] Session Fee Waiver Fall-2025 (4M) (-3,000.00) (Excluded) (Session Fee Waiver)",1]], a:-3000 },
      { d:"22/11/25 10:24 AM", t:"**Semester Fees Fall 2025 (4M) [4th Semester]**", lines:[["Session Fee (3,000.00)"],["Tuition Fee (12,780.00) (6x2130)"]], a:15780 },
      { d:"10/12/25 3:02 PM", t:"[-] 20% Scholarship on Tuition Fee (SSC+HSC+Others, GPA:4.50 to 4.74)", lines:[["[-] 20% Scholarship on Tuition Fee (SSC+HSC+Others, GPA:4.50 to 4.74) (-2,556.00) (Excluded)",1]], a:-2556 },
      { d:"10/1/26 5:01 PM", t:"ID Card Re-Issue", lines:[["ID Card Re-Issue (150.00) (Excluded)",1]], a:150 } ] },
    { sem:"Spring 2026 (4M)", items:[
      { d:"31/1/26 8:16 PM", t:"**Semester Fees Spring 2026 (4M) [5th Semester]**", lines:[["Session Fee (3,000.00)"],["Tuition Fee (22,365.00) (10.5x2130)"]], a:25365 } ] },
    { sem:"Summer 2026 (4M)", items:[
      { d:"16/6/26 8:41 PM", t:"**Semester Fees Summer 2026 (4M) [6th Semester]**", lines:[["Session Fee (3,000.00)"],["Tuition Fee (22,365.00) (10.5x2130)"]], a:25365 } ] },
    { sem:"Fall 2026 (4M)", items:[
      { d:"4/10/26 10:31 AM", t:"**Semester Fees Fall 2026 (4M) [7th Semester]**", lines:[["Session Fee (3,000.00)"],["Tuition Fee (19,170.00) (9x2130)"]], a:22170 },
      { d:"11/10/26 11:27 AM", t:"[-] 20% Scholarship on Tuition Fee (SSC+HSC+Others, GPA:4.50 to 4.74)", lines:[["[-] 20% Scholarship on Tuition Fee (SSC+HSC+Others, GPA:4.50 to 4.74) (-3,834.00) (Excluded)",1]], a:-3834 } ] }
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
        bk("5/3/25 3:05 PM","63407 [CC53D2XO3N]",7668), bk("6/5/25 8:44 AM","66741 [CE60V1SMF8]",7668),
        { d:"25/5/25 12:49 PM", id:"797680", t:"Session Fee", lines:[["Session Fee (3,000.00) (2nd semester session fee)",1]], a:3000 } ] },
      { sem:"Spring 2025 (4M)", items:[ bk("11/7/25 4:14 PM","74088 [CGB2KSZ194]",12780), mn("1/9/25 12:44 PM","81555 [17e26322f14f40]",12780,"29957"), mn("25/9/25 10:07 AM","91570 [d7ad93b1692f47]",3000,"35788") ] },
      { sem:"Summer 2025 (4M)", items:[ mn("15/10/25 10:16 AM","96003 [6c4728b99fd349]",10300,"39339") ] },
      { sem:"Fall 2025 (4M)", items:[ mn("10/12/25 11:20 AM","109912 [7aec90e3957941]",12780,"48906"), mn("7/1/26 11:02 AM","115510 [6b89bc6f9a9548]",150,"52953") ] },
      { sem:"Spring 2026 (4M)", items:[ mn("31/1/26 2:35 PM","124425 [d0372dafd93e46]",500,"60352"), bk("2/4/26 9:15 PM","136657 [DD23Q4B33L]",11126), bk("10/5/26 8:06 PM","144162 [DEA72YQWE9]",11182),
        { d:"16/6/26 8:40 PM", id:"150077 [DFG2E25U06]", t:"Registration Fee (bKash PGW 1 (Student Portal) Online)", lines:[["Registration Fee (3,000.00)"]], a:3000 } ] },
      { sem:"Summer 2026 (4M)", items:[ bk("16/7/26 2:13 PM","153528 [DGG7FFNO5F]",11183), mn("19/9/26 12:00 PM","164562 [6f01d3fea8e94f]",11200,"91989"), mn("1/10/26 12:49 PM","168983 [00ded246d5f747]",2925,"96009") ] },
      { sem:"Fall 2026 (4M)", items:[] }
    ];
  })(),
  
  /* Online Payment History: [particular, semester, amount, gatewayCharge, isPaid, remark, gateway, time, status] */
  online: (function(){
    const BK="bKash PGW 1 (Student Portal)", CB="City Bank Over The Counter", PB="Semester Payment (bKash PGW 1 (Student Portal) Online)", PO="Semester Payment (Online)", RF="Registration Fee (bKash PGW 1 (Student Portal) Online)";
    return [
      [PO,"Summer 2026 (4M)",2925,0,"Yes","",CB,"Oct 1, 2026 12:49:00 PM","Success"],
      [PO,"Summer 2026 (4M)",11200,0,"Yes","",CB,"Sep 19, 2026 12:00:00 PM","Success"],
      [PB,"Summer 2026 (4M)",11183,172.3,"Yes","",BK,"Jul 16, 2026 2:13:00 PM","Success"],
      [RF,"Spring 2026 (4M)",3000,45.69,"Yes","",BK,"Jun 16, 2026 8:40:00 PM","Success"],
      [RF,"Spring 2026 (4M)",3000,45.69,"No","",BK,"Jun 16, 2026 8:37:51 PM","Initiated"],
      [PB,"Spring 2026 (4M)",11182,171.28,"Yes","",BK,"May 10, 2026 8:06:00 PM","Success"],
      [PB,"Spring 2026 (4M)",11126,169.42,"Yes","",BK,"Apr 2, 2026 9:15:00 PM","Success"],
      [PO,"Spring 2026 (4M)",500,0,"Yes","",CB,"Jan 31, 2026 2:35:47 PM","Success"],
      [PO,"Fall 2025 (4M)",150,0,"Yes","",CB,"Jan 7, 2026 11:02:10 AM","Success"],
      [PO,"Fall 2025 (4M)",12780,0,"Yes","",CB,"Dec 10, 2025 11:20:13 AM","Success"],
      [PO,"Summer 2025 (4M)",10300,0,"Yes","",CB,"Oct 15, 2025 10:16:19 AM","Success"],
      [PO,"Spring 2025 (4M)",3000,0,"Yes","",CB,"Sep 25, 2025 10:07:27 AM","Success"],
      [PO,"Spring 2025 (4M)",12780,0,"Yes","",CB,"Sep 1, 2025 12:44:45 PM","Success"],
      [PB,"Spring 2025 (4M)",12780,193.2,"Yes","",BK,"Jul 11, 2025 4:14:00 PM","Success"],
      [PB,"Fall 2024 (4M)",7668,116.72,"Yes","",BK,"May 6, 2025 8:44:00 AM","Success"],
      [PB,"Fall 2024 (4M)",7668,116.72,"No","",BK,"May 6, 2025 8:43:35 AM","Recheck Failed"],
      [PB,"Fall 2024 (4M)",7668,116.72,"Yes","",BK,"Mar 5, 2025 3:05:00 PM","Success"]
    ];
  })()
};

/* ---- হিসাব: group total, semester summary, overall ---- */
DATA.calc = (function () {
  const P = DATA.payments, sum = (a) => a.reduce((x, i) => x + i.a, 0);
  const grp = (arr, s) => (arr.find((g) => g.sem === s) || { items: [] }).items;
  const billTotal = (s) => sum(grp(P.bills, s)), paidTotal = (s) => sum(grp(P.credits, s));
  
  function summary(sem) {                        
    let prev = 0;
    for (const s of P.semesters) {
      const bill = billTotal(s);
      const paid = paidTotal(s);
      const end = prev + paid - bill;
      
      if (s === sem) {
        // SMUCT Rule: Midterm Bill = Session Fee (3000) + (Remaining Bill / 2)
        let midBill = bill > 0 ? (bill + 3000) / 2 : 0;
        return { 
          prev: prev, 
          bill: bill, 
          paid: paid, 
          mid: prev + paid - midBill, 
          end: end 
        };
      }
      prev = end;
    }
  }
  
  const totals = () => { 
    const bill = P.semesters.reduce((a, s) => a + billTotal(s), 0);
    const paid = P.semesters.reduce((a, s) => a + paidTotal(s), 0); 
    return { bill, paid, due: bill - paid }; 
  };
  
  return { billTotal, paidTotal, summary, totals };
})();