export class ProblemView {
    constructor(
        public topic: string,
        public judge: string,
        public codetype: string,
        public html: any,
        public markdown: any,
        public pdf: any
    ) { }
}