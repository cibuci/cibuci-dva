import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'dva/router';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import { Container, Base } from '../components/Layout/';
import Panel from '../components/Common/Panel';
import InsertHtml from '../components/Common/InsertHtml';
import LogoGather from '../components/LogoGather';

import styles from './AboutPage.less';

function AboutPage() {
  const usContent = (
    <div>
      <p>我们是一群从宽敞明亮的 Office 中走出来，从固定的朝九晚五的时区挣脱出来的年轻人。我们期望把大部分时间投入到有价值的事情上，发现自己的兴趣，找到能够为之奋斗一生的目标！</p>
      <p>我们不愿意再继续抱怨：</p>
      <ul>
        <li>我整天都在做什么？</li>
        <li>这些活随便找个实习生来就能搞定！</li>
        <li>为了收益，就一点不考虑用户了吗？</li>
      </ul>
      <p>同样，我们也静下心来反复思考：</p>
      <ul>
        <li>我真正喜欢的是什么？</li>
        <li>如果财富自由了，我会把精力放在哪？</li>
        <li>我擅长做什么，我的能力应该如何发挥作用？</li>
      </ul>
      <p>于是，面对“辞还是不辞？”这个问题，我们选择了辞去原先安逸的环境，选择成为自由职业。</p>
    </div>
  );

  const cbcContent = (
    <div>
      <p>创立辞不辞的初衷，就是聚集一批生活的探险家，梦想的实践者。诚然生活有诸多不如意，但整个世界就是由你我的梦想构筑的。</p>
      <p>随着自由职业一词的流行，随着众筹和众包平台越来越多，互联网手段越来越多，社会更加重视每个人的个体价值，以及每个个体怀揣着的梦想的价值。</p>
      <p>我们致力于发现并服务这些人，也影响新一代的年轻人！</p>
      <ul>
        <li><Link to="/article">精选</Link> —— 精选后的好文章，书籍，甚至电影推荐。</li>
        <li><Link to="/topic">话题</Link> —— 发现兴趣，孕育梦想的土壤。</li>
      </ul>
      <p>我们从这两个栏目出发，随后利用更多的
        <strong>应用</strong>，<strong>线下活动</strong>
        帮助大家走好自由职业之路。我们将着眼于解决自由职业过程中的经济收入，推广，工作效率等问题，形成一本完善的自由职业修炼手册！</p>
      <p>如果你喜欢我们的观念，请与我们联系，我们期待你的加入！(๑•̀ㅂ•́)و✧</p>
    </div>
  );

  return (
    <Base>
      <Helmet>
        <title>关于我们 - 辞不辞</title>
      </Helmet>
      <Container>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={17} lg={17} xl={17}>
            <div className={styles.left}>
              <Panel title="关于我们">
                <div className={styles.board}>
                  <div className={styles.wrapper}>
                    <LogoGather pixSize={16} pointSizeMin={8} />
                  </div>
                  <div className={styles.article}>
                    <InsertHtml>
                      {usContent}
                    </InsertHtml>
                  </div>
                </div>
              </Panel>
              <Panel title="关于辞不辞">
                <div className={styles.article}>
                  <InsertHtml>
                    {cbcContent}
                  </InsertHtml>
                </div>
              </Panel>
            </div>
          </Col>
          <Col xs={24} sm={24} md={7} lg={7} xl={7}>
            <div className={styles.right}>
              <Panel title="联系我们">
                <div className={styles.content}>
                  <a href="mailto://support@cibuci.com">support@cibuci.com</a>
                </div>
              </Panel>
              <Panel title="商户合作">
                <div className={styles.content}>
                  <a href="mailto://bd@cibuci.com">bd@cibuci.com</a>
                </div>
              </Panel>
            </div>
          </Col>
        </Row>
      </Container>
    </Base>
  );
}

AboutPage.propTypes = {
};

export default connect()(AboutPage);
