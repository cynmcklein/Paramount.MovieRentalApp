// Ext.define('IrelyMovieRentalAppFinal.store.MovieStore', {
//     extend: 'Ext.data.Store',
//     alias: 'store.MovieStore',
//     model: 'IrelyMovieRentalAppFinal.model.Movies',
//     autoload: true,

//     fields:[
//         { name: 'Name' },
//         { name: 'Genre' },
//         { name: 'DaysAvailable' },
//         { name: 'Price' }
        
//     ],

//     proxy: {
//         type: 'ajax',
//         reader: {
//             type: 'json',
//             rootProperty: 'items'
//         },
//         // url: 'http://localhost:1234/stock' // for api
//     }


// });