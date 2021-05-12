var allst=false 
var jrn =false
let markers = [];
function clearMarkers() {
    setMapOnAll(null);
  }
  function setMapOnAll(map) {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  }
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
$('#Allstation').on('click', function() {
    clearMarkers()
    if(!allst){
        $('#jrn').css('display', 'none');
        allst=true
        var station1 = firebase.database().ref('Casablanca/');

        station1.on('value',(snapshot)=>{
            snapshot.forEach(function(snapshot1){
                snapshot1.forEach(function(snapshot2){
                 snapshot2.forEach(function(snapshot3){
    
    
                   if(snapshot2.key == formatDate()){
                    gaz = snapshot2.val().gasoil
                    spec = snapshot2.val().excellum
                    ess = snapshot2.val().sans_plomb
                  
                   }
                    else if(snapshot2.key == "coordonnee"){
                        const contentString =
                        '<div id="content">' +
                        '<div id="siteNotice">' +
                        
                        "</div>" +
                        '<h4 id="firstHeading" class="firstHeading">'+ snapshot1.key + '</h4>' +
                    '<div style="background-color : #aadaff ; width : 100% ; height : 5px" ></div>' + "<div> Gazoil  :" +   gaz + "  \n"+  "Exceuilium "+ spec + " \n  Essence" +  ess+ " DH" + 
                    '</div>'
                    +
                        "</div>";
                      const infowindow = new google.maps.InfoWindow({
                        content: contentString,
                      });
    
                        const marker = new google.maps.Marker({
                          icon : "./assets/img/gz.png",
                          position: new google.maps.LatLng(snapshot2.val().lat,snapshot2.val().long),
                            map,
                            title: "Uluru (Ayers Rock)",
                          });
                            infowindow.open(map, marker);
                            markers.push(marker);
    
                        /*
                     console.log("station " + snapshot2.val().lat + "   chosen ")
     
                     if(parseFloat(gaz) < mingaz && calcCrow(lat,lng,snapshot2.val().lat,snapshot2.val().long) < distchosen){
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
    
    */
                    }
                    
                 })
                 
                    
                  
                  
      
                })
                
            })
           
    
        })
    }else{
           allst=false
        $('#jrn').css('display', 'block');

    }
  

})
$('#journey').on('click', function() {
    if(!jrn){
        $('#jrn').css('display', 'block');
        jrn=true
    }else{
        jrn=false
    }
})