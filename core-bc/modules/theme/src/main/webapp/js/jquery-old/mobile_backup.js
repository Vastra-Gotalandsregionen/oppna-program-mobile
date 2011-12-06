// Global iScroll instance
var myScroll;

// Initialise YUI
YUI().use('event', 'node', 'attribute', function(Y) {

	// Do things when the DOM is ready
	Y.on("domready", function () {

		// Add class to body element to indicate that JavaScript is available
		Y.one('body').addClass('js');

		// Remove submit button from navigation form
		Y.all('form.navigate-page input[type="submit"]').addClass('structural');

		// Make navigation form submit on select change
		Y.one('form.navigate-page select').on('change', function(e) {
			e.target.get('form').submit();
		});

		// Show tab navigation
		Y.all('.tab-nav').removeClass('hidden');

		// Hide tab content
		Y.all('.tabs > .tab').addClass('hidden');

		// Assign event handlers to tab buttons

		Y.all('.tab-nav button').on('click', function(e) {
			var button = e.target,
				li = button.get('parentNode'),
				ul = li.get('parentNode'),
				liClass = li.get('className').match(/tab-\d+/)[0],
				tab = Y.one('.tabs > .tab.' + liClass),
				// Available height between the header and the footer
				availableHeight = availableHeight = window.innerHeight - document.getElementById('header').offsetHeight - document.getElementById('footer').offsetHeight;
			tab.removeClass('hidden');
			var tabHeight = parseInt(tab.getComputedStyle('height'), 10);
			tab.addClass('hidden');
			if (tabHeight < availableHeight) {
				tab.setStyle('height', availableHeight + 'px');
			}
			// A tab is currently displayed
			if (ul.hasClass('active')) {
				// Hide the tabs
				Y.all('.tabs > .tab').addClass('hidden');
				// Make all buttons unselected
				// This button's tab was displayed - no tabs displayed
				if (li.hasClass('sel')) {
					ul.all('li').removeClass('sel');
					ul.removeClass('active');
					// Hide the dashboard
					Y.one('.dashboard').removeClass('hidden');
				} else {
				// Some other tab was displayed - display this button's tab
					ul.all('li').removeClass('sel');
					li.addClass('sel');
					Y.one('.tabs > .tab.' + liClass).removeClass('hidden');
				}
			} else {
			// No tab displayed, so display this button's tab
				ul.addClass('active');
				li.addClass('sel');
				tab.removeClass('hidden');
				// Hide the dashboard
				Y.one('.dashboard').addClass('hidden');
			}
			// Refresh iScroll after changing content
			setTimeout(function () {
				if (myScroll) {
					myScroll.refresh();
					myScroll.scrollTo(0, 0, 100);
				}
			}, 100);
		});

	});

	// Do things when the window is loaded
	Y.on("load", function () {

		// Initialise iScroll only in some devices
		if (navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad|android)/)) {
			// Add a class to enable different styling when iScroll is running
			Y.one('body').addClass('iscroll');
			setTimeout(function () {
				myScroll = new iScroll('content', {
					hScrollbar: false,
					vScrollbar: false
				});
				// Workaround for problem with iScroll and select elements
				Y.all('#content select').on('touchstart', function(e) {
					e.stopPropagation();
				});
			}, 100);
		}

	}, Y.config.win);

});