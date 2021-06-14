const defaultSelect = () => {
    const element = document.querySelector('.select-js');
    const choices = new Choices(element, {
        searchEnabled: false,
        position: 'bottom',

    });
}
defaultSelect()