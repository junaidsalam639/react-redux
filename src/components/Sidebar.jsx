import React, { useState } from 'react';
import {
    UploadOutlined,
    VideoCameraOutlined,
    DashboardOutlined,
    AlignCenterOutlined,
    PercentageOutlined,
    PrinterOutlined,
    SettingOutlined,
    QuestionCircleOutlined,
    AlipayCircleOutlined,
    RadarChartOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Divider } from 'antd';
import Aanalytics from '../Pages/Analytics';
import Secruties from '../Pages/Secruties';
import Help from '../Pages/Help';
import Setting from '../Pages/Setting';
import Moneybox from '../Pages/Moneybox';
import Deposits from '../Pages/Deposits';
import Payment from '../Pages/Payment';
import Dashboard from '../Pages/Dashboard';
const { Header, Sider, Content } = Layout;

const Sidebar = () => {
    const [page , setPage] = useState(Dashboard);
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} width={270}  style={{height : '100vh'}}>
                <div className='mt-4'>
                    <h4 className='text-white'><RadarChartOutlined className='p-3' />Invest Bank</h4>
                </div>
                <div style={{ borderBottom: '2px solid white' }}></div>
                <div className="demo-logo-vertical mt-4" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            onClick: () => {
                                setPage(Dashboard);
                            },
                            key: '1',
                            icon: <DashboardOutlined />,
                            label: 'Dashboard',
                        },
                        {
                            onClick : () => {
                              setPage(Aanalytics);
                            },
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'Analytics',
                        },
                        {
                            onClick: () => {
                                setPage(Payment);
                            },
                            key: '3',
                            icon: <AlipayCircleOutlined />,
                            label: 'Payments',
                        },
                        {
                            onClick: () => {
                                setPage(Deposits);
                            },
                            key: '4',
                            icon: <PercentageOutlined />,
                            label: 'Deposits',
                        },
                        {
                            onClick: () => {
                                setPage(Moneybox);
                            },
                            key: '5',
                            icon: <PrinterOutlined />,
                            label: 'Money box',
                        },
                        {
                            onClick: () => {
                                setPage(Secruties);
                            },
                            key: '6',
                            icon: <UploadOutlined />,
                            label: 'Secruties',
                        },
                        {
                            onClick: () => {
                                setPage(Help);
                            },
                            key: '7',
                            icon: <QuestionCircleOutlined />,
                            label: 'Help',
                        },
                        {
                            onClick: () => {
                                setPage(Setting);
                            },
                            key: '8',
                            icon: <SettingOutlined />,
                            label: 'Setting',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <AlignCenterOutlined /> : <AlignCenterOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}

                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: '82vh',
                        background: colorBgContainer,
                    }}
                >
                    {page}
                </Content>
            </Layout>
        </Layout>
    );
};

export default Sidebar;





