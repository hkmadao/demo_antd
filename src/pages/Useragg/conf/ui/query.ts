import { TQueryContent } from '@/models';

const queryConf: TQueryContent | undefined = {
  action: 1,
  componentModuleName: '系统模块',
  componentName: null,
  displayName: '系统用户',
  idComponent: 'vUqfWDE_ELDkq0P5PjpSS',
  idComponentModule: '-IKcXCfnf_Gc2HSZEgs2v',
  idProject: 'hLlXlmUNOcjAaDoWxZzrN',
  idQuery: 'i315-QzkYzdLU1G2GCjqi',
  idSubProject: 'tuz4_94BGuVuxYxxL6a_r',
  name: 'SysUser',
  projectName: 'Jpa基础项目',
  subProjectName: '系统模型',
  searchRefs: [
    {
      idBillSearchRef: 'ZtF-nn8SGBwsSUO7A5iPo',
      operatorCode: 'like',
      label: '登录账号 ',
      attributeName: 'account',
      searchAttributes: ['account'],
      htmlInputType: 'Input',
      valueType: 'String',
      defaultValue: '',
      showOrder: 0,
    },
    {
      idBillSearchRef: 'Sm_y5igdxwyx1n-kg84o5',
      operatorCode: 'like',
      label: '姓名 ',
      attributeName: 'name',
      searchAttributes: ['name'],
      htmlInputType: 'Input',
      valueType: 'String',
      defaultValue: '',
      showOrder: 1,
    },
    {
      idBillSearchRef: 'Xu154MV0_IOur4QIiGU68',
      operatorCode: 'like',
      label: '手机号码',
      attributeName: 'phone',
      searchAttributes: ['phone'],
      htmlInputType: 'Input',
      valueType: 'String',
      defaultValue: '',
      showOrder: 2,
    },
    {
      idBillSearchRef: 'uRNS0TzWIS2JV-w6nvO3C',
      operatorCode: 'equal',
      label: '启用标志',
      attributeName: 'fgActive',
      searchAttributes: ['fgActive'],
      htmlInputType: 'Select',
      valueType: 'Bool',
      defaultValue: 'true',
      enumConfig: {
        idEnumRef: 'A38FtizVvNXcEcWdMHPCr',
        enumColumns: [
          {
            idEnumColumn: 'GAfcNIeYDi_hNdkpfyeBl',
            displayName: '全部',
            enumValue: 'all',
            code: 'all',
          },
          {
            idEnumColumn: 'V1zzKVODUvWykNc8lzgDu',
            displayName: '是',
            enumValue: 'true',
            code: 'true',
          },
          {
            idEnumColumn: 'Zfh6hzsg0NNxN04akFA2q',
            displayName: '否',
            enumValue: 'false',
            code: 'false',
          },
        ],
      },
      showOrder: 3,
    },
  ],
};

export { queryConf };
