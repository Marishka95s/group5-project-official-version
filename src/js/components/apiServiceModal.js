const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events'; 
const KEY = 'apikey=oWB2vgl24g0TKHnvwppl4WSJqkARKGcC'

export default class ApiServiceModal {
    // https://app.ticketmaster.com/discovery/v2/events/G5diZfkn0B-bh.json?apikey={apikey}
    constructor() {
        this.id = '';  // G5vjZpNlLC7Ix - sports
    }

    fetchQuery() {
        const url = `${BASE_URL}/${this.id}?${KEY}`;

        return fetch(url)
            .then(responce => {
                if (responce.status === 200) {
                
                    return responce.json();
                }
                throw new Error('===Data not fetched from server!===');

            })
            .then((data) => {
                //console.log('ONE event FULL Responce ==>', data);////////////////////////////////////////////////////
                if ( (data) && (data.id === this.id)) {
                    return data;
                }
                
                throw new Error('===Event details were not found! ¯ \ _ (ツ) _ / ¯===');
                
            })
            .then((event) => {
                                
                // Responce Object destructuring chain for "imgUrl"
                const { url } = event?.images?.find((el) => (el.ratio === '4_3'));  //images of this ratio can be downloaded/ others failed with server error
                        
                // remove last ":00" for "time"
                const strLength = event?.dates?.start?.localTime.length;
                const timeToMinutes = event?.dates?.start?.localTime?.slice(0, strLength - 3);

                // concatinating data for "info"
                const info = (event?.classifications)? event?.classifications[0].genre?.name:'';

                const promoter = (event?.promoters) ? event?.promoters[0].description : '';
                                 
                //
                const attractionsArray = event?._embedded?.attractions?.map(({ name }) => name);

                const city = (event._embedded.venues) ? event._embedded.venues[0].city.name : '';
                
                const country = (event._embedded.venues) ? event._embedded.venues[0].country.name : '';

                const venue = (event._embedded.venues) ? event._embedded.venues[0].name : '';

                const moreFromAuther = (event._embedded.attractions) ? event._embedded.attractions[0].url : '';

                // price:
                const priceArrayOfObjects = event?.priceRanges?.map(({ type, min, max, currency }) =>
                {
                    return { type, min, max, currency, }
                });
                                
                const modalCard = {
                    id: event.id, // unneccessary info
                    event: event.name, // unneccessary info
                    imgUrl: url,
                    imgAlt: `Image of '${event.name}'`,
                    promoter: promoter,
                    info: info, // INFO  divided with <br> each statement starts from new line
                    date: event.dates.start.localDate, // WHEN
                    time: timeToMinutes, // WHEN
                    timezone: event.dates.timezone, // WHEN
                    city: city, // WHERE
                    country: country, // WHERE
                    attractions: attractionsArray, // WHO in array
                    price: priceArrayOfObjects,
                    link: '',//event.url'', // href for button "BUY TICKETS"
                    moreFromThisAuthor: moreFromAuther,  // href for button "moreFromThisAuthor"
                    venue: venue,
                };
                //console.log('modalCard just arrived for render ==>', modalCard);////////////////////////////////////////////////////
                return modalCard;
            });


    }

    get eventId() {
        return this.id;
    }

    set eventId(newEventId) {
        this.id = newEventId;
    }

}