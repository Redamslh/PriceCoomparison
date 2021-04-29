jQuery(document).ready(function($) {
    var distchosen=10000000 ; 
	$('.range-slider').each(function(index, el) {
		$(this).append('<span class="range-number"><span>0</span></span>');
	});
	$('.range-slider').on('mousedown touchstart', '.range-number', function(event) {
		event.preventDefault();
		var $ele = $(this);
		var $eleParent = $(this).parents('.range-slider');
		var eleWid = $ele.innerWidth();
		var eleOffset = 5;
		var thisEnd = $eleParent.data('end');
		var parentWid = $eleParent.innerWidth();
		console.log(event, $ele, $eleParent);
		$eleParent.addClass('tap');
		$eleParent.on('mousemove touchmove', function(event) {
			event.preventDefault();
			var leftOff = event.offsetX-(eleWid/2);
			var leftSpc = (leftOff*100)/$eleParent[0].offsetWidth;
			var leftText = (leftOff + eleOffset * 2) - eleOffset;
			if(leftOff <= (parentWid-eleWid-eleOffset) && leftOff >= eleOffset){
				var temp = parentWid-eleWid-(eleOffset*2);
				var temp1 = Math.floor(((leftOff-eleOffset)/temp)*thisEnd);
				$ele.css('left', leftSpc+'%');
				$ele.find('span').text(temp1);
			}
		});
	});
	$('.range-slider').on('mouseup touchend', function(event) {
		event.preventDefault();
		var $ele = $(this);
		var $eleParent = $(this).parents('.range-slider');
		$ele.removeClass('tap');
		$ele.off('mousemove touchmove');
        console.log($ele[0].outerText);
        distchosen=$ele[0].outerText


	});
    var type="essence"; 
    var lng ; 
    var lat ; 
    var chep , near =false ;
    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          x.innerHTML = "Geolocation is not supported by this browser.";
        }
      }
      
      function showPosition(position) {
        lng =position.coords.longitude 
          console.log(position.coords.latitude + " " +  position.coords.longitude )
          lat = position.coords.latitude ;

      }
      var near,chep =false ; 
      var i = 0 
      $('#CheckboxButton1').on('click', function() {
        if(near){
            $('#distcho').css('display', 'block');
            $('#typcho').css('display', 'block');
          near=false
        }
        else{
          if(chep){
            $('#distcho').css('display', 'block');
            $('#typcho').css('display', 'block');
          }else{
            $('#distcho').css('display', 'none');
            $('#typcho').css('display', 'none');
          }
          near=true
        }
    })
    $('#CheckboxButton2').on('click', function() {
      if(chep){
        if(near){
          $('#distcho').css('display', 'none');
          $('#typcho').css('display', 'none');
        }else{
          $('#distcho').css('display', 'block');
          $('#typcho').css('display', 'block');
        }
        chep=false
      }   
      else{
       
          $('#distcho').css('display', 'block');
          $('#typcho').css('display', 'block');
        chep=true
      }
  })
    $('#bgz').on('click', function() {
        type="gaz"
       console.log("gaz")
    })
    $('#bess').on('click', function() {
        type="essence"
        console.log("essence")
    })
    $('#bex').on('click', function() {
      type="ex"
      console.log("essence")
  })
    function removeLoader(){
        $( "#loader" ).fadeOut(500, function() {
          // fadeOut complete. Remove the loading div
     //makes page more lightweight 
          $('#stationcard').css('display', 'block');
          cnt = true;
            document.getElementById("prixgaz").innerHTML = lng
            getStation()
            if(chep & !near){
              if(type=="essence"){
                document.getElementById("prixgaz").innerHTML = stationes  + " " + minEssence + " DH"
              }else if(type=="ex"){
                document.getElementById("prixgaz").innerHTML = stationex + " " +  minExcelum + " DH"
              }else if(type=="gaz"){
                document.getElementById("prixgaz").innerHTML = stationgz +" " + mingaz+ " DH"
                
              }
              document.getElementById("box").innerHTML = "Cheapest Station"
            }else if(near & !chep){
              
              document.getElementById("box").innerHTML = "Nearest Station"
              document.getElementById("prixgaz").innerHTML = nearstation
            }
            else if(near && chep ){
              if(type=="essence"){
              document.getElementById("prixgaz").innerHTML = nearcheapstationess+ " DH"
              }else if(type=="ex"){
                document.getElementById("prixgaz").innerHTML = nearcheapstationex+ " DH"
              }else if(type=="gaz"){
                document.getElementById("prixgaz").innerHTML = nearcheapstationgaz + " DH"
              }
              document.getElementById("box").innerHTML = "Nearest  & Cheapest Station"

            }
                 
    
    
  

      });  
    }
    var cnt = false;
    $('#bt3').on('click', function() {
      if(!near && !chep ){
        alert("Please choose an option")
      }else{
        if(cnt){
          $('#stationcard').css('display', 'none');
          cnt = false;
          }
            $('#loader').css('display', 'block');
            setTimeout(removeLoader, 5000);
            getLocation();
      }
     
         
    })

    var mingaz,minEssence,minExcelum = 1000.0
    var maxgaz = 0.0;
    var maxEssence = 0.0
    var maxExcelum = 0.0
    function formatDate() {
      var d = new Date(),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;
  
      return [day, month, year].join('-');
  }
  var mindist =10000000; 

  var gaz, spec, ess ,cheapestation ,nearstation,nearcheapstationgaz
    var nearcheappricegaz=100000 ;
    var nearcheapstationex, nearcheapstationess ;
    var nearcheappriceex=100000 ;
    var nearcheappriceess=100000 ;
    var stationrepeat="";
    var dataGaz = new Array();
    var mean=100000000 ; 
