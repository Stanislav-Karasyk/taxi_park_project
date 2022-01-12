export interface IDriverStatus {
  title: string;
  code: string;
}

export interface IDriver {
  id: number;
  first_name: string;
  last_name: string;
  date_created: number;
  date_birth: number;
  status: IDriverStatus;
}

// export interface IAction<T> {
//   type: string;
//   payload: T;
// }

export interface IDriversState {
  drivers: IDriver[];
  statuses: IDriverStatus[];
}
