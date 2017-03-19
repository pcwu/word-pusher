import React from 'react';
import { withHandlers } from 'recompose';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import './Lesen.css';


const enhance = withHandlers({
  playAudio: () => (url) => {
    const audio = new Audio();
    audio.src = url;
    audio.play();
  },
});

const WordTable = ({ words, playAudio }) => (
  <Table>
    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
      <TableRow>
        <TableHeaderColumn>Deutsch</TableHeaderColumn>
        <TableHeaderColumn>Englisch</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {words.map((word, index) => (
        <TableRow>
          <TableRowColumn style={{ fontSize: '18px' }}>
            <IconButton className="wordSpeak" onClick={() => playAudio(word.deAudio)}><i className="material-icons">volume_up</i></IconButton>
            <span className="wordLesen">{word.de}</span>
          </TableRowColumn>
          <TableRowColumn style={{ fontSize: '18px' }}>
            <IconButton className="wordSpeak" onClick={() => playAudio(word.enAudio)}><i className="material-icons">volume_up</i></IconButton>
            <span className="wordLesen">{word.en}</span>
          </TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default enhance(WordTable);
