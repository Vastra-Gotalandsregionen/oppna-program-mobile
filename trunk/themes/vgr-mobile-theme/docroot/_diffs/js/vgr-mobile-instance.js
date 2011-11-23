AUI().ready('aui-base', 'vgr-mobile-icon','aui-iframe-node-plugin', function(A) {

	var vgrMobileIcon = new A.VgrMobileIcon({
	}).render();
	
	var CSS_EXP = 'exp';
	var CSS_TABS_IFRAME_WRAP = 'tabs-iframe-wrap';
	var CSS_TABS_IFRAME_LINK = 'tabs-iframe-link';
	var CSS_TABS_IFRAME_CTN = 'tabs-iframe-ctn';
	
	var tabsIframeLinks = A.all('.' + CSS_TABS_IFRAME_LINK);
	
	tabsIframeLinks.each(function(node, index, list) {
		var url = node.getAttribute('href');
		
		var parent = node.ancestor('.' + CSS_TABS_IFRAME_WRAP);
		var iframeCtn = parent.one('.' + CSS_TABS_IFRAME_CTN);
		
		iframeCtn.plug(A.namespace('Plugin').IframeNode, {
			uri: url
		});
		
		node.remove();
		node.destroy();
	})
	
	var tabsTitleNodes = A.all('ul.utilities li>h2');
	
	tabsTitleNodes.on('click', _onTabsTitleNodesClick);
	
	function _onTabsTitleNodesClick(e) {
		var currentTarget = e.currentTarget;
		
		A.log('_onTabsTitleNodesClick.');
		
		var listItem = currentTarget.ancestor('li');
		var isExpanded = listItem.hasClass(CSS_EXP);
		
		
		if(!isExpanded) {
			var iframeCtn = listItem.one('.' + CSS_TABS_IFRAME_CTN);
			
			iframeCtn.IframeNode.load();
		}
		else {
			
		}
		
	}
	
});