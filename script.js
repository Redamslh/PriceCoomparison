
$( document ).ready(function() {
var dataGaz = new Array();
let aspectRatioGroup = document.querySelector('#aspectRatio--group .segmentedControl');
let radios = aspectRatioGroup.querySelectorAll('input');
let i = 1;
function sort_by_key(array, key)
{
 return array.sort(function(a, b)
 {
  var x = a[key]; var y = b[key];
  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
 });
}

// set CSS Var to number of radios we have
aspectRatioGroup.style.setProperty('--options',radios.length);

// loop through radio elements
radios.forEach((input)=>{
	// store position as data attribute
	input.setAttribute('data-pos',i);
	
	// add click handler to change position
	input.addEventListener('click',(e)=>{
		aspectRatioGroup.style.setProperty('--options-active',e.target.getAttribute('data-pos'));
	});
	
	// increment counter
	i++;
});

$("#win").click(function() {
 var station = document.getElementById("newSelect");
 var prix = document.getElementById("prix");
 var ville = document.getElementById("villeSelect");

 ville.style.visibility = "hidden";
 prix.style.visibility = "hidden";
 station.style.visibility = "hidden";

 document.getElementById("noinfo").innerHTML = "No Data For The Moment"

})

$("#if").click(function() {
  var station = document.getElementById("newSelect");
  var prix = document.getElementById("prix");
  var ville = document.getElementById("villeSelect");
 
  ville.style.visibility = "hidden";
  prix.style.visibility = "hidden";
  station.style.visibility = "hidden";
 
  document.getElementById("noinfo").innerHTML = "No Data For The Moment"
 
 })
$("#tot").click(function() {
  var station = document.getElementById("newSelect");
  var prix = document.getElementById("prix");
  var ville = document.getElementById("villeSelect");
  var info = document.getElementById("noinfo");

  ville.style.visibility = "visible";
  prix.style.visibility = "visible";
  station.style.visibility = "visible";

  document.getElementById("noinfo").innerHTML = ""

 
 })
// add class to enable the sliding pill animation, otherwise it uses a fallback
aspectRatioGroup.classList.add('useSlidingAnimation');
  var firebaseConfig = {
    apiKey: "AIzaSyBdr4MEdpY40GR1r_k85C03T-IM-F2R2n0",
    authDomain: "gprt-371c9.firebaseapp.com",
    databaseURL: "https://gprt-371c9-default-rtdb.firebaseio.com",
    projectId: "gprt-371c9",
    storageBucket: "gprt-371c9.appspot.com",
    messagingSenderId: "1069373213441",
    appId: "1:1069373213441:web:41ae35685e049901e8e900",
    measurementId: "G-WQP16JMZ52"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  var mingaz = 1000.0;
  var minEssence = 1000.0
  var minExcelum = 1000.0
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
console.log(formatDate())

  var station1 = firebase.database().ref('Casablanca/');

  station1.on('value',(snapshot)=>{
      snapshot.forEach(function(snapshot1){
          snapshot1.forEach(function(snapshot2){

              
                gaz = snapshot2.val().gasoil
                spec = snapshot2.val().excellum
                ess = snapshot2.val().sans_plomb
                if(snapshot2.key == formatDate()){
                  
                  dataGaz.push({category:snapshot1.key,value1:parseFloat(gaz),value2:parseFloat(spec),value3: parseFloat(ess), value4:(parseFloat(gaz)+parseFloat(ess)+parseFloat(spec))/3})
                }

                if(parseFloat(gaz) < mingaz){
                  mingaz = parseFloat(gaz);
                  stationgz = snapshot1.key;
                }
                if(parseFloat(gaz) > maxgaz){
                  maxgaz = parseFloat(gaz);
                }
                if(parseFloat(spec) < minExcelum){
                  minExcelum = parseFloat(spec);
                  stationex = snapshot1.key;
                }
                if(parseFloat(spec) > maxExcelum){
                  maxExcelum = parseFloat(spec);
                }
                if(parseFloat(ess) < minEssence){
                  minEssence = parseFloat(ess);
                  stationes = snapshot1.key;

                }
                if(parseFloat(ess) > maxEssence){
                  maxEssence = parseFloat(ess);
                }
              
            
            

          })
          
      })
      
      console.log("station" + stationgz + " gaz " + mingaz );
      console.log("station" + stationex + " ex " + minExcelum );
      console.log("station" + stationes + " ess " + minEssence );
      document.getElementById("stgz").innerHTML = "CASABLANCA - " +stationgz;
      document.getElementById("stes").innerHTML = "CASABLANCA - " +stationes;
      document.getElementById("stex").innerHTML = "CASABLANCA - " + stationex

      document.getElementById("pgz").innerHTML = mingaz + " DH";
      document.getElementById("pex").innerHTML = minExcelum + " DH"
      document.getElementById("pes").innerHTML = minEssence + " DH";
  })
  

  newSelect = document.getElementById("newSelect")
  essence = document.getElementById("ess")
  gazoil = document.getElementById("gaz")
  special = document.getElementById("spe")
 
  villeSelect = document.getElementById("villeSelect")
  var villes = firebase.database().ref('/');
  villes.on('value', (snapshot2) => {
    snapshot2.forEach(function(snapshot3) {
      var opt1 = document.createElement("option");
      opt1.value= snapshot3.key;
      opt1.innerHTML = snapshot3.key;
      villeSelect.appendChild(opt1);

    });

  });
  var villeSelected;
  $('#villeSelect').on('change',function(){
    villeSelected = this.value;
    newSelect.innerHTML = '';
    var starCountRef = firebase.database().ref(this.value+'/');
    starCountRef.on('value', (snapshot) => {
      snapshot.forEach(function(snapshot1) {
        if(snapshot1.key != 'Choisissez votre station' ){
          var opt = document.createElement("option");
          opt.value= snapshot1.key;
          opt.innerHTML = snapshot1.key;
          newSelect.appendChild(opt);
      }
 
      });
 
    });
  });
    $('#newSelect').on('click', function() {
        var station = firebase.database().ref(villeSelected+'/'+this.value);
        station.once('value',(snapshot)=>{
            snapshot.forEach(function(snapshot1){
              if(snapshot1.key != "coordonnee"){
           
                  gaz = snapshot1.val().gasoil
                  spec = snapshot1.val().excellum
                  ess = snapshot1.val().sans_plomb
                  gazoil.innerHTML = '<sup>DH</sup>'+gaz
                  special.innerHTML = '<sup>DH</sup>'+spec
                  essence.innerHTML = '<sup>DH</sup>'+ess
              
              }
            
                
            })
        })
        
      });
      function sleep(ms) {
        return new Promise(
          resolve => setTimeout(resolve, ms)
        );
      }

      
      async function delayedGreeting() {
   
        
        sort_by_key(dataGaz,'value4')
        for (let index = 0; index < dataGaz.length; index++) {
          delete dataGaz[index]['value4']
          
        }
        am4core.ready(function() {
          
          am4core.useTheme(am4themes_animated);
          var chart = am4core.create('chartdiv', am4charts.XYChart)
          chart.colors.step = 2;
          
          chart.legend = new am4charts.Legend()
          chart.legend.position = 'top'
          chart.legend.paddingBottom = 20
          chart.legend.labels.template.maxWidth = 95
          
          var xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
          xAxis.dataFields.category = 'category'
          xAxis.renderer.cellStartLocation = 0.1
          xAxis.renderer.cellEndLocation = 0.9
          xAxis.renderer.grid.template.location = 0;
          
          var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
          yAxis.min = 0;
          
          function createSeries(value, name,color) {
              var series = chart.series.push(new am4charts.ColumnSeries())
              series.dataFields.valueY = value
              series.dataFields.categoryX = 'category'
              series.name = name
              series.fill = color
              series.events.on("hidden", arrangeColumns);
              series.events.on("shown", arrangeColumns);
          
              var bullet = series.bullets.push(new am4charts.LabelBullet())
              bullet.interactionsEnabled = false
              bullet.dy = 30;
              bullet.label.text = '{valueY}'
              bullet.label.fill = am4core.color('#ffffff')
              return series;
          }
          
          chart.data = dataGaz.slice(0,6)
          
          
          createSeries('value1', 'Gasoline','#ff9b00');
          createSeries('value2', 'Excellum','#0e9c57');
          createSeries('value3', 'Essence','#b21919');
          
          function arrangeColumns() {
          
              var series = chart.series.getIndex(0);
          
              var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
              if (series.dataItems.length > 1) {
                  var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
                  var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
                  var delta = ((x1 - x0) / chart.series.length) * w;
                  if (am4core.isNumber(delta)) {
                      var middle = chart.series.length / 2;
          
                      var newIndex = 0;
                      chart.series.each(function(series) {
                          if (!series.isHidden && !series.isHiding) {
                              series.dummyData = newIndex;
                              newIndex++;
                          }
                          else {
                              series.dummyData = chart.series.indexOf(series);
                          }
                      })
                      var visibleCount = newIndex;
                      var newMiddle = visibleCount / 2;
          
                      chart.series.each(function(series) {
                          var trueIndex = chart.series.indexOf(series);
                          var newIndex = series.dummyData;
          
                          var dx = (newIndex - trueIndex + middle - newMiddle) * delta
          
                          series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                          series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                      })
                  }
              }
          }
          
          }); // end am4core.ready()
      }
      
      $('#loader2').css('display', 'block');
      setTimeout(removeLoader, 5000);
      function removeLoader(){
        $( "#loader2" ).fadeOut(500, function() {
          delayedGreeting();
        })
      }
      
       
});

