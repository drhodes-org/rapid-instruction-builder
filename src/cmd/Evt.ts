module Evt {
    
    export class Evt {
        private paper: any
        private background: any
        
        constructor(paper: any) {
            // this needs to be the first think displayed.
            this.paper = paper
            console.log(paper)
            
            var rect = paper.rect(0, 0, paper.width, paper.height, 0)
            rect.attr("fill", "#eee")
            rect.attr("stroke", "#eee")
            console.log(rect)
            this.background = rect
        }

    }
}