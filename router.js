function route(pathname, handle, response, productId) {
    console.log ('pathname : ' + pathname);

    if (handle[pathname] === undefined) {
        console.log('No request handler found for ' + pathname);
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.write('이희찬 웹페이지 : 404 Not found');
        response.end();
        return;
    }

    handle[pathname](response, productId);
}

exports.route = route;