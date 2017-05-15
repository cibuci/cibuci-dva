import React from 'react';
import { Row, Col, Icon, Popover } from 'antd';
import Spacer from '../Spacer';
import styles from './Footer.less';

const Footer = (props) => {

  const content = (
    <div>
      <img className={styles.qrcode} src="http://cdn-qn0.cibuci.com/static/example/qrcode.jpg" alt="qrcode" />
    </div>
  );

  return (
    <div className={styles.wrapper}>
      <Row>
        <Col span={8}>
          <h2 className={styles.title}><Icon className={styles.icon} type="github" />GitHub</h2>
          <Spacer onlytb>
            <ul className={styles.list}>
              <li><a href="https://github.com/cibuci/cibuci-dva">源码仓库</a></li>
              <li><a href="https://github.com/cibuci/cibuci-api">开放接口</a></li>
            </ul>
          </Spacer>
        </Col>
        <Col span={8}>
          <h2 className={styles.title}><Icon className={styles.icon} type="flag" />社区</h2>
          <Spacer onlytb>
            <ul className={styles.list}>
              <li><a href="">目标</a></li>
              <li><a href="/about">关于我们</a></li>
              <li><a href="">意见反馈</a></li>
            </ul>
          </Spacer>
        </Col>
        <Col span={8}>
          <h2 className={styles.title}><Icon className={styles.icon} type="copyright" />2017</h2>
          <Spacer onlytb>
            <p>辞不辞，为年轻人真正做一次职业规划。</p>
            <div className={styles.buttons}>
              <span className={styles.icon}>
                <svg className={styles.iconinner}>
                  <use xlinkHref="#cbc-weibo" />
                </svg>
              </span>
              <Popover content={content} trigger="hover">
                <span className={styles.icon}>
                  <svg className={styles.iconinner}>
                    <use xlinkHref="#cbc-wechat" />
                  </svg>
                </span>
              </Popover>
              <span className={styles.icon}>
                <svg className={styles.iconinner}>
                  <use xlinkHref="#cbc-envelope" />
                </svg>
              </span>
            </div>
          </Spacer>
        </Col>
      </Row>
    </div>
  );
};

Footer.propTypes = {
};

export default Footer;
