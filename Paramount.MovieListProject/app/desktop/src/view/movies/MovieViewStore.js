Ext.define('IrelyMovieRentalAppFinal.view.movies.MovieViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.movieviewstore',
    requires: [
        'IrelyMovieRentalAppFinal.view.movies.MoviesModel'
    ],
    model: 'IrelyMovieRentalAppFinal.view.movies.MoviesModel',
    //storeId: 'Movies',
    autoLoad: true,
    // fields: [
    //     'name', 'daysAvailable', 'price', 'genre',

    //     // { name: 'Name'},
    //     // { name: 'DaysAvailable'},
    //     // { name: 'Price'},
    //     // {name: 'Genre'}
    // ],


    // groupField: 'genre', 
    // data: { items: [
    //     { name: 'Cyan Pereyra',   DaysAvailable: "jeanluc.picard@enterprise.com", price: "555-111-1111", genre: "Action" },
    //     { name: 'Desiree Ardina', DaysAvailable: "worf.moghsson@enterprise.com",  price: "555-222-2222", genre: "Action" },
    //     { name: 'Machish',     DaysAvailable: "deanna.troi@enterprise.com",    price: "555-333-3333", genre: "Drama" },
    //     { name: 'Chloe',       DaysAvailable: "mr.data@enterprise.com",        price: "555-444-4444", genre: "Comedy" }
    // ]},

    
    proxy: {
        type: 'rest',
        url: 'http://localhost:5208/Movies',
        method:{ 
        read: 'GET, POST, DELETE, PUT',
        },
        writer: {
            type: 'json',
            rootProperty: 'data'   
        },
    },

    autoSync: true,

    remoteSort: true,
});
