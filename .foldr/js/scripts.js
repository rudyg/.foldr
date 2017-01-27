$(document).ready( function(){
	
	createIcons();
	
	function createIcons(){

		var $icon = $('img[alt*="\[   \]"]'),
			$folder = $('img[alt*="\[DIR\]"]');
		
		$icon.each(function(){
			
			var $name 		= $(this).parent().attr('href'),
				$initial 	= $name.charAt(0).toUpperCase(),
				$splitName 	= $name.split('.'),
				$extension 	= $splitName[$splitName.length-1],
				$imageIcons = ['jpg', 'jpeg', 'svg'],
				$videoIcons = ['mp4', 'webm'],
				$devFiles	= ['js', 'json'],
				$cssFiles	= ['css', 'sass', 'less'],
				$adobeIcons = ['pdf', 'psd', 'ai' ],
				$zipIcons 	= ['zip', 'tar', 'gz' ];
				
			
				if( $imageIcons.indexOf($extension) > -1 ){
					/* Images icons */
					$(this).parent().append('<span class="icon icon-'+$extension+'"></span>');

				} else if( $videoIcons.indexOf($extension) > -1 ){
					/* Videos icons */
					$(this).parent().append('<span class="icon icon-video '+$extension+'"></span>');

				} else if( $adobeIcons.indexOf($extension) > -1 ){
					/* Adobe icons */
					$(this).parent().append('<span class="icon icon-adobe '+$extension+'">'+$extension+'</span>');

				} else if( $name.match(/gulpfile/) || $name.match(/package/) ){
					/* Gulp icons */
					$(this).parent().append('<span class="icon icon-npm"></span>');

				} else if( $name.match(/gitignore/) || $name.match(/git/) ){
					/* GIT icons */
					$(this).parent().append('<span class="icon icon-git"></span>');
				} else if( $zipIcons.indexOf($extension) > -1 ){
					/* Archives icons */
					$(this).parent().append('<span class="icon initial file"></span>');
				} else if( $cssFiles.indexOf($extension) > -1 ){
					/* CSS icons */
					$(this).parent().append('<span class="icon icon-css"></span>');
				} else if( $devFiles.indexOf($extension) > -1 ){
					/* Dev files icons */
					$(this).parent().append('<span class="icon icon-embed2 '+$extension+'"></span>');

				} else if( $name.match('md') ){
					/* Dev files icons */
					$(this).parent().append('<span class="icon icon-insert-template"></span>');

				} else {
					/* Default file icon */
					$(this).parent().append('<span class="icon initial file">'+$initial+'</span>');

				}
			
				
		});

		$folder.each( function(){
			
			var $name 		= $(this).parent().attr('href'),
				$isParent	= $(this).attr('src').match(/parent/),
				$initial 	= $name.charAt(0).toUpperCase();

			if( $name.match(/git/) && !$isParent ){
				/* GIT Folder */
				$(this).parent().append('<span class="icon icon-git folder"></span>');

			} else if( $name.match(/bin/) ){
				/* GIT Folder */
				$(this).parent().append('<span class="icon icon-bin folder"></span>');

			} else if( $initial !== '/' ) {
				/* Default folder icon */
				$(this).parent().append('<span class="icon initial folder">'+$initial+'</span>');

			}

		});
	}

});
	



	function init() {
	  
	  var tablinks = document.getElementsByTagName('a');
	  for (var i = 0, j = tablinks.length; i < j; i++) {
	    tablinks[i].onclick = doit;
	  }

	}

	function doit() {
	  
	  var pattern = new RegExp("^[^\?]");
	  var linkHref = this.getAttribute('href');
	  
	  if( pattern.test(linkHref) ){
	  	//alert(linkHref);
	  }

	}

	window.onload = init;


