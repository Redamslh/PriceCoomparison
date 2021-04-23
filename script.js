$( document ).ready(function() {
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
                }
                if(parseFloat(gaz) > maxgaz){
                  maxgaz = parseFloat(gaz);
                }
                if(parseFloat(spec) < minExcelum){
                  minExcelum = parseFloat(spec);
                }
                if(parseFloat(spec) > maxExcelum){
                  maxExcelum = parseFloat(spec);
                }
                if(parseFloat(ess) < minEssence){
                  minEssence = parseFloat(ess);
                }
                if(parseFloat(ess) > maxEssence){
                  maxEssence = parseFloat(ess);
                }
              })
            
            

          })
          
      })
      document.getElementById("gazPrice").innerHTML = "<b>Gasoil:</b> "+mingaz+"DH - " + maxgaz+"DH"
      document.getElementById("specPrice").innerHTML = "<b>Excellum:</b> "+minExcelum+"DH - " + maxExcelum+"DH"
      document.getElementById("excePrice").innerHTML = "<b>Essence:</b> "+minEssence+"DH - " + maxEssence+"DH"
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
