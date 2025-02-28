import { TQueryContent } from '@/models';

const queryConf: TQueryContent | undefined = {
  action: 1,
  componentModuleName: '系统模块',
  componentName: null,
  displayName: '角色',
  idComponent: 'TyIhZdG8Ig_s41vcUj5iH',
  idComponentModule: '-IKcXCfnf_Gc2HSZEgs2v',
  idProject: 'hLlXlmUNOcjAaDoWxZzrN',
  idQuery: 'FWOu-Rw-tGncUV60JvioX',
  idSubProject: 'tuz4_94BGuVuxYxxL6a_r',
  name: 'Role',
  projectName: 'Jpa基础项目',
  subProjectName: '系统模型',
  searchRefs: [
    {
      idBillSearchRef: 'lvuwPQyYu8crio4nyYtid',
      operatorCode: 'like',
      label: '名称',
      attributeName: 'name',
      searchAttributes: ['name'],
      htmlInputType: 'Input',
      valueType: 'String',
      defaultValue: '',
      showOrder: 0,
    },
    {
      idBillSearchRef: 'YqCrcTf3GVYVl7RLnBUIW',
      operatorCode: 'like',
      label: '显示名称',
      attributeName: 'displayName',
      searchAttributes: ['displayName'],
      htmlInputType: 'Input',
      valueType: 'String',
      defaultValue: '',
      showOrder: 1,
    },
  ],
};

export { queryConf };
