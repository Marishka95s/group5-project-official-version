const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';
const KEY = 'apikey=oWB2vgl24g0TKHnvwppl4WSJqkARKGcC'

export default class ApiService {
    // https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey={apikey}
    constructor() {
        this.searchQuery = '';
        this.countryCode = 'US'; // default US... need to think about it
        this.page = 1; // left for pagination, if it is needed

        //get with width of browser window in pixels: document.documentElement.clientWidth;
        this.size = (document.documentElement.clientWidth > 1279) ? 'size=20' : 'size=21'; // quantity of cards per 1 page
    }

    fetchQuery() {
        const url = `${BASE_URL}?keyword=${this.searchQuery}&countryCode=${this.countryCode}&${this.size}&${KEY}`;
        
        const options = {
            method: 'GET', //it goes by default anyway - was done for some unexpected "options" just in case)
        };

        return fetch(url, options)
            .then(responce => {
                if (responce.status === 200) {
                    //  console.log('responce.status', responce.status,'responce.statusText',responce.statusText);
                    return responce.json();
                }
                throw new Error('===Data not fetched from server!===');

            })
            .then((data) => {
                this.page += 1; // left for pagination, if it is needed
                const { page = {} } = data;
                const { totalElements = 0 } = page;
                if (totalElements != 0) {
                    return data;
                }
                throw new Error('===Events were not found at all! Try another querry===');
                
            })
            .then(({ _embedded }) => {
                const eventsArr = _embedded.events;
                 
                const cardsArr = eventsArr.map(
                    (element) => {
                        
                        // Responce Object destructuring chain for "imageUrl"
                        const {url} = element.images[2]

                        // Responce Object destructuring chain for "date"
                        const { dates } = element;
                        const { start } = dates;
                        const { localDate } = start;

                        // Responce Object destructuring chain for "venue"
                        const { _embedded } = element;
                        const { venues} = _embedded;
                        const eventVenue = venues[0].name;

                        const card = {
                            id: element.id,
                            imageUrl: url,
                            event: element.name,
                            data: localDate,
                            venue: eventVenue,
                        };
                        return card;
                    });
                
            return cardsArr;
            })


    }

    // left for pagination, if it is needed
    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }

}