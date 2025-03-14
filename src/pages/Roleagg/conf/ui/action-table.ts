import { TActionContent } from '@/models';

const actionTableConf: TActionContent | undefined = {
  action: 1,
  displayName: '系统用户列表按钮',
  idButtonAction: '0000-be9070b2-6fb9-487a-8fcc-0abc34fdbf39',
  idProject: 'hLlXlmUNOcjAaDoWxZzrN',
  idSubProject: 'tuz4_94BGuVuxYxxL6a_r',
  name: 'sysuser_list_action_copy',
  projectName: 'Jpa基础项目',
  subProjectName: '系统模型',
  buttons: [
    {
      label: '新增',
      clickEventName: 'handleToAdd',
      disableScript: '',
      idButton: 'Yaemso7Bx8TnTKyAL5p08',
      buttonSize: 'middle',
      type: 'primary',
      showOrder: 0,
      nameScript: "'新增'",
    },
    {
      label: '编辑',
      clickEventName: 'handleToEdit',
      disableScript: 'selectRows?.length !== 1',
      idButton: 'xbjAsQ1gFa9KcJaMNGIRw',
      buttonSize: 'middle',
      type: 'primary',
      showOrder: 1,
      nameScript: "'编辑'",
    },
    {
      label: '单选',
      clickEventName: 'handleRowSelectType',
      disableScript: '',
      hiddenScript: "rowSelectionType === 'radio'",
      idButton: 'NNJXyz0Rnc5_v6K8DKAIi',
      buttonSize: 'middle',
      type: 'primary',
      showOrder: 2,
      nameScript: "'单选'",
    },
    {
      label: '多选',
      clickEventName: 'handleRowSelectType',
      disableScript: '',
      hiddenScript: "rowSelectionType === 'checkbox'",
      idButton: 'XbFycueAxA7_07UuDg8SW',
      buttonSize: 'middle',
      type: 'primary',
      showOrder: 3,
      nameScript: "'多选'",
    },
    {
      label: '删除',
      clickEventName: 'handleRowsDelete',
      disableScript: 'selectRows?.length == 0',
      idButton: 'ptRZSv-d68ViqVt7iqJdj',
      buttonSize: 'middle',
      type: 'primary',
      showOrder: 4,
      nameScript: "'删除'",
    },
    {
      label: '刷新',
      clickEventName: 'handleReflesh',
      disableScript: '',
      hiddenScript: '',
      idButton: '54GGZiQyODGo3UkDLYj3A',
      buttonSize: 'middle',
      type: 'primary',
      showOrder: 5,
      nameScript: "'刷新'",
    },
  ],
  gap: '10px',
  justifyContent: 'start',
  compDisplayName: '系统用户',
  componentType: 'Single',
  idComponent: 'vUqfWDE_ELDkq0P5PjpSS',
  idComponentModule: '-IKcXCfnf_Gc2HSZEgs2v',
  componentModuleName: '系统模块',
};

export { actionTableConf };
