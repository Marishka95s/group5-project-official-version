import countries from '../countries.json';
const defaultSelect = () => {
    const element = document.querySelector('.select-js');
    const choices = new Choices(element, {
        searchEnabled: false,
        position: 'bottom',
        itemSelectText: '',
        addItems: true,
        choices: countries,
        resetScrollPosition: false,
    });
}
defaultSelect()

