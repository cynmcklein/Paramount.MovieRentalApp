Ext.define('IrelyMovieRentalAppFinal.view.movies.MovieViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.movieviewcontroller',

    onEditCancelled: function (editor, value, startValue, eOpts) {
        var user = Ext._find(value.record.store.config.data.items, { name: value.record.data.name });
        Ext.Msg.confirm('Confirm', value.record.data.name + ': ' + user.phone + ' is phone number', 'onConfirm', this);


    },
    onClickData: function (btn) {
    const window = btn.up('window');
    const movieNameField = window.down('[name=name]');
    const genreField = window.down('[name=genre]');
    const daysAvailableField = window.down('[name=daysAvailable]');
    const priceField = window.down('[name=price]');

    if (
        movieNameField && movieNameField.getValue() &&
        genreField && genreField.getValue() &&
        daysAvailableField && daysAvailableField.getValue() &&
        priceField && priceField.getValue()
    ) {
        // Generate a new unique ID for the new data
        const newMovieId = Math.floor(Math.random() * 100000);

        Ext.Ajax.request({
        url: window.url,
        method: 'POST',
        jsonData: {
            movieId: newMovieId, // Include the generated ID in the data being sent to the server
            name: movieNameField.getValue(),
            genre: genreField.getValue(),
            daysAvailable: daysAvailableField.getValue(),
            price: priceField.getValue()
        },
        success: (response) => {
            Ext.Msg.alert('Success', 'Movie has been added.');
            pop = Ext.create('IrelyMovieRentalAppFinal.view.movies.MovieView');
            pop.refresh()
        },
        failure: (response) => {
            Ext.Msg.alert('Failed', 'Failed to add movie.');
        }
        });
        window.close();
    }
    },

    checkHandler: function(column, rowIndex, checked, record, e, eOpts) {
        if (checked) {
            // Get the value of the movieId field from the record and set it as a property
            var movieId = record.get('movieId');
            record.set('selected', true);
            record.set('selectedMovieId', movieId);
        } else {
            record.set('selected', false);
            record.set('selectedMovieId', null);
        }
    },
 


//url: 'http://localhost:5208/Movies/MovieId?/MovieId=' + ids,
    deleteHandler: function() {
        var grid = this.getView(),
            store = grid.getStore(),
            records = store.query('selected', true).getRange();

        if (records.length > 0) {
        Ext.Msg.confirm('Confirm', 'Are you sure you want to delete the selected movie(s)?', function(btn) {
            if (btn === 'yes') {
            for (var i = 0; i < records.length; i++) {
                store.remove(records[i]);
            }
            store.sync();
            }
        });
        } else {
        Ext.Msg.alert('Error', 'Please select at least one movie to delete.');
        }
    },

     onSearchMovie: function(field, newValue, oldValue, eOpts) {
        var grid = this.getView(),
            store = grid.getStore();

        store.clearFilter();

        if (newValue) {
        var matcher = new RegExp(Ext.String.escapeRegex(newValue), 'i');
        store.filterBy(function(record) {
            return matcher.test(record.get('name')) ||
                matcher.test(record.get('genre'));
        });
        }
    }


    // addPopup: function() {
    //     //var addMoviesForm = Ext.create('IrelyMovieRentalAppFinal.view.movies.AddMoviesForm');
    //     addMoviesForm.show();
    // }


});
