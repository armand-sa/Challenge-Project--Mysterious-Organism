// * Starter Code:

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}
// console.log(returnRandBase())

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
// console.log(mockUpStrand())


// * Your Code:

/*
! Task 1
* Since you need to create multiple objects, create a factory function pAequorFactory() that has two parameters:

  * - The first parameter is a number (no two organisms should have the same number).
  *  -The second parameter is an array of 15 DNA bases.
* pAequorFactory() should return an object that contains the properties specimenNum and dna that correspond to the parameters provided.

* You’ll also add more methods to this returned object in the later steps.
*/

// Tasks 1:
