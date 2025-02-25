import { FormOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { css } from '@emotion/react'
import type { MenuProps } from 'antd'
import { Layout, Menu, theme } from 'antd'
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router'

const { Header, Content, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

const items: MenuItem[] = [
  getItem(
    <Link to="/list">설문조사 목록</Link>,
    'list',
    <UnorderedListOutlined />,
  ),
  getItem(<Link to="/create">설문조사 생성</Link>, 'create', <FormOutlined />),
]

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div css={logoStyle} className="demo-logo-vertical" />
        <Menu
          theme="light"
          defaultSelectedKeys={['list']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout

const logoStyle = css`
  height: 64px;
  margin: 16px;
  background-color: rgb(255 255 255 / 50%);
`
