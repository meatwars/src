/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// MODAL MODAL MODAL 
const close_button = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');
const btn = document.querySelectorAll('.button');
const btn_close = document.querySelector('.button_submit');



btn.forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        modal.style.display = `block`;
    });
});

close_button.addEventListener('click', function (e) {
    e.preventDefault();
    modal.style.display = `none`;
});

//validate//
btn_close.addEventListener('click', formSend)
const form = document.getElementById('consultation');

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);
        
        let formData = new FormData(document.querySelector('#consultation form'));

    if (error === 0){
        let response = await fetch('sendmail.php',{
            method: 'POST',
            body: formData
        });
        if (response.ok){
            let result = await response.json();
            alert(result.message);
            formPreview.innerHTML = '';
            form.reset();
        }else{
            alert("Ошибка");
        }
    } else {
        alert('Заполни все поля');
    }


    function formValidate(form) {


        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);
            if (input.value === '') {
                formAddError(input);
                error++;
            }

        }
        return error
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
};
