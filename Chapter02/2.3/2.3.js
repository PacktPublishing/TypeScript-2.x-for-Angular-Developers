(function () {
    var button = document.querySelector('.button');
    var input = document.querySelector('.form-control');
    var messenger = document.querySelector('.messenger');
    button.addEventListener('click', handleButtonClick('Hello,', 'Please enter your name'));
    function handleButtonClick(prefix, noNameErrMsg) {
        return function (e) {
            if (input.value.length === 0) {
                alert(noNameErrMsg);
                return;
            }
            messenger.innerHTML = prefix + input.value;
        };
    }
})();
