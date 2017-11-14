/* 
Site:http://zennioptical.com/
Pages:  1-general
Modules: Social Contest
*/

//------------------------ To Solve FB init issue  -----------------------//
 function facebookReady() {
            // call facebook init
            FB.init({
                appId: "613557765355762",
                status: true, // check login status
                cookie: true,
                xfbml: true,  // parse XFBML
                oauth: true,
				//channelUrl : 'http://600social.com/pearparadise/socialcontest/load.js'
                channelUrl : '//cdn.socialannex.com/partner/9912091/load.js'             
            });
            // Initialization called, trigger the
            // facebook ready event
            $(document).trigger("facebook:ready");
        }
 
        // Query if FB object is available, if not
        // assign the window async function
        // otherwise, initialize per Facebook documentation
        if (window.FB) {
        	facebookReady();
         } else {
            window.fbAsyncInit = facebookReady;
        }
//--------------------- END --------------------------//

	//------------- To resolve FB like site funstionality issue for Zenni---------------//
			
			/* var head = $("head").get(0);  // using jquery
			var script2 = document.createElement("script");
			script2.text = "window.FB = null;FB=null;";
			head.appendChild(script2); */

			//$("body").append( script );
	// -------------------------------- END---------------------------------------------------//


var page=sa_page;

var sa_siteid = "9912091";

var sa_label ="0"; 

var s6_sa_siteid = "9912091";  var s6_sa_label="0";

var s6_jquery="0";

var s6_fancybox="0";

var s6_fancybox_css="0";

var s6_sabox ="1";

var s6_sabox_js ="1";

var sa_url = document.URL;
var sa_condition = sa_url.search(/socialannex/i);

var url_1 = "http://www.zennioptical.com/";
var url_2 = "http://www.zennioptical.com/kids";
var url_3 = "http://www.zennioptical.com/women";
var url_4 = "http://www.zennioptical.com/men";

	function ShareandSave(label)
	{	
		sa_label = label;
		var oHead = document.getElementsByTagName('HEAD').item(0);
		var oScript= document.createElement("script");
		oScript.type = "text/javascript";
		oScript.src="//cdn.socialannex.com/s4/v3/s4-all-v3.js";	
		oHead.appendChild( oScript);
		
	}

	function SocialContest(){ 	
		//sa_label = label;
		var oHead1 = document.getElementsByTagName('HEAD').item(0);	  
		var oScript1= document.createElement("script");	   
		oScript1.type = "text/javascript";
		oScript1.src="//cdn.socialannex.com/s6/s6-all-async.js"; 
		oHead1.appendChild(oScript1);  	 
	}	
	
	function PinITWinIt()
	{
		//sa_label = label;

		var oHead = document.getElementsByTagName('HEAD').item(0);
		var oScript= document.createElement("script");
		oScript.type = "text/javascript";
		oScript.src = "//cdn.socialannex.com/s17/s17-pinitwinit-async-v3.js";
		oHead.appendChild( oScript);
	}
	

	if(page==1){
		var width = screen.width;
		if(width > 480){
			var str=document.URL;
			var n=str.search("/buy/");
			if(n == -1){
				//SocialContest();
			}

			if( sa_url == url_1 || sa_url == url_2 || sa_url == url_3 || sa_url == url_4 )
			{

			//if(sa_condition !=-1)
			//{
				if(document.getElementById('sa_pinit'))
				{
						 //PinITWinIt();	
				}
			//}
			}

			else
			{
				//if(sa_condition !=-1)
				//{
					if(document.getElementById('sa_pinit'))
					{
							//PinITWinIt();	
					}
				//}
			}
		}
		/* var sa_test_url1=document.URL;
		var sa_test_url2= sa_test_url1.search(/socialannex/i);
		if(sa_test_url2 != -1){
			SocialContest();
		} */
	}
	
	
	if(page==2){

			if( sa_url == url_1 || sa_url == url_2 || sa_url == url_3 || sa_url == url_4 )
			{

			//if(sa_condition !=-1)
			//{
				//PinITWinIt();
			//}

			}
			else
			{
				if(document.getElementById('sa_pinit'))
				{
						 //PinITWinIt();	
				}
			}
	}
	
	if(page==3)
	{	
			ShareandSave("3i");
	}

if(sa_condition !=-1)
	{
// For Quick View
	 $(document).ready(function() {
	    $('body').on('click', '.btnQuickView' ,function(){
		//setTimeout('PinITWinIt();',5000);
	    });	     
  	});
	}