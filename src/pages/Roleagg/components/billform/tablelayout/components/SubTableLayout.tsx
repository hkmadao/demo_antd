import { FC, Key, memo, useEffect, useState } from 'react';
import { Table, Tabs } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import moment from 'moment';
import styles from './styles.less';
import {
  useSelectRow,
  useRoleMenusColumns,
  useUserRolesColumns,
} from '../hooks';
import { TRoleMenu, TUserRole } from '../../../../models';

const SubTableLayout: FC = () => {
  const selectRow = useSelectRow();
  const roleMenusColumns = useRoleMenusColumns();
  const userRolesColumns = useUserRolesColumns();

  const { TabPane } = Tabs;
  return (
    <>
      <Tabs defaultActiveKey={'roleMenus'}>
        <TabPane key={'roleMenus'} tabKey={'roleMenus'} tab={'角色菜单关系'}>
          <Table
            className={styles['my-ant-card-body']}
            rowKey={'idRoleMenu'}
            columns={roleMenusColumns}
            dataSource={
              selectRow && selectRow.roleMenus ? selectRow.roleMenus : []
            }
            pagination={false}
          />
        </TabPane>
        <TabPane key={'userRoles'} tabKey={'userRoles'} tab={'用户角色关系'}>
          <Table
            className={styles['my-ant-card-body']}
            rowKey={'idUserRole'}
            columns={userRolesColumns}
            dataSource={
              selectRow && selectRow.userRoles ? selectRow.userRoles : []
            }
            pagination={false}
          />
        </TabPane>
      </Tabs>
    </>
  );
};

export default SubTableLayout;
