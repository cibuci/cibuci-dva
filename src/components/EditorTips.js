import React from 'react';
import Panel from './Common/Panel';

import styles from './EditorTips.less';

const EditorTips = () => {
  return (
    <Panel title="小提示" icon="pushpin-o">
      <ul className={styles.tips}>
        <li>🤣 标题要短，啤酒要冰，火药要干!</li>
        <li>🍺 图文并茂最好啦 ～</li>
      </ul>
    </Panel>
  );
};

EditorTips.propTypes = {
};

export default EditorTips;
