let title=document.getElementById('title');
let price=document.getElementById('price');
let tax=document.getElementById('tax');
let total=document.getElementById('total');
let count=document.getElementById('count');
let category=document.getElementById('category');
let creat=document.getElementById('build');
let search=document.getElementById('search');
let tbody=document.getElementById('tbody');



let mood='create';
let xy;


//caltotle

function caltotal(){
    if(price.value!=' '){
        let res= Number(price.value)+ Number(tax.value);
        total.innerHTML=res;
        total.style.background='green';
    }else{
        total.innerHTML=' ';
        total.style.background='red';
    }
}


//creat function
let carr;
if(localStorage.product!=null){
    carr=JSON.parse(localStorage.product)
}else{
    carr=[];
}
creat.onclick=()=>{
    let Cobj={
        title:title.value,
        price:price.value,
        tax:tax.value,
        total:total.innerHTML,
        count:count.value,
    }
// count role
//cheak mood

if(mood==='create'){
    if(Cobj.count>1){
        for(let i=0;i<Cobj.count;i++){
            carr.push(Cobj);
        }
    }else{
        carr.push(Cobj);
    }
}else{
    carr[xy]=Cobj;
    count.style.display="block";
    creat.innerHTML="creat"
}



    

    //local storage

    localStorage.setItem('product',JSON.stringify(carr));


    //run functions
showdata();
clearinp();
}




//showdata

function showdata(){
    let table='';
    for(let i=0;i<carr.length;i++){
        table+=
    `<tr>
    <td>${i}</td>
    <td>${carr[i].title}</td>
    <td>${carr[i].price}</td>
    <td>${carr[i].tax}</td>
    <td>${carr[i].total}</td>
    <td><button onclick="update(${i})"> update</button></td>
    <td><button onclick="dindex(${i})">delete</button></td>
</tr>`
tbody.innerHTML=table;
if(carr.length>1){
    let deletall=document.getElementById('deleteall');
    deletall.innerHTML=`<button onclick="deleteall()">delete All  (${carr.length})</button>`
}
}
}
showdata();


//clear inputs

function clearinp(){
    title.value='';
    price.value='';
    tax.value='';
    total.innerHTML='';
    count.value='';
}

//delete index
function dindex(i){
 carr.splice(i,1);
 localStorage.product=JSON.stringify(carr);
 showdata();
}

//clear localstorage
function deleteall(){
    carr.splice(0);
    localStorage.clear();
    showdata();
}

//update
function update(i){
    title.value=carr[i].title;
    price.value=carr[i].price;
    tax.value=carr[i].tax;
    caltotal();
    count.style.display='none'
    creat.innerHTML='update';
    scroll({
        behavior:"smooth",
        top:0,
    })
    mood='update';
    xy=i;
}


//search
//search.focus();
let bytitle=document.getElementById('bytitle');
bytitle.onclick=function(){
    search.focus();
}

function searchi(value){
    let table='';
    for(let i=0;i<carr.length;i++){
        if(carr[i].title.includes(value)){
        table+= `<tr>
        <td>${i}</td>
        <td>${carr[i].title}</td>
        <td>${carr[i].price}</td>
        <td>${carr[i].tax}</td>
        <td>${carr[i].total}</td>
        <td><button onclick="update(${i})"> update</button></td>
        <td><button onclick="dindex(${i})">delete</button></td>
    </tr>`
    }
    tbody.innerHTML=table;
}
}
