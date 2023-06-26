Ext.define('IrelyMovieRentalAppFinal.view.movies.AddMoviesForm', {
    extend: 'Ext.window.Window',
    xtype: 'addmoviesform',
    title: 'Add Movie',
    layout: 'fit',
    defaultType: 'textfield',
    labelWidth: 150,
    viewModel: { type: 'movieviewmodel' },
    controller: {type: 'movieviewcontroller'},
    
    url: 'http://localhost:5208/Movies',
    

    items: [
        {
            reference: 'moviename',
            label: 'Movie',
            name: 'name',
            allowBlank: false,  
        },
        {

            label: 'Genre',
            name: 'genre',
            allowBlank: false
        },
        {
            label: 'Days Available',
            name: 'daysAvailable',
            allowBlank: false
        },
        {
            label: 'Price',
            name: 'price',
            allowBlank: false
        },
    ],

    buttons: [
        {
            text: 'Submit',
            formBind: true,
            handler: 'onClickData'
        },
        {
            text: 'Cancel',
            handler: function () {
                this.up('window').close();
            }
        }

    ]
});