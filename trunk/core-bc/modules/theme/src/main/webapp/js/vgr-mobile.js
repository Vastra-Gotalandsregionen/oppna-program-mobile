// Initialise iScroll only in some devices
var myScroll;

// Add class to body element to indicate that JavaScript is available
document.body.className += ' js';

// Hide navigate page
var navigatePageNodes = getElementsByClassName(document, 'ul', 'navigate-page');
navigatePageNodes[0].className += ' hidden';

// Hide all mobile tab content nodes
var tabContentNodes = getElementsByClassName(document, '*', 'mobile-tab');
for(var i=0; i < tabContentNodes.length;i++) {
	tabContentNodes[i].className += ' hidden';
}

AUI().ready('aui-base', 'aui-datatype', 'event', 'event-simulate', 'node-event-simulate', function(A) {
	
	var navigatePageNode = A.one('.navigate-page');
	var tabNavNode = A.one('.tab-nav');
	
	navigatePageNode.placeBefore('<button class="switch-dashboard"><span>Byt sida</span></button>');
	var switchDashboardNode = A.one('.switch-dashboard');
	
	switchDashboardNode.on((!!('ontouchend' in window) ? 'touchend' : 'click'), function(e) {
		var currentTarget = e.currentTarget;
		currentTarget.toggleClass('active').siblings('.navigate-page').toggle();
	});	

	// Show tab navigation
	tabNavNode.removeClass('hidden');
	
	// Assign event handlers to tab buttons
	tabNavNode.all('button').on((!!('ontouchend' in window)?'touchend':'click'), function(e) {
		e.halt();
		
		var currentTarget = e.currentTarget;
		
		//console.log(currentTarget);
		
		var button = currentTarget,
			ul = button.ancestor('ul'),
			li = button.ancestor('li'),
			liClass = li.getAttribute('class').match(/tab-\d+/)[0]
		;
		
		var tab = A.one('.tabs > .' + liClass);
		if(tab) {
			//console.log('found a tab');
			
			var availableHeight = window.innerHeight - document.getElementById('header').offsetHeight - document.getElementById('footer').offsetHeight;
			var tabComputedHeightStr = tab.getComputedStyle('height');
			tabComputedHeightStr = tabComputedHeightStr.replace('px', '');
			
			//console.log('tabComputedHeightStr is: ' + tabComputedHeightStr);
			
			var tabComputedHeight = A.DataType.String.evaluate(tabComputedHeightStr);
			
			// Set the tab's height if necessary	
			if (tabComputedHeight < availableHeight) {
				tab.setStyle('minHeight', availableHeight + 'px');
			}
		}
		
		if(button.hasClass('start')) {
			// Show dashboard
			A.one('.dashboard').removeClass('hidden');
		} else {
			
			// Hide dashboard
			A.one('.dashboard').addClass('hidden');
		}
		// Hide all tabs
		A.all('.tabs > .tab').addClass('hidden');
		// Make all buttons unselected
		ul.all('li').removeClass('sel');
		// ...and display this button and its tab
		li.addClass('sel');
		
		// Show current tab
		if(A.one('.tabs > .tab.' + liClass)) {
			A.one('.tabs > .tab.' + liClass).removeClass('hidden');	
		}
		
		// Update hash (se why below)
		document.location.hash = liClass;
		// Refresh iScroll after changing content
		setTimeout(function () {
			if (myScroll) {
				myScroll.refresh();
				myScroll.scrollTo(0, 0, 100);
			}
		}, 100);
		
	});
	
	// Utilities
	var utilitiesNode = A.one('.utilities');
	
	utilitiesNode.delegate('click', function(e) {
		e.halt();
		
		var currentTarget = e.currentTarget;
		
		var li = currentTarget.ancestor('li');
		li.toggleClass('exp');
		setTimeout(function () {
			if (myScroll) {
				myScroll.refresh();
			}
		}, 100);
	}, 'h2 a');
	
	// Check for a hash and if it's matching an existing tab. If exists, show its tab panel
	if(document.location.hash.match(/tab-\d+/)) {
		console.log('found match');
		
		var hashTabClass = document.location.hash.split('#')[1];
		console.log('hashTabClass', hashTabClass);
		
		var currentTabNavButton = A.one('.tab-nav .' + document.location.hash.split('#')[1] + ' button');
		currentTabNavButton.simulate((!!('ontouchend' in window) ? 'touchend' : 'click'));
	}

	/* Update stuff on hash change */
	if ('onhashchange' in window) {
		window.onhashchange = function() {
			if(document.location.hash.match(/tab-\d+/)) {
				var tab = document.location.hash.split('#')[1];
				
				if(A.one('.tab-nav .' + tab + ' button')) {
					A.one('.tab-nav .' + tab + ' button').simulate((!!('ontouchend' in window) ? 'touchend' : 'click'));	
				}
			}
		};
	}
	
	
	// Do things when the window is loaded
	A.on('load', function () {

		// Initialise iScroll only in some devices
		if (navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad|android)/)) {
			// Add a class to enable different styling when iScroll is running
			A.one('body').addClass('iscroll');
			setTimeout(function () {
				myScroll = new iScroll('content', {
					hScrollbar: false,
					vScrollbar: false
				});
				// Workaround for problem with iScroll and select elements
				A.all('#content select').on('touchstart', function(e) {
					e.stopPropagation();
				});
			}, 100);
		}

	}, A.config.win);
	
	
});

function getElementsByClassName(oElm, strTagName, strClassName){
	var arrElements = (strTagName == '*' && document.all)? document.all : oElm.getElementsByTagName(strTagName);
    var arrReturnElements = new Array();
	strClassName = strClassName.replace(/\-/g, '\\-');
    var oRegExp = new RegExp("(^|\\s)" + strClassName + '(\\s|$)');
    var oElement;
    for(var i=0; i<arrElements.length; i++){
    	oElement = arrElements[i];
    	if(oRegExp.test(oElement.getAttribute('class'))){
        	arrReturnElements.push(oElement);
    	}
    }
    return arrReturnElements;
}