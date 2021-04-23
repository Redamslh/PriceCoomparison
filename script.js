
$( document ).ready(function() {
  let aspectRatioGroup = document.querySelector('#aspectRatio--group .segmentedControl');
let radios = aspectRatioGroup.querySelectorAll('input');
let i = 1;

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

 document.getElementById("noinfo").innerHTML = "Pas d'information pour le moment"

})

$("#if").click(function() {
  var station = document.getElementById("newSelect");
  var prix = document.getElementById("prix");
  var ville = document.getElementById("villeSelect");
 
  ville.style.visibility = "hidden";
  prix.style.visibility = "hidden";
  station.style.visibility = "hidden";
 
  document.getElementById("noinfo").innerHTML = "Pas d'information pour le moment"
 
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

  var station1 = firebase.database().ref('Casablanca/');
  station1.on('value',(snapshot)=>{
      snapshot.forEach(function(snapshot1){
          snapshot1.forEach(function(snapshot2){
              snapshot2.forEach(function(snapshot3){
                gaz = snapshot3.val().gasoil
                spec = snapshot3.val().excellum
                ess = snapshot3.val().sans_plomb
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
                snapshot1.forEach(function(snapshot2){
                    gaz = snapshot2.val().gasoil
                    spec = snapshot2.val().excellum
                    ess = snapshot2.val().sans_plomb
                    gazoil.innerHTML = '<sup>DH</sup>'+gaz
                    special.innerHTML = '<sup>DH</sup>'+spec
                    essence.innerHTML = '<sup>DH</sup>'+ess

                })
                
            })
        })
        
      });
    
});
