function formattedPhone(phone) {
    let cleaned = phone.replace(/\D/g, ''); // видаляємо все, крім цифр

    if (cleaned.length === 12 && cleaned.startsWith('38')) {
        // +38 (066) 456-78-90
        return `+${cleaned.slice(0, 2)} (${cleaned.slice(2, 5)}) ${cleaned.slice(5, 8)}-${cleaned.slice(8, 10)}-${cleaned.slice(10, 12)}`;
    } else if (cleaned.length === 11 && cleaned.startsWith('8')) {
        // 80664567890 -> +38 (066) 456-78-90
        return `+38 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9, 11)}`;
    } else if (cleaned.length === 10 && cleaned.startsWith('0')) {
        // 0671234567 -> +38 (067) 123-45-67
        return `+38 (${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 8)}-${cleaned.slice(8, 10)}`;
    } else {
        return 'Неправильний формат номера';
    }
}

const phoneInput = prompt("Введіть номер телефону:");
alert(formattedPhone(phoneInput));
