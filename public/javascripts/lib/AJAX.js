/**
 * Created by saraf on 11/17/2014.
 */

window.AJAX = function(uri, callback, options) {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4) {
            callback(httpRequest.responseText);
        }
    };
    httpRequest.open('GET', uri);
    httpRequest.send();
};


/*(function(window, document) {

    ajax = {
        // send a get request
        get: function(uri, callback, options) {
            // create the request object
            req = new XMLHttpRequest();
            req.onreadystatechange = function() {
                if(req.readyState == 4) {
                    callback(req.responseText);
                }
            };
            req.open('GET', uri);
            req.send();
        },
    }

    window.jax = ajax.get;

})(window, document, undefined);*/