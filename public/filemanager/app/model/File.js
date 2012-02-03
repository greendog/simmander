Ext.define('FileManager.model.File', {
    extend:'Ext.data.Model',
    belongsTo: 'FileManager.model.Folder',
    fields: ['filename', 'filesize', 'filedate']

});