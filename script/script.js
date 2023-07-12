let btnMyStudents = document.querySelector('.vvv');
let btnMyStydentsInformation = document.querySelector('.mystudents__information-container');

// function promtEnter(event){   
//    prompt('Чтобы получать индивидуальные предложения укажите дату вашего рождения:');
//     event.preventDefault();
// }


btnMyStudents.addEventListener('click',  () => {
        alert('Метод для вывода сообщения в веб-консоль.');
        btnMyStydentsInformation.classList.add
})


// const linkPromotion = document.querySelector('.birthday_data');
//     function promtEnter(event){   
//     const birthday = prompt('Чтобы получать индивидуальные предложения укажите дату вашего рождения:');
//     linkPromotion.textContent = birthday;

//     event.preventDefault();
// }
// linkPromotion.addEventListener('click', promtEnter);

btnMyStudents.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера

        alert('Метод для вывода сообщения в веб-консоль.');
        // popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        // popup.classList.add('active'); // И для самого окна
    })
});