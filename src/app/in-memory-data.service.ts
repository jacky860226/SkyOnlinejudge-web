import { InMemoryDbService , RequestInfo , ResponseOptions } from 'angular-in-memory-web-api';
import { Problem , ProblemListDetails } from './problem-list/problem';

const problems_data = [
    { id: 11, name: 'ProblemName1', acrate:"100%" },
    { id: 12, name: 'ProblemName2', acrate:"100%" },
    { id: 13, name: 'ProblemName3', acrate:"100%" },
    { id: 14, name: 'ProblemName4', acrate:"100%" },
    { id: 15, name: 'ProblemName5', acrate:"100%" },
    { id: 16, name: 'ProblemName6', acrate:"100%" },
    { id: 17, name: 'ProblemName7', acrate:"100%" },
    { id: 18, name: 'ProblemName8', acrate:"100%" },
    { id: 19, name: 'ProblemName9', acrate:"100%" },
    { id: 20, name: 'ProblemName10', acrate:"100%" }
];

const challenges_data = [
    { id: 21, user: 'User1', problem: 'ProblemName1', result: 'Accepted', time: '1001', score: '100', uploadtime: '2018-05-20 13:02:24'},
    { id: 22, user: 'User2', problem: 'ProblemName2', result: 'Accepted', time: '1002', score: '100', uploadtime: '2018-05-20 13:02:24'},
    { id: 23, user: 'User3', problem: 'ProblemName3', result: 'Accepted', time: '1003', score: '100', uploadtime: '2018-05-20 13:02:24'},
    { id: 24, user: 'User4', problem: 'ProblemName4', result: 'Accepted', time: '1004', score: '100', uploadtime: '2018-05-20 13:02:24'},
    { id: 25, user: 'User5', problem: 'ProblemName5', result: 'Accepted', time: '1005', score: '100', uploadtime: '2018-05-20 13:02:24'},
    { id: 26, user: 'User6', problem: 'ProblemName6', result: 'Accepted', time: '1006', score: '100', uploadtime: '2018-05-20 13:02:24'},
    { id: 27, user: 'User7', problem: 'ProblemName7', result: 'Accepted', time: '1007', score: '100', uploadtime: '2018-05-20 13:02:24'},
    { id: 28, user: 'User8', problem: 'ProblemName8', result: 'Accepted', time: '1008', score: '100', uploadtime: '2018-05-20 13:02:24'},
    { id: 29, user: 'User9', problem: 'ProblemName9', result: 'Accepted', time: '1009', score: '100', uploadtime: '2018-05-20 13:02:24'},
    { id: 30, user: 'User10', problem: 'ProblemName10', result: 'Accepted', time: '1010', score: '100', uploadtime: '2018-05-20 13:02:24'}
];

