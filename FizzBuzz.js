var output = [];
function fizzBuzz(){
    for(let i = 1; i<=60; i++)
    {
        if(i % 4 ===0 && i % 3 === 0 && i % 5 === 0){
            output.push(`Fizz,Jazz,Buzz`)
        }
        else if(i % 3 === 0 && i % 5 === 0) {
            output.push(`FizzBuzz`); 
        }
        else if(i % 3 === 0 ){
            output.push(`Fizz`);   
        }
        else if (i % 5 === 0) {
          output.push(`Buzz`);
        }
        else{
            output.push(i);
        }
        
    }
    console.log(output);
}
fizzBuzz();