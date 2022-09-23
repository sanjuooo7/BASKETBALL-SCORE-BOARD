let hPoints=document.getElementById("h-points")
let gPoints=document.getElementById("g-points")
let count=0
let gount=0
//let hPoints=0
//let gPoints=0


function hplus1(){
  console.log("clicked")
  count=count+1
  hPoints.textContent=count
}

function hplus2(){
  console.log("clicked")
  count=count+2
  hPoints.textContent=count
}

function hplus3(){
  console.log("clicked")
  count=count+3
  hPoints.textContent=count
}

function gplus1(){
  console.log("clicked")
  gount=gount+1
  gPoints.textContent=gount
}

function gplus2(){
  console.log("clicked")
  gount=gount+2
  gPoints.textContent=gount
}

function gplus3(){
  console.log("clicked")
  gount=gount+3
  gPoints.textContent=gount
}
function hreset(){
  console.log("clicked")
  count=count-count
  hPoints.textContent=count

}

function greset(){
  console.log("clicked")
  gount=gount-gount
  gPoints.textContent=gount

}
