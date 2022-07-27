export interface IPieItem {
  id: string,
  title: string,
  name: string,
  value: number,
  color: string,
}

export interface IDataStatItem {
  id: string,
 total: number,
 name: string,
 data: IPieItem[]
}

export interface IDataStat {
  scenarios: IDataStatItem,
  lists: IDataStatItem, 
  dialogs: IDataStatItem
}

export interface IDashboardStatItem {
  pieItem: IDataStatItem
} 