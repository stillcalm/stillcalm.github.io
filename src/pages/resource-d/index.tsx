import React, { useState }from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import { Col, Divider, Row } from 'antd';

const webSiteLinks = [
  {
    id: 1,
    title: '稀土掘金',
    link: 'https://juejin.cn/',
    icon: 'https://kuizuo.cn/img/resource/juejin.png',
    description: '稀土掘金是一个技术博客平台，是程序员发布自己的技术文章、分享知识的地方',
  },
  {
    id: 2,
    title: '稀土掘金',
    link: 'https://juejin.cn/',
    icon: 'https://kuizuo.cn/img/resource/juejin.png',
    description: '稀土掘金是一个技术博客平台，是程序员发布自己的技术文章、分享知识的地方',
  },
  {
    id: 3,
    title: '稀土掘金',
    link: 'https://juejin.cn/',
    icon: 'https://kuizuo.cn/img/resource/juejin.png',
    description: '稀土掘金是一个技术博客平台，是程序员发布自己的技术文章、分享知识的地方',
  },
  {
    id: 4,
    title: '稀土掘金',
    link: 'https://juejin.cn/',
    icon: 'https://kuizuo.cn/img/resource/juejin.png',
    description: '稀土掘金是一个技术博客平台，是程序员发布自己的技术文章、分享知识的地方',
  },
  {
    id: 5,
    title: '稀土掘金',
    link: 'https://juejin.cn/',
    icon: 'https://kuizuo.cn/img/resource/juejin.png',
    description: '稀土掘金是一个技术博客平台，是程序员发布自己的技术文章、分享知识的地方',
  },
  {
    id: 6,
    title: '稀土掘金',
    link: 'https://juejin.cn/',
    icon: 'https://kuizuo.cn/img/resource/juejin.png',
    description: '稀土掘金是一个技术博客平台，是程序员发布自己的技术文章、分享知识的地方',
  },
  {
    id: 7,
    title: '稀土掘金',
    link: 'https://juejin.cn/',
    icon: 'https://kuizuo.cn/img/resource/juejin.png',
    description: '稀土掘金是一个技术博客平台，是程序员发布自己的技术文章、分享知识的地方',
  },
  {
    id: 8,
    title: '稀土掘金',
    link: 'https://juejin.cn/',
    icon: 'https://kuizuo.cn/img/resource/juejin.png',
    description: '稀土掘金是一个技术博客平台，是程序员发布自己的技术文章、分享知识的地方',
  },
];

export default function Hello() {
  const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };
  return (
    <Layout title="Hello" description="Hello React Page">
      <ul>
        <Divider orientation="left">Horizontal</Divider>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
      </ul>
    </Layout>
  );
}
