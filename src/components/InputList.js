import React from 'react';
import { forEachObjIndexed } from 'ramda';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

const style = {
  padding: '2px 6px 3px',
  background: '#FF5722',
  color: '#ffffff',
  marginBottom: '10px',
  borderRadius: '2px',
  fontSize: '16px',
  fontFamily: 'Roboto',
  boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
};

const deleteStyle = {
  border: 'none',
  outline: '0',
  cursor: 'pointer',
  background: 'transparent',
  color: '#9E9E9E',
  padding: '0px',
};

const InputList = ({ words, actions }) => (
  <Table>
    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
      <TableRow>
        <TableHeaderColumn style={{ width: '25px' }}><i className="material-icons">delete</i></TableHeaderColumn>
        <TableHeaderColumn>Selected word</TableHeaderColumn>
        <TableHeaderColumn>Deutsch</TableHeaderColumn>
        <TableHeaderColumn>Englisch</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
    {words.map(word => (
      <TableRow>
        <TableRowColumn style={{ width: '25px' }}>
          <button style={deleteStyle} onClick={() => actions.deleteWord(word.query)}><i className="material-icons">delete</i></button>
        </TableRowColumn>
        <TableRowColumn>
          <span style={style} onClick={() => actions.deleteWord(word.query)}>{word.query}</span>
        </TableRowColumn>
        <TableRowColumn style={{ fontSize: '18px' }}>
          <span>{word.de}</span>
        </TableRowColumn>
        <TableRowColumn style={{ fontSize: '18px' }}>
          <span>{word.en}</span>
        </TableRowColumn>
      </TableRow>
    ))}
    </TableBody>
  </Table>
);

export default InputList;
