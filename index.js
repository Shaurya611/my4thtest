// write js code here corresponding to index.html
// You should add submit event on the form


document.querySelector("form").addEventListener("submit",myFunction)
 function myFunction(){
     event.preventDefault();
     var matchNum = masaiForm.matchNum.value;

     var teamA = document.querySelector("#teamA").value;

     var teamB = document.querySelector("#teamB").value;

     var date =masaiForm.date.value;

     var venue =  document.querySelector("#venue").value;

     var arr =[];
     var arrObj ={match : matchNum, teamA : teamA, teamB : teamB, date : date, venue : venue}
     arr.push(arrObj);
     localStorage.setItem("schedule",JSON.stringify(arr));
 }
