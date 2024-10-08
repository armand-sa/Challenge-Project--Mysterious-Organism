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

const pAequorFactory = (num, dnaBases) => {
  // 3
  return {
    _specimenNum: num, 
    _dna: dnaBases,
    
    get specimenNum() {
      return this._specimenNum;
    },

    get dna() {
      return this._dna;
    },

    set specimenNum(num) {
      if (typeof num === 'number') {
        this._specimenNum = num;
      } else {
        console.log(`This SPECIMEN NUMBER is INVALID! Provided ${num} is a ${typeof num}, it should be a number!`);
      } 
    },

    set dna(dnaBases) {
      if (dnaBases.length === 15) {
        this._dna = dnaBases;
      } else {
        console.log(`This DNA BASE is INVALID, it should contain 15 DNA bases, but contains ${dnaBases.length} bases!`);
      }
    },
    
    // 4 -----------------------------------------
    mutate() {
      // Randomly selecting a DNA Base in the existing DNA
      let baseSelection = this._dna.indexOf(this._dna[Math.floor(Math.random() * this._dna.length)]);
      console.log(`${`\nDNA Base '` + this._dna[baseSelection] + `'`} was selected to mutate. This selection is at index: ${baseSelection}!`);
      console.log(this._dna);

      // Randomly selecting a DNA Base to mutate the existing DNA with
      let baseAssignment;

      // Ensure that the new base is different from the current one
      do {
        baseAssignment = returnRandBase();
      } while (this._dna[baseSelection] === baseAssignment);

      // Mutating the existing DNA
      this._dna[baseSelection] = baseAssignment;

      console.log(`It was randomly mutated to DNA Base '${baseAssignment}'!\n`);
      console.log(this._dna);
    },

    // 5 -----------------------------------------
    compareDNA(pAequor) {
      // Create a list of the same DNA bases in the same positions
      const specimen1 = this._dna;
      const specimen2 = pAequor.dna;
      const specimensSamePositionBases = [];

      // Get DNA Bases in common and add to specimensSamePositionBases
      for (i = 0; i < 15; i++) {
        if (specimen1[i] === specimen2[i]) {
          specimensSamePositionBases.push(specimen1[i])
        }
      }

      console.log('\nBoth specimens have these DNA Bases in common:', specimensSamePositionBases)
      console.log(`The number of DNA Bases, out of 15, they have in common is: ${specimensSamePositionBases.length}!`);

      // Calculate the DNA in common
      let inCommonCalculation = (specimensSamePositionBases.length / 15) * 100;
      let inCommonDNA = inCommonCalculation.toFixed();
      console.log(`Specimen #1 and Specimen #2 have ${inCommonDNA}% DNA in common!\n`);
    },

    // 6 -----------------------------------------
    willLikelySurvive() {
      // Count C's and convert to a percentage
      const countC = this._dna.filter(base => base === 'C').length;
      const calcCountC = Math.round((countC / 15) * 100);
      // console.log(`\nThe percentage of 'C' DNA bases in the strand is: ${calcCountC.toFixed()}%`);

      // Count G's and convert to a percentage
      const countG = this._dna.filter(base => base === 'G').length;
      const calcCountG = Math.round((countG / 15) * 100);
      // console.log(`The percentage of 'G' DNA bases in the strand is: ${calcCountG.toFixed()}%`);

      if (calcCountC >= 60 || calcCountG  >= 60) {
        // console.log('The DNA IS made up of at least 60% "C" or "G" bases!\nThe likelihood of survival is:');
        return true;
      } else {
        // console.log('The DNA IS NOT made up of at least 60% "C" or "G" bases!\nThe likelihood of survival is:');
        return false;
      }
      // console.log(countC, countG);
    }
  }
};

// TESTING -  Instance 1
const pAequorInstance1 = pAequorFactory(1, mockUpStrand());
// Testing:
console.log('\npAequorInstance1 - OBJECT:', pAequorInstance1);
console.log('pAequorInstance1 - SPECIMEN NUMBER:', pAequorInstance1.specimenNum);
console.log('pAequorInstance1 - DNA:', pAequorInstance1.dna);
// pAequorInstance1.specimenNum = '1';
// pAequorInstance1.dna = ['G', 'T', 'T', 'A', 'G', 'G', 'C', 'G', 'G', 'G', 'T', 'A', 'T', 'C']
// console.log('\npAequorInstance1 - OBJECT:', pAequorInstance1);
pAequorInstance1.mutate();
console.log('\nIs pAequor likely to survive:', pAequorInstance1.willLikelySurvive());


// TESTING - Instance 2
const pAequorInstance2 = pAequorFactory(2, mockUpStrand())
console.log('\npAequorInstance2 - OBJECT:', pAequorInstance2);
console.log('pAequorInstance2 - SPECIMEN NUMBER:', pAequorInstance2.specimenNum);
console.log('pAequorInstance2 - DNA:', pAequorInstance2.dna);
pAequorInstance2.compareDNA(pAequorInstance1);
console.log('\n');
// console.log(pAequorInstance2.willLikelySurvive());

// 7 -----------------------------------------
const createSurvivingStrands = () => {
  // Create an array to store instances where likely survival is true
  let resultSurviving = [];
  // Create the specimen number
  let DNA_StrandNumber = 0;
  
  // Check that the instances are likely to willLikelySurvive
  while (resultSurviving.length < 30) {
    
    // Create a unique DNA sequence
    let DNA_Strand = mockUpStrand();
    // Create the object instances
    let instance = pAequorFactory(DNA_StrandNumber, DNA_Strand)
    if (instance.willLikelySurvive()) {
      console.log(instance.dna)
      resultSurviving.push(instance)
      DNA_StrandNumber++;
    }
  };

  console.log(resultSurviving)
  return resultSurviving;
};
createSurvivingStrands();

