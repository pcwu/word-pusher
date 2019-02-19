import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';

import { playAudio } from '../../utils';
import '../../css/Lesen.css';

const WordTable = ({ words }) => (
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
            <IconButton className="wordSpeak" disabled={!word.deAudio} onClick={() => playAudio(word.deAudio)}>
              <i className="material-icons">volume_up</i>
            </IconButton>
            <span className="wordLesen">{word.de}</span>
          </TableRowColumn>
          <TableRowColumn style={{ fontSize: '18px' }}>
            <IconButton className="wordSpeak" disabled={!word.enAudio} onClick={() => playAudio(word.enAudio)}>
              <i className="material-icons">volume_up</i>
            </IconButton>
            <span className="wordLesen">{word.en}</span>
          </TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default WordTable;
