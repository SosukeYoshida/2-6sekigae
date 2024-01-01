import { useEffect, useState } from 'react';
import './App.css';
import { Table } from './components/Table/Table/Table';
import { useTable } from './hooks/useTable';
import { Btns } from './components/Table/Btn/Btn';

function App() {
  const { tables, setTable, tableArray } = useTable();
  const [selectArray, setSelectArray] = useState([]);
  const [moveArray, setMoveArray] = useState([]);
  const [isSelect, setIsSelect] = useState(false);
  const [tableSelect, setTableSelect] = useState(false);
  const [message, setMessage] = useState("");
  const [mixCount, setMixCount] = useState(0);

  return (
    <div className="sekigae">
      <div className='count'>
        <div className='count-title'>席替え回数カウンター</div>
        <div className='mix-count'>{mixCount}</div>
      </div>
      <div className='title'>席替え</div>
      <Btns tables={tables} setTable={setTable} tableArray={tableArray} setIsSelect={setIsSelect} isSelect={isSelect}
        setSelectArray={setSelectArray} selectArray={selectArray} setMessage={setMessage} setTableSelect={setTableSelect}
        moveArray={moveArray} setMoveArray={setMoveArray} setMixCount={setMixCount} mixCount={mixCount}></Btns>
      {isSelect && <div className='message container'>{message}</div>}

      <div className='teacher-square'>教卓</div>

      <div className='board'>
        {tables.map((y, yIndex) => {
          return y.map((x, xIndex) => {
            return <Table x={x} tables={tables} selectArray={selectArray} isSelect={isSelect} yIndex={yIndex} xIndex={xIndex} setSelectArray={setSelectArray}
              setMessage={setMessage} setTableSelect={setTableSelect} tableSelect={tableSelect}
              setMoveArray={setMoveArray} moveArray={moveArray} key={x}></Table>
          })
        })}
      </div>
    </div>
  );
}

export default App;
