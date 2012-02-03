Ext.define('FileManager.model.Folder', {
    extend:'Ext.data.Model',
    hasMany: {model: 'FileManager.model.File', name: 'files'},
    idProperty:'id',
    proxy:{
        actionMethods:{
            create:'POST',
            destroy:'POST',
            read:'POST',
            update:'POST'
        }
        ,type: 'ajax'
        ,api: {
            read: '/get_folders.json',
            create: '/get_folders.json/create',
            update: '/get_folders.json/update',
            destroy: '/get_folders.json/destroy'
        }
        ,reader: {
            type: 'json',
            successProperty: 'success',
            root: 'folders',
            messageProperty: 'message',
            getResponseData: function(response) {
                var jsonData = Ext.JSON.decode(response.responseText);
                var filesStore = Ext.data.StoreManager.lookup('FilesStore');
                filesStore.loadRawData(jsonData.files);
                return jsonData['folders'];
            }
        }
        ,writer: {
            type: 'json',
            writeAllFields: false,
            root: 'folders'
        }

    },
    fields:[
        {name:'leaf', type:'boolean'},
        {name:'id', type:'string'},
        {name:'text', type:'string'}
    ]
});