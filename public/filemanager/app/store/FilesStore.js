Ext.define('FileManager.store.FilesStore', {
    extend:'Ext.data.Store',
    model:'FileManager.model.File',
    storeId: 'fileStoreID',
    alias:'stores.filesStore'
});