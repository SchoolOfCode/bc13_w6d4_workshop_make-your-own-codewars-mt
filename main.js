/* 
👉 Write your kata here!
*/
// the Fibonacci sequence, is a sequence in which each number is the sum of the two preceding ones.
// The sequence looks like this 0, 1, 1, 3, 5, 8, 13, ... 

// Write a function that takes in a parameter (f) and returns a number from the sequence.
// The parameter is the position of the number in the sequence 

// e.g 3 => 2
// e.g 6 => 8



//👉 Write the function your CodeWarriors will start with below here:


export function sequence (f) {
    let sequenceNum = [0,1];
for ( let i = 0; i < f; i++) {
    sequenceNum.push(sequenceNum[i] + sequenceNum[i + 1])
    return sequenceNum[i]
}
}
