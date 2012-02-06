Ext.define('FileManager.view.filebrowser.Right', {
    id: 'rightFilesGrid',
    extend:'Ext.grid.Panel',
    alias:'widget.rightList',
    title: 'Файлы',
    store:'RightFilesStore'
    ,stripeRows: true
    ,initComponent:function() {
        var columns = [
            {
                header:'Name',
                dataIndex:'name',
                flex:2,
                sortable: true,
                renderer:renderIcon,
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
                dataIndex:'size',
                flex:1,
                field:
                {
                    xtype:'textfield',
                    allowBlank:false,
                    selectOnFocus:true,
                    minLength:2
                }
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

function renderIcon(value, meta, record, rowindx, colindx, store){
    if(record.data.type == 'folder') var result = '<img class="x-tree-icon x-tree-icon-parent " style="vertical-align:top;margin-top:-2px;" src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" id="ext-gen1105">'+value;
    if(record.data.type == 'file') var result = '<img class="x-tree-icon x-tree-icon-leaf "  style="vertical-align:top;margin-top:-2px;"src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">' + value;
    return result;
}