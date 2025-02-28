import { EPartName } from '@/models';
import { ProColumns } from '@ant-design/pro-table';
import { Checkbox, Popover } from 'antd';
import moment from 'moment';
import RefPicker from '@/components/Ref';
import CustomDateText from '@/components/CustomDateText';
import CustomDatePick from '@/components/CustomDatePick';
import CustomTimePicker from '@/components/CustomTimePicker';
import { getRefByAttr } from '@/util';
import { billformConf } from '../../../../conf';
import { TRoleMenu, TUserRole } from '../../../../models';

export * from '.';
/**角色菜单关系 */
export const useRoleMenusColumns: () => ProColumns<TRoleMenu>[] = () => {
  return [
    {
      width: 150,
      title: '角色与菜单id',
      dataIndex: 'idRoleMenu',
      key: 'idRoleMenu',
      render: (text, record, _, action) => {
        const content = record.idRoleMenu ? record.idRoleMenu : '--';
        return (
          <div
            style={{
              overflow: 'hidden',
              width: '140px',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            <Popover content={content} trigger="hover">
              {content}
            </Popover>
          </div>
        );
      },
    },
    {
      width: 150,
      title: '系统菜单',
      dataIndex: 'menu',
      key: 'menu',
      renderFormItem: (_schema, config, form) => {
        const refConf = getRefByAttr(
          EPartName.Body,
          'roleMenus',
          'idMenu',
          billformConf,
        );
        if (refConf) {
          return <RefPicker {...refConf!} />;
        }
      },
      render: (_dom, record) => {
        const refConf = getRefByAttr(
          EPartName.Body,
          'roleMenus',
          'idMenu',
          billformConf,
        );
        if (refConf) {
          const refData = (record as any).menu;
          if (refData) {
            return refData[refConf.displayProp!];
          }
        }
      },
    },
  ];
};
/**用户角色关系 */
export const useUserRolesColumns: () => ProColumns<TUserRole>[] = () => {
  return [
    {
      width: 150,
      title: '用户角色关系主属性',
      dataIndex: 'idUserRole',
      key: 'idUserRole',
      render: (text, record, _, action) => {
        const content = record.idUserRole ? record.idUserRole : '--';
        return (
          <div
            style={{
              overflow: 'hidden',
              width: '140px',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            <Popover content={content} trigger="hover">
              {content}
            </Popover>
          </div>
        );
      },
    },
    {
      width: 150,
      title: '系统用户',
      dataIndex: 'user',
      key: 'user',
      renderFormItem: (_schema, config, form) => {
        const refConf = getRefByAttr(
          EPartName.Body,
          'userRoles',
          'idUser',
          billformConf,
        );
        if (refConf) {
          return <RefPicker {...refConf!} />;
        }
      },
      render: (_dom, record) => {
        const refConf = getRefByAttr(
          EPartName.Body,
          'userRoles',
          'idUser',
          billformConf,
        );
        if (refConf) {
          const refData = (record as any).user;
          if (refData) {
            return refData[refConf.displayProp!];
          }
        }
      },
    },
  ];
};
