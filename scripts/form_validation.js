document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    
    function formatPhone(value) {
        const phoneNumber = value.replace(/\D/g, '');
        
        if (phoneNumber.length === 0) {
            return '';
        }

        let formattedPhone = '+7';
        if (phoneNumber.length > 1) {
            formattedPhone += ' (' + phoneNumber.slice(1, 4);
        }
        if (phoneNumber.length > 4) {
            formattedPhone += ') ' + phoneNumber.slice(4, 7);
        }
        if (phoneNumber.length > 7) {
            formattedPhone += '-' + phoneNumber.slice(7, 9);
        }
        if (phoneNumber.length > 9) {
            formattedPhone += '-' + phoneNumber.slice(9, 11);
        }

        return formattedPhone;
    }

    let previousValue = '';

    phoneInput.addEventListener('input', function(e) {
        const cursorPosition = e.target.selectionStart;
        const previousLength = previousValue.length;
        const currentLength = e.target.value.length;

        const formattedInputValue = formatPhone(e.target.value);
        
        if (formattedInputValue === '') {
            e.target.value = '+7';
            e.target.setSelectionRange(2, 2);
            return;
        }

        e.target.value = formattedInputValue;
        previousValue = formattedInputValue;

        if (currentLength < previousLength) {
            e.target.setSelectionRange(cursorPosition, cursorPosition);
        }
    });

    phoneInput.addEventListener('focus', function(e) {
        if (!e.target.value) {
            e.target.value = '+7';
            e.target.setSelectionRange(2, 2);
        }
    });

    phoneInput.addEventListener('keypress', function(e) {
        if (!/\d/.test(e.key)) {
            e.preventDefault();
        }
    });
}); 