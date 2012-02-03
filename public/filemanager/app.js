Ext.Loader.setConfig({
    enabled:true,
    paths:{
        FileManager:'filemanager/app'
    }
});

Ext.require([
    'FileManager.view.Viewport'
]);

Ext.application({
    name:'FileManager',
    appFolder:'filemanager/app',
    autoCreateViewport:false,
    controllers:['FileManager'],
    launch:function () {
        this.viewport = Ext.create('FileManager.view.Viewport', {
            width:800, height:300, stateId:'myWindow'
        });
        window[this.name].app = this;

        this.viewport.show();
    }
});