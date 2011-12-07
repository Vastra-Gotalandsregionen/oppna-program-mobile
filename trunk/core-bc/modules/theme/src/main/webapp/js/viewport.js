// Live cross-browser viewport detection
// Think media queries, but done in javascript!
// A better solution than separate @media css files or isolated @media brackets
// Special thanks to Paul Irish for the debounce function

(function (win, documentElement) {
		// Event function
	var addEvent = (win.addEventListener) ? function (type, node, fn) {
			node.addEventListener(type, fn, false);
		} : function (type, node, fn) {
			node.attachEvent(
				'on'+type,
				function (e) {
					fn.apply(node, [e]);
				}
			);
		},

		// Debounce function
		debounce = function (func, threshold) {
			var timeout;
			return function () {
				var obj = this,
					args = arguments,
					delayed = function () {
						func.apply(obj, args);
						timeout = null;
					};
				if (timeout) clearTimeout(timeout);
				timeout = setTimeout(delayed, 50); 
			};
		},

		// Sizes array
		viewportColumns = {
			960: 960,
			720: 720,
			480: 480,
			320: 320
		},

		// Minimum viewport width
		viewportMinColumns = 320,

		// Viewport Change event
		viewportChange = function() {
			var oldClassNames,
				classNames = oldClassNames = documentElement.className.replace(/(\s|\b)+vp(lt|gt)*\d+(\b|\s)+/g, ''),
				viewportWidth = documentElement.clientWidth,
				bucket = [],
				viewportMaxColumns = viewportMinColumns,
				col;

			for (col in viewportColumns) viewportMaxColumns = Math.max(viewportMaxColumns, viewportWidth >= viewportColumns[col] ? col : viewportMinColumns);

			bucket.push('vp'+viewportMaxColumns);

			for (col in viewportColumns) {
				bucket.push('vp'+(viewportWidth >= viewportColumns[col] ? 'gt' : 'lt')+col);
			}

			classNames += ' '+bucket.join(' ');

			if (oldClassNames != classNames) documentElement.className = classNames;
			
			/* FLAG Start debug code */
			/*
			var debugNode = document.getElementById('debugNode');
			if(debugNode) {
				debugNode.innerHTML = classNames;	
			}
			*/
			/* FLAG End debug code */
		};

	// Attach function to events
	addEvent('resize', win, debounce(viewportChange));
	addEvent('orientationchange', win, viewportChange);

	viewportChange();
})(this, document.documentElement);