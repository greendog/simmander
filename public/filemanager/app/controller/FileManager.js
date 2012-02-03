Ext.define('FileManager.controller.FileManager', {

    extend:'Ext.app.Controller',
    models:[
        'Folder'
        ,'File'
    ],
    stores:[
        'FoldersStore'
        ,'FilesStore'
    ],
    views:[
        'filebrowser.Left',
        'filebrowser.Right'
    ],
    refs:[
        {
            ref:'leftPanel',
            selector:'leftList'
        },
        {
            ref:'rightPanel',
            selector:'rightList'
        }
    ],
    init:function (app) {
        this.control({
            'leftList':{
                itemclick: this.onItemClick,
                itemexpand: this.onExpandFolder
            },
            '#refreshBtn':{
                click: this.onRefresh
            }
        });

    },
    onRefresh:function(btn, e){
        var operation = new Ext.data.Operation({action: 'read'});
        var proxy = this.getLeftPanel().store.proxy;
        proxy.read(operation);
    },
    onItemClick:function (view, record, item, index, event) {
        var operation = new Ext.data.Operation({action: 'read'});
        var proxy = this.getLeftPanel().store.proxy;
        proxy.extraParams = {node: record.data.id}
        proxy.read(operation, function(result, request){
            record.expand();
        });
    },
    onExpandFolder:function(btn, e){
     //   alert('on expand');
    }
});
