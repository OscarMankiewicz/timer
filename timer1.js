let arg = process.argv
//remove the first 2 items in the array
let setTimes = arg.splice(2);

const timer = function(setTimes) {
    //loop through the array of numbers
    for (let e of setTimes) {
        //skip any negative numbers or strings
        if(isNaN(e) || e < 0) {
            console.log(`${e} is not a valid input, timer skipped`)
        } else {
            //multiply the length by 1000 to set the timer at the correct length
            let length = e * 1000;
            setTimeout(() => {
            console.log(`Set a ${length / 1000} second alarm`)
            process.stdout.write('\x07');
            //timeout length is the values passed earlier 
            }, length);
        }
    }
};
//call the timer function
timer(setTimes);