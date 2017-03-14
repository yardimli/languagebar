console.log('Clean View');


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	console.log(request);

	if (request.greeting=="hello") {

		var options = {};
		var len = wordlist.length;
		var j = 0;
		for (var ii=0; ii<len; ii++) {

			$("p:contains(' "+wordlist[ii].en+" ')").each( function( i, element ) {

				j++;
				if (j<1000) {
					console.log('found: ' + wordlist[ii].en);
					var content = $(element).html();
					//console.log(content);
					content = content.replace(" "+wordlist[ii].en+" ", ' <div style="font-weight: bold; display: inline-block;" class="search-found" data-origword="'+ wordlist[ii].en +'">' + wordlist[ii].fr + '</div> ');
					$(element).html(content);
				}
			});


			//console.log(wordlist[i].en);
		}

		$(".search-found").hover(

			function() {
				var $this = $(this); // caching $(this)
				$this.data('initialText', $this.text());
				$this.css( "min-width" , $this.width() );
				$this.text(""+$(this).data('origword')+"");
			},
			function() {
				var $this = $(this); // caching $(this)
				$this.css( "min-width" , '' );
				$this.text($this.data('initialText'));
			}

		);


	}
	//if(request.ping) { sendResponse({pong: true}); return; }
	/* Content script action */
});


var t = setTimeout(function(){
   console.log("timeout");
   /*

   jQuery(".ghx-end").hide();
   jQuery('*[data-link-id="com.pyxis.greenhopper.jira:global-sidebar-report"]').hide();

   jQuery(".ghx-fieldname-aggregatetimeestimate").hide();
	*/

},100);

var t2 = setInterval(function () {
	console.log('interval');
	/*
   jQuery(".ghx-end").hide();
   jQuery('*[data-link-id="com.pyxis.greenhopper.jira:global-sidebar-report"]').hide();
   jQuery(".ghx-fieldname-timeestimate").hide();

   jQuery(".ghx-fieldname-aggregatetimeestimate").hide();
	*/
}, 1000);
