declare module Types {
  export type DateType = {
    month: string;
    year: string;
  };
  export interface Datum {
    id: number;
    payType: number;
    amount: string;
    date: Date;
    typeName: string;
    userId: number;
    remark: string;
    deleteFlag: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

  export interface List {
    time: string;
    income: number;
    outlay: number;
    data: Datum[];
  }

  export interface RootObject {
    id: number;
    phone: string;
    password: string;
    userName: string;
    avatar: string;
    gender: boolean;
    budget: string;
    createdAt: Date;
    updatedAt: Date;
    clockInTimes: number;
    todayClockIn: boolean;
    month: string;
    year: string;
    addPageAppear: boolean;
    monthBill: {
      totalIncome: number;
      totalOutlay: number;
      list: List[];
    };
    yearBill: {
      totalIncome: number;
      totalOutlay: number;
      list: List[];
    };
    statistics: { name: string; value: number }[];
  }
}
