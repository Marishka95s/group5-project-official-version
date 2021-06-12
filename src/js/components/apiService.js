const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';
const KEY = 'apikey=oWB2vgl24g0TKHnvwppl4WSJqkARKGcC'

export default class ApiService {
    // https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey={apikey}
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchQuery() {
        const url = `${BASE_URL}?countryCode=US&size=20&${KEY}`;

        const options = {
            method: 'GET', //it goes by default anyway
        };

        return fetch(url, options)
            .then(responce => {
                if (responce.status === 200) {
                  //  console.log('responce.status', responce.status,'responce.statusText',responce.statusText);
                    return responce.json();
                }
                throw new Error('Error: data not fetched from server!');

            })
            .then((data) => {
                this.page += 1;
                const { page = {} } = data;
                const { totalElements = 0 } = page;
                if (totalElements != 0) {
                  //  console.log('totalElements===', totalElements);
                  //  console.log('data===', data);
                   // console.log('typeof data===',typeof data);
                    return data;
                }
                throw new Error('Error: events were not found! Type another querry');
                
            })
            .then(({ _embedded }) => {
                const arrEvents = _embedded.events;
                return arrEvents;
            })


    }

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