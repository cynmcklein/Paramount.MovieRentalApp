Ext.define('Paramount.MovieListProject.view.customers.CustomerViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.customerviewcontroller',

    onEditCancelled: function (editor, value, startValue, eOpts) {
        var user = Ext._find(value.record.store.config.data.items, { name: value.record.data.name });
        Ext.Msg.confirm('Confirm', value.record.data.name + ': ' + user.phone + ' is phone number', 'onConfirm', this);
    },

    onClickData: function (btn) {
    const window = btn.up('window');
    const customerNameField = window.down('[name=customerName]');
    const addressField = window.down('[name=address]');
    const memberField = window.down('[name=member]');
    const phoneField = window.down('[name=phone]');

    if (
        customerNameField && customerNameField.getValue() &&
        addressField && addressField.getValue() &&
        memberField && memberField.getValue() &&
        phoneField && phoneField.getValue()
        
    )
    
    {
      
        const newCustomerId = Math.floor(Math.random() * 100000);
        const newOrderId = Math.floor(Math.random() * 100000);

        Ext.Ajax.request({
        url: window.url,
        method: 'POST',
        jsonData: {
            customerId: newCustomerId, 
            customerName: customerNameField.getValue(),
            address: addressField.getValue(),
            member: memberField.getValue(),
            phone: phoneField.getValue(),

            orders: [   
                        {
                            orderId: newOrderId,
                            dateRented: null,
                            dateReturned: null,
                            customerId: newCustomerId,
                            //customer: customerNameField.getValue(),
                            orderDetails: []
                        }
                    ]
        },
        success: (response) => {
            Ext.Msg.alert('Success', 'Customer has been added.');
        },
        failure: (response) => {
            Ext.Msg.alert('Failed', 'Failed to add movie.');
        }
        });
        window.close();
        window.location.reload();
    }
    },

    onClickDelete: function () {
        const selection = this.getView().getSelectionModel().getSelection()[0];
        if (selection) {
            const store = this.getViewModel().getStore('storeName');
            store.remove(selection);
        }
    },
    checkHandler: function(column, rowIndex, checked, record, e, eOpts) {
        if (checked) {
            // Get the value of the movieId field from the record and set it as a property
            var movieId = record.get('customerId');
            record.set('selected', true);
            record.set('selectedCustomerId', movieId);
        } else {
            record.set('selected', false);
            record.set('selectedMovieId', null);
        }
    },

    deleteHandler: function() {
        var grid = this.getView(),
            store = grid.getStore(),
            records = store.query('selected', true).getRange();

        if (records.length > 0) {
        Ext.Msg.confirm('Confirm', 'Are you sure you want to delete the selected customer(s)?', function(btn) {
            if (btn === 'yes') {
            for (var i = 0; i < records.length; i++) {
                store.remove(records[i]);
            }
            store.sync();
            }
        });
        } else {
        Ext.Msg.alert('Error', 'Please select at least one customer to delete.');
        }
    },

    onSearchMovie: function(field, newValue, oldValue, eOpts) {
        var grid = this.getView(),
            store = grid.getStore();

        store.clearFilter();

        if (newValue) {
        var matcher = new RegExp(Ext.String.escapeRegex(newValue), 'i');
        store.filterBy(function(record) {
            return matcher.test(record.get('customerName')) ||
                matcher.test(record.get('phone'));
        });
        }
    }
    

});
