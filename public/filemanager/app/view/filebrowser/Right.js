Ext.define('FileManager.view.filebrowser.Right', {
    id: 'filesPanel',
    extend:'Ext.grid.Panel',
    alias:'widget.rightList',
    title: 'Файлы',
    store:'FilesStore'
    ,stripeRows: true
    ,initComponent:function() {
        var columns = [
            {
                header:'Name',
                dataIndex:'filename',
                flex:1,
                sortable: true,
                field:
                {
                    xtype:'textfield',
                    allowBlank:false,
                    selectOnFocus:true,
                    minLength:2
                }
            },
            {
                header:'Size',
                dataIndex:'filesize',
                width    : 75,
                field:
                {
                    xtype:'textfield',
                    allowBlank:false,
                    selectOnFocus:true,
                    minLength:2
                }
            },
            {
                header:'Last Modified',
                dataIndex:'filedate',
                flex:2
            }
        ];


        var config = {
            columns: columns
            ,selModel:{
                selType:'rowmodel'
                ,allowDeselect:true
                ,mode:'MULTI'
            }
        };

        Ext.apply(this, config);
        this.callParent(arguments);
    }

});