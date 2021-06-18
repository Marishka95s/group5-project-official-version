import countries from '../countries.json';
const defaultSelect = () => {
    const element = document.querySelector('.select-js');
    const choices = new Choices(element, {
        searchEnabled: false,
        position: 'bottom',
        itemSelectText: '',
        addItems: true,
        choices: [ {
    label: "Andorra", 
    value: "AD"
  },
  {
    label: "Australia", 
    value: "AU"
  },
  {
    label: "Austria", 
    value: "AT"
  },
  {
    label: "Belarus", 
    value: "BY"
  },
  {
    label: "Belgium", 
    value: "BE"
  },
            {
    label: "Brazil", 
    value: "BR"
  },
  {
    label: "Canada", 
    value: "CA"
  },
  {
    label: "Czech Republic", 
    value: "CZ"
  },
  {
    label: "Denmark", 
    value: "DK"
  },
  {
    label: "Estonia", 
    value: "EE"
  },
  {
    label: "Finland", 
    value: "FI"
  },
  {
    label: "France", 
    value: "FR"
  },
  {
    label: "Germany", 
    value: "DE"
  },
  {
    label: "Ireland", 
    value: "IE"
  },
  {
    label: "Israel", 
    value: "IL"
  },
  {
    label: "Italy", 
    value: "IT"
  },
  {
    label: "Latvia", 
    value: "LV"
  },
  {
    label: "Liechtenstein", 
    value: "LI"
  },
  {
    label: "Luxembourg", 
    value: "LU"
  },
  {
    label: "Macedonia", 
    value: "MK"
  },
  {
    label: "Mexico", 
    value: "MX"
  },
  {
    label: "Netherlands", 
    value: "NL"
  },
  {
    label: "New Zealand", 
    value: "NZ"
  },
  {
    label: "Norway", 
    value: "NO"
  },
  {
    label: "Poland", 
    value: "PL"
  },
  {
    label: "Portugal", 
    value: "PT"
  },
  {
    label: "Spain", 
    value: "ES"
  },
  {
    label: "Sweden", 
    value: "SE"
  },
  {
    label: "Switzerland", 
    value: "CH"
  },
  {
    label: "Ukraine", 
    value: "UA"
  },
  {
    label: "United Arab Emirates", 
    value: "AE"
  },
  {
    label: "United Kingdom", 
    value: "UK"
  },
  {
    label: "USA", 
    value: "US"
  }
        ],
        // resetScrollPosition: true,

    });
}
defaultSelect()

