<<<<<<< HEAD
import "./Btn.css"

export const Btns = ({ tables, setTable, tableArray, setIsSelect, isSelect, selectArray, setSelectArray, setMessage, setTableSelect, moveArray, setMoveArray, setMixCount, mixCount }) => {
    const usedNum = new Set();
    //席替え開始ボタン
    const handleStartClick = () => {
        let moveIndex = 0;
        setTable((prev) => {
            //chatGPT
            const newTable = JSON.parse(JSON.stringify(prev));
            for (let i = 0; i < tables.length; i++) {
                for (let j = 0; j < tables[i].length; j++) {
                    let RandomNum;
                    // moveArrayとselectArrayの対応を確認し、固定された席ならばその値を使う
                    const moveIndex = moveArray.findIndex(([moveRowIndex, moveColIndex]) => {
                        return i === moveRowIndex && j === moveColIndex
                    });
                    if (moveIndex !== -1) {
                        const selectNum = selectArray[moveIndex];
                        newTable[i][j] = selectNum;
                        usedNum.add(selectNum);
                    } else {
                        selectArray.forEach(selectNum => {
                            usedNum.add(selectNum);
                            console.log(selectNum);
                        })
                        // usedNum.add(random);
                        // ランダムな数字を生成
                        do {
                            RandomNum = Math.floor(Math.random() * 41) + 1;
                        } while (usedNum.has(RandomNum));

                        newTable[i][j] = RandomNum;
                        usedNum.add(RandomNum);
                    }
                }
            }
            return [...newTable];
        });
        setIsSelect(false)
        setMixCount(mixCount + 1)
        setMessage("固定したい人の番号を選択してください")
        // usedNumを初期化
        usedNum.clear();
        // setTableSelect(false)
    }

    //リセットボタン
    const handleResetClick = () => {
        setIsSelect(false)
        setSelectArray([])
        setTable(tableArray)
        setMessage("固定したい人の番号を選択してください")
        setTableSelect(false);
        setMoveArray([]);
        setSelectArray([]);
        setMixCount(0)
    }
    //席固定キャンセルボタン
    const cancelClick = () => {
        setIsSelect(false);
        setSelectArray([]);
        setTableSelect(false);
        setMoveArray([]);
        setSelectArray([]);
    }

    return (
        <>
            <div className="btns container">
                <div className="btn btn-outline-danger" onClick={handleResetClick}>リセット</div>
                <div className='btn btn-outline-primary' onClick={handleStartClick} >席替え開始</div>
                <div className="btn btn-outline-success" onClick={() => { setIsSelect(true) }} >席固定</div>
                {isSelect && <div className="btn clear-btn btn-outline-secondary" onClick={cancelClick}>キャンセル</div>}
            </div>
        </>
    )

=======
import "./Btn.css"

export const Btns = ({ tables, setTable, tableArray, setIsSelect, isSelect, selectArray, setSelectArray, setMessage, setTableSelect, moveArray, setMoveArray, setMixCount, mixCount }) => {
    const usedNum = new Set();
    //席替え開始ボタン
    const handleStartClick = () => {
        setTable((prev) => {
            //chatGPT
            const newTable = JSON.parse(JSON.stringify(prev));
            for (let i = 0; i < tables.length; i++) {
                for (let j = 0; j < tables[i].length; j++) {
                    let RandomNum;
                    // moveArrayとselectArrayの対応を確認し、固定された席ならばその値を使う
                    const moveIndex = moveArray.findIndex(([moveRowIndex, moveColIndex]) => {
                        return i === moveRowIndex && j === moveColIndex
                    });
                    if (moveIndex !== -1) {
                        const selectNum = selectArray[moveIndex];
                        newTable[i][j] = selectNum;
                        usedNum.add(selectNum);
                    } else {
                        // ランダムな数字を生成
                        do {
                            RandomNum = Math.floor(Math.random() * 41) + 1;
                        } while (usedNum.has(RandomNum));

                        newTable[i][j] = RandomNum;
                        usedNum.add(RandomNum);
                    }
                }
            }
            return [...newTable];
        });
        setIsSelect(false)
        setMixCount(mixCount + 1)
        setMessage("固定したい人の番号を選択してください")
        // usedNumを初期化
        usedNum.clear();
        // setTableSelect(false)
    }

    //リセットボタン
    const handleResetClick = () => {
        setIsSelect(false)
        setSelectArray([])
        setTable(tableArray)
        setMessage("固定したい人の番号を選択してください")
        setTableSelect(false);
        setMoveArray([]);
        setSelectArray([]);
        setMixCount(0)
    }
    //席固定キャンセルボタン
    const cancelClick = () => {
        setIsSelect(false);
        setSelectArray([]);
        setTableSelect(false);
        setMoveArray([]);
        setSelectArray([]);
    }

    return (
        <>
            <div className="btns container">
                <div className="btn btn-outline-danger" onClick={handleResetClick}>リセット</div>
                <div className='btn btn-outline-primary' onClick={handleStartClick} >席替え開始</div>
                <div className="btn btn-outline-success" onClick={() => { setIsSelect(true) }} >席固定</div>
                {isSelect && <div className="btn clear-btn btn-outline-secondary" onClick={cancelClick}>キャンセル</div>}
            </div>
        </>
    )

>>>>>>> ffca050e9e32083e8356bb4bb4b01a58724f7cd7
}