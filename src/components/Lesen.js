import React from 'react';
import { withHandlers } from 'recompose';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

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
        <TableHeaderColumn>Nr.</TableHeaderColumn>
        <TableHeaderColumn>Deutsch</TableHeaderColumn>
        <TableHeaderColumn>Englisch</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {words.map((word, index) => (
        <TableRow>
          <TableRowColumn>{index + 1}</TableRowColumn>
          <TableRowColumn><span onClick={() => playAudio(word.deAudio)}>{word.de}</span></TableRowColumn>
          <TableRowColumn><span onClick={() => playAudio(word.enAudio)}>{word.en}</span></TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default enhance(WordTable);
