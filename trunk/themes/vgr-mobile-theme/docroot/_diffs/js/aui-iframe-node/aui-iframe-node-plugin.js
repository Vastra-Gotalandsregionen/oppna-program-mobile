AUI.add('aui-iframe-node-plugin', function(A) {

	var Lang = A.Lang,
		isArray = Lang.isArray,
		isObject = Lang.isObject,
		isString = Lang.isString,
		isNull = Lang.isNull,
		isFunction = Lang.isFunction,
	
		getClassName = A.ClassNameManager.getClassName,

		CTN = 'ctn',
		HOST = 'host',
		IFRAME = 'iframe',
		IFRAME_CSS_CLASS = 'iframeCssClass',
		IFRAME_DEFAULT_HEIGHT = 'iframeDefaultHeight',
		IFRAME_ID = 'iframeId',
		IFRAME_NODE = 'iframenode',
		IFRAME_WIDTH = 'iframeWidth',
		LOAD = 'load',
		ROOT = 'root',
		URI = 'uri',

		CSS_IFRAME = getClassName(IFRAME_NODE, IFRAME),
		CSS_IFRAME_CTN = getClassName(IFRAME_NODE, CTN),
		CSS_IFRAME_ROOT_NODE = getClassName(IFRAME_NODE, IFRAME, ROOT),

		NS = 'IframeNode',
		NAME = 'IframeNodePlugin',
		
		TPL_IFRAME = '<iframe class="{cssClass}" frameborder="0" id="{id}" name="{id}" src="{uri}" height="{height}" width="{width}"></iframe>'
	;	
	
	var IframeNode = A.Component.create(
		{
			ATTRS: {
				iframeCssClass: {
					value: CSS_IFRAME,
				},
				
				iframeDefaultHeight: {
					value: '200px'
				},
	
				iframeId: {
					valueFn: function() {
						return A.guid();
					}
				},
				
				iframeWidth: {
					value: '100%'
				},
	
				uri: {
					value: 'http://www.vgr.se'
				}
			},
			EXTENDS: A.Plugin.Base,
			NAME: NAME,
			NS: NS,
			prototype: {
				_host: null,
				_node: null,
				initializer: function(config) {
					var instance = this;
					
					instance._host = instance.get(HOST);
					
					instance.publish(LOAD,{
						defaultFn: instance._defaultLoadIframeFn
					});
					
					instance._host.addClass(CSS_IFRAME_CTN);
					
					instance._host.plug(A.LoadingMask, {
						background: '#000',
						strings: {
								loading: 'Laddar&hellip;'
						}
					}).loadingmask;
				},
				
				_defaultLoadIframeFn: function(event) {
					var instance = this;
					
					var node = instance._node;
	
					try {
						
						var iframeDoc = node.get('contentWindow.document');
						iframeDoc.get('documentElement').addClass(CSS_IFRAME_ROOT_NODE);
						var iframeBody = node.get('contentWindow.document.body');
						
						iframeBody.setStyle('padding', 0);
						
						var iframeMainContent = iframeBody.one('#main-content');
						var scrollHeight = iframeMainContent.get('scrollHeight');
						
						var iframeWrapper = iframeBody.one('#wrapper');
						if(!isNull(iframeWrapper)) {
							scrollHeight = iframeWrapper.get('scrollHeight');
						}
						
						instance._node.setAttribute('height', (scrollHeight+1) + 'px');
						
					}
					catch (e) {
						A.log('_defaultLoadIframeFn catch');
					}
	
					instance._host.loadingmask.hide();
				},
				
				load: function() {
					var instance = this;
					
					instance.unload();
					
					instance._host.loadingmask.show();
					
					var iframeTpl = Lang.sub(TPL_IFRAME, {
						cssClass: instance.get(IFRAME_CSS_CLASS),
						height: instance.get(IFRAME_DEFAULT_HEIGHT),
						id: instance.get(IFRAME_ID),
						width: instance.get(IFRAME_WIDTH),
						uri: instance.get(URI)
					});
	
					var node = A.Node.create(iframeTpl);
					
					instance._host.append(node);
					
					instance._node = node;
					
					instance._node.on(LOAD, A.bind(instance.fire, instance, LOAD));
				},
				
				unload: function(){
					var instance = this;
					
					if(!isNull(instance._node)) {
						instance._node.remove();
						instance._node.destroy();
						instance._node = null;
					}
				}

				
			}
		}
	);

	A.namespace('Plugin').IframeNode = IframeNode;

}, 1 ,{requires:['aui-base', 'aui-loading-mask', 'plugin']});