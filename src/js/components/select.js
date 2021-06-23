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

const selectEl = document.querySelector('.choices')
console.log(selectEl)
selectEl.setAttribute('aria-label', 'country-select')