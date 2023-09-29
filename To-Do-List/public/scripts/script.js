// code to delete a list element 
var btn_work=document.querySelectorAll("#work_id button");
var work_list=document.querySelectorAll("#work_id .left");

for(var i=0;i<btn_work.length;i++) {
  btn_work[i].setAttribute("id",i);
}

for(var i=0;i<btn_work.length;i++) {
  console.log(btn_work[i]);
  btn_work[i].onclick=function(e) {
    work_list[e.target.id].remove();
    btn_work[e.target.id].remove();
    console.log(e.target.id);
    // console.log(btn_work[e.target.id]);
  }
}

var btn_day=document.querySelectorAll("#day_id button");
var day_list=document.querySelectorAll("#day_id .left");

for(var i=0;i<btn_day.length;i++) {
  btn_day[i].setAttribute("id",i);
}

for(var i=0;i<btn_day.length;i++) {
  console.log(btn_day[i]);
  btn_day[i].onclick=function(e) {
    day_list[e.target.id].remove();
    btn_day[e.target.id].remove();
    console.log(e.target.id);
  }
}


