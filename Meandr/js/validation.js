$('#form').validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            number: {
                required: true,
                minlength: 7
            }
        },

        messages: {
            name: {
                required: "Поле 'Имя' обязательно к заполнению",
                minlength: "Введите не менее {0} символов в поле 'Фамилия и имя'"
            },
            email: {
                required: "Поле 'Email' обязательно к заполнению",
                email: "Необходим формат адреса email"
            },
            number: {
                required: "Поле 'Номер' обязательно к заполнению",
                minlength: "Введите не менее {0} символов в поле 'Телефон'"
            }
        }
});
