import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';

import * as Actions from './../actions';
import Lesen from '../components/Lesen';
import Karten from '../components/Karten';
import Artikel from '../components/Artikel';

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

const LearnTabs = ({ actions, words }) => (
  <div className="entire-wrapper" style={bgStyle}>
    <div className="content-wrapper padding-sm">
      <Tabs>
        <Tab label="Lesen" >
          <div>
            <h2 style={styles.headline}>Wortliste</h2>
            <Lesen words={words} />
          </div>
        </Tab>
        <Tab label="Karten" >
          <div>
            <h2 style={styles.headline}>Wortkarte</h2>
            <Karten words={words} />
          </div>
        </Tab>
        <Tab label="Artikel" >
          <div>
            <h2 style={styles.headline}>Artikel</h2>
            <Artikel words={words} />
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

const mapStateToProps = state => ({
  words: state.words,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LearnTabs);
