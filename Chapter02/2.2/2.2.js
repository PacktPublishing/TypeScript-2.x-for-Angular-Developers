(function () {
    var button = document.querySelector('.button');
    var input = document.querySelector('.form-control');
    var messenger = document.querySelector('.messenger');
    // var messenger = document.querySelector('.messenger');
    button.addEventListener('click', handleButtonClick('Hello,', 'Please enter your name'));
    function handleButtonClick(prefix, noNameErrMsg) {
        return function (e) {
            if (input.value.length === 0) {
                if (typeof noNameErrMsg !== 'string') {
                    alert('Something went wrong, and no valid error msg was provided');
                    return;
                }
                alert(noNameErrMsg);
                return;
            }
            if (typeof prefix !== 'string') {
                alert('Improper types for prefix or error msg');
            }
            messenger.innerHTML = prefix + input.value;
        };
    }
})();
