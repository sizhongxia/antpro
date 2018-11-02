import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';
import { formatMessage } from 'umi/locale';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: 'Team-Union',
          title: 'Team-Union',
          href: 'https://www.team-union.com',
          blankTarget: true,
        },
        {
          key: 'GitHub',
          title: <Icon type="github" />,
          href: 'https://github.com/sizhongxia',
          blankTarget: true,
        }
      ]}
      copyright={
        <Fragment>
          <Icon type="copyright" /> {formatMessage({ id: 'app.copyright' })} {' '} {formatMessage({ id: 'app.name' })}
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
