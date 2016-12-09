import { AnswerItem } from '../answer-item-group/answer-item';

export class ScaleItem {
    constructor(       
    public code:string,
    public label:string,
    public groupIndex:number,
    public inGroupIndex:number,
    public answersedItems?:AnswerItem[]

    ) { 

    }
}
