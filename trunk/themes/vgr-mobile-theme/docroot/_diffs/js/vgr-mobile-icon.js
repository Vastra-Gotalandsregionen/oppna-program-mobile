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
	
	var TPL_MOBILE_ICON_IFRAME = '<div style="height: {iframeWrapHeight}px; width: {iframeWrapWidth}px;"><iframe class="mobile-icon-iframe" title="" frameborder="0" src="{url}" width="100%" height="100%"></iframe></div>'
	
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
					
					_onBeforeMobileIconDialogRender: function(e, params) {
						var instance = this;
						
						var dialog = params[0];

						var iframeURL = params[1];

						var contentIframe = A.substitute(TPL_MOBILE_ICON_IFRAME, {
							iframeWrapHeight: 300,
							iframeWrapWidth: 500,
							url: iframeURL
						});
						
						var bodyContent = contentIframe;
						bodyContent = '<div>Over iframe</div>' + contentIframe +  '<div>Under iframe</div>';

						dialog.set('bodyContent', bodyContent);
					},
					
					_onMobileIconLinkClick: function(e) {
						var instance = this;
						
						var linkNode = e.target;
						
						var winHeight = linkNode.get('winHeight');
						var winWidth = linkNode.get('winWidth');
						
						//if(winHeight < 660 || winWidth < 1070) { return; }
						
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
							height: 400,
							modal: true,
							stack: true,
							title: 'Mobile Icon',
							width: 600
						};
						
						var currentTitle = linkNode.html();
						
						var dialog = new A.Dialog(
							A.merge(dialogOptions, {
								title: currentTitle
							})
						);

						// On before render listener
						dialog.before('render', instance._onBeforeMobileIconDialogRender, instance, [dialog, url]);
						
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