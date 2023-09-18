let tag=document.getElementById('tag');
let esaal=document.getElementById('esaal');
let day=document.getElementById('day');
let month=document.getElementById('month');
let year=document.getElementById('year');
let date=document.getElementById('date');
let create=document.getElementById('build');
let search=document.getElementById('search');
let tbody=document.getElementById('tbody');
let patient=document.getElementById('pat');
let price=document.getElementById('price');
let out=document.getElementById('out');
let count=document.getElementById('count');
let inf=document.getElementById('uuu');
let cal=document.getElementById('cal');
let aaa=document.getElementById('aaa');
let tryy=document.getElementById("try");

   
let mood='create';
let z;

inf.style.display="none";
count.style.display="none";
out.style.display="none";
aaa. style.display="none";
tryy.style.display="none";
/*
//date 
function mdate(){
    if(day.value!==""){
        let dArry=[];
    dArry.push(Number(day.value));
    dArry.push(Number(month.value));
    dArry.push(Number(year.value));
    date.innerHTML=dArry.join('/');
    date.style.background="green"
    }
    else{
        date.style.background='red';
        date.innerHTML=' ';
    }
    
}
*/

//create
let myarr;
if(localStorage.prons!=null){
    myarr=JSON.parse(localStorage.prons)
}
else{
    myarr=[];
}
create.onclick=()=>{
    let myObject={
        tag:tag.value,
        esaal:esaal.value,
       // date:date.innerHTML,
        patient:patient.value,
       out:out.value,
      price:price.value,
      inf:price.value-out.value,
     count:count.value,
     aaa:aaa.value,
     tryy:new Date(),
    }

    if(mood==='create'){
        if(myObject.count>=1){
            for(let i=0;i<myObject.count;i++){
                myarr.push(myObject);
                aaa. style.display="block";
                cal.style.display="block";
            }
        }else{
            myarr.push(myObject);
            aaa. style.display="block";
            cal.style.display="block";
            
        }
    }else{
        myarr[z]=myObject;
        count.style.display="none";
        create.innerHTML="create";
        
    }


   
    //save in local storage
    localStorage.setItem('prons',JSON.stringify(myarr));


    //run functions
  showdata();
  clearvalus();
}


//showdata
function showdata(){
    let table='';
    for(let i=0;i<myarr.length;i++){
        table+=` <tr>
        <td>${i}</td>
        <td>${myarr[i].tag}</td>
        <td>${myarr[i].patient}</td>
        <td>${myarr[i].price}</td>
        <td>${myarr[i].out}</td>
        <td style="color:#6370FF;">(${myarr[i].inf})</td>
        <td>${myarr[i].esaal}</td>
        <td>${myarr[i].tryy}</td>
       
        <td><button onclick="deleteindex(${i})" >مسح</button></td>
        <td><button onclick="update(${i})" >تحديث</button></td>
    </tr>`
    }
    tbody.innerHTML=table;

    if(myarr.length>=1){
        let deletall=document.getElementById('deleteall');
        deletall.innerHTML=`<button onclick="deletall()" >مسح الكل</button>`
    }
}
showdata();


//clear inputs

function clearvalus(){
    tag.value='';
    esaal.value='';
   /* day.value='';
    month.value='';
    year.value='';
    date.innerHTML='';*/
    patient.value='';
    out.value='';
    price.value='';

}




//delete index

function  deleteindex(i){
    myarr.splice(i,1);
    localStorage.prons=JSON.stringify(myarr);
    showdata();
}

//delete all
function deletall(){
    myarr.splice(0);
    localStorage.clear();
    showdata();
}

//search

let bytitle=document.getElementById('bytitle');
bytitle.onclick=()=>{
    search.focus();
}
 function searchh(value){
    let table='';
    for(let i=0;i<myarr.length;i++){
        if(myarr[i].tag.includes(value)){
        table+=` <tr>
        <td>${i}</td>
        <td>${myarr[i].tag}</td>
        <td>${myarr[i].patient}</td>
        <td>${myarr[i].price}</td>
        <td>${myarr[i].out}</td>
        <td style="color:#6370FF;">(${myarr[i].inf})</td>
        <td>${myarr[i].esaal}</td>
        <td>${myarr[i].tryy}</td>
       
       
        <td><button onclick="deleteindex(${i})" >مسح</button></td>
        <td><button onclick="update(${i})" >update</button></td>
    </tr>`
    }
    tbody.innerHTML=table ;
    }
}
 


function update(i){
    tag.value=myarr[i].tag;
    patient.value=myarr[i].patient;
    price.value=myarr[i].price;
    out.value=myarr[i].out;
    esaal.value=myarr[i].esaal;
  //  mdate();
    create.innerHTML='update';
    count.style.display='none';
    out.style.display="block";
    scroll({
        behavior:'smooth',
        top:0,
    });
    mood='update';
    z=i;

}

//calinf
function calinf(){
    
    for(let i=0;i<myarr.length;i++){
    aaa.value= +aaa.value + +myarr[i].inf;
}
aaa. style.display="block";
}