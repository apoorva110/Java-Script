//Q- PRINT 10 OBJECT ELEMENTS FIND OBJECT KEY ONLY(WHICHEVER IS FIRST)
let emp={
    name:"Apoorva",
    Designation:"SDE",
    Salary:7800000,
    Emp_no:678,
    Place:"Bhopal",
    Nationality:"American",
    Work_place:"Pune",
    Working_hours:"9am to 6pm",
    Bonus:80000,
    Laptop_assigned:"yes",
    Account_details:{
        Bank_name:"State Bank of India",
        Account_no:"2746y4rbhdbsi",
        Branch_name:"Bhopal"
    }
}
 console.log(emp)
for(let k in emp){
    console.log(k.emp.name)
}