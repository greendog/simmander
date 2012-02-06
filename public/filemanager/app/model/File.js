Ext.define('FileManager.model.File', {
    extend:'Ext.data.Model',
    idProperty:'id',
    fields: ['id', 'name', 'size', 'type'],
    proxy:{
        extraParams: {dir: 'media'},
        actionMethods:{
            create:'POST',
            destroy:'POST',
            read:'POST',
            update:'POST'
        }
        ,type: 'ajax'
        ,api: {
            read: '/list.json',
            create: '/create.json',
            update: '/update.json',
            destroy: '/destroy.json'
        }
        ,reader: {
            type: 'json',
            successProperty: 'success',
            root: 'items'
        }
        ,writer: {
            type: 'json',
            writeAllFields: false,
            root: 'items'
        }

    }

});