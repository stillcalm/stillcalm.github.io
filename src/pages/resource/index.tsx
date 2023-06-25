import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

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
  const listItems = webSiteLinks.map((webSiteLinks) => (
    <li className={styles.resourceCard}>
      <img className={styles.resourceCardImage} src={webSiteLinks.icon} alt="" />
      <div className={styles.resourceCardBody}>
        <div className={styles.resourceCardHeader}>
          <h4 className={styles.resourceCardHeader_T4}>
            <a href={webSiteLinks.link} target="_blank">
              {webSiteLinks.title}
            </a>
          </h4>
        </div>
        <p className={styles.resourceCardDescription}>{webSiteLinks.description}</p>
      </div>
    </li>
  ));
  return (
    <Layout title="Hello" description="Hello React Page">
      <ul className={styles.resourceList}>{listItems}</ul>
    </Layout>
  );
}
