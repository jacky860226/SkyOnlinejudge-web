export class testcase{
    constructor(
        public state: string,
        public runtime: number,
        public memory: number
    ) { }
}
export class ChallengeView {
    constructor(
        public uploadid: number,
        public uploadtime: string,
        public problem: string,
        public user: string,
        public score: string,
        public testcaselist: testcase[],
        public uploadcode: string
    ) { }
}