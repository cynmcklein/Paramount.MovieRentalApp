Ext.define('Paramount.MovieListProject.view.customers.CustomerModel', {
    extend: 'Ext.data.Model',

    store: 'IrelyMovieRentalAppFinal.view.customer.CustomerViewStore',
    fields: [
        'customerName', 'address', 'member', 'phone'
        
    ],

    hasMany: {
        model: 'IrelyMovieRentalAppFinal.view.orders.OrderCustomerModel',
        name: 'orders',
        associationKey: 'orders'
    },
        

    proxy: {
        type: 'rest',
        url: 'http://localhost:5208/Customer',
        reader: {
            type: 'json',
            root: 'data'
        }
    }

});