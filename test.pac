function FindProxyForURL(url, host)
{
	alert('PAC_DEBUG: url=[' + url + '], host=[' + host + ']');
//	if (shExpMatch(host, "*.ugtop.com") // ||
//	isInNet(host, "133.172.0.0", "255.255.0.0")||
//	isInNet(host, "10.0.0.0", "255.0.0.0")||
//	isInNet(host, "17.0.0.0", "255.0.0.0"))
//	{
//		alert('PAC_DEBUG: ->DIRECT');
//		return "DIRECT";
//	}
	alert('PAC_DEBUG: ->PROXY');
	return "PROXY 160.238.136.158:80";
}
