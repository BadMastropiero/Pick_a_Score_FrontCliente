export enum CellValue {
    active,
    inactive,
}



export type Cell = { value: CellValue, x: number, y:number} 