Ext.define('FileManager.store.RightFilesStore', {
    extend:'Ext.data.Store',
    model:'FileManager.model.File',
    storeId: 'rightFileStoreID',
    autoLoad: true,
    autoSync: true,
    alias:'stores.rightFilesStore'
});