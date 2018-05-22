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
        public numberOfItemsInOnePage: number,
        public numberOfItems: number
    ) {
        super(numberOfPages , numberOfItemsInOnePage , numberOfItems);
    }
}