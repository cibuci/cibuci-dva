import React from 'react';
import { Link } from 'dva/router';
import { Row, Col, Icon, Popover } from 'antd';
import Spacer from '../Common/Spacer';
import styles from './Footer.less';

const Footer = () => {
  const content = (
    <div>
      <img className={styles.qrcode} src="http://cdn-qn0.cibuci.com/static/example/qrcode.jpg" alt="qrcode" />
    </div>
  );

  return (
    <div className={styles.wrapper}>
      <Row gutter={16}>
        <Col xs={24} sm={8} md={8} lg={8} xl={8}>
          <h2 className={styles.title}><Icon className={styles.icon} type="github" />GitHub</h2>
          <Spacer onlytb>
            <ul className={styles.list}>
              <li><a href="https://github.com/cibuci/cibuci-dva">源码仓库</a></li>
            </ul>
          </Spacer>
        </Col>
        <Col xs={24} sm={8} md={8} lg={8} xl={8}>
          <h2 className={styles.title}><Icon className={styles.icon} type="flag" />社区</h2>
          <Spacer onlytb>
            <ul className={styles.list}>
              <li><Link to="/about">关于我们</Link></li>
              <li><Link to="/topic/592011edba7de652b1924541">意见反馈</Link></li>
            </ul>
          </Spacer>
        </Col>
        <Col xs={24} sm={8} md={8} lg={8} xl={8}>
          <h2 className={styles.title}><Icon className={styles.icon} type="copyright" />2017 辞不辞</h2>
          <Spacer onlytb>
            <p>自由职业，来不来嘛<strong className={styles.mark}>～</strong></p>
            <div className={styles.buttons} style={{ display: 'none' }}>
              <a href="mailto://support@cibuci.com">
                <span className={styles.icon} style={{ marginLeft: 0 }}>
                  <svg className={styles.iconinner}>
                    <use xlinkHref="#cbc-weibo" />
                  </svg>
                </span>
              </a>
              <Popover content={content} trigger="hover">
                <a>
                  <span className={styles.icon}>
                    <svg className={styles.iconinner}>
                      <use xlinkHref="#cbc-wechat" />
                    </svg>
                  </span>
                </a>
              </Popover>
              <a href="mailto://support@cibuci.com">
                <span className={styles.icon}>
                  <svg className={styles.iconinner}>
                    <use xlinkHref="#cbc-envelope" />
                  </svg>
                </span>
              </a>
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
