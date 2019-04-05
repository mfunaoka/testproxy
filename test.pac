function FindProxyForURL(url, host)
{
    // https://www.proxynova.com/proxy-server-list/country-jp/
    // Transparent
    alert('PacParam url=[' + url + ']  ,  host=[' + host + ']');
    return "PROXY 157.230.232.130:8080";
}
