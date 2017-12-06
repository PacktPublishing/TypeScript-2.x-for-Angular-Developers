(function() {
    var button: Element = document.querySelector('.button');
    var input: HTMLInputElement = <HTMLInputElement>document.querySelector('.form-control');
    var messenger: HTMLElement = document.querySelector('.messenger') as HTMLElement;
    
    button.addEventListener('click', handleButtonClick('Hello,', 'Please enter your name'));

    function handleButtonClick(prefix: string, noNameErrMsg: string) {
        return function(e: MouseEvent) {
            if(input.value.length === 0) {
                alert(noNameErrMsg);
                return;
            }
            
            messenger.innerHTML = prefix + input.value;
            
        }
    }
})()