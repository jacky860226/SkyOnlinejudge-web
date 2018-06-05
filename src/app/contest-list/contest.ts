export class Contest {
    constructor(
        public id: number,
        public name: string,
        public mode: string,
        public status: string
    ) { }
}

export class ContestListDetails{
    constructor(
        public numberOfPages: number,
        public numberOfProblemsInOnePage: number,
        public numberOfProblems: number
    ) {}
}