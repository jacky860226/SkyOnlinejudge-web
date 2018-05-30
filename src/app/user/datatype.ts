export class LoginData{
    username: string;
    password: string;
};

export class RegData{
    username: string;
    password: string;
    email: string;
}

export class ResponseData{
    uid  : number  // Operator User id
    code : number  // Oprtation Response Code
    data : JSON // data for this oprtation
}