const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';
const KEY = 'apikey=oWB2vgl24g0TKHnvwppl4WSJqkARKGcC'

export default class ApiService {
    // https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey={apikey}
    constructor() {
        this.searchQuery = '';
        this.countryCode = ''; // default US... need to think about it
        this.page = 0; // !!!STARTS from 0 on server side, e.g. 0 === 1 for humans; left for pagination, if it is needed   

        //get with width of browser window in pixels: document.documentElement.clientWidth;
        this.size = (document.documentElement.clientWidth > 1279) ? 'size=20' : 'size=21'; // quantity of cards per 1 page
        this.totalPages;
    }

    fetchQuery() {
        const url = `${BASE_URL}?keyword=${this.searchQuery}&countryCode=${this.countryCode}&page=${this.page}&${this.size}&${KEY}`;
        
        return fetch(url)
            .then(responce => {
                if (responce.status === 200) {                   
                    return responce.json();
                }
                throw new Error('===Data not fetched from server!===');    
            })
            .then((data) => {
                
                const totalElements = data?.page?.totalElements;
                //console.log('20/21 events full RESPONCE ==>', data);////////////////////////////////////////////////////
                
                if ((totalElements != 0) && (data._embedded)) {
                    return data;
                }
                if (totalElements === 0) {
                    throw new Error('=== Events were not found at all! Try another querry ===');
                }
                if (!data._embedded) {
                    throw new Error('=== Sorry! Server did not sent DATA! Try another querry ===');
                }
                
            })
            .then((data) => {
                //console.log('data1:data._embedded.events:', data._embedded.events);
                const eventsArr = data?._embedded?.events;                
                const currentPageNumber = data?.page?.number;
                const totalPages = data?.page?.totalPages;

                ///////////////////// for pagination data update         
                this.page = data?.page?.number;

                this.totalPages = data?.page?.totalPages;
                if (this.totalPages > 50) {this.totalPages = 50} // !!!API do not allow download more events for FREE

                //console.log('API: this.page::::',this.page,'=============','API: this.totalPages::::',this.totalPages);
                 
                const cardsArr = eventsArr.map(
                    (element) => {
                        
                        // Responce Object destructuring chain for "imgUrl"
                        const {url} = element.images.find((el) => (el.ratio === '4_3'));  //images of this ratio can be downloaded/ others failed with server error
                        
                        // Taking "date" from Responce Object 
                        const localDate = element.dates?.start?.localDate;

                        // Taking "venue" from Responce Object
                        
                        const { venues } = element?._embedded;

                        const eventVenue = venues[0].name;
                        //console.log('eventVenuesArr:', venues)

                        const card = {
                            id: element.id,  //on rendering "card.element" please put: data-value="{{id}}",
                            //for ex. <li class="item" data-value="{{id}}">...</li>
                            //on click we will get "id" for query: id = event.target.dataset.value
                            imgUrl: url,
                            imgAlt: `Image of '${element.name}'`,
                            event: element.name,
                            date: localDate,
                            emb: venues,
                            venue: eventVenue,
                            number: currentPageNumber,
                            totalPages: totalPages,
                        };
                        
                        return card;
                    });
                
                // console.log('API below: searchQuery: <', this.searchQuery, '>',
                //     'API below: countryCode: <', this.countryCode,'>',
                //     'API below: this.page + 1: <', this.page + 1, '>',
                //     'API below: this.totalPages: <', this.totalPages
                //     );////////////////////////////////////////////////////'API below: galleryCards for render arrived ==>', cardsArr
                
            return cardsArr;
            })
    }


    // Ievgen R:  -- this code is disabled; default API was used

    // async getEvent() {
    //     const url = `${BASE_URL}?keyword=${this.searchQuery}&countryCode=${this.countryCode}&page=${this.page}&${this.size}&${KEY}`;
            
	// 	const res = await fetch(url);
	// 	if (!res.ok) {
	// 		throw res;
	// 	}
	// 	this.query = await res.json();
	// }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }

    get countryCodeId() {
    return this.countryCode;
    }

    set countryCodeId(newCountryCodeId) {
    this.countryCode = newCountryCodeId;
    }

    get allPages() {
        return this.totalPages;
    }

    set allPages(newPages) {
        this.totalPages = newPages;
    }

    get currentPage() {
        return this.page;
    }

    set currentPage(newPage) {
        this.page = newPage;
    }

}