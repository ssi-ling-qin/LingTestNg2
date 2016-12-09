import { ScaleItem } from '../scale-item-group/scale-item';

export class AnswerItem {
    constructor(
        public code:string,
        public selected:boolean[],
        public value:string,
        public label:string,
        public isOE:boolean,
        public sOEValue:string,
        public groupIndex:number,
        public inGroupIndex:number,  
        public isOrginal:boolean,            
        public isActive?:boolean,
        public selectedSlot?:ScaleItem
    ) { 
    
    }

}
