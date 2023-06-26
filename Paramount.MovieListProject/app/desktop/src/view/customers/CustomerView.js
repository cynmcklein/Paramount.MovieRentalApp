Ext.define('Paramount.MovieListProject.view.customers.CustomerView',{
    extend: 'Ext.grid.Grid',
    xtype: 'customerview',
    cls: 'customerview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'customerviewcontroller'},
    viewModel: {type: 'customerviewmodel'},
    store: { type: 'customerviewstore' },
    
    grouped: true,
    groupFooter: {
        xtype: 'gridsummaryrow'
    },

 items: [

        {
        
            xtype: 'button',
            text: 'Add',
            handler: function () {
                    pop = Ext.create('Paramount.MovieListProject.view.customers.AddForm');
                    pop.show()
                console.warn("add form customers")
                
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
            label: 'Search Customer',
            //allowBlank: false,
            docked: 'top',
            position: 'right',
             listeners: {
                change: 'onSearchMovie'
            }
        },
        // {
            
        //     xtype: 'button',
        //     itemId: 'add',
        //     text: 'Edit',
        //     iconCls: 'x-fa-fa-plus',
        //     reference: 'btnAdd',
        //     handler: 'addPopup',
        //     docked: 'top',
        //     width: '130',
            

        // },
        // {
            
        //     xtype: 'button',
        //     itemId: 'delete',
        //     text: 'Delete',
        //     iconCls: 'delete',
        //     reference: 'btnEdit',
        //     handler: 'onClickDelete',
        //     docked: 'top',
        //     width: '130',


        // },
        
    
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
        dataIndex: 'customerId',
        checked: false,
        //uncheckedValue: false,
        //disabled: true
        listeners:{
            checkchange: 'checkHandler'
            },
        
     


        },
        {
            text: 'Name',
            dataIndex: 'customerName',
            editable: true,
            width: 100,
            cell: { userCls: 'bold' },
            flex: 1
        },
        {text: 'Address',dataIndex: 'address',editable: true, width: 230},
        {
            text: 'Phone',
            dataIndex: 'phone',
            editable: true,
            width: 150,
            flex: 1
        },
        {
            text: 'Membership',
            dataIndex: 'member',
            editable: true,
            width: 150,
            flex: 1
        },
        // {
        // //handler: 'onClickDelete',
        //     width: 100,
        // textColor: 'red',
        // cell: {
            
        //     xtype: "button",
        //     text: 'Delete',
        //     handler: 'onClickDelete',
        //     style:{
        //         color: 'red'
        //     } 
            
        //     }
        // }



        
    ],

    selModel: {
        xtype: 'checkbox',
        checkOnly: true,
        mode: 'SINGLE',
        injectCheckbox: 'first',

        itemId: 'delete',
                    text: 'asdasd',
                    iconCls: 'delete',
                    reference: 'btnEdit',
                    handler: 'onClickDelete',
                    docked: 'top',
                    width: '130',
    },





    listeners: {
        canceledit: 'onEditCancelled'
    }
});