function getStation (){
   mingaz = 1000.0
   minEssence = 1000.0
   minExcelum = 1000.0
     var station1 = firebase.database().ref('Casablanca/');

     station1.on('value',(snapshot)=>{
         snapshot.forEach(function(snapshot1){
             snapshot1.forEach(function(snapshot2){
   
                 snapshot2.forEach(function(snapshot3){
                  if(snapshot2.key != "coordonnee"){
                   gaz = snapshot3.val().gasoil
                   spec = snapshot3.val().excellum
                   ess = snapshot3.val().sans_plomb
      
                  }
                   else{
                    if(snapshot2.key == formatDate()){
                      if(stationrepeat!=snapshot1.key){
                        dataGaz.push({category:snapshot1.key,value1:parseFloat(gaz),value2:parseFloat(spec),value3: parseFloat(ess)})
                      }
                      stationrepeat = snapshot1.key;
                      
                    }
    
                    if(parseFloat(gaz) < mingaz && calcCrow(lat,lng,snapshot2.val().lat,snapshot2.val().long) < distchosen){
                      console.log("dazete " + snapshot1.key + " dit : " + distchosen)
                      mingaz = parseFloat(gaz);
                      stationgz = snapshot1.key;
                    }
                    if(parseFloat(gaz) > maxgaz){
                      maxgaz = parseFloat(gaz);
                    }
                    if(parseFloat(spec) < minExcelum && calcCrow(lat,lng,snapshot2.val().lat,snapshot2.val().long) < distchosen){
                      minExcelum = parseFloat(spec);
                      stationex = snapshot1.key;
                    }
                    if(parseFloat(spec) > maxExcelum){
                      maxExcelum = parseFloat(spec);
                    }
                    if(parseFloat(ess) < minEssence && calcCrow(lat,lng,snapshot2.val().lat,snapshot2.val().long) < distchosen ){
                      minEssence = parseFloat(ess);
                      stationes = snapshot1.key;
                    }
                    if(parseFloat(ess) > maxEssence){
                      maxEssence = parseFloat(ess);
                    }
if(calcCrow(lat,lng,snapshot2.val().lat,snapshot2.val().long)<mindist){
  mindist = calcCrow(lat,lng,snapshot2.val().lat,snapshot2.val().long)
  nearstation = snapshot1.key
}
meangz = calcCrow(lat,lng,snapshot2.val().lat,snapshot2.val().long) + 5 * gaz
meanex = calcCrow(lat,lng,snapshot2.val().lat,snapshot2.val().long) + 5 * spec
meaness = calcCrow(lat,lng,snapshot2.val().lat,snapshot2.val().long) + 5 * ess
console.log("station " + snapshot1.key + "   chosen " + distchosen + " dist" + calcCrow(lat,lng,snapshot2.val().lat,snapshot2.val().long))
if(meangz <nearcheappricegaz){
  nearcheappricegaz = meangz
  nearcheapstationgaz = snapshot1.key + " " + gaz
}
if(meanex <nearcheappriceex){
  nearcheappriceex = meanex
  nearcheapstationex = snapshot1.key  + " " + spec
}
if(meaness <nearcheappriceess){
  nearcheappriceess = meaness
  nearcheapstationess = snapshot1.key + " " + ess
}


                   }
                   
                 })
               
               
   
             })
             
         })
        
         console.log("nearset station is " + nearstation)
         console.log("cheapest station is  " + stationgz)

     })
    }

});

function calcCrow(lat1, lon1, lat2, lon2) 
{
  var R = 6371; // km
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  return d;
}
function toRad(Value) 
    {
        return Value * Math.PI / 180;
    }
 