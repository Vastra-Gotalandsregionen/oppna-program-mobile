document.domain = "vgr-portalramverk.dev";
var NetRIframeHeight = {
	init: function(iframeName) {
		var iframeWin = window.frames[iframeName];
		var iframeEl = document.getElementById ? document.getElementById(iframeName) : document.all ? document.all[iframeName] : null;
		if ( iframeEl && iframeWin ) {
			//iframeEl.style.height = "auto";
			var documentHeight = NetRIframeHeight.getDocumentHeight(iframeWin.document);
			if (documentHeight) iframeEl.style.height = documentHeight + 60 + "px";
		}
	},
	resize: function(iframeName, win) {
		var doc = win.document;
		var iframeWin = win.frames[iframeName];
		var iframeEl = doc.getElementById ? doc.getElementById(iframeName) : doc.all ? doc.all[iframeName] : null;
			if ( iframeEl && iframeWin ) {
			//iframeEl.style.height = "auto";
			var documentHeight = NetRIframeHeight.getDocumentHeight(iframeWin.document);
			if (documentHeight) iframeEl.style.height = documentHeight + 60 + "px";
		}
	},
	getDocumentHeight: function(doc) {
		var documentHeight = 0;
		if (doc.body) documentHeight = doc.documentElement.scrollHeight || doc.body.scrollHeight;
		return documentHeight;
	},
	addEvent: function(elm, evType, fn, useCapture){
		if (elm.addEventListener) 
		{
			elm.addEventListener(evType, fn, useCapture);
			return true;
		} else if (elm.attachEvent) {
			var r = elm.attachEvent('on' + evType, fn);
			return r;
		} else {
			elm['on' + evType] = fn;
		}
	}
};
NetRIframeHeight.addEvent(window, 'load', function() {NetRIframeHeight.init('external-frame');}, false);