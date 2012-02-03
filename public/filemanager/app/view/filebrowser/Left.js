Ext.define('FileManager.view.filebrowser.Left', {
    extend:'Ext.tree.Panel',
    alias:'widget.leftList',
    title:'Дерево каталогов',
    store:'FoldersStore',
    rootVisible:true,
    animate:true,
    split:true,
    floatable:false,
    useArrows:true,
    fbar: [
        { type: 'button', text: 'Обновить', id: 'refreshBtn' }
    ]
});