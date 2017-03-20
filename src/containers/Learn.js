import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';

import * as Actions from './../actions';
import WordList from '../components/learn/WordList';
import WordCard from '../components/learn/WordCard';
import Article from '../components/learn/Article';
import Spelling from '../components/learn/Spelling';

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
        <Tab label="Word List" >
          <h2 style={styles.headline}>Word List</h2>
          <WordList words={words} />
        </Tab>
        <Tab label="Word Card" >
          <h2 style={styles.headline}>Word Card</h2>
          <WordCard words={words} />
        </Tab>
        <Tab label="Article Test" >
          <h2 style={styles.headline}>Article Test</h2>
          <Article words={words.filter(word => word.type === 'noun')} />
        </Tab>
        <Tab label="Spelling Test" >
          <h2 style={styles.headline}>Spelling Test</h2>
          <Spelling words={words.filter(word => word.deAudio !== '')} />
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
