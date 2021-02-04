window.onload= function () {
  var notearray=[];

  document.getElementById('button-create').onclick = function(){ 
  var txt = document.getElementById('in').value; 
  var obj={};
  obj.note =txt;
  obj.check = true;
  var push =notearray.length;
  notearray[push] = obj;
  createNode();
  }

  function createNode(){
    var out = "";
    for (var key in notearray){
      if(notearray[key].check === true){
        out+= `<li id='inp_${key}'>
        <input id='inp_${key}' type = "checkbox" checked> `;
      } else {
        out+= `<li id='inp_${key}'> <input id=inp_${key} type = "checkbox">`;
      }
    out+=  notearray[key].note  +'<br>'+'</li>';
    }
    document.getElementById('out').innerHTML = out;      
  }
  
  document.getElementById('button-delete').onclick =function(){
    for (var i in notearray){
      if(notearray[i].check === true){
        document.getElementById(`inp_${i}`).innerHTML = "";
        notearray.splice(i,1);
      }
      console.log(notearray[i]);
    }
  }
  
  

}