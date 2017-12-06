(function() {
    var button = document.querySelector('.button');
    var input = document.querySelector('.form-control');
    var messenger = document.querySelector('.messenger');
    
    button.addEventListener('click', handleButtonClick);

    function handleButtonClick() {
        if(input.value.length === 0) {
            alert('Please enter your name');
            return;
        }
        
        
        messenger.innerHTML = 'Hello, ' + input.value;
        // input.value = '';
    }
})()