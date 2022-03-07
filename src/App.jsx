import React from 'react'
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';


export default function App() {
  return (
    <div>
      <Menu selectedKeys={[]}>
        <Menu.Item key="mail">
          Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled>
          Navigation Two
        </Menu.Item>
        </Menu>
    </div>
  )
}
