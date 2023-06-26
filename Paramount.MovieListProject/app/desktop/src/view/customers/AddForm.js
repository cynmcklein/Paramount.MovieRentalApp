Ext.define('Paramount.MovieListProject.view.customers.AddForm', {
    extend: 'Ext.window.Window',
    xtype: 'addcustomersform',
    title: 'Add Customer',
    layout: 'fit',
    //defaultType: 'textfield',
    labelWidth: 150,
    viewModel: { type: 'customerviewmodel' },
    controller: {type: 'customerviewcontroller'},
    
    url: 'http://localhost:5208/Customer',
    

    items: [
        {
            xtype: 'textfield',
            label: 'Customer Name',
            name: 'customerName',
            allowBlank: false,  
        },
        {
            xtype: 'textfield',
            label: 'Address',
            name: 'address',
            allowBlank: false
        },
        {
            xtype: 'combobox',
            label: 'Membership',
            name: 'member',
            store: {
                fields: ['value'],
                data: [
                    {value: 'Yes'},
                    {value: 'No'}
                ]
            },
            queryMode: 'local',
            displayField: 'value',
            valueField: 'value',
            editable: false,
            allowBlank: false
        },
        {
            xtype: 'textfield',
            label: 'Phone',
            name: 'phone',
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