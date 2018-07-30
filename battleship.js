//PSUEDO CODE

//const row
//const column

// function1- 
//Using mouseX and mouseY

//function2(setup)-
//Create Canvas(600,600)


/*const customFill = function(i,y){
    const j = y/battleHeight;
    fill(255/numberOfRows * (i+1), 100, 255/numberOfColumns * (j+1) );
}*/
let battleWidth;
let battleHeight;

let colorBlue1 = "blue"
let colorBlue2 ="blue"
let colorBlue3 = "blue"
let colorBlue4 = "blue"
let colorBlue5 = "blue"
let colorBlue6 = "blue"
let colorBlue7 = "blue"
let colorBlue8 = "blue"
let colorBlue9 = "blue"

const numberOfRows = 10;
const numberOfColumns = 10;

        function setup(){
            createCanvas(800,800);
        
            battleHeight = height/numberOfColumns
            battleWidth = width/numberOfRows
            
        }

function mouseInside(x,y , width, height){
    if(mouseX > x && mouseX<x + width && mouseY > y && mouseY< y + height){
        
        
        return  true
    } else{
        return false
    }
}

function mouseClicked(){
   if(mouseInside(0 ,0 , battleWidth,battleHeight ))
    {
        colorBlue1 = "red"
   
        }  
    if(mouseInside(80,80, battleWidth, battleHeight)){
        
        colorBlue2 = "red"
    
    }
    if(mouseInside(160,160, battleWidth, battleHeight)){
        
        colorBlue3 = "red"
    
    }

    if(mouseInside(560,80, battleWidth, battleHeight)){
        
        colorBlue4 = "red"
    
    }
    if(mouseInside(560,160, battleWidth, battleHeight)){
        
        colorBlue5 = "red"
    
    }
    if(mouseInside(560,240, battleWidth, battleHeight)){
        
        colorBlue6 = "red"
    
    }
    if(mouseInside(240,640, battleWidth, battleHeight)){
        
        colorBlue7 = "red"
    
    }
    if(mouseInside(320,640, battleWidth, battleHeight)){
        
        colorBlue8 = "red"
    
    }
    if(mouseInside(400,640, battleWidth, battleHeight)){
        
        colorBlue9 = "red"
    
    }

}
let x = battleWidth
let y = battleHeight

function draw(){
    for(let i = 0; i<numberOfRows;i++ ){
        const x = battleWidth*i 


for(let j = 0; j< numberOfColumns; j++){
const y = battleHeight*j
fill("blue")
rect(x,y,battleWidth,battleHeight);



    }
    //SHIP #1
    fill(colorBlue1)
    rect(0 ,0 , battleWidth,battleHeight);

   
    fill(colorBlue2)
    rect (80,80, battleWidth, battleHeight)

    
    fill(colorBlue3)
    rect(160,160,battleWidth,battleHeight)

    //SHIP#2
    fill(colorBlue4)
    rect(560,80,battleWidth,battleHeight)

    fill(colorBlue5)
    rect(560,160,battleWidth,battleHeight)

    fill(colorBlue6)
    rect(560,240,battleWidth,battleHeight)

    //SHIP#3
    fill(colorBlue7)
    rect(240,640,battleWidth,battleHeight)

    fill(colorBlue8)
    rect(320,640,battleWidth,battleHeight)

    fill(colorBlue9)
    rect(400,640,battleWidth,battleHeight)

    
    


}


}