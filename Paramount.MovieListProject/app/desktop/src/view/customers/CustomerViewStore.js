Ext.define('Paramount.MovieListProject.view.customers.CustomerViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.customerviewstore',
    autoLoad: true,
    fields: [
        'customerName', 'address', 'member', 'phone'
    ],
    // groupField: 'Member',
    // data: { items: [
    //     { name: 'Cyan Pereyra',   Address: "jeanluc.picard@enterprise.com", Member: 'Non-Member', Phone: "555-111-1111"},
    //     { name: 'Desiree Ardina', Address: "worf.moghsson@enterprise.com", Member: 'Non-Member', Phone: "555-222-2222" },
    //     { name: 'Machish',     Address: "deanna.troi@enterprise.com", Member: 'Member',  Phone: "555-333-3333" },
    //     { name: 'Chloe',       Address: "mr.data@enterprise.com", Member: 'Member',  Phone: "555-444-4444" }
    // ]},
    proxy: {
        type: 'rest',
        reader: {
            type: 'json',
            rootProperty: 'items'
        },
        url: 'http://localhost:5208/Customer',
        method:{ 
            read: 'GET, POST, DELETE, PUT',
        },
    }
});
