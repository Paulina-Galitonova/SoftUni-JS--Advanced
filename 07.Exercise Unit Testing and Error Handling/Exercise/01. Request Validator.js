function requestValidator(obj) {
    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    let urlPattern = /^[\w.]+$/;
    let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    const invalidSymbols = ['<', '>', '\\', '&', '\'', '"'];

    if (!validMethods.includes(obj.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }

    if (!obj.uri || obj.uri === "*" || !obj.uri.match(urlPattern)) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if (!validVersions.includes(obj.version)) {
        throw new Error("Invalid request header: Invalid Version");
    }

    if (!obj.hasOwnProperty("message")) {
        throw new Error("Invalid request header: Invalid Message");
    }

    if (invalidSymbols.some(symbol => obj.message.includes(symbol))) {
        throw new Error("Invalid request header: Invalid Message");
    }

    return obj;
}

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));
