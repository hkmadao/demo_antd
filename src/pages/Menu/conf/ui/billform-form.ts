import { TBillFormContent } from '@/models';

const billformConf: TBillFormContent | undefined = {
  action: 1,
  billFormType: 'Single',
  componentModuleName: '系统模块',
  componentName: '系统菜单',
  displayName: '系统菜单',
  idBillForm: 'kq6Col5Iw9c5l9jDMPy6G',
  idComponent: 'hGMwK2ytF8GfF4kFrvSv2',
  idComponentModule: '-IKcXCfnf_Gc2HSZEgs2v',
  idProject: 'hLlXlmUNOcjAaDoWxZzrN',
  idSubProject: 'tuz4_94BGuVuxYxxL6a_r',
  name: 'Menu',
  projectName: 'Jpa基础项目',
  subProjectName: '系统模型',
  configList: {
    idBillForm: '3woxC1R-xD9BvvowtlSuC',
    name: 'newBill',
    displayName: '新表单',
    header: [
      {
        idBillFormTab: 'FTwNqhGQ8hAW_uod28nrD',
        entityTypeName: 'Menu',
        tabCode: 'menu',
        firstUpperTabCode: 'Menu',
        tabName: '系统菜单',
        metadataAttrName: 'GNN87UJmxpe81pxBwkO6s',
        tabClassName: 'Menu',
        firstLowerTabClassName: 'menu',
        tabAttrName: 'menu',
        firstUpperTabAttrName: 'Menu',
        billFormFields: [
          {
            idBillFormField: 'D0lBNPCn97a2Ai7A-da1C',
            name: 'idMenu',
            dataType: 'PK',
            displayName: '系统菜单id',
            fgMainProperty: true,
            showOrder: 0,
            fgTreeAttr: false,
            fgDisplay: true,
            readonly: false,
            inputType: 'Input',
            typeScriptType: 'string',
            width: 150,
            textLen: 140,
            placeholder: '系统菜单id',
          },
          {
            idBillFormField: '61q_nOUWqoLTfhkWlrWWV',
            name: 'name',
            dataType: 'String',
            displayName: '名称',
            fgMainProperty: false,
            showOrder: 1,
            fgTreeAttr: false,
            fgDisplay: true,
            readonly: false,
            inputType: 'Input',
            typeScriptType: 'string',
            width: 150,
            textLen: 140,
            placeholder: '名称',
          },
          {
            idBillFormField: 'vACdM27aZWZegyOik111O',
            name: 'displayName',
            dataType: 'String',
            displayName: '显示名称',
            fgMainProperty: false,
            showOrder: 2,
            fgTreeAttr: false,
            fgDisplay: true,
            readonly: false,
            inputType: 'Input',
            typeScriptType: 'string',
            width: 150,
            textLen: 140,
            placeholder: '显示名称',
          },
          {
            idBillFormField: 'zDNjuzYNHC-TV3JzdV_qC',
            name: 'fgShow',
            dataType: 'Boolean',
            displayName: '显示标志',
            fgMainProperty: false,
            showOrder: 3,
            fgTreeAttr: false,
            fgDisplay: true,
            readonly: false,
            inputType: 'Checkbox',
            typeScriptType: 'boolean',
            width: 150,
            textLen: 140,
            placeholder: '显示标志',
            defaultValue: 'true',
          },
          {
            idBillFormField: 'RjLs-SRmbpmKswyOfsiO3',
            name: 'query',
            dataType: 'String',
            displayName: '路由参数',
            fgMainProperty: false,
            showOrder: 4,
            fgTreeAttr: false,
            fgDisplay: true,
            readonly: false,
            inputType: 'Input',
            typeScriptType: 'string',
            width: 150,
            textLen: 140,
            placeholder: '路由参数',
          },
          {
            idBillFormField: 'lvUQHNaFO8yU2ZPC2vv4q',
            name: 'menuType',
            dataType: 'String',
            displayName: '菜单类型',
            fgMainProperty: false,
            showOrder: 5,
            fgTreeAttr: false,
            fgDisplay: true,
            readonly: false,
            inputType: 'Input',
            typeScriptType: 'string',
            width: 150,
            textLen: 140,
            placeholder: '菜单类型',
          },
          {
            idBillFormField: '6Cx2fZBqSSh2ile9As_ZW',
            name: 'fgActive',
            dataType: 'Boolean',
            displayName: '启用标志',
            fgMainProperty: false,
            showOrder: 6,
            fgTreeAttr: false,
            fgDisplay: true,
            readonly: false,
            inputType: 'Checkbox',
            typeScriptType: 'boolean',
            width: 150,
            textLen: 140,
            placeholder: '启用标志',
            defaultValue: 'true',
          },
          {
            idBillFormField: 'leSPCA4Mbo0V4YBrDgSyQ',
            name: 'webPerms',
            dataType: 'String',
            displayName: '前端权限标识',
            fgMainProperty: false,
            showOrder: 7,
            fgTreeAttr: false,
            fgDisplay: true,
            readonly: false,
            inputType: 'Input',
            typeScriptType: 'string',
            width: 150,
            textLen: 140,
            placeholder: '前端权限标识',
          },
          {
            idBillFormField: '9X0fB_dEEU2TbHcljC8W3',
            name: 'servicePerms',
            dataType: 'String',
            displayName: '后台权限标识',
            fgMainProperty: false,
            showOrder: 8,
            fgTreeAttr: false,
            fgDisplay: true,
            readonly: false,
            inputType: 'Input',
            typeScriptType: 'string',
            width: 150,
            textLen: 140,
            placeholder: '后台权限标识',
          },
          {
            idBillFormField: '5_FmBTblvixOv_fBYHF-L',
            name: 'idParent',
            dataType: 'InternalRef',
            displayName: '上级系统菜单',
            fgMainProperty: false,
            showOrder: 9,
            refAttributeName: 'parent',
            readonly: false,
            inputType: 'Ref',
            refConfig: {
              refStyle: 'table',
              title: '系统菜单',
              displayProp: 'displayName',
              backWriteProp: 'idMenu',
              tableRef: {
                dataUri: '/menu/aqPage',
                tableMainProp: 'idMenu',
                idComponentEntity: '5xAwWmt5jQoncG4sUHaJs',
                ceDisplayName: '系统菜单',
                refColumns: [
                  {
                    idBillRefColumn: 'SFMBJMR6my4-TCoYx-gxv',
                    name: 'name',
                    displayName: '名称',
                  },
                  {
                    idBillRefColumn: 'egMPRqsTS1W5xt6tU8anw',
                    name: 'displayName',
                    displayName: '显示名称',
                  },
                  {
                    idBillRefColumn: 'pJl_ZtYoqEzxQmm75cdpj',
                    name: 'fgShow',
                    displayName: '显示标志',
                  },
                  {
                    idBillRefColumn: '159YEBT7vwN07OcKUTBnU',
                    name: 'fgActive',
                    displayName: '启用标志',
                  },
                ],
              },
            },
          },
        ],
        refType: 'Array',
        orderInfoList: [
          {
            idOrderInfo: 'JEMcqL_oOYWB6nQ5wEaGV',
            orderProperty: 'idMenu',
            orderType: 'ASC',
          },
        ],
        fgDefaultTab: true,
        mainProperty: 'idMenu',
        tabIndex: 0,
      },
    ],
    body: [],
    tail: [],
    mainClass: 'Menu',
    mainProperty: 'idMenu',
    uriConf: {
      page: '/menu/aqPage',
      fetchById: '/menu/getById',
      batchRemove: '/menu/batchRemove',
    },
  },
  configForm: {
    idBillForm: '3woxC1R-xD9BvvowtlSuC',
    name: 'newBill',
    displayName: '新表单',
    header: [
      {
        idBillFormTab: 'FTwNqhGQ8hAW_uod28nrD',
        entityTypeName: 'Menu',
        tabCode: 'menu',
        firstUpperTabCode: 'Menu',
        tabName: '系统菜单',
        metadataAttrName: 'GNN87UJmxpe81pxBwkO6s',
        tabClassName: 'Menu',
        firstLowerTabClassName: 'menu',
        tabAttrName: 'menu',
        firstUpperTabAttrName: 'Menu',
        billFormFields: [
          {
            idBillFormField: 'D0lBNPCn97a2Ai7A-da1C',
            name: 'idMenu',
            dataType: 'PK',
            displayName: '系统菜单id',
            fgMainProperty: true,
            showOrder: 0,
            fgTreeAttr: false,
            fgDisplay: true,
            readonly: false,
            inputType: 'Input',
            typeScriptType: 'string',
            width: 150,
            textLen: 140,
            placeholder: '系统菜单id',
          },
          {
            idBillFormField: '61q_nOUWqoLTfhkWlrWWV',
            name: 'name',
            dataType: 'String',
            displayName: '名称',
            fgMainProperty: false,
            showOrder: 1,
            fgTreeAttr: false,
            fgDisplay: true,
            readonly: false,
            inputType: 'Input',
            typeScriptType: 'string',
            width: 150,
            textLen: 140,
            placeholder: '名称',
          },
          {
            idBillFormField: 'vACdM27aZWZegyOik111O',
            name: 'displayName',
            dataType: 'String',
            displayName: '显示名称',
            fgMainProperty: false,
            showOrder: 2,
            fgTreeAttr: false,
            fgDisplay: true,
            readonly: false,
            inputType: 'Input',
            typeScriptType: 'string',
            width: 150,
            textLen: 140,
            placeholder: '显示名称',
          },
          {
            idBillFormField: 'zDNjuzYNHC-TV3JzdV_qC',
            name: 'fgShow',
            dataType: 'Boolean',
            displayName: '显示标志',
            fgMainProperty: false,
            showOrder: 3,
            fgTreeAttr: false,
            fgDisplay: true,
            readonly: false,
            inputType: 'Checkbox',
            typeScriptType: 'boolean',
            width: 150,
            textLen: 140,
            placeholder: '显示标志',
            defaultValue: 'true',
          },
          {
            idBillFormField: 'RjLs-SRmbpmKswyOfsiO3',
            name: 'query',
            dataType: 'String',
            displayName: '路由参数',
            fgMainProperty: false,
            showOrder: 4,
            fgTreeAttr: false,
            fgDisplay: true,
            readonly: false,
            inputType: 'Input',
            typeScriptType: 'string',
            width: 150,
            textLen: 140,
            placeholder: '路由参数',
          },
          {
            idBillFormField: 'lvUQHNaFO8yU2ZPC2vv4q',
            name: 'menuType',
            dataType: 'String',
            displayName: '菜单类型',
            fgMainProperty: false,
            showOrder: 5,
            fgTreeAttr: false,
            fgDisplay: true,
            readonly: false,
            inputType: 'Input',
            typeScriptType: 'string',
            width: 150,
            textLen: 140,
            placeholder: '菜单类型',
          },
          {
            idBillFormField: '6Cx2fZBqSSh2ile9As_ZW',
            name: 'fgActive',
            dataType: 'Boolean',
            displayName: '启用标志',
            fgMainProperty: false,
            showOrder: 6,
            fgTreeAttr: false,
            fgDisplay: true,
            readonly: false,
            inputType: 'Checkbox',
            typeScriptType: 'boolean',
            width: 150,
            textLen: 140,
            placeholder: '启用标志',
            defaultValue: 'true',
          },
          {
            idBillFormField: 'leSPCA4Mbo0V4YBrDgSyQ',
            name: 'webPerms',
            dataType: 'String',
            displayName: '前端权限标识',
            fgMainProperty: false,
            showOrder: 7,
            fgTreeAttr: false,
            fgDisplay: true,
            readonly: false,
            inputType: 'Input',
            typeScriptType: 'string',
            width: 150,
            textLen: 140,
            placeholder: '前端权限标识',
          },
          {
            idBillFormField: '9X0fB_dEEU2TbHcljC8W3',
            name: 'servicePerms',
            dataType: 'String',
            displayName: '后台权限标识',
            fgMainProperty: false,
            showOrder: 8,
            fgTreeAttr: false,
            fgDisplay: true,
            readonly: false,
            inputType: 'Input',
            typeScriptType: 'string',
            width: 150,
            textLen: 140,
            placeholder: '后台权限标识',
          },
          {
            idBillFormField: '5_FmBTblvixOv_fBYHF-L',
            name: 'idParent',
            dataType: 'InternalRef',
            displayName: '上级系统菜单',
            fgMainProperty: false,
            showOrder: 9,
            refAttributeName: 'parent',
            readonly: false,
            inputType: 'Ref',
            refConfig: {
              refStyle: 'table',
              title: '系统菜单',
              displayProp: 'displayName',
              backWriteProp: 'idMenu',
              tableRef: {
                dataUri: '/menu/aqPage',
                tableMainProp: 'idMenu',
                idComponentEntity: '5xAwWmt5jQoncG4sUHaJs',
                ceDisplayName: '系统菜单',
                refColumns: [
                  {
                    idBillRefColumn: 'SFMBJMR6my4-TCoYx-gxv',
                    name: 'name',
                    displayName: '名称',
                  },
                  {
                    idBillRefColumn: 'egMPRqsTS1W5xt6tU8anw',
                    name: 'displayName',
                    displayName: '显示名称',
                  },
                  {
                    idBillRefColumn: 'pJl_ZtYoqEzxQmm75cdpj',
                    name: 'fgShow',
                    displayName: '显示标志',
                  },
                  {
                    idBillRefColumn: '159YEBT7vwN07OcKUTBnU',
                    name: 'fgActive',
                    displayName: '启用标志',
                  },
                ],
              },
            },
          },
        ],
        refType: 'Array',
        orderInfoList: [
          {
            idOrderInfo: 'JEMcqL_oOYWB6nQ5wEaGV',
            orderProperty: 'idMenu',
            orderType: 'ASC',
          },
        ],
        fgDefaultTab: true,
        mainProperty: 'idMenu',
        tabIndex: 0,
      },
    ],
    body: [],
    tail: [],
    mainClass: 'Menu',
    mainProperty: 'idMenu',
    uriConf: {
      fetchById: '/menu/getById',
      save: '/menu/add',
      update: '/menu/update',
      dataRemove: '/menu/remove',
    },
  },
};

export { billformConf };
