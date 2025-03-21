import { TUiFactoryContent } from '@/models';

const layoutConf: TUiFactoryContent = {
  action: 1,
  componentModuleName: '系统模块',
  componentName: null,
  displayName: '角色聚合',
  fgTemplate: false,
  idComponent: 'haSdru3_I3BPAFH9yI5zQ',
  idComponentModule: '-IKcXCfnf_Gc2HSZEgs2v',
  idFactory: '08ORRiUKRX-SqOFHLYOse',
  idProject: 'hLlXlmUNOcjAaDoWxZzrN',
  idSubProject: 'tuz4_94BGuVuxYxxL6a_r',
  name: 'Roleagg',
  projectName: 'Jpa基础项目',
  refIdContent: null,
  subProjectName: '系统模型',
  pages: [
    { key: 'index', id: 'index', code: 'index', name: '首页' },
    {
      key: 'qJXa0UfTIO6aKGDyRK591',
      id: 'qJXa0UfTIO6aKGDyRK591',
      code: 'edit',
      name: '编辑页',
    },
  ],
  layouts: [
    {
      key: 'root',
      id: 'root',
      title: 'root',
      idParent: null,
      order: 1,
      type: 'layout',
      direction: 'column',
      flexType: 'auto',
      flexStr: '1 1 auto',
      children: [
        {
          key: 'H6FTe1dBekbr97pqRvzHM',
          id: 'H6FTe1dBekbr97pqRvzHM',
          title: '查询面板',
          idParent: 'root',
          order: 1,
          type: 'component',
          direction: 'row',
          flexType: 'notGrow',
          flexStr: '0 1 auto',
          children: [],
          component: {
            componentType: 'search',
            idRef: 'FWOu-Rw-tGncUV60JvioX',
            name: '角色',
          },
        },
        {
          key: '98pdFD9XbLmCWvYYOc3ze',
          id: '98pdFD9XbLmCWvYYOc3ze',
          title: '列表按钮',
          idParent: 'root',
          order: 2,
          type: 'component',
          direction: 'row',
          flexType: 'notGrow',
          flexStr: '0 1 auto',
          children: [],
          component: {
            componentType: 'viewButton',
            idRef: 'VBgw3neaTYfXuIiWomefb',
            name: '系统用户列表按钮',
          },
          pageMaps: [
            {
              idPageMap: '0326ce17-fe77-45a6-870a-71781ef62c90',
              componentStateCode: 'list',
              pageCode: 'index',
            },
            {
              idPageMap: 'e1701655-b548-485c-be13-3d36f00346a3',
              componentStateCode: 'form',
              pageCode: 'edit',
            },
          ],
        },
        {
          key: 'CbgAlyjHO_SUxpmG3Ad5e',
          id: 'CbgAlyjHO_SUxpmG3Ad5e',
          title: '列表',
          idParent: 'root',
          order: 3,
          type: 'component',
          direction: 'row',
          flexType: 'auto',
          flexStr: '1 1 auto',
          children: [],
          component: {
            componentType: 'viewBillform',
            idRef: 'pZZYgBwYjhcKf9_yBLdG1',
            name: '角色聚合',
          },
        },
        {
          key: 'oRt-4y7yx4N4XjBvmJJFF',
          id: 'oRt-4y7yx4N4XjBvmJJFF',
          title: '卡片按钮',
          idParent: 'root',
          order: 4,
          type: 'component',
          direction: 'row',
          flexType: 'notGrow',
          flexStr: '0 1 auto',
          children: [],
          component: {
            componentType: 'editButton',
            idRef: 'oxlv6pTycs5H4lJBC2QOO',
            name: '系统用户编辑按钮',
          },
        },
        {
          key: '7Dwdniebj0nW5uIKoI1mc',
          id: '7Dwdniebj0nW5uIKoI1mc',
          title: '表单',
          idParent: 'root',
          order: 5,
          type: 'component',
          direction: 'row',
          flexType: 'auto',
          flexStr: '1 1 auto',
          children: [],
          component: {
            componentType: 'editBillform',
            idRef: 'pZZYgBwYjhcKf9_yBLdG1',
            name: '角色聚合',
          },
          pageMaps: [
            {
              idPageMap: 'ba9901a6-6a83-4973-91c2-d8510800afe8',
              componentStateCode: 'list',
              pageCode: 'index',
            },
            {
              idPageMap: '2beb55f7-3edd-4932-9d26-9aeb0f48f838',
              componentStateCode: 'form',
              pageCode: 'edit',
            },
          ],
        },
      ],
    },
  ],
  assos: [
    { idPage: 'index', idLayout: 'root', hidden: false, disabled: false },
    {
      idPage: 'index',
      idLayout: 'H6FTe1dBekbr97pqRvzHM',
      hidden: false,
      disabled: false,
    },
    {
      idPage: 'index',
      idLayout: '98pdFD9XbLmCWvYYOc3ze',
      hidden: false,
      disabled: false,
    },
    {
      idPage: 'index',
      idLayout: 'CbgAlyjHO_SUxpmG3Ad5e',
      hidden: false,
      disabled: false,
    },
    {
      idPage: 'qJXa0UfTIO6aKGDyRK591',
      idLayout: 'H6FTe1dBekbr97pqRvzHM',
      hidden: true,
      disabled: false,
    },
    {
      idPage: 'qJXa0UfTIO6aKGDyRK591',
      idLayout: '98pdFD9XbLmCWvYYOc3ze',
      hidden: true,
      disabled: false,
    },
    {
      idPage: 'qJXa0UfTIO6aKGDyRK591',
      idLayout: 'CbgAlyjHO_SUxpmG3Ad5e',
      hidden: true,
      disabled: false,
    },
    {
      idPage: 'qJXa0UfTIO6aKGDyRK591',
      idLayout: 'root',
      hidden: false,
      disabled: false,
    },
    {
      idPage: 'index',
      idLayout: 'oRt-4y7yx4N4XjBvmJJFF',
      hidden: true,
      disabled: false,
    },
    {
      idPage: 'qJXa0UfTIO6aKGDyRK591',
      idLayout: 'oRt-4y7yx4N4XjBvmJJFF',
      hidden: false,
      disabled: false,
    },
    {
      idPage: 'index',
      idLayout: '7Dwdniebj0nW5uIKoI1mc',
      hidden: true,
      disabled: false,
    },
    {
      idPage: 'qJXa0UfTIO6aKGDyRK591',
      idLayout: '7Dwdniebj0nW5uIKoI1mc',
      hidden: false,
      disabled: false,
    },
  ],
};

export { layoutConf };
