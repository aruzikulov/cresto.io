import Container from '../container';
import Button from '../button';
import SectionHeader from '../section-header';
import CompanySlider from './company-slider';

export default () => (
  <Container wide role="region" aria-labelledby="features">
    <Container center padding>
      <SectionHeader
        id="features"
        title="Why CRESTO.io"
        description="The world’s leading companies use and love CRESTO Platform"
      />
      <div className="row">
        <div className="column">
          <h3 className="f3 fw6">Lower Cost</h3>
          <p>Lower transaction cost and fees than in tradional financing.</p>
          <Button href="/learn">Learn more</Button>
        </div>
        <div className="column">
          <h3 className="f3 fw6">Efficiency and Liquidity</h3>
          <p>Fastand easy transaction process. 24/7 access to the markets.</p>
          <Button href="/docs">View Full Documentation</Button>
        </div>
        <div className="column">
          <h3 className="f3 fw6">Transparency</h3>
          <p>
            Transparent flow of information., possible to eliminate middleman.
          </p>
          <Button href="/showcase">View Showcase</Button>
        </div>
      </div>
      <style jsx>{`
        .column {
          text-align: left;
        }
        // CSS only media query for tablet
        @media screen and (max-width: 960px) {
          .row {
            flex-direction: column;
            margin: -1.5rem 0;
          }
          .column {
            width: 100%;
            padding: 1.5rem 0;
            text-align: center;
            max-width: 350px;
          }
        }
      `}</style>
    </Container>
    <CompanySlider />
  </Container>
);
