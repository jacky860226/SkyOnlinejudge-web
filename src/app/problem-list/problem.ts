import {ListDetails} from '../list/list'

export class Problem {
    constructor(
        public id: number,
        public name: string,
        public acrate: string
    ) { }
}
export class ProblemListDetails extends ListDetails{
    constructor(
        public numberOfPages: number,
        public numberOfProblemsInOnePage: number,
        public numberOfProblems: number
    ) {
        super(numberOfPages , numberOfProblemsInOnePage , numberOfProblems);
    }
}