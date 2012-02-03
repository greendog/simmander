Ext.define('FileManager.store.FoldersStore', {
    extend:'Ext.data.TreeStore',
    model:'FileManager.model.Folder',
    storeId: 'folderStoreID',
    alias:'stores.foldersStore'
    ,defaultRootId: 'media'
    ,autoLoad:false
    ,autoSync:true,
    root: {
        expanded: false,
        text:'media'
    }
});