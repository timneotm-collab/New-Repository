
async function load(){
 const res=await fetch(API+'?action=list');
 const data=await res.json();
 const list=document.getElementById('list');
 list.innerHTML='';
 (data.items||data.data||[]).forEach(x=>{
   const li=document.createElement('li');
   li.textContent=`${x.date||''} ${x.category||''} ${x.amount||''}`;
   list.appendChild(li);
 });
}
document.getElementById('txForm').onsubmit=async(e)=>{
 e.preventDefault();
 await fetch(API,{method:'POST',body:JSON.stringify({
  action:'create',
  date:date.value,type:type.value,category:category.value,
  desc:desc.value,amount:Number(amount.value)
 })});
 load();
};
load();
if('serviceWorker' in navigator){navigator.serviceWorker.register('service-worker.js');}
