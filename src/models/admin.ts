export type PostAdmin = {
    adlvno: number;
    adid: string;
    adpw: string;
    adname: string;
    adress: string;
    findpass_que: string;
    findpass_ans: string;
    email: string;
    tel: string;
    depart: string;
    duty: string;
  };
  
  export type GetAdmin = {
    adid: string;
    adname: string;
    email: string;
    depart: string;
    duty: string;
    lvname: string;
  };