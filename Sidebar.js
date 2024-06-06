
import React from 'react';
import './Sidebar.css';
import { UsergroupDeleteOutlined  ,SettingOutlined,ProfileOutlined} from '@ant-design/icons';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Location</h2>
      <ul>
        <li><a href="#dashboard"><UsergroupDeleteOutlined></UsergroupDeleteOutlined>Dashboard</a></li>
        <li><a href="#connect"><UsergroupDeleteOutlined></UsergroupDeleteOutlined>Connect</a></li>
        <li><a href="#report"><ProfileOutlined></ProfileOutlined>Report</a></li>
        <li><a href="#settings"><SettingOutlined></SettingOutlined>Settings</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
