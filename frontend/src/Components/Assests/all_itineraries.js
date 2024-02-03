import p1 from './place1.jpg'
import p2 from './place2.jpg'
import p3 from './place3.jpg'
import p4 from './place4.jpg'
import p5 from './place5.jpg'
import p6 from './place6.jpg'
import p7 from './place7.jpg'
import p8 from './place8.jpg'
import p9 from './place9.jpg'
import p10 from './place10.jpg'
import p11 from './place11.jpg'
import p12 from './place12.jpg'
import p13 from './place13.jpg'
import p14 from './place14.jpg'
import p15 from './place15.jpg'
import p16 from './place16.jpg'
import p17 from './place17.jpg'
import p18 from './place18.jpg'
import p19 from './place19.jpg'
import p20 from './place20.jpg'
// import p21 from './place21.jpg'
// import p22 from './place22.jpg'
// import p23 from './place23.jpg'
// import p24 from './place24.jpg'
// import p25 from './place25.jpg'
// import p26 from './place26.jpg'
// import p27 from './place27.jpg'
// import p28 from './place28.jpg'
// import p29 from './place29.jpg'
// import p30 from './place30.jpg'
// import p31 from './place31.jpg'
// import p32 from './place32.jpg'



let all_itineraries = [
    {
        id: 1,
        name: 'Baguio',
        country: '3 Days,Baguio',
        date:'Jan 2024,Prince Trinidad',
        views:90,
        image: p1,
        category: 'itinerary'
    },
    {
        id: 2,
        name: 'Hiroshima Year-End',
        country: '3 days,japan',
        date:'Dec 2023,Ichda Arini Dinana',
        views:100,
        image: p2,
        category: 'itinerary'
    },
    {
        id: 3,
        name: 'Shillong Trip',
        country: '8 Days,India',
        date:'Dec 2023,Sayan Biswas',
        views:102,
        image: p3,
        category: 'itinerary'
    },
    {
        id: 4,
        name: 'Rome Christmas',
        country: '4 days,Italy',
        date:'Dec 2023,Nenda Fedhilah',
        views:1000,
        image: p4,
        category: 'itinerary'
    },
    {
        id: 5,
        name: 'Bonjour',
        country: '11 Days,France',
        date:'Dec 2023,Wilson Yeap Goh',
        views:123,
        image: p5,
        category: 'itinerary'
    },
    {
        id: 6,
        name: 'Toronto Tour',
        country: '10 days,Toronto NSW',
        date:'Dec 2023,K D M Anirudh',
        views:130,
        image: p6,
        category: 'itinerary'
    },
    {
        id: 7,
        name: 'Umroh Jogja',
        country: '3 Days,Yogyakarta',
        date:'Dec 2023,Karina Indra',
        views:143,
        image: p7,
        category: 'itinerary'
    },
    {
        id: 8,
        name: 'Singapore Trip',
        country: '5 Days,Singapore',
        date:'Nov 2023,Barly',
        views:456,
        image: p8,
        category: 'itinerary'
    },
    {
        id: 9,
        name: 'Kyoto Culture',
        country: '4 Days,Kyoto',
        date:'Nov 2023,Trip Team',
        views:123,
        image: p9,
        category: 'itinerary'
    },
    {
        id: 10,
        name: 'Best of tokyo',
        country: '7 Days,Tokyo',
        date:'Nov 2023,Team Trip',
        views:1200,
        image: p10,
        category: 'itinerary'
    },
    {
        id: 11,
        name: 'Osaka & Nara',
        country: '3 Days,Osaka Nara',
        date:'Nov 2023,Team Trip',
        views:1200,
        image: p11,
        category: 'itinerary'
    },
    {
        id: 12,
        name: 'Japan',
        country: '15 Days,Japn',
        date:'Nov 2023,Faye',
        views:56,
        image: p12,
        category: 'itinerary'
    },
    {
        id: 13,
        name: 'London',
        country: '5 Days,London',
        date:'Nov 2023',
        views:1400,
        image: p13,
        category: 'itinerary'
    },
    {
        id: 14,
        name: 'Canada',
        country: '15 Days,Canada',
        date:'Nov 2023',
        views:453,
        image: p14,
        category: 'itinerary'
    },
    {
        id: 15,
        name: 'Singapore',
        country: '10 days,Singapore',
        date:'Oct 2023',
        views:435,
        image: p15,
        category: 'itinerary'
    },
    {
        id: 16,
        name: 'London',
        country: '20 Days,London',
        date:'sep 2023',
        views:56,
        image: p16,
        category: 'itinerary'
    },
    {
        id: 17,
        name: 'Dubai Trip',
        country: '11 Days,Dubai',
        date:'Oct 2020',
        views:157,
        image: p17,
        category: 'itinerary'
    },
    {
        id: 18,
        name: 'Kuala Lumpur',
        country: '4 Days,Lumpur',
        date:'Sep 2023',
        views:450,
        image: p18,
        category: 'itinerary'
    },
    {
        id: 19,
        name: 'Italy Trip',
        country: '5 Days,Italy',
        date:'Oct 2023',
        views:342,
        image: p19,
        category: 'itinerary'
    },
    {
        id: 20,
        name: 'Malta',
        country: '7 Days,Malta',
        date:'Oct 2020,Rita Romes',
        views:220,
        image: p20,
        category: 'itinerary'
    },
    // {
    //     id: 21,
    //     name: 'Hoi An Ancient Town',
    //     country: 'Vietnam',
    //     image: p21,
    //     category: 'itinerary'
    // },
    // {
    //     id: 22,
    //     name: 'Maglev Railway Station',
    //     country: 'China',
    //     image: p22,
    //     category: 'itinerary'
    // },
    // {
    //     id: 23,
    //     name: 'Bazaruto Archipelago',
    //     country: 'Mozambique',
    //     image: p23,
    //     category: 'itinerary'
    // },
    // {
    //     id: 24,
    //     name: 'Amber Fort',
    //     country: 'India',
    //     image: p24,
    //     category: 'itinerary'
    // },
    // {
    //     id: 25,
    //     name: 'Isle of Skye',
    //     country: 'United Kingdom',
    //     image: p25,
    //     category: 'itinerary'
    // },
    // {
    //     id: 26,
    //     name: 'Redwoods',
    //     country: 'United States',
    //     image: p26,
    //     category: 'itinerary'
    // },
    // {
    //     id: 27,
    //     name: 'Rouffignac Cave',
    //     country: 'France',
    //     image: p27,
    //     category: 'itinerary'
    // },
    // {
    //     id: 28,
    //     name: 'Actun Tunichil Muknal',
    //     country: 'Belize',
    //     image: p28,
    //     category: 'itinerary'
    // },
    // {
    //     id: 29,
    //     name: 'Giants Causeway',
    //     country: 'United Kingdom',
    //     image: p29,
    //     category: 'itinerary'
    // },
    // {
    //     id: 30,
    //     name: 'Snowdonia National Park',
    //     country: 'United Kingdom',
    //     image: p30,
    //     category: 'itinerary'
    // },
    // {
    //     id: 31,
    //     name: 'Acropolis of Athens',
    //     country: 'Greece',
    //     image: p31,
    //     category: 'itinerary'
    // },
    // {
    //     id: 32,
    //     name: 'Band-e-Amir',
    //     country: 'Afghanistan',
    //     image: p32,
    //     category: 'itinerary'
    // },
]
export default all_itineraries