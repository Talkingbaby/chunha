document.getElementById('quote-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.querySelector('input[name="name"]').value,
        gender = document.querySelector('select[name="gender"]').value,
        dob = document.querySelector('input[name="dob"]').value,
        phone = document.querySelector('input[name="phone"]').value,
        email = document.querySelector('input[name="email"]').value,
        lengthOfStay = document.querySelector('select[name="stay-date"]').value;

    console.log(name, gender, dob, phone, email, lengthOfStay);

    var price = '';

    if (gender == 'male') {
        console.log('i am male');
        console.log(lengthOfStay);
        switch (lengthOfStay) {
            case '1':
                price = '$158.58 / 1 개월';
                break;
            case '3':
                price = '$475.5 / 3 개월';
                break;
            case '6':
                price = '$951 / 6 개월';
                break;
            case '9':
                price = '$1426.5 / 9 개월';
                break;
            case '12':
                price = '$1902 / 12 개월';
                break;
            default:
                price = 'There appears to be an issue';
                break;
        }
    } else if (gender == 'female') {
        console.log('i am female');
        switch (lengthOfStay) {
            case '1':
                price = '$158.16 / 1 개월';
                break;
            case '3':
                price = '$474.5 / 3 개월';
                break;
            case '6':
                price = '$949 / 6 개월';
                break;
            case '9':
                price = '$1423.5 / 9 개월';
                break;
            case '12':
                price = '$1898 / 12 개월';
                break;
            default:
                price = 'There appears to be an issue';
                break;
        }
    } else {
        price = 'There appears to be an issue';
    }

    var quote = `<div>
    <div style="text-align: center; font-size: 40px; color: #b81f16;">${price}</div>
    <div style="text-align: center; color: #9b9b9b;">*estimate might be subject to change based on the region you are located</div>
</div>`;

    var quoteAnswer = document.querySelector('.quote-answer');
    quoteAnswer.innerHTML = quote;
    quoteAnswer.style.display = 'block';
});