import React, { Component } from 'react'
import './assets/css/app.css'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" style={{ fontSize: '14px' }}>
              <Icon type="laptop" />
              <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="2" style={{ fontSize: '14px' }}>
              <Icon type="book" />
              <span>Tarefas</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="team" /><span>Network</span></span>}
            >
              <Menu.Item key="3">Clientes</Menu.Item>
              <Menu.Item key="4">Colaboradores</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '12px 0', fontSize: '16px' }}>
              <Breadcrumb.Item>
                <Icon type="laptop" /> Dashboard
              </Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Gestor ©2017 Criado por WAM!
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App
