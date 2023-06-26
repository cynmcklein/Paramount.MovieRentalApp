Ext.define('IrelyMovieRentalAppFinal.view.movies.MovieView',{
    extend: 'Ext.grid.Grid',
    xtype: 'movieview',
    cls: 'movieview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'movieviewcontroller'},
    viewModel: {type: 'movieviewmodel'},
    store: { type: 'movieviewstore' },
    
    requires: [
        'IrelyMovieRentalAppFinal.view.movies.AddMoviesForm',

    ], 

    grouped: true,
    groupFooter: {
        xtype: 'gridsummaryrow'
    },


    items: [

        {
        
            xtype: 'button',
            text: 'Add',
            //iconCls: 'x-fa-fa-plus',
            handler: function () {
                    pop = Ext.create('IrelyMovieRentalAppFinal.view.movies.AddMoviesForm');
                    pop.show()
                console.warn("abc")
                
            },
            docked: 'top',
            position: 'right',
            width: '130',
            style:{
                color: 'blue',
                 backgroundColor: 'cyan'
            } 
            
        },
        {
            xtype: 'button',
            text: 'Delete',
            width: '130',
            docked: 'top',
            position: 'right',
            handler: 'deleteHandler',
            style:{
                color: 'white',
                 backgroundColor: 'red'
            } 
        },

        {
            xtype: 'textfield',
            label: 'Search Movie',
            //allowBlank: false,
            docked: 'top',
            position: 'right',
             listeners: {
                change: 'onSearchMovie'
            }
        },



    
    ],

    plugins: {
        rowedit: {
            autoConfirm: false
        }
    },

    
    columns: [
    
    
        {
        xtype: 'checkcolumn',
        headerCheckbox: true,
        dataIndex: 'movieId',
        checked: false,
        // uncheckedValue: false,
        //disabled: true
        listeners:{
            checkchange: 'checkHandler'
            },
     


        },

    


        {
            text: 'Name',
            dataIndex: 'name',
            editable: true,
            cell: { userCls: 'bold' },
            flex: 1
        },

        {text: 'Days Available', dataIndex: 'daysAvailable',editable: true, width: 230},
        {
            text: 'Price',
            dataIndex: 'price',
            editable: true,
            flex: 1
        },
        {
            text: 'Genre',
            dataIndex: 'genre',
            editable: true,
            flex: 1
        }
        
    ],
    listeners: {
        canceledit: 'onEditCancelled'
    },


})
