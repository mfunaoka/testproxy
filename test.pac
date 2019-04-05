function FindProxyForURL(url, host)
{
    // https://www.proxynova.com/proxy-server-list/country-jp/
    // Transparent
    alert('PacParam url=[' + url + ']  ,  host=[' + host + ']');
    return "PROXY 43.255.113.232:8085";
}
