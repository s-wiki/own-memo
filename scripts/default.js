$(document).ready(function(){
    // open links in new tab
    $('a').each(function(){
        $(this).attr('target', '_blank');
    });
});

/** socket to auto-reload in local development **/
;(function(){
    var exampleSocket = new WebSocket("ws://localhost:4567");
    exampleSocket.onopen = function(){
        console.log('websocket connection opened')
    }
    exampleSocket.onmessage = function (event) {
        // 3s because jekyll take time to compile...
        setTimeout(function(){
            window.location.reload();
        },3000);
    }
})();
