Ext.define('FileManager.store.LeftFilesStore', {
    extend:'Ext.data.Store',
    model:'FileManager.model.File',
    storeId: 'leftFileStoreID',
    autoLoad: true,
    autoSync: true,
    alias:'stores.leftFilesStore'
});