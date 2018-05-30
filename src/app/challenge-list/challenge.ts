import {ListDetails} from '../list/list'

export class Challenge {
    constructor(
        public id: number,
        public user: string,
        public problem: string,
        public result: string,
        public time: string,
        public score: number,
        public uploadtime: string
    ) { }
}

export class ChallengeListDetails extends ListDetails{
    constructor(
        public numberOfPages: number,
        public numberOfProblemsInOnePage: number,
        public numberOfProblems: number
    ) {
        super(numberOfPages , numberOfProblemsInOnePage , numberOfProblems);
    }
}