export class Problem{
    constructor(
        public id: number,
        public name: string,
        public acrate: string
    ) {
    }
}
export class ProblemListDetails{
    constructor(
        public numberOfPages: number,
        public numberOfItemsInOnePage: number,
        public numberOfItems: number
    ) {
    }
}