import Page from '../components/page';
import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Notification from '../components/notification';
import { MediaQueryConsumer } from '../components/media-query';

import Intro from '../components/home/intro';
import Demo from '../components/home/demo';
import Features from '../components/home/features';
import Customers from '../components/home/customers';
import Learn from '../components/home/learn';
import SocialMeta from '../components/social-meta';

export default () => (
  <Page title="Cresto.io">
    <SocialMeta
      image={'/static/twitter-cards/home.jpg'}
      title="CRESTO.io"
      url="https://cresto.io"
      description="A Novel Way of Fundraising and Investing"
    />
    <MediaQueryConsumer>
      {({ isMobile }) => (
        <Header
          height={32}
          offset={-32}
          distance={32}
          shadow
          active={isMobile ? 32 : 160}
        >
          <Notification
            href="/blog/next-7"
            title="Cresto.io 1.0 is out!"
            titleMobile="Cresto 1.0 is out!"
          >
            Cresto 1.0 is out! — UX and UI improvements, better performance,
            upgraded codebase pipeline and more. Wednesday, December 19th 2018
          </Notification>
          <Navbar hideLogo={!isMobile} />
        </Header>
      )}
    </MediaQueryConsumer>
    <Intro />
    <Demo />
    <Features />
    <Customers />
    <Learn />
    <Footer />
  </Page>
);
