AUI().add('vgr-mobile-icon',function(A) {
	var Lang = A.Lang,
		isArray = Lang.isArray,
		isBoolean = Lang.isBoolean,
		isFunction = Lang.isFunction,
		isNull = Lang.isNull,
		isObject = Lang.isObject,
		isString = Lang.isString,
		isUndefined = Lang.isUndefined,
		getClassName = A.ClassNameManager.getClassName,
		concat = function() {
			return Array.prototype.slice.call(arguments).join(SPACE);
		},
		
		

		ALWAYS_USE_DEFAULT_HEIGHT = 'alwaysUseDefaultHeight',		
		FOOTER_NODE = 'footerNode',
		HEADER_NODE = 'headerNode',
		HISTORY_VIEW = 'view',
		IFRAME_DEFAULT_HEIGHT = 'iframeDefaultHeight',
		HREF = 'href',
		NAME = 'mobile-icon',
		NS = 'mobile-icon',
		
		CSS_DIALOG = 'mobile-icon-dialog'
		
	;
	
	var	TPL_MOBILE_ICON_IFRAME = '<div class="mobile-icon-iframe-wrap"><iframe name="{name}" id="{id}" class="mobile-icon-iframe" title="" frameborder="0" src="{url}" width="100%" height="100%"></iframe></div>',
	
		TPL_MOBILE_OVERLAY_HD = '<div class="mobile-icon-overlay-hd-wrap clearfix"><span class="mobile-icon-overlay-hd-title">{title}</span><span class="mobile-icon-overlay-hd-close">{closeText}</span></div>'
	
	;
	var	LIPSUM_SHORT = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis justo vel augue luctus dignissim. Sed feugiat, mi sed suscipit mattis, erat dolor iaculis massa, nec euismod sem elit nec ipsum.</p>',
		LIPSUM_LONG = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis justo vel augue luctus dignissim. Sed feugiat, mi sed suscipit mattis, erat dolor iaculis massa, nec euismod sem elit nec ipsum. Maecenas elementum, ipsum nec tempus ultricies, lacus nulla accumsan augue, in ullamcorper lectus dolor elementum libero. Vestibulum eu mi magna. Suspendisse et massa justo. Fusce lobortis nisi quis mauris mollis tincidunt. Suspendisse leo libero, mollis ac pulvinar tempus, vulputate in urna. Nulla at molestie quam. Pellentesque bibendum, risus eget sollicitudin euismod, enim sapien volutpat justo, id feugiat odio mauris nec tortor. Nulla vitae elit nibh. Nullam rutrum sodales placerat.</p><p>Donec ut turpis mi, sit amet tincidunt enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce tempor purus ac turpis consequat eget eleifend orci porta. Donec pretium ligula vitae nibh ultrices vestibulum. Quisque convallis mattis fermentum. Pellentesque est nunc, mattis a vehicula eu, vehicula quis diam. Suspendisse id tristique lorem. Mauris eros mi, vestibulum ac pharetra sed, mattis non dui. Nulla et quam non sapien bibendum tincidunt. In auctor ornare eros, vitae hendrerit nunc luctus nec. Fusce blandit vulputate nisi, vel semper urna vulputate in. Morbi erat felis, porttitor vel lacinia sit amet, luctus sit amet risus. In in risus a enim faucibus porta sit amet eu est. Sed egestas, libero quis vulputate lobortis, est nibh eleifend nunc, et posuere nulla elit sit amet est. Pellentesque interdum dictum mollis.</p><p>Nullam blandit mi in nisi consequat id placerat lorem adipiscing. Suspendisse laoreet facilisis lectus at tempor. Cras eget enim nibh. Duis sit amet cursus risus. Pellentesque dignissim, ligula eu porttitor tempus, urna orci varius libero, ac ornare libero metus vitae lacus. Sed non velit ac dolor vehicula pellentesque in tempor lorem. Maecenas elit neque, posuere sit amet commodo in, ultricies ac massa. Pellentesque et lectus mauris. Pellentesque feugiat dui eget nisl sollicitudin scelerisque. Donec bibendum sem id lacus vehicula pharetra. Proin malesuada, augue sed feugiat euismod, tortor risus bibendum purus, ac scelerisque enim felis non lectus. Suspendisse potenti. Praesent odio orci, condimentum convallis bibendum non, tincidunt eu eros. Proin ut libero justo, id semper ante. Praesent ornare sollicitudin tortor, non tincidunt erat bibendum nec.</p><p>Suspendisse potenti. Curabitur et leo sem. Vestibulum pharetra bibendum mattis. In hac habitasse platea dictumst. Curabitur leo est, mattis vel placerat eu, porttitor ut leo. Aliquam fringilla eleifend volutpat. Suspendisse potenti. Vivamus eu orci eu nisi dapibus convallis. In hac habitasse platea dictumst. Suspendisse porta, libero non tincidunt egestas, mauris orci convallis quam, nec molestie odio tellus ullamcorper lectus. Morbi odio odio, tempus ut imperdiet nec, facilisis in ante. Vivamus vehicula vulputate sodales. Nunc elit mi, ultrices ac iaculis ultricies, ultricies vitae lorem. Aliquam erat volutpat. Nulla et feugiat diam. Integer vel consectetur dui.</p><p>Nullam velit leo, aliquam ac lacinia vitae, scelerisque vel odio. Nam quis lorem fringilla ipsum vestibulum feugiat. Nunc iaculis condimentum blandit. Phasellus dapibus condimentum libero sed faucibus. Aenean suscipit felis in dolor dapibus varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi adipiscing pellentesque sodales. Vestibulum et lacus non lacus lacinia euismod eu sit amet sem. Nam sed est et quam dignissim sollicitudin a quis nisl. Vestibulum lacinia vestibulum enim. Vivamus massa urna, consectetur ut volutpat quis, hendrerit eget ipsum. Mauris dapibus mi elit, sed convallis lectus. Suspendisse congue ligula nec risus egestas nec vehicula lectus laoreet.</p>',
		LIPSUM_SUPER_LONG = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis justo vel augue luctus dignissim. Sed feugiat, mi sed suscipit mattis, erat dolor iaculis massa, nec euismod sem elit nec ipsum. Maecenas elementum, ipsum nec tempus ultricies, lacus nulla accumsan augue, in ullamcorper lectus dolor elementum libero. Vestibulum eu mi magna. Suspendisse et massa justo. Fusce lobortis nisi quis mauris mollis tincidunt. Suspendisse leo libero, mollis ac pulvinar tempus, vulputate in urna. Nulla at molestie quam. Pellentesque bibendum, risus eget sollicitudin euismod, enim sapien volutpat justo, id feugiat odio mauris nec tortor. Nulla vitae elit nibh. Nullam rutrum sodales placerat.</p><p>Donec ut turpis mi, sit amet tincidunt enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce tempor purus ac turpis consequat eget eleifend orci porta. Donec pretium ligula vitae nibh ultrices vestibulum. Quisque convallis mattis fermentum. Pellentesque est nunc, mattis a vehicula eu, vehicula quis diam. Suspendisse id tristique lorem. Mauris eros mi, vestibulum ac pharetra sed, mattis non dui. Nulla et quam non sapien bibendum tincidunt. In auctor ornare eros, vitae hendrerit nunc luctus nec. Fusce blandit vulputate nisi, vel semper urna vulputate in. Morbi erat felis, porttitor vel lacinia sit amet, luctus sit amet risus. In in risus a enim faucibus porta sit amet eu est. Sed egestas, libero quis vulputate lobortis, est nibh eleifend nunc, et posuere nulla elit sit amet est. Pellentesque interdum dictum mollis.</p><p>Nullam blandit mi in nisi consequat id placerat lorem adipiscing. Suspendisse laoreet facilisis lectus at tempor. Cras eget enim nibh. Duis sit amet cursus risus. Pellentesque dignissim, ligula eu porttitor tempus, urna orci varius libero, ac ornare libero metus vitae lacus. Sed non velit ac dolor vehicula pellentesque in tempor lorem. Maecenas elit neque, posuere sit amet commodo in, ultricies ac massa. Pellentesque et lectus mauris. Pellentesque feugiat dui eget nisl sollicitudin scelerisque. Donec bibendum sem id lacus vehicula pharetra. Proin malesuada, augue sed feugiat euismod, tortor risus bibendum purus, ac scelerisque enim felis non lectus. Suspendisse potenti. Praesent odio orci, condimentum convallis bibendum non, tincidunt eu eros. Proin ut libero justo, id semper ante. Praesent ornare sollicitudin tortor, non tincidunt erat bibendum nec.</p><p>Suspendisse potenti. Curabitur et leo sem. Vestibulum pharetra bibendum mattis. In hac habitasse platea dictumst. Curabitur leo est, mattis vel placerat eu, porttitor ut leo. Aliquam fringilla eleifend volutpat. Suspendisse potenti. Vivamus eu orci eu nisi dapibus convallis. In hac habitasse platea dictumst. Suspendisse porta, libero non tincidunt egestas, mauris orci convallis quam, nec molestie odio tellus ullamcorper lectus. Morbi odio odio, tempus ut imperdiet nec, facilisis in ante. Vivamus vehicula vulputate sodales. Nunc elit mi, ultrices ac iaculis ultricies, ultricies vitae lorem. Aliquam erat volutpat. Nulla et feugiat diam. Integer vel consectetur dui.</p><p>Nullam velit leo, aliquam ac lacinia vitae, scelerisque vel odio. Nam quis lorem fringilla ipsum vestibulum feugiat. Nunc iaculis condimentum blandit. Phasellus dapibus condimentum libero sed faucibus. Aenean suscipit felis in dolor dapibus varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi adipiscing pellentesque sodales. Vestibulum et lacus non lacus lacinia euismod eu sit amet sem. Nam sed est et quam dignissim sollicitudin a quis nisl. Vestibulum lacinia vestibulum enim. Vivamus massa urna, consectetur ut volutpat quis, hendrerit eget ipsum. Mauris dapibus mi elit, sed convallis lectus. Suspendisse congue ligula nec risus egestas nec vehicula lectus laoreet.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis justo vel augue luctus dignissim. Sed feugiat, mi sed suscipit mattis, erat dolor iaculis massa, nec euismod sem elit nec ipsum. Maecenas elementum, ipsum nec tempus ultricies, lacus nulla accumsan augue, in ullamcorper lectus dolor elementum libero. Vestibulum eu mi magna. Suspendisse et massa justo. Fusce lobortis nisi quis mauris mollis tincidunt. Suspendisse leo libero, mollis ac pulvinar tempus, vulputate in urna. Nulla at molestie quam. Pellentesque bibendum, risus eget sollicitudin euismod, enim sapien volutpat justo, id feugiat odio mauris nec tortor. Nulla vitae elit nibh. Nullam rutrum sodales placerat.</p><p>Donec ut turpis mi, sit amet tincidunt enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce tempor purus ac turpis consequat eget eleifend orci porta. Donec pretium ligula vitae nibh ultrices vestibulum. Quisque convallis mattis fermentum. Pellentesque est nunc, mattis a vehicula eu, vehicula quis diam. Suspendisse id tristique lorem. Mauris eros mi, vestibulum ac pharetra sed, mattis non dui. Nulla et quam non sapien bibendum tincidunt. In auctor ornare eros, vitae hendrerit nunc luctus nec. Fusce blandit vulputate nisi, vel semper urna vulputate in. Morbi erat felis, porttitor vel lacinia sit amet, luctus sit amet risus. In in risus a enim faucibus porta sit amet eu est. Sed egestas, libero quis vulputate lobortis, est nibh eleifend nunc, et posuere nulla elit sit amet est. Pellentesque interdum dictum mollis.</p><p>Nullam blandit mi in nisi consequat id placerat lorem adipiscing. Suspendisse laoreet facilisis lectus at tempor. Cras eget enim nibh. Duis sit amet cursus risus. Pellentesque dignissim, ligula eu porttitor tempus, urna orci varius libero, ac ornare libero metus vitae lacus. Sed non velit ac dolor vehicula pellentesque in tempor lorem. Maecenas elit neque, posuere sit amet commodo in, ultricies ac massa. Pellentesque et lectus mauris. Pellentesque feugiat dui eget nisl sollicitudin scelerisque. Donec bibendum sem id lacus vehicula pharetra. Proin malesuada, augue sed feugiat euismod, tortor risus bibendum purus, ac scelerisque enim felis non lectus. Suspendisse potenti. Praesent odio orci, condimentum convallis bibendum non, tincidunt eu eros. Proin ut libero justo, id semper ante. Praesent ornare sollicitudin tortor, non tincidunt erat bibendum nec.</p><p>Suspendisse potenti. Curabitur et leo sem. Vestibulum pharetra bibendum mattis. In hac habitasse platea dictumst. Curabitur leo est, mattis vel placerat eu, porttitor ut leo. Aliquam fringilla eleifend volutpat. Suspendisse potenti. Vivamus eu orci eu nisi dapibus convallis. In hac habitasse platea dictumst. Suspendisse porta, libero non tincidunt egestas, mauris orci convallis quam, nec molestie odio tellus ullamcorper lectus. Morbi odio odio, tempus ut imperdiet nec, facilisis in ante. Vivamus vehicula vulputate sodales. Nunc elit mi, ultrices ac iaculis ultricies, ultricies vitae lorem. Aliquam erat volutpat. Nulla et feugiat diam. Integer vel consectetur dui.</p><p>Nullam velit leo, aliquam ac lacinia vitae, scelerisque vel odio. Nam quis lorem fringilla ipsum vestibulum feugiat. Nunc iaculis condimentum blandit. Phasellus dapibus condimentum libero sed faucibus. Aenean suscipit felis in dolor dapibus varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi adipiscing pellentesque sodales. Vestibulum et lacus non lacus lacinia euismod eu sit amet sem. Nam sed est et quam dignissim sollicitudin a quis nisl. Vestibulum lacinia vestibulum enim. Vivamus massa urna, consectetur ut volutpat quis, hendrerit eget ipsum. Mauris dapibus mi elit, sed convallis lectus. Suspendisse congue ligula nec risus egestas nec vehicula lectus laoreet.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis justo vel augue luctus dignissim. Sed feugiat, mi sed suscipit mattis, erat dolor iaculis massa, nec euismod sem elit nec ipsum. Maecenas elementum, ipsum nec tempus ultricies, lacus nulla accumsan augue, in ullamcorper lectus dolor elementum libero. Vestibulum eu mi magna. Suspendisse et massa justo. Fusce lobortis nisi quis mauris mollis tincidunt. Suspendisse leo libero, mollis ac pulvinar tempus, vulputate in urna. Nulla at molestie quam. Pellentesque bibendum, risus eget sollicitudin euismod, enim sapien volutpat justo, id feugiat odio mauris nec tortor. Nulla vitae elit nibh. Nullam rutrum sodales placerat.</p><p>Donec ut turpis mi, sit amet tincidunt enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce tempor purus ac turpis consequat eget eleifend orci porta. Donec pretium ligula vitae nibh ultrices vestibulum. Quisque convallis mattis fermentum. Pellentesque est nunc, mattis a vehicula eu, vehicula quis diam. Suspendisse id tristique lorem. Mauris eros mi, vestibulum ac pharetra sed, mattis non dui. Nulla et quam non sapien bibendum tincidunt. In auctor ornare eros, vitae hendrerit nunc luctus nec. Fusce blandit vulputate nisi, vel semper urna vulputate in. Morbi erat felis, porttitor vel lacinia sit amet, luctus sit amet risus. In in risus a enim faucibus porta sit amet eu est. Sed egestas, libero quis vulputate lobortis, est nibh eleifend nunc, et posuere nulla elit sit amet est. Pellentesque interdum dictum mollis.</p><p>Nullam blandit mi in nisi consequat id placerat lorem adipiscing. Suspendisse laoreet facilisis lectus at tempor. Cras eget enim nibh. Duis sit amet cursus risus. Pellentesque dignissim, ligula eu porttitor tempus, urna orci varius libero, ac ornare libero metus vitae lacus. Sed non velit ac dolor vehicula pellentesque in tempor lorem. Maecenas elit neque, posuere sit amet commodo in, ultricies ac massa. Pellentesque et lectus mauris. Pellentesque feugiat dui eget nisl sollicitudin scelerisque. Donec bibendum sem id lacus vehicula pharetra. Proin malesuada, augue sed feugiat euismod, tortor risus bibendum purus, ac scelerisque enim felis non lectus. Suspendisse potenti. Praesent odio orci, condimentum convallis bibendum non, tincidunt eu eros. Proin ut libero justo, id semper ante. Praesent ornare sollicitudin tortor, non tincidunt erat bibendum nec.</p><p>Suspendisse potenti. Curabitur et leo sem. Vestibulum pharetra bibendum mattis. In hac habitasse platea dictumst. Curabitur leo est, mattis vel placerat eu, porttitor ut leo. Aliquam fringilla eleifend volutpat. Suspendisse potenti. Vivamus eu orci eu nisi dapibus convallis. In hac habitasse platea dictumst. Suspendisse porta, libero non tincidunt egestas, mauris orci convallis quam, nec molestie odio tellus ullamcorper lectus. Morbi odio odio, tempus ut imperdiet nec, facilisis in ante. Vivamus vehicula vulputate sodales. Nunc elit mi, ultrices ac iaculis ultricies, ultricies vitae lorem. Aliquam erat volutpat. Nulla et feugiat diam. Integer vel consectetur dui.</p><p>Nullam velit leo, aliquam ac lacinia vitae, scelerisque vel odio. Nam quis lorem fringilla ipsum vestibulum feugiat. Nunc iaculis condimentum blandit. Phasellus dapibus condimentum libero sed faucibus. Aenean suscipit felis in dolor dapibus varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi adipiscing pellentesque sodales. Vestibulum et lacus non lacus lacinia euismod eu sit amet sem. Nam sed est et quam dignissim sollicitudin a quis nisl. Vestibulum lacinia vestibulum enim. Vivamus massa urna, consectetur ut volutpat quis, hendrerit eget ipsum. Mauris dapibus mi elit, sed convallis lectus. Suspendisse congue ligula nec risus egestas nec vehicula lectus laoreet.</p>'
	;
		

	var VgrMobileIcon = A.Component.create(
			{
				ATTRS: {
					alwaysUseDefaultHeight: {
						value: true
					},
					iframeDefaultHeight: {
						value: 10000
					}
				},
				EXTENDS: A.Component,
				NAME: NAME,
				NS: NS,
				prototype: {
					_currentOverlay: null,
					_history: null,
					_initialHash: null,
					initializer: function(config) {
						var instance = this;
						
						var headerNode = A.one('#header');
						var footerNode = A.one('#footer');
						
						instance.set(HEADER_NODE, headerNode);
						instance.set(FOOTER_NODE, footerNode);
						
						instance._history = new A.HistoryHash();
						
						if(document.location.hash != '') {
							instance._history.addValue(HISTORY_VIEW, document.location.hash, {merge: false});	
						}
						
						instance._initialHash = document.location.hash;
					},
					
					renderUI: function() {
						var instance = this;
					},
	
					bindUI: function() {
						var instance = this;
						
						instance._bindMobileIconLinks();
						
						// Bind history change
						A.on('history:change', instance._onHistoryChange, instance);
						
						console.log('bindUI - historyView is: ' + instance._history.get(HISTORY_VIEW));
					},
					
					_afterMobileOverlayRender: function(e) {
						var instance = this;
						
						var contentBox = instance._currentOverlay.get('contentBox');
						
						var closeNode = contentBox.one('.mobile-icon-overlay-hd-close');
						
						closeNode.on('click', instance._onMobileOverlayCloseClick, instance);
						
						var iframeWrap = contentBox.one('.mobile-icon-iframe-wrap');
						
						iframeWrap.plug(A.LoadingMask, {
							background: '#000'
						}).loadingmask;
						
						var loadingMask = iframeWrap.loadingmask;
						
						loadingMask.on('show', function(e) {
							var instance = this;
							
							var loadingMask = e.currentTarget;
							
							var contentBox = instance._currentOverlay.get('contentBox');
							
						}, instance);
						
						loadingMask.show();
						
						var iframe = contentBox.one('iframe.mobile-icon-iframe');
						
				        iframe.on('load', instance._onIframeLoad, instance);
					},
					
					_beforeMobileOverlayRender: function(e) {
						var instance = this;
						
						instance._toggleFooterNode(false);	
					},
					
					_bindMobileIconLinks: function() {
						var instance = this;
							
						var links = A.all('.app-icon a.app-link');
						
						links.on('click', instance._onMobileIconLinkClick, instance);
					},
					
					_hideNodeInfo: function () {
						var instance= this;
					},
					
					_onHistoryChange: function(e) {
						var instance= this;
						
  						var changed = e.changed;
  						var removed = e.removed;
						
						console.log('onHistoryChange');

						var changedView = changed[HISTORY_VIEW];

						if(isUndefined(changedView)) {
							 if(!isNull(instance._currentOverlay)) {
							 	instance._currentOverlay.destroy();
								instance._toggleFooterNode(true);
							 }
						}

					},
					
					_onIframeLoad: function(e) {
						var instance = this;
						var iframe = e.currentTarget;
						var iframeWrap = iframe.ancestor('.mobile-icon-iframe-wrap');
						
						try {

							var iframeDoc = iframe.get('contentWindow.document');
							var iframeHead = iframe.get('contentWindow.document.body');
							var iframeBody = iframe.get('contentWindow.document.body');
							
							iframeHead.append('<link type="text/css" rel="stylesheet" href="/vgr-mobile-theme/css/iframe-styles.css" />');
							iframeBody.addClass('portal-iframe');
							
							var iframeNewHeight = instance.get(IFRAME_DEFAULT_HEIGHT);
							
							if(!instance.get(ALWAYS_USE_DEFAULT_HEIGHT)) {
								var bodyNode = A.one('body');
								var headerNode = instance.get(HEADER_NODE);
								var headerScrollHeight = headerNode.get('scrollHeight');
								var winHeight = bodyNode.get('winHeight');
								
								var overlayWrap = iframeWrap.ancestor('.mobile-icon-overlay');
								var overlayHd = overlayWrap.one('.aui-widget-hd');
								var overlayHdScrollHeight = overlayHd.get('scrollHeight');
								
								var contentHeight = winHeight-headerScrollHeight-overlayHdScrollHeight;
								
								var iframeMainContent = iframeBody.one('#main-content');
								var scrollHeight = iframeMainContent.get('scrollHeight');
								
								var iframeNewHeight = scrollHeight+1;
								if(scrollHeight < contentHeight) {
									iframeNewHeight = contentHeight;	
								}
							}
							
							//A.log('iframeNewHeight is: ' + iframeNewHeight);
							
							iframeWrap.setStyle('height', (iframeNewHeight) + 'px');
						}
						catch(e) {
							A.log('vgr-mobile-icon _onIframeLoad catch.');
							
							iframeWrap.setStyle('height', (instance.get(IFRAME_DEFAULT_HEIGHT)) + 'px');
						}
						
						iframeWrap.loadingmask.hide();
					},
					
					_onMobileIconLinkClick: function(e) {
						var instance = this;
						
						e.halt();
						
						var linkNode = e.target;
						var url = linkNode.getAttribute(HREF);
						
						instance._showMobileOverlay(linkNode);
					},
					
					_onMobileOverlayCloseClick: function(e) {
						var instance = this;
						
						e.halt();
						
						instance._currentOverlay.destroy();
						
						instance._history.replaceValue(HISTORY_VIEW, instance._initialHash);
						
						instance._toggleFooterNode(true);
					},
					
					_showMobileOverlay: function(linkNode) {
						instance = this;
						
						var url = linkNode.getAttribute(HREF);
						
						var currentTitle = linkNode.one('h1 .app-title').html();
						
						var headerContent = A.substitute(TPL_MOBILE_OVERLAY_HD, {
							title: currentTitle,
							closeText: 'Close'
						});
						
						var iframeId = A.guid();

						var bodyContent = A.substitute(TPL_MOBILE_ICON_IFRAME, {
							id: iframeId,
							name: iframeId,
							url: url
						});
						
						instance._currentOverlay = new A.OverlayBase({
							align: {
								node: instance.get(HEADER_NODE),
								points: ['tl', 'bl']
							},
							bodyContent: bodyContent,
							cssClass: 'mobile-icon-overlay',
							headerContent: headerContent,
							width: '100%',
							zIndex: 15
						});
						
						// On before render listener
						instance._currentOverlay.before('render', instance._beforeMobileOverlayRender, instance);
						
						// On after render listener
						instance._currentOverlay.after('render', instance._afterMobileOverlayRender, instance);
						
						instance._currentOverlay.render();

						var portletNode = linkNode.ancestor('.portlet-boundary');
						
						if(!isNull(portletNode)) {
							var portletId = portletNode.getAttribute('id');
							instance._history.addValue(HISTORY_VIEW, portletId);
						}
					},
					
					_toggleFooterNode: function(showBoolean) {
						instance = this;
						
						var footerNode = instance.get(FOOTER_NODE);
						
						if(isBoolean(showBoolean)) {
							if(showBoolean) {
								footerNode.show();
							} else {
								footerNode.hide();
							}
						} else {
							footerNode.toggle();
						}
					}
					
					
				}
			}
	);

	A.VgrMobileIcon = VgrMobileIcon;
		
	},1, {
		requires: [
			'aui-base',
			'aui-dialog',
			'aui-loading-mask',
			'aui-overlay',
			'history',
			'overlay'
      ]
	}
);