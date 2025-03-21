import { useSelector } from 'react-redux';
import { TTableStore } from '../models';
import { componentName } from '../conf';

export * from './columns';
const selectStatus = (state: { [x: string]: TTableStore }) => {
  return state[componentName].status;
};

const selectStoreData = (state: { [x: string]: TTableStore }) => {
  return state[componentName];
};

const selectSelectRow = (state: { [x: string]: TTableStore }) => {
  if (
    !state[componentName].selectedRowKeys ||
    state[componentName].selectedRowKeys.length !== 1
  ) {
    return;
  }
  return state[componentName].tableData?.find((d) =>
    state[componentName].selectedRowKeys?.includes(d.idRole!),
  );
};

const selectIdUiConf = (state: { [x: string]: TTableStore }) => {
  return state[componentName].idUiConf;
};

export const useIdUiConf = () => {
  return useSelector(selectIdUiConf);
};

export const useFgDisabled = () => {
  return useSelector((state: { [x: string]: TTableStore }) => {
    return state[componentName].fgDisabled;
  });
};

export const useFgHidden = () => {
  return useSelector((state: { [x: string]: TTableStore }) => {
    return state[componentName].fgHidden;
  });
};

export const useStoreData = () => {
  return useSelector(selectStoreData);
};

export const useSelectRow = () => {
  return useSelector(selectSelectRow);
};
/*==========RoleMenus=============*/
export const useRoleMenusData = () => {
  return useSelector((state: { [x: string]: TTableStore }) => {
    if (
      !state[componentName].selectedRowKeys ||
      state[componentName].selectedRowKeys.length !== 1
    ) {
      return [];
    }
    const record = state[componentName].tableData?.find((d) =>
      state[componentName].selectedRowKeys?.includes(d.idRole!),
    );
    if (!record?.roleMenus) {
      return [];
    }
    return record.roleMenus;
  });
};
/*==========RoleMenus=============*/
/*==========UserRoles=============*/
export const useUserRolesData = () => {
  return useSelector((state: { [x: string]: TTableStore }) => {
    if (
      !state[componentName].selectedRowKeys ||
      state[componentName].selectedRowKeys.length !== 1
    ) {
      return [];
    }
    const record = state[componentName].tableData?.find((d) =>
      state[componentName].selectedRowKeys?.includes(d.idRole!),
    );
    if (!record?.userRoles) {
      return [];
    }
    return record.userRoles;
  });
};
/*==========UserRoles=============*/
