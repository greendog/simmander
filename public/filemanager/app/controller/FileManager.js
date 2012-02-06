Ext.define('FileManager.controller.FileManager', {

    extend:'Ext.app.Controller',
    models:[
        'File'
    ],
    stores:[
        'LeftFilesStore',
        'RightFilesStore'
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
                itemclick: this.onItemClick
            },
            'rightList':{
                itemclick: this.onItemClick
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
        if(record.data.type == 'file') return false;
        var operation = new Ext.data.Operation({action: 'read'});
        var proxy = view.getStore().proxy;
        proxy.extraParams = {dir: record.data.id}
        proxy.read(operation);
        proxy.getReader().getResponseData = function(response) {
            var jsonData = Ext.JSON.decode(response.responseText);
            var store = view.getStore();
            store.loadRawData(jsonData.items);
            return jsonData['items'];
        }
    }
});
