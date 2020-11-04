/*
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();



app.use(express.static(path.join(__dirname, 'assets')));

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});



//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
*/
function showTime(timeZone,country){
    var date = luxon.DateTime.local().setZone(timeZone);  
    var h = date.hour ; 
    var m = date.minute ; 
    var s = date.second; 
    var day = date.day;
    var mon = date.monthShort; 
    
    
    
    
	
	
	
	
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time =country+"=> "+day+" "+mon+" "+ h + ":" + m + ":" + s + " ";
    document.getElementById("MyClockDisplay"+timeZone).innerText = time;
    document.getElementById("MyClockDisplay"+timeZone).textContent = time;
    
    
    
}

setInterval(function() { showTime("Europe/Warsaw","Lublin"); }, 500);
setInterval(function() { showTime("America/New_York","New York"); }, 500);
setInterval(function() { showTime("Australia/Sydney","Sydney"); }, 500);

 