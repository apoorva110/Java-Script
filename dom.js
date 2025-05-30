// let head = document.getElementById('head1');
// console.log(head)
// head.textContent = "FROM JS"
// head.style.backgroundColor = "lightblue"
// head.style.padding = "20px"
// let head2 = document.getElementById('head2')
// head2.innerHTML = "<i> Tea Break </i>"

let list = document.getElementsByTagName('li')
console.log(list);
for(let i = 0;i<10;i++){
    if(i%2==0){
        list[i].style.backgroundColor = "blue"
        list[i].style.color = "white";
    }
}

