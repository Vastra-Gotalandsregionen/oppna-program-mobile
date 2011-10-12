// Initialise iScroll only in some devices
var myScroll;

// Initialize on document ready
$(function() {

	// Add class to body element to indicate that JavaScript is available
	$('body').addClass('js');

	$('.navigate-page').hide().before($('<button class="switch-dashboard"><span>Byt sida</span></button>').bind((!!('ontouchend' in window)?'touchend':'click'),function() {
		$(this).toggleClass('active').siblings('.navigate-page').toggle();
	}));

	// Remove submit button from navigation form
//	$('form.navigate-page input[type="submit"]').addClass('structural');

	// Make navigation form submit on select change
//	$('form.navigate-page select').change(function () {
//		this.form.submit();
//	});

	var availableHeight;
	// Set the height of the login page
	if ($('.portlet.login:first').length) {
		availableHeight = window.innerHeight - document.getElementById('header').offsetHeight - document.getElementById('footer').offsetHeight;
		if ($('.portlet.login:first').height() < availableHeight) {
			$('.portlet.login:first').height(availableHeight);
		}
	}

	// Set the height of the search portlet
	if ($('.portlet.search:first').length) {
		availableHeight = window.innerHeight - document.getElementById('header').offsetHeight - document.getElementById('footer').offsetHeight;
		if ($('.portlet.search:first').height() < availableHeight) {
			$('.portlet.search:first').height(availableHeight);
		}
	}

	// Show tab navigation
	$('.tab-nav').removeClass('hidden');
	// Hide tab content
	$('.tabs > .tab').addClass('hidden');
	// Assign event handlers to tab buttons
	$('.tab-nav button').bind((!!('ontouchend' in window)?'touchend':'click'),function() {
		var button = $(this),
			ul = button.closest('ul'),
			li = button.closest('li'),
			liClass = li.attr('class').match(/tab-\d+/)[0],
			tab = $('.tabs > .tab.' + liClass),
			// Available height between the header and the footer
			availableHeight = window.innerHeight - document.getElementById('header').offsetHeight - document.getElementById('footer').offsetHeight;
		// Set the tab's height if necessary
		if (tab.height() < availableHeight) {
			tab.css('min-height',availableHeight);
		}
		if(button.hasClass('start')) {
			// Show dashboard
			$('.dashboard').removeClass('hidden');
		} else {
			// Hide dashboard
			$('.dashboard').addClass('hidden');
		}
		// Hide the tab
		$('.tabs > .tab').addClass('hidden');
		// Make all buttons unselected
		ul.find('li').removeClass('sel');
		// ...and display this button and its tab
		li.addClass('sel');
		$('.tabs > .tab.' + liClass).removeClass('hidden');
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
	$('.utilities').delegate('h2 a', 'click', function(e) {
		var li = $(this).closest('li');
		li.toggleClass('exp');
		setTimeout(function () {
			if (myScroll) {
				myScroll.refresh();
			}
		}, 100);
		e.preventDefault();
	}).delegate('a.add', 'click', function(e) {
		$(this).toggleClass('exp');
		var li = $(this).closest('li');
		li.toggleClass('add');

		if(li.hasClass('exp')) {
			// don't try to blur on mobile (when myScroll exists) since you can't
			if (!myScroll) {
				li.find('input:first').blur();
			}
		} else {
			li.toggleClass('exp');
			// don't try to autofocus on mobile (when myScroll exists) since you can't
			if (!myScroll) {
				li.find('input:first').focus();
			}
		}
		setTimeout(function() {
			if (myScroll) {
				myScroll.refresh();
				// Calculate distance of form from top
				if(li.hasClass('exp') && li.hasClass('add')) {
					myScroll.scrollTo(0, -li.has('.exp.add').offset().top, 100);
				}
			}
		}, 100);
		e.preventDefault();
	}).find('li:has(form.add)').append($('<a href="#" class="add">+</a>'));

	// ...add items (inputs or links)
	$('.utilities form.add').submit(function() {
		var input = $(this).find('input:first');
		var text = input.val();
		var template = $(this).closest('form').next().find('li:first');
		var newItem = template.clone();
		// if we're cloning label/inputs
		if(newItem.find('label').length) {
			/* TODO: Search for duplicate label[for] and input[id] to avoid conflicts when submitting form */
			newItem.find('label').text(text);
			if(text) {
				// inject into DOM
				template.before(newItem);
			}
			// reset input value
			input.val('');
		// else assume links
		} else {
			var title;
			var proxy = './getTitle.php?page=';
			var url = text.match(/^http:\/\//i) ? text.toLowerCase() : 'http://'+text.toLowerCase();
			if(text) {
				$.get(proxy + url, function(data) {
					title = prompt("Ange en titel",data.replace(/^\s+/g,''));
				})
				.error(function() {
					alert("Kunde inte nÃ¥ denna URL");
				})
				.complete(function() {
					newItem.find('a').attr('href',url).html(title);
					if(text && title) {
						// inject into DOM
						template.before(newItem);
					}
					// reset input value
					input.val('');
				});
			}
		}
		setTimeout(function () {
			if (myScroll) {
				myScroll.refresh();
			}
		}, 100);
		return false;
	});
	
	$('.utilities form.todos').delegate('input', 'click', function() {
		var input = $(this);
		var action = $(this).closest('form').serialize();
		$.post(action, function(data) {
			// do stuff with data here
		})
		.complete(function() {
			input.closest('li').fadeOut(400, function() {
				$(this).remove();
				setTimeout(function () {
					if (myScroll) {
						myScroll.refresh();
					}
				}, 100);
			});
		});
	});

	// Check for a hash and if it's matching an existing tab. If exists, show its tab panel
	if(document.location.hash.match(/tab-\d+/)) {
		$('.tab-nav .'+document.location.hash.split("#")[1]+' button').trigger((!!('ontouchend' in window)?'touchend':'click'));
	}

	/* Update stuff on hash change */
	if ("onhashchange" in window) {
		window.onhashchange = function() {
			if(document.location.hash.match(/tab-\d+/)) {
				var tab = document.location.hash.split("#")[1];
				$('.tab-nav .'+tab+' button').trigger((!!('ontouchend' in window)?'touchend':'click'));
			}
		};
	}

});

$(window).load(function () {
	if (navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad|android)/)) {
		// Add a class to enable different styling when iScroll is running
		$('body').addClass('iscroll');
		setTimeout(function () {
			myScroll = new iScroll('content', {
				hScrollbar: false,
				vScrollbar: false
			});
			// Workaround for problem with iScroll and select elements
			$('#content select').bind('touchstart', function(e) {
				e.stopPropagation();
			});
		}, 100);
	}
});