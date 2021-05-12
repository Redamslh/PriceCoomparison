function initialize() {
  
    var inner= "<div class=\"MapPopup Left\"><div id=\"FID_B2C_PP_Theme_wt56_block_wtMainContent_wt53_wtMapPopup_Title\" class=\"MapPopup_Title\"><span class=\"Text_PrimaryColor Heading3\">UCS</span></div><div id=\"FID_B2C_PP_Theme_wt56_block_wtMainContent_wt53_wtMapPopup_Address\" class=\"MapPopup_Address\"><div><span class=\"Bold\">DRA. FÁTIMA DA CONCEIÇÃO CUNHA FERNANDES RIBEIRO DA CRUZ</span></div><div>AEROPORTO DA PORTELA, ED 35 APARTADO 842</div><div>1749-035 LISBOA</div></div><div id=\"FID_B2C_PP_Theme_wt56_block_wtMainContent_wt53_wtMapPopup_Content\" class=\"MapPopup_Content\"><div><div class=\"Text_silver ThemeGrid_Width2\"><span class=\"fa fa-fw icon-Contactos fa-lg\"></span></div><div class=\"ThemeGrid_Width10 ThemeGrid_MarginGutter\"><span class=\"Heading3\">219999999</span></div></div><div style=\"margin-top: 20px\"><div class=\"Text_silver ThemeGrid_Width2\"><span class=\"fa fa-fw icon-Caixa_de_mensagens fa-lg\"></span></div><div class=\"ThemeGrid_Width10 ThemeGrid_MarginGutter\"><a id=\"FID_B2C_PP_Theme_wt56_block_wtMainContent_wt53_wtMapPopup_Content_wt106\" tabindex=\"30\" href=\"mailto:suportedss@multicare.pt\"><span class=\"Underline Text_SecondaryColor\">suportedss@multicare.pt</span></a></div></div></div><div id=\"FID_B2C_PP_Theme_wt56_block_wtMainContent_wt53_wtMapPopup_Actions\" class=\"MapPopup_Actions\"><input onclick=\"var win= window.open('https://www.google.pt/maps/dir//DRA. FÁTIMA DA CONCEIÇÃO CUNHA FERNANDES RIBEIRO DA CRUZ, AEROPORTO DA PORTELA, ED 35 APARTADO 842, 1749-035 LISBOA/', '_blank'); win.focus(); return false;\" name=\"FID_B2C_PP_Theme_wt56$block$wtMainContent$wt53$wtMapPopup_Actions$wt19\" value=\"Obter Direcções\" id=\"FID_B2C_PP_Theme_wt56_block_wtMainContent_wt53_wtMapPopup_Actions_wt19\" tabindex=\"31\" class=\"Button FullWidth\" style=\"margin-left: 0px\" type=\"submit\"></div></div>"
    
          var secheltLoc = new google.maps.LatLng(49.47216, -123.76307);
  
          var myMapOptions = {
               zoom: 15
              ,center: secheltLoc
              ,mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          var theMap = new google.maps.Map(document.getElementById("map_canvas"), myMapOptions);
  
  
          var marker = new google.maps.Marker({
              map: theMap,
              draggable: true,
              position: new google.maps.LatLng(49.47216, -123.76307),
              visible: true,
        setIcon: ""
          });
  
          var boxText = document.createElement("div");
        boxText.className="boxText"	
      boxText.innerHTML = inner;
  
          var myOptions = {
               content: boxText
              ,disableAutoPan: false
              ,maxWidth: 0
              ,pixelOffset: new google.maps.Size(0, 0)
              ,zIndex: null
              ,boxStyle: { 
                background: ""
                ,opacity: 1
                ,width: ""
               }
              ,closeBoxMargin: ""
              ,closeBoxURL: ""
              ,infoBoxClearance: new google.maps.Size(1, 1)
              ,isHidden: false
              ,pane: "floatPane"
              ,enableEventPropagation: false
          };
  
          google.maps.event.addListener(marker, "click", function (e) {
              ib.open(theMap, this);
          });
  
          var ib = new InfoBox(myOptions);
  
          ib.open(theMap, marker);
      }
  google.maps.event.addDomListener(window, "load", initialize);
  