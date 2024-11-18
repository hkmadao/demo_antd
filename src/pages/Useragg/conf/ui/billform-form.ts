import { TBillFormContent } from '@/models';

const billformConf: TBillFormContent | undefined = {
  action: 1,
  billFormType: 'Combination',
  componentModuleName: '系统模块',
  componentName: '系统用户聚合',
  displayName: '系统用户聚合',
  idBillForm: 'WZM5vb4SOW0bPJ7szX5iS',
  idComponent: '7rMPYMEiFYWA5tnZcqYUX',
  idComponentModule: 'NUWZLV-HXSQY7up9bY58k',
  idProject: '0000-fe135b87-fb33-481f-81a6-53dff1808f43',
  idSubProject: '0000-bb004a40-3b38-4c9c-9f30-b69a543b0598',
  name: 'Useragg',
  projectName: '模板代码设计工具RUST',
  subProjectName: '模型管理',
  configList: {
    idBillForm: 'dKIcgZpR3TdSOseQHuYmd',
    name: 'newBill',
    displayName: '新表单',
    header: [
      {
        idBillFormTab: 'bDxoZzy_g4DV005jbQ84U',
        tabCode: 'user',
        tabName: '系统用户',
        tabIndex: 0,
        billFormFields: [
          {
            idBillFormField: '14BTZt4rsyW5dIKH01rJH',
            name: 'idUser',
            displayName: '系统用户id',
            fgMainProperty: true,
            showOrder: 0,
            readonly: true,
            dataType: 'PK',
            inputType: 'Input',
            fgDisplay: true,
          },
          {
            idBillFormField: 'mNQCzozHbNNS7fbo-EcOo',
            name: 'account',
            displayName: '登录账号 ',
            fgMainProperty: false,
            showOrder: 1,
            readonly: false,
            dataType: 'String',
            inputType: 'Input',
            fgDisplay: true,
          },
          {
            idBillFormField: 'kvRI8P_0-5_W88ZhXI7r7',
            name: 'phone',
            displayName: '手机号码',
            fgMainProperty: false,
            showOrder: 3,
            readonly: false,
            dataType: 'String',
            inputType: 'Input',
            fgDisplay: true,
          },
          {
            idBillFormField: 'YXfhhzqSllGgxCgc7vEsz',
            name: 'email',
            displayName: '邮箱',
            fgMainProperty: false,
            showOrder: 4,
            readonly: false,
            dataType: 'String',
            inputType: 'Input',
            fgDisplay: true,
          },
          {
            idBillFormField: 'WY679cVQOnje_eF3fgFjQ',
            name: 'name',
            displayName: '姓名 ',
            fgMainProperty: false,
            showOrder: 5,
            readonly: false,
            dataType: 'String',
            inputType: 'Input',
            fgDisplay: true,
          },
          {
            idBillFormField: 'dj76x3ZiOcJ76Z6EXpMwq',
            name: 'nickName',
            displayName: '昵称',
            fgMainProperty: false,
            showOrder: 6,
            readonly: false,
            dataType: 'String',
            inputType: 'Input',
            fgDisplay: true,
          },
          {
            idBillFormField: 'OKTS1owO2p1Gsf7v7R6pb',
            name: 'gender',
            displayName: '性别',
            fgMainProperty: false,
            showOrder: 7,
            readonly: false,
            dataType: 'String',
            inputType: 'Select',
            fgDisplay: true,
            enumConfig: {
              idEnumRef: 'mbCHKncqWwSwawaslswKz',
              enumColumns: [
                {
                  idEnumColumn: '45YagXnCQZDDv23DgyXqi',
                  code: 'FEMALE',
                  displayName: '女',
                  enumValue: 'female',
                },
                {
                  idEnumColumn: '9b36QinkeZp1QdjOg5dGl',
                  code: 'UNKNOWN',
                  displayName: '未知',
                  enumValue: 'unknown',
                },
                {
                  idEnumColumn: 'BhWODLSxiHaeNfXFi-AuH',
                  code: 'MALE',
                  displayName: '男',
                  enumValue: 'male',
                },
              ],
              label: '性别',
              propertyName: 'gender',
              title: '性别',
            },
          },
          {
            idBillFormField: 'fpGP3SoetETikwDhdZnfU',
            name: 'fgActive',
            displayName: '启用标志',
            fgMainProperty: false,
            showOrder: 8,
            readonly: false,
            dataType: 'Boolean',
            inputType: 'Checkbox',
            fgDisplay: true,
          },
        ],
        metadataAttrName: 'user',
        firstUpperTabCode: 'User',
        fgDefaultTab: true,
        tabClassName: 'User',
        firstLowerTabClassName: 'user',
        tabAttrName: 'user',
        firstUpperTabAttrName: 'User',
        mainProperty: 'idUser',
        refType: 'Single',
        orderProperty: 'idUser',
        orderType: 'ASC',
      },
    ],
    body: [
      {
        idAttribute: 'xYPKY44InvfI0gtO97-9L',
        tabClassName: 'UserRole',
        firstLowerTabClassName: 'userRole',
        tabAttrName: 'userRoles',
        firstUpperTabAttrName: 'UserRoles',
        mainProperty: 'idSysUserRole',
        orderProperty: 'idSysUserRole',
        orderType: 'ASC',
        refType: 'Array',
        tabCode: 'userRoles',
        firstUpperTabCode: 'UserRoles',
        tabName: '系统用户',
        billFormFields: [
          {
            idBillFormField: 'E7SN3W4CeqmYeQVPeW0ks',
            name: 'idSysUserRole',
            displayName: '用户角色关系主属性',
            fgMainProperty: true,
            showOrder: 0,
            readonly: true,
            dataType: 'PK',
            inputType: 'Input',
            fgDisplay: true,
          },
          {
            idBillFormField: 'JaAw5c5YWUNlH5f_QCUiW',
            name: 'idRole',
            dataType: 'InternalRef',
            displayName: '角色',
            fgMainProperty: false,
            showOrder: 1,
            refAttributeName: 'role',
            readonly: false,
            inputType: 'Ref',
            refConfig: {
              idBillRef: 'FnQEuSc2TwoqhgfUXKkY0',
              refStyle: 'table',
              backWriteProp: 'idRole',
              displayProp: 'name',
              title: '角色',
              tableRef: {
                dataUri: '/role/aqPage',
                fgPage: true,
                tableMainProp: 'idRole',
                refColumns: [
                  {
                    idBillRefColumn: 'wR9TvkMzea8TnGEH1LfYT',
                    name: 'displayName',
                    displayName: '显示名称',
                  },
                  {
                    idBillRefColumn: 'BVYkTW2WktbPHmZtAHmDR',
                    name: 'name',
                    displayName: '名称',
                  },
                ],
                ceDisplayName: '角色',
              },
            },
            fgDisplay: true,
          },
        ],
        idBillFormTab: 'bFer_2H7rIZBp_r9H2wGD',
        tabIndex: 0,
        fgDefaultTab: true,
      },
    ],
    tail: [],
    uriConf: {
      page: '/userAgg/aqPage',
      fetchById: '/userAgg/getById',
      batchRemove: '/userAgg/batchRemove',
    },
  },
  configForm: {
    idBillForm: 'dKIcgZpR3TdSOseQHuYmd',
    name: 'newBill',
    displayName: '新表单',
    header: [
      {
        idBillFormTab: 'bDxoZzy_g4DV005jbQ84U',
        tabCode: 'user',
        tabName: '系统用户',
        tabIndex: 0,
        billFormFields: [
          {
            idBillFormField: '14BTZt4rsyW5dIKH01rJH',
            name: 'idUser',
            displayName: '系统用户id',
            fgMainProperty: true,
            showOrder: 0,
            readonly: true,
            dataType: 'PK',
            inputType: 'Input',
            fgDisplay: true,
          },
          {
            idBillFormField: 'mNQCzozHbNNS7fbo-EcOo',
            name: 'account',
            displayName: '登录账号 ',
            fgMainProperty: false,
            showOrder: 1,
            readonly: false,
            dataType: 'String',
            inputType: 'Input',
            fgDisplay: true,
          },
          {
            idBillFormField: 'ZDwSoAvPiDGiQ70yi4MLl',
            name: 'userPwd',
            displayName: '用户密码 ',
            fgMainProperty: false,
            showOrder: 2,
            readonly: false,
            dataType: 'String',
            inputType: 'Input',
            fgDisplay: true,
          },
          {
            idBillFormField: 'kvRI8P_0-5_W88ZhXI7r7',
            name: 'phone',
            displayName: '手机号码',
            fgMainProperty: false,
            showOrder: 3,
            readonly: false,
            dataType: 'String',
            inputType: 'Input',
            fgDisplay: true,
          },
          {
            idBillFormField: 'YXfhhzqSllGgxCgc7vEsz',
            name: 'email',
            displayName: '邮箱',
            fgMainProperty: false,
            showOrder: 4,
            readonly: false,
            dataType: 'String',
            inputType: 'Input',
            fgDisplay: true,
          },
          {
            idBillFormField: 'WY679cVQOnje_eF3fgFjQ',
            name: 'name',
            displayName: '姓名 ',
            fgMainProperty: false,
            showOrder: 5,
            readonly: false,
            dataType: 'String',
            inputType: 'Input',
            fgDisplay: true,
          },
          {
            idBillFormField: 'dj76x3ZiOcJ76Z6EXpMwq',
            name: 'nickName',
            displayName: '昵称',
            fgMainProperty: false,
            showOrder: 6,
            readonly: false,
            dataType: 'String',
            inputType: 'Input',
            fgDisplay: true,
          },
          {
            idBillFormField: 'OKTS1owO2p1Gsf7v7R6pb',
            name: 'gender',
            displayName: '性别',
            fgMainProperty: false,
            showOrder: 7,
            readonly: false,
            dataType: 'String',
            inputType: 'Select',
            fgDisplay: true,
            enumConfig: {
              idEnumRef: 'mbCHKncqWwSwawaslswKz',
              enumColumns: [
                {
                  idEnumColumn: '45YagXnCQZDDv23DgyXqi',
                  code: 'FEMALE',
                  displayName: '女',
                  enumValue: 'female',
                },
                {
                  idEnumColumn: '9b36QinkeZp1QdjOg5dGl',
                  code: 'UNKNOWN',
                  displayName: '未知',
                  enumValue: 'unknown',
                },
                {
                  idEnumColumn: 'BhWODLSxiHaeNfXFi-AuH',
                  code: 'MALE',
                  displayName: '男',
                  enumValue: 'male',
                },
              ],
              label: '性别',
              propertyName: 'gender',
              title: '性别',
            },
          },
          {
            idBillFormField: 'fpGP3SoetETikwDhdZnfU',
            name: 'fgActive',
            displayName: '启用标志',
            fgMainProperty: false,
            showOrder: 8,
            readonly: false,
            dataType: 'Boolean',
            inputType: 'Checkbox',
            fgDisplay: true,
          },
        ],
        metadataAttrName: 'user',
        firstUpperTabCode: 'User',
        fgDefaultTab: true,
        tabClassName: 'User',
        firstLowerTabClassName: 'user',
        tabAttrName: 'user',
        firstUpperTabAttrName: 'User',
        mainProperty: 'idUser',
        refType: 'Single',
        orderProperty: 'idUser',
        orderType: 'ASC',
      },
    ],
    body: [
      {
        idAttribute: 'xYPKY44InvfI0gtO97-9L',
        tabClassName: 'UserRole',
        firstLowerTabClassName: 'userRole',
        tabAttrName: 'userRoles',
        firstUpperTabAttrName: 'UserRoles',
        mainProperty: 'idSysUserRole',
        orderProperty: 'idSysUserRole',
        orderType: 'ASC',
        refType: 'Array',
        tabCode: 'userRoles',
        firstUpperTabCode: 'UserRoles',
        tabName: '系统用户',
        billFormFields: [
          {
            idBillFormField: 'E7SN3W4CeqmYeQVPeW0ks',
            name: 'idSysUserRole',
            displayName: '用户角色关系主属性',
            fgMainProperty: true,
            showOrder: 0,
            readonly: true,
            dataType: 'PK',
            inputType: 'Input',
            fgDisplay: true,
          },
          {
            idBillFormField: 'JaAw5c5YWUNlH5f_QCUiW',
            name: 'idRole',
            dataType: 'InternalRef',
            displayName: '角色',
            fgMainProperty: false,
            showOrder: 1,
            refAttributeName: 'role',
            readonly: false,
            inputType: 'Ref',
            refConfig: {
              idBillRef: 'FnQEuSc2TwoqhgfUXKkY0',
              refStyle: 'table',
              backWriteProp: 'idRole',
              displayProp: 'name',
              title: '角色',
              tableRef: {
                dataUri: '/role/aqPage',
                fgPage: true,
                tableMainProp: 'idRole',
                refColumns: [
                  {
                    idBillRefColumn: 'wR9TvkMzea8TnGEH1LfYT',
                    name: 'displayName',
                    displayName: '显示名称',
                  },
                  {
                    idBillRefColumn: 'BVYkTW2WktbPHmZtAHmDR',
                    name: 'name',
                    displayName: '名称',
                  },
                ],
                ceDisplayName: '角色',
              },
            },
            fgDisplay: true,
          },
        ],
        idBillFormTab: 'bFer_2H7rIZBp_r9H2wGD',
        tabIndex: 0,
        fgDefaultTab: true,
      },
    ],
    tail: [],
    uriConf: {
      fetchById: '/userAgg/getById',
      save: '/userAgg/save',
      update: '/userAgg/save',
      dataRemove: '/userAgg/remove',
    },
  },
};

export { billformConf };