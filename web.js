console.log('hello!nnnnn')

const sab=document.getElementById('lis')
const sib=document.getElementById('bas')
console.log(sib.innerHTML)
sab.classList.add('asu')


const das=document.getElementById('sog')
console.log(das.innerHTML)

das.onclick=()=>{
if(sab.classList.contains('asu')){
   sab.classList.remove('asu')
   sab.classList.add('sal')
}
else{
    sab.classList.add('asu')
    sab.classList.remove('sal')
}

}
