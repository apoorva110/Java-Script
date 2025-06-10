//Q- WRITE A CODE WHICH CAN GIVE GRADES TO STUDENTS ACCORDING TO THEIR SCORE
//80-100 - A
//70-89 - B
//60-69 - C
//50-59 - D
//0-49 - F
let score=prompt("Enter score of student: ");
if(score>=80 && score<=100){
    alert("The grade of student is A")
}
else if(score>=70 && score<=89){
    alert("The grade of student is B")
}
else if(score>=60 && score<=69){
    alert("The grade of student is C")
}
else if(score>=50 && score<=59){
    alert("The grade of student is D")
}
else if(score>=0 && score<=49){
    alert("The grade of student is F")
}