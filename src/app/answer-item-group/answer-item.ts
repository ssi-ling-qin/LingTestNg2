export class AnswerItem {
    constructor(
        public code:string,
        public selected:boolean[],
        public value:string,
        public label:string,
        public isOE:boolean,
        public sOEValue:string,
        public isActive?:boolean
    ) { 
    
    }
}
