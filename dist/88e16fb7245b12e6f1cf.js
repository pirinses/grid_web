const scriptURL="https://script.google.com/macros/s/AKfycbw5nTR8_GsRq4qz1vXtGkAtS9FZK5RFstfjbA4-topAVV8ZA31xMX7CdXv9a-A-IP9B/exec",form=document.forms.gridsheet,joinWaitlist=document.getElementById("btn-join"),closeButton=document.querySelector(".btn-close"),modal=document.querySelector(".modal"),textHome=document.querySelector(".container-three");form.addEventListener("submit",(e=>{alert("asd"),e.preventDefault(),fetch(scriptURL,{method:"POST",body:new FormData(form)}).then((e=>{alert("Thanks for joining! Expect to hear from us soon.")})).catch((e=>console.error("Error!",e.message)))})),form.addEventListener;const joinSelected=()=>{joinWaitlist.addEventListener("click",(()=>{modal.classList.toggle("join-active-selected"),textHome.classList.toggle("hide")}))},onClose=()=>{closeButton.addEventListener("click",(()=>{textHome.classList.remove("hide")}))},app=()=>{joinWaitlist.addEventListener("click",(()=>{modal.classList.toggle("join-active-selected"),textHome.classList.toggle("hide")})),closeButton.addEventListener("click",(()=>{textHome.classList.remove("hide")}))};joinWaitlist.addEventListener("click",(()=>{modal.classList.toggle("join-active-selected"),textHome.classList.toggle("hide")})),closeButton.addEventListener("click",(()=>{textHome.classList.remove("hide")}));