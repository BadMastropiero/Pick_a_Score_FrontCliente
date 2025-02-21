import {MAX_ROWS, MAX_COLS} from '../constants';
import {CellValue, Cell} from '../types/enums/types';

export const generateCells = (): Cell[][] => {
    const cells: Cell[][] = [];

    for(let row=0; row < MAX_ROWS; row++){
        cells.push([]);
        for (let col=0; col < MAX_COLS; col++){
            cells[row].push({
                value: CellValue.active,
                x: row,
                y: col
            })
        }
    }

    return cells;
};

export const scrollToTop = () => {
    window.scrollTo(0, 0)
}

export function openInNewTab(url: string) {
    // const win: any = window.open(url, '_blank');  // TODO change the open in new tab for href
    const win: any = window.location.href = url
    win.focus();
}