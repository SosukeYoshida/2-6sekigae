import { useEffect, useRef, useState } from "react"
import "./Table.css"

export const Table = ({ x, tables, selectArray, isSelect, yIndex, xIndex, setSelectArray, setMessage, setTableSelect, tableSelect
    , setMoveArray, moveArray }) => {
    const [isMove, setIsMove] = useState(false);
    const [selectClass, setSelectClass] = useState(false);
    const [moveClass, setMoveClass] = useState(false);
    const table = useRef(null);
    const handleTableClick = () => {
        if (!tableSelect) {
            //固定したいテーブル選択
            setTableSelect(true)
            setSelectClass(true);
            setSelectArray([...selectArray, x]);
        }
        if (tableSelect) {
            //どこに移動するか     
            setIsMove(true)
            setMoveArray([...moveArray, [yIndex, xIndex]]);
        }
    }

    useEffect(() => {
        if (isMove) {
            setTableSelect(false)
            setIsMove(false)
            setMoveClass(true)
        }

    }, [isMove])

    useEffect(() => {
        setMessage("固定したい人の番号を選択してください");
    }, [])

    useEffect(() => {
        if (tableSelect) {
            setMessage("固定する場所を選択し、席替え開始ボタンを押してください")
        }
        if (!tableSelect) {
            setIsMove(false)
        }
    }, [tableSelect])

    //クラス削除
    useEffect(() => {
        if (isSelect) {
            setMoveClass(false);
            setSelectClass(false);
        }
    }, [isSelect])

    return (
        <>
            <div className={`table ${isSelect ? "hover" : ""} ${isSelect && selectClass ? "selected" : ""}  ${isSelect && moveClass ? "move" : ""}
            `} ref={table} onClick={isSelect ? handleTableClick : () => { }}>{x}</div>
        </>
    )

}