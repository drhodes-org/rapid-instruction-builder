/// <reference path="../common/StateMachine.ts"/>
module Entity {
    import SM = StateMachine;
    // 
    
    var __staticCurrentId = 0
    function __incrementStaticCurrentId() {
        __staticCurrentId += 1
    }
    
    export class Entity extends SM.StateMachine {
        id: number
        anchored: boolean
        
        // -------------------------------------------------------
        constructor(name: string) {
            super(name)
            
            this.id = __staticCurrentId
            __incrementStaticCurrentId()

            this.anchored = false
        }

        // An anchored entity does not move.
        Anchor(b: boolean) {
            this.anchored = b
        }

        
        
    }
}