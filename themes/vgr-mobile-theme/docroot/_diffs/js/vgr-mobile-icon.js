AUI().add('vgr-mobile-icon',function(A) {
	var Lang = A.Lang,
		isArray = Lang.isArray,
		isFunction = Lang.isFunction,
		isNull = Lang.isNull,
		isObject = Lang.isObject,
		isString = Lang.isString,
		isUndefined = Lang.isUndefined,
		getClassName = A.ClassNameManager.getClassName,
		concat = function() {
			return Array.prototype.slice.call(arguments).join(SPACE);
		},
		
		HREF = 'href',
		NAME = 'mobile-icon',
		NS = 'mobile-icon',
		
		CSS_DIALOG = 'mobile-icon-dialog'
		
	;
	
		var TPL_MOBILE_ICON_IFRAME = '<div class="mobile-icon-iframe-wrap" style="width: {iframeWrapWidth}; overflow: hidden_;"><iframe class="mobile-icon-iframe" title="" frameborder="0" src="{url}" width="100%" height="100%"></iframe></div>'
	
	;
		

	var VgrMobileIcon = A.Component.create(
			{
				ATTRS: {
				},
				EXTENDS: A.Component,
				NAME: NAME,
				NS: NS,
				prototype: {
					initializer: function(config) {
						var instance = this;
						
					},
					
					renderUI: function() {
						var instance = this;
					},
	
					bindUI: function() {
						var instance = this;
						
						instance._bindMobileIconLinks();
					},
					
					_bindMobileIconLinks: function() {
						var instance = this;
						
						var links = A.all('.app-icon a.app-link');
						
						links.on('click', instance._onMobileIconLinkClick, instance);
					},
					
					// Convert a css px value to int.
					_convertCssPxToInt: function(cssPxValueText) {
					
						// Set valid characters for numeric number.
						var validChars = "0123456789.";
					
						// If conversion fails return 0.
						var convertedValue = 0;
					
						// Loop all characters of
						for (i = 0; i < cssPxValueText.length; i++) {
					
							// Stop search for valid numeric characters,  when a none numeric number is found.
							if (validChars.indexOf(cssPxValueText.charAt(i)) == -1) {
					
								// Start conversion if at least one character is valid.
								if (i > 0) {
									// Convert validnumbers to int and return result.
									convertedValue = parseInt(cssPxValueText.substring(0, i));
									return convertedValue;
								}
							}
						}
					
						return convertedValue;
					},					
					
					_onAfterMobileIconDialogRender: function(e, params) {

						var instance = this;
						
						var dialog = params[0];
						
						var contentBox = dialog.get('contentBox');
						var dialogBd = contentBox.one('.aui-dialog-bd');
						var dialogHd = contentBox.one('.aui-dialog-hd');
						var dialogBdHeight = instance._convertCssPxToInt(dialogBd.getComputedStyle('height'));
						var dialogHdHeight = instance._convertCssPxToInt(dialogHd.getComputedStyle('height'));
						
						var heightAdjustment = 20;
						
						var dialogBdHeightNew = dialogBdHeight - dialogHdHeight - heightAdjustment;
						dialogBd.setStyle('height', dialogBdHeightNew + 'px');
						
						
						var iframeHeight = dialogBdHeight - dialogHdHeight - heightAdjustment;
						
						var iframe = contentBox.one('iframe.mobile-icon-iframe');
						
						//iframe.setAttribute('height', iframeHeight);
					},
					
					_onBeforeMobileIconDialogRender: function(e, params) {
						var instance = this;
						
						var dialog = params[0];

						var iframeURL = params[1];
						
						var contentBox = dialog.get('contentBox');
						
						var contentIframe = A.substitute(TPL_MOBILE_ICON_IFRAME, {
							iframeWrapHeight: '100%',
							iframeWrapWidth: '90%',
							url: iframeURL
						});
						
						var bodyContent = contentIframe;

						dialog.set('bodyContent', bodyContent);
					},
					
					_onMobileIconLinkClick: function(e) {
						var instance = this;
						
						var linkNode = e.target;
						
						var bodyNode = A.one('body');
						
						var heightFooter = 44;
						var heightHeader = 49;
						
						var winHeight = bodyNode.get('winHeight');
						var winWidth = bodyNode.get('winWidth');
						
						var dialogExtrasHeight = 50;
						var dialogExtrasWidth = 50;
						
						var dialogHeight = winHeight - heightFooter - heightHeader - dialogExtrasHeight;
						var dialogWidth = winWidth - dialogExtrasWidth;
						
						e.halt();
						
						var url = linkNode.getAttribute(HREF);
						
						var dialogOptions = {
							bodyContent: 'Mobile Icon',
							centered: true,
							constrain2view: true,
							cssClass: CSS_DIALOG,
							destroyOnClose: true,
							draggable: true,
							group: 'default',
							height: dialogHeight,
							modal: true,
							stack: true,
							title: 'Mobile Icon',
							width: dialogWidth
						};
						
						var currentTitle = linkNode.one('h1 .app-title').html();
						currentTitle = currentTitle + ' c';
						
						var dialog = new A.Dialog(
							A.merge(dialogOptions, {
								title: currentTitle
							})
						);

						// On before render listener
						dialog.before('render', instance._onBeforeMobileIconDialogRender, instance, [dialog, url]);
						
						// On after render listener
						dialog.after('render', instance._onAfterMobileIconDialogRender, instance, [dialog]);
						
						dialog.render();
					}
					
				}
			}
	);

	A.VgrMobileIcon = VgrMobileIcon;
		
	},1, {
		requires: [
			'aui-base',
			'aui-dialog'
      ]
	}
);