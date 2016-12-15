function moadlLoader(opt) {
    var options = {
        btn: '#btn',
        urlInput: '#url',
        serverUrl: 'http://localhost:8000/load.php?url=',
        modalBodySelector: '#modal-body',
        failMsgSelector: '#fail-msg',
        modalSelector: '#modal',
        loaderSelector: '#loader'
    };

    for (var attrname in opt) { 
        options[attrname] = opt[attrname];
    }

    var $modalBody = $(options.modalBodySelector);

    $(options.btn).click(function() {
        var url = $(options.urlInput).val();

        $.get(options.serverUrl + url, function(data) {
            $modalBody.text(data);
        }).fail(function() {
            var failMsg = $(options.failMsgSelector).html();
            $modalBody.html(failMsg);
        });
    });

    $(options.modalSelector).on('hidden.bs.modal', function() {
        var loader = $(options.loaderSelector).html();
        $modalBody.html(loader);
    });
}