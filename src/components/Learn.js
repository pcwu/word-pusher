import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Lesen from './Lesen';
import Karten from './Karten';

const styles = {
  headline: {
    color: '#000',
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const bgStyle = {
  background: '#ECEFF1',
  alignItems: 'flex-start',
};

const LearnTabs = () => (
  <div className="entire-wrapper" style={bgStyle}>
    <div className="content-wrapper padding-sm">
      <Tabs>
        <Tab label="Lesen" >
          <div>
            <h2 style={styles.headline}>Wortliste</h2>
            <Lesen />
          </div>
        </Tab>
        <Tab label="Karten" >
          <div>
            <h2 style={styles.headline}>Wortkarte</h2>
            <Karten />
          </div>
        </Tab>
        <Tab label="Artikel" >
          <div>
            <h2 style={styles.headline}>Tab Three</h2>
            <p>
              This is a third example tab.
            </p>
          </div>
        </Tab>
        <Tab label="Prüfung" >
          <div>
            <h2 style={styles.headline}>Tab Four</h2>
            <p>
              This is a third example tab.
            </p>
          </div>
        </Tab>
      </Tabs>
    </div>
  </div>
);

export default LearnTabs;
