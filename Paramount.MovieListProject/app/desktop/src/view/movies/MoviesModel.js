Ext.define('IrelyMovieRentalAppFinal.view.movies.MoviesModel', {
    extend: 'Ext.data.Model',

    //store: 'IrelyMovieRentalAppFinal.view.movies.MovieViewStore',
    fields: [
        'name', 'daysAvailable', 'price', 'genre',
        
    ],

    // proxy: {
    //     type: 'rest',
    //     url: 'http://localhost:5208/Movies',
    //     method:{ 
    //     read: 'GET, POST, DELETE, PUT',
    //     },
    //     reader: {
    //         type: 'json',
    //         root: 'data'
    //     }
    // }

});