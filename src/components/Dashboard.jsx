import React from 'react';
import { Layout, Menu, theme } from 'antd';
import Notes from '../Notes/Notes';
import createInitials from './utils/createInitials';
import NoteForm from './NoteForm';
function Dashboard(){
const { Header, Content, Footer, Sider } = Layout;

  return (
    <Layout hasSider>
      <Sider
        style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <div className='content' style={{ padding: 0, background: colorBgContainer }} />
        <NoteList style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <p>long content</p>
            {
              // indicates very long content
              Array.from({ length: 100 }, (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? 'more' : '...'}
                  <br />
                </React.Fragment>
              ))
            }
          </div>
        </NoteList>
        <NoteForm style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </NoteForm>
      </Layout>
    </Layout>
  );
        };

export default Dashboard;