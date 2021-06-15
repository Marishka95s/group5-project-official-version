const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';
const KEY = 'apikey=oWB2vgl24g0TKHnvwppl4WSJqkARKGcC'

export default class ApiService {
    // https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey={apikey}
    constructor() {
        this.searchQuery = '';
        this.countryCode = 'US'; // default US... need to think about it
        this.page = 0; // !!!STARTS from 0;   left for pagination, if it is needed   

        //get with width of browser window in pixels: document.documentElement.clientWidth;
        this.size = (document.documentElement.clientWidth > 1279) ? 'size=20' : 'size=21'; // quantity of cards per 1 page
    }

    fetchQuery() {
        const url = `${BASE_URL}?keyword=${this.searchQuery}&countryCode=${this.countryCode}&page=${this.page}&${this.size}&${KEY}`;
        
        const options = {
            method: 'GET', //it goes by default anyway - was done for some unexpected "options" just in case)
        };

        return fetch(url, options)
            .then(responce => {
                if (responce.status === 200) {
                    
                    return responce.json();
                }
                throw new Error('===Data not fetched from server!===');

            })
            .then((data) => {
                this.page += 1; // left for pagination, if it is needed
                const { page = {} } = data;
                const { totalElements = 0 } = page;
                console.log('20/21 events full RESPONCE ==>', data);////////////////////////////////////////////////////
                if (totalElements != 0) {
                    return data;
                }
                throw new Error('===Events were not found at all! Try another querry===');
                
            })
            .then(({ _embedded }) => {
                const eventsArr = _embedded.events;
                
                 
                const cardsArr = eventsArr.map(
                    (element) => {
                        
                        // Responce Object destructuring chain for "imgUrl"
                        const {url} = element.images.find((el) => (el.ratio === '4_3'));  //images of this ratio can be downloaded/ others failed with server error
                        
                        // Responce Object destructuring chain for "date"
                        const { dates } = element;
                        const { start } = dates;
                        const { localDate } = start;

                        // Responce Object destructuring chain for "venue"
                        const { _embedded } = element;
                        const { venues} = _embedded;
                        const eventVenue = venues[0].name;

                        const card = {
                            id: element.id,  //on rendering "card.element" please put: data-value="${id}",
                            //for ex. <li class="item" data-value="${id}">...</li>
                            //on click we will get "id" for query: id = event.target.dataset.value
                            imgUrl: url,
                            imgAlt: `Image of '${element.name}'`,
                            event: element.name,
                            date: localDate,
                            venue: eventVenue,
                        };
                        
                        return card;
                    });
            console.log('galleryCards for render ==>', cardsArr);////////////////////////////////////////////////////    
            return cardsArr;
            })


    }

    // left for pagination, if it is needed
    resetPage() {
        this.page = 0;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }

}