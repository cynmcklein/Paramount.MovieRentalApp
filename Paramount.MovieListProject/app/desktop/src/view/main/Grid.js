Ext.define("IrelyMovieRentalAppFinal.view.main.Grid", {
    extend: 'Ext.grid.Grid',
    store: { type: 'MovieStore' },
    controller: 'mainviewcontroller',
    viewModel: {
        type: 'mainviewmodel'
    },
    xtype: 'mainGrid',
    title: 'stocks',

    columns: [
        { name: 'Name', dataIndex: 'Name', flex: 1 },
        { name: 'Genre', dataIndex: 'Genre', flex: 1 },
        { name: 'Days Available', dataIndex: 'DaysAvailable', flex: 1 },
        { name: 'Price', dataIndex: 'Price', flex: 1 },
    ],
    renderTo: Ext.getBody()

});