const contests_data = [
    {id: 31, name: 'ContestName1', mode: 'class_ACM_ICPC' , status: 'NoRegister'},
    {id: 32, name: 'ContestName2', mode: 'class_ACM_ICPC' , status: 'NoRegister'},
    {id: 33, name: 'ContestName3', mode: 'class_ACM_ICPC' , status: 'NoRegister'},
    {id: 34, name: 'ContestName4', mode: 'class_ACM_ICPC' , status: 'NoRegister'},
    {id: 35, name: 'ContestName5', mode: 'class_ACM_ICPC' , status: 'NoRegister'},
    {id: 36, name: 'ContestName6', mode: 'class_ACM_ICPC' , status: 'NoRegister'},
    {id: 37, name: 'ContestName7', mode: 'class_ACM_ICPC' , status: 'NoRegister'},
    {id: 38, name: 'ContestName8', mode: 'class_ACM_ICPC' , status: 'NoRegister'},
    {id: 39, name: 'ContestName9', mode: 'class_ACM_ICPC' , status: 'NoRegister'},
    {id: 40, name: 'ContestName10', mode: 'class_ACM_ICPC' , status: 'NoRegister'}
];

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        return{
        };
    }
    get(reqInfo: RequestInfo) {
        console.log(reqInfo);
        const collectionName = reqInfo.collectionName;
        if(collectionName == 'problems' || collectionName == 'challenges' || collectionName == 'contests'){
            if(reqInfo.id == 'query'){
                if(reqInfo.query.get("start") == undefined){
                    return this.GetListQueryDetails(reqInfo);
                }else{
                    return this.GetListQuery(reqInfo);
                }
            }else{
                if(reqInfo.query.size == 0){
                    return this.GetListDetails(reqInfo);
                }else{
                    return this.GetList(reqInfo);
                }
            }
        }else{
            return undefined;
        }
    }
    GetList(reqInfo: RequestInfo) {
        const info = this.GetInfoFromGetListUrl(reqInfo);
        
        let data : any;
        data = [];
        for (var _i = 0;_i < Number(info.total);_i++){
            if(Number(info.start) + _i >= 0 && Number(info.start) + _i < 10){
                if(info.collectionName == 'problems'){
                    data.push(problems_data[Number(info.start) + _i]);
                }else if(info.collectionName == 'challenges'){
                    data.push(challenges_data[Number(info.start) + _i]);
                }else{
                    data.push(contests_data[Number(info.start) + _i]);
                }
            }
        }

        const options: ResponseOptions = data ?
        {
            body: data,
            status: 200
        } : {
            body: { error: `${info.collectionName}` + ` List not found` },
            status: 404
        };
        return reqInfo.utils.createResponse$(() => {
            return this.finishOptions(options, reqInfo);;
        });
    }

    GetListDetails(reqInfo: RequestInfo){
        let data : any;
        data = {
            'numberOfPages': 5,
            'numberOfItemsInOnePage': 2,
            'numberOfItems': 10
        };
        const options: ResponseOptions = data ?
        {
            body: data,
            status: 200
        } : {
            body: { error: `${reqInfo.collectionName}` + ` ListDetails not found` },
            status: 404
        };
        return reqInfo.utils.createResponse$(() => {
            return this.finishOptions(options, reqInfo);;
        });
    }

    GetListQuery(reqInfo: RequestInfo) {
        const info = this.GetInfoFromGetListUrl(reqInfo);
        var arr = this.GetListQueryArray(info);
        let data : any[];
        data = [];
        for (var _i = 0;_i < Number(info.total);_i++){
            if(Number(info.start) + _i >= 0 && Number(info.start) + _i < arr.length){
                data.push(arr[Number(info.start) + _i]);
            }
        }

        const options: ResponseOptions = data ?
        {
            body: data,
            status: 200
        } : {
            body: { error: `${info.collectionName}` + ` List Query not found` },
            status: 404
        };
        return reqInfo.utils.createResponse$(() => {
            return this.finishOptions(options, reqInfo);;
        });
    }

    GetListQueryDetails(reqInfo: RequestInfo){
        const info = this.GetInfoFromGetListUrl(reqInfo);
        var arr = this.GetListQueryArray(info);

        let data = {
            'numberOfPages': Math.round(arr.length / 2),
            'numberOfItemsInOnePage': 2,
            'numberOfItems': arr.length
        };

        const options: ResponseOptions = data ?
        {
            body: data,
            status: 200
        } : {
            body: { error: `${info.collectionName}` + ` List Query Details not found` },
            status: 404
        };
        return reqInfo.utils.createResponse$(() => {
            return this.finishOptions(options, reqInfo);;
        });
    }

    private GetListQueryArray(info : any): any[]{
        let arr: any[];
        if(info.collectionName == "problems"){
            arr = problems_data;
        }else if(info.collectionName == "challenges"){
            arr = challenges_data;
        }else{
            arr = contests_data;
        }
        info.query.forEach((value , key)=>{
            if(key != "start" && key != "total"){
                var reg = new RegExp(value[0] + "+")
                arr = arr.filter(
                    x => reg.test(String(x[key]))
                );
            }
        })
        return arr;
    }

    private GetInfoFromGetListUrl(reqInfo: RequestInfo): any {
        return {
            'collectionName': reqInfo.collectionName,
            'event': reqInfo.id,
            'query': reqInfo.query,
            "start": (reqInfo.query.get("start") != undefined)?reqInfo.query.get("start")[0] : undefined,
            "total": (reqInfo.query.get("total") != undefined)?reqInfo.query.get("total")[0] : undefined
        };
    }

    private finishOptions(options: ResponseOptions, { headers, url }: RequestInfo) {
        options.statusText = this.getStatusText(options.status);
        options.headers = headers;
        options.url = url;
        return options;
    }

    private getStatusText(httpStatusCode: number): string {
        switch (httpStatusCode) {
            case 200:
                return 'Ok';
            case 404:
                return 'Not found';
            case 500:
                return 'Internal server error';
            default:
                return '';
        }
    }
}
