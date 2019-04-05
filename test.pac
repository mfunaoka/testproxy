function FindProxyForURL(url, host)
{
    // https://www.proxynova.com/proxy-server-list/country-jp/
    // Transparent
    alert('PacParam url=[' + url + ']  ,  host=[' + host + ']');
    return "PROXY 47.52.231.140:8080";
}
