const form = () => {
    const form = document.querySelector('.feedback__form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.querySelector('.feedback__input--name').value;

        function validateName(name) {
            return name.trim() !== '';
        }

        if (!validateName(name)) {
            alert('Введите корректное имя.');
            return;
        }

        if (validateName(name)) {
            form.submit();
        }
    });
};

export default form;
