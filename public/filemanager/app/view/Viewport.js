Ext.define('FileManager.view.Viewport', {
    extend:'Ext.window.Window',
    alias:'widget.myviewport',
    closable:true,
    title:'Файловый менеджер',
    plain:true,
    layout:{
        type:'hbox',
        pack:'start',
        align:'stretch'
    },
    defaults:{ flex:1, frame:false },
    border:false,
    items:[
        {
            xtype:'leftList',
            itemId:'foldersTree'
        },
        {
            xtype:'rightList',
            itemId:'filesList'
        }
    ]
});