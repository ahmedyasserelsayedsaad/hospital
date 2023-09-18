
let myBtn=document.querySelector('#btn1');
let rMore=document.querySelector('.more');
 myBtn.onclick=()=>{
    rMore.classList.toggle('active');
    if(myBtn.innerHTML==='read more'){
        myBtn.innerHTML='read less';
    }else{
    myBtn.innerHTML='read more';
 }
 };

 let myBtn2=document.querySelector('#btn2');
 let rMore2=document.querySelector('.more2');

 myBtn2.onclick=()=>{
    rMore2.classList.toggle('active');
    if(myBtn2.innerHTML==='read more'){
        myBtn2.innerHTML='read less ';
    }else{
    myBtn2.innerHTML='read more';
 }
}

let myBtn3=document.querySelector('#btn3');
let rMore3=document.querySelector('.more3');

 myBtn3.onclick=()=>{
    rMore3.classList.toggle('active');
    if(myBtn3.innerHTML==='read more'){
        myBtn3.innerHTML='read less';
    }else{
    myBtn3.innerHTML='read more';
 }
 };


 //up btn
 let up=document.querySelector('.up');
 window.onscroll=()=>{
    if(scrollY>=270){
        up.style.display='block';
    }else{
        up.style.display='none'
    }
 }
 up.onclick=()=>{
    scroll({
        behavior:'smooth',
        top:0,
        left:0,
    })
 }