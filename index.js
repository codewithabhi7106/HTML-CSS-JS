function buttonClick1() {
  let value = document.getElementById("card");
  value.style.display = "none";
  let adress = document.getElementById("adress");
  adress.style.display = "inline-block";
}
function buttonClick2() {
  let value2 = document.getElementById("card");
  value2.style.display = "none";
  let adress2 = document.getElementById("adress2");
  adress2.style.display = "inline-block";
}
function data() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let c = document.getElementById("c").value;
  let d = document.getElementById("d").value;
  let e = document.getElementById("e").value;
  let f = document.getElementById("f").value;

  if (a == "" || b == "" || c == "" || d == "" || e == "" || f == "") {
    alert("please fill input");
    return false;
  } else if (d.length < 10 || d.length > 10 || e.length < 10 || e.length > 10) {
    alert("please enter 10 number");
    return false;
  }
  else{
      let value3 = document.getElementById("body");
  value3.style.display = "none";
  let form = document.getElementById("form");
  form.style.display = "block";
  }
  if(true){
  let name1=
  document.querySelector(".name1") 
      name1.innerHTML=`${c}|${b}, District:${a}, Pincode:${f}`
    let name2=
  document.querySelector(".name2")
    name2.innerHTML=`${c}|${b}, District:${a}, Pincode:${f}`
      let name3=
  document.querySelector(".name3") 
      name3.innerHTML=`${c}|${b}, District:${a}, Pincode:${f}`
      let name4=
  document.querySelector(".name4") 
      name4.innerHTML=`${c}|${b}, District:${a}, Pincode:${f}`
  }
} 

function find() {
 let dis=document.getElementById('dis').value;
 let bld=document.getElementById('bld').value;
 let pin=document.getElementById('pin').value;
 let nam=document.getElementById('nam').value;
 if (nam==""||dis==""||pin==""||bld=="") {
   alert(`Please fill input`)
   return false;
 } else {
 let value3 = document.getElementById("body");
  value3.style.display = "none";
   let form = document.getElementById("form");
  form.style.display = "block";
 }
 if (true) {
    let name1=
  document.querySelector(".name1") 
     name1.innerHTML=`${nam}|${bld},<br>District:${dis},<br>Pincode:${pin},`
    let name2=
  document.querySelector(".name2") 
     name2.innerHTML=`${nam}|${bld},<br>District:${dis},<br>Pincode:${pin},`
    let name3=
  document.querySelector(".name3") 
     name3.innerHTML=`${nam}|${bld},<br>District:${dis},<br>Pincode:${pin},`
    let name4=
  document.querySelector(".name4") 
     name4.innerHTML=`${nam}|${bld},<br>District:${dis},<br>Pincode:${pin},`
 }
}
function showneed(){
  let form = document.getElementById("form");
  form.style.display = "none";
  let value3 = document.getElementById("body");
  value3.style.display = "block";
  let need=document.getElementById('href')
  need.style.display = "inline-block";
}
function contact() {
  let value3 = document.getElementById("body");
  value3.style.display = "none";
  let form = document.getElementById("form");
  form.style.display = "none";
  let con =document.getElementById('contact');
  con.style.display="block";
}
function showconBtn(){
  let name=document.getElementById('namCon').value;
  let email=document.getElementById('email').value;
  if (name==""||email==""){
    alert('please fill input ?')
    return false;
  } else{
    let heading=document.getElementById('heading')
    heading.innerHTML="Your data is submitted."
  }
}
function backButton(){
    let value3 = document.getElementById("body");
  value3.style.display = "block";
  let con =document.getElementById('contact');
  con.style.display="none";
  let form = document.getElementById("form");
  form.style.display = "none";

}