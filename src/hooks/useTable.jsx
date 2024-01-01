import { useEffect, useState } from "react";


export const useTable = () => {

    const [tables, setTable] = useState([]);
    const tableArray = [
        [1, 7, 13, 19, 25, 31, 37],
        [2, 8, 14, 20, 26, 32, 38],
        [3, 9, 15, 21, 27, 33, 39],
        [4, 10, 16, 22, 28, 34, 40],
        [5, 11, 17, 23, 29, 35, 41],
        [6, 12, 18, 24, 30, 36],
    ]
    useEffect(() => {
        setTable(tableArray);
    }, []);

    return { tables,setTable,tableArray }
}