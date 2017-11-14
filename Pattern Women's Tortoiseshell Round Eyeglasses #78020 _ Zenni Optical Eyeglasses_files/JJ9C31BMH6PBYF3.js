(function(){
	"use strict";
	var eKomiIsOlderIE=false;
	if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
		var eKomiIEVersion=new Number(RegExp.$1);
		if(eKomiIEVersion<=6){
			eKomiIsOlderIE=true;
		};
	};
	var eKomiWidgetTexts = new Array ('', 'First class!', 'I was extremely satisfied with the customer service with my product with that delivery time.', 'From the reps that came to City College to my online order, everything was GREAT!!!   Looking forward to placing my next order..', 'product as promised and arrived in good time. Was pleased that a coupon that would not work on original order was honored and refunded just from the message in the order. Thank You', 'I bought glasses for my daughter, I was very pleased! The time from ordering to the time we had them at our door was excellent! The eye doctor in town couldnt get them back that fast. My daughter and I love the glasses, they are a perfect fit and look so cute on her!!  I would definitely recommend you to others!!! Thank you!!!!!', 'Great value, good customer contact, very pleased  with service and timely delivery', 'Best service I have found. Delivery is quick and the quality is great.', 'I like the Zenni Web site (user-friendly), frame choices, many options, quality of items correlated to prices,  secure mailing, good service as needed.    What a God-send for me, who with myopia, paid very high eyeglasses prices for many decades.  Now I can afford to pay for light-weight, back-up pairs for driving, computer, and close-up work!    Thanks, Zenni!', 'Love my glasses.  Love the service. I mistakenly ordered sunglasses instead of progressive glasses and no problem returning them and getting the correct lenses.  Comparable glasses at stores are quadruple what I paid. I am very very happy and will buy again. I have used zennis for three other pair of glasses throughout the years and they have all been wonderful.', 'great service &amp; speedy response.');
	if(typeof eKomiIntegrationConfig != "undefined") {
		for (var eKomiIntegrationLoop=0;eKomiIntegrationLoop<eKomiIntegrationConfig.length;eKomiIntegrationLoop++){
			if(eKomiIntegrationConfig[eKomiIntegrationLoop].certId == 'JJ9C31BMH6PBYF3') {
				if(typeof eKomiIntegrationConfig[eKomiIntegrationLoop].widgetTargets == "undefined" || eKomiIntegrationConfig[eKomiIntegrationLoop].widgetTargets.length <=0) {
					// not there or empty? So we search for the default
					eKomiIntegrationConfig[eKomiIntegrationLoop].widgetTargets = new Array('eKomiWidget_default');
				};
				// START loop for widgets
				if(eKomiIntegrationConfig[eKomiIntegrationLoop].widgetTargets) {
					for (var eKomiWidgetLoopTargets=0;eKomiWidgetLoopTargets<eKomiIntegrationConfig[eKomiIntegrationLoop].widgetTargets.length;eKomiWidgetLoopTargets++){
						if(document.getElementById(eKomiIntegrationConfig[eKomiIntegrationLoop].widgetTargets[eKomiWidgetLoopTargets])) {
							var eKomiWidgetRandomnes = Math.floor(Math.random()*10)+1; // (0.01 to 0.9) * 10 +1 = 1-10
							
							var eKomiWidgetElementText = document.createElement('textNode');
							eKomiWidgetElementText.innerHTML = 'Customer review: ' + eKomiWidgetTexts[eKomiWidgetRandomnes];
							
							var eKomiWidgetElementImg = document.createElement('img');
							eKomiWidgetElementImg.border = '0';
							eKomiWidgetElementImg.src = (document.location.protocol=='https:'?'https:':'http:') + '//connect.ekomi.de/widget/' + eKomiIntegrationConfig[eKomiIntegrationLoop].certId + '-' + eKomiWidgetRandomnes + '.gif';
							eKomiWidgetElementImg.alt = eKomiWidgetElementText.innerHTML;
							eKomiWidgetElementImg.title = eKomiWidgetElementText.innerHTML;
							
							var eKomiWidgetElement = document.createElement('a');
							eKomiWidgetElement.id = 'eKomiWidget_' + eKomiIntegrationConfig[eKomiIntegrationLoop].certId + '_' + eKomiIntegrationConfig[eKomiIntegrationLoop].widgetTargets[eKomiWidgetLoopTargets];
							eKomiWidgetElement.appendChild(eKomiWidgetElementImg);
							eKomiWidgetElement.href = 'https://www.ekomi-us.com/review-zenni-optical.html';
							eKomiWidgetElement.onclick = Function('window.open(this.href, "_blank", ""); return false;');
							eKomiWidgetElement.title = eKomiWidgetElementText.innerHTML;
							
							var eKomiWidgetTarget = document.getElementById(eKomiIntegrationConfig[eKomiIntegrationLoop].widgetTargets[eKomiWidgetLoopTargets]);
							while(eKomiWidgetTarget.lastChild) {eKomiWidgetTarget.removeChild(eKomiWidgetTarget.lastChild); };
							eKomiWidgetTarget.appendChild(eKomiWidgetElement);
						}else{
							if('console' in window){ console.warn('connectEkomiIntegration_JJ9C31BMH6PBYF3 - Cannot find elementId("' + eKomiIntegrationConfig[eKomiIntegrationLoop].widgetTargets[eKomiWidgetLoopTargets] + '") - skipping'); }
						};
					};
				};
				// END loop for widgets
				
				if(typeof eKomiIntegrationConfig[eKomiIntegrationLoop].sealTargets == "undefined" || eKomiIntegrationConfig[eKomiIntegrationLoop].sealTargets.length <=0) {
					// not there or empty? So we search for the default
					eKomiIntegrationConfig[eKomiIntegrationLoop].sealTargets = new Array('eKomiSeal_default');
				};
				// START loop for seals
				if(eKomiIntegrationConfig[eKomiIntegrationLoop].sealTargets) {
					for (var eKomiSealLoopTargets=0;eKomiSealLoopTargets<eKomiIntegrationConfig[eKomiIntegrationLoop].sealTargets.length;eKomiSealLoopTargets++){
						if(document.getElementById(eKomiIntegrationConfig[eKomiIntegrationLoop].sealTargets[eKomiSealLoopTargets])) {
							var eKomiSealElementText = document.createElement('textNode');
							eKomiSealElementText.innerHTML = 'Customer review: ';
							
							var eKomiSealElementImg = document.createElement('img');
							eKomiSealElementImg.border = '0';
							eKomiSealElementImg.src = (document.location.protocol=='https:'?'https:':'http:') + '//connect.ekomi.de/seal/' + eKomiIntegrationConfig[eKomiIntegrationLoop].certId + '-70x70.' + (eKomiIsOlderIE==true?'gif':'png');
							eKomiSealElementImg.alt = eKomiSealElementText.innerHTML;
							eKomiSealElementImg.title = eKomiSealElementText.innerHTML;
							
							var eKomiSealElement = document.createElement('a');
							eKomiSealElement.id = 'eKomiSeal_' + eKomiIntegrationConfig[eKomiIntegrationLoop].certId + '_' + eKomiIntegrationConfig[eKomiIntegrationLoop].sealTargets[eKomiSealLoopTargets];
							eKomiSealElement.appendChild(eKomiSealElementImg);
							eKomiSealElement.href = 'https://www.ekomi-us.com/review-zenni-optical.html';
							eKomiSealElement.onclick = Function('window.open(this.href, "_blank", ""); return false;');
							eKomiSealElement.title = eKomiSealElementText.innerHTML;
							
							var eKomiSealTarget = document.getElementById(eKomiIntegrationConfig[eKomiIntegrationLoop].sealTargets[eKomiSealLoopTargets]);
							while(eKomiSealTarget.lastChild) {eKomiSealTarget.removeChild(eKomiSealTarget.lastChild); };
							eKomiSealTarget.appendChild(eKomiSealElement);
						}else{
							if('console' in window){ console.warn('connectEkomiIntegration_JJ9C31BMH6PBYF3 - Cannot find elementId("' + eKomiIntegrationConfig[eKomiIntegrationLoop].sealTargets[eKomiSealLoopTargets] + '")  - skipping'); }
						};
					};
				};
				// END loop for seals
			}else{ 
				// im not in charge of this certID!
			};
		};
	}else{
		if('console' in window){ console.error('connectEkomiIntegration_JJ9C31BMH6PBYF3 - Cannot read eKomiIntegrationConfig'); }
	}
}());
			