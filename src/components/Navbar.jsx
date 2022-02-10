import React from 'react';
import { Menu, Typography, Avatar } from 'antd';
import {Link} from 'react-router-dom';
import {HomeOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons';
import icon from '../images/crypto.jpg';
const Navbar = () => {
  return (
  <div className="nav-container">
    <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptodash</Link>
        </Typography.Title>
    </div>
        <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/Cryptocurrencies">Cryptos</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/News">News</Link>
        </Menu.Item>
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="https://www.mandoweb3.xyz/mandoWeb3Landing">Landing</Link>
        </Menu.Item>
      </Menu>
  </div>
  );
};

export default Navbar;
