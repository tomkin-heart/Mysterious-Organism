// Returns a random DNA base
const returnRandBase = () => {
	const dnaBases = ['A', 'T', 'C', 'G']
	return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
	const newStrand = []
	for (let i = 0; i < 15; i++) {
		newStrand.push(returnRandBase())
	}
	return newStrand
}

// Factory function
let dna = mockUpStrand()
let specimenNum = 0

function pAequorFactory(dna) {
	specimenNum += 1
	return {
		specimenNum: specimenNum,
		specimenDNA: dna,
		mutate() {
			let select = Math.floor(Math.random() * 15)
			let randomBase = returnRandBase()
			if (this.specimenDNA[select] !== randomBase) {
				this.specimenDNA[select] = randomBase
				return this.specimenDNA
			}
		},

		compareDNA(objToCompare) {
			let mach = 0
			for (let i = 0; i < 15; i++) {
				if (this.specimenDNA[i] === objToCompare.specimenDNA[i]) {
					mach += 1
				}
			}
			let percentage = Math.floor((mach / 15) * 100)
			return `The current pAequor DNA has with the compared dAequor ${percentage}% in common.`
		},

		willLikelySurvive() {
			let mach = 0
			this.specimenDNA.forEach(x => {
				if (x === 'C' || x === 'G') {
					mach += 1
				}
			})
			let percentage = (mach / 15) * 100
			return percentage >= 60
		},

		//     willLikelySurvive() {
		//   const countCG = this.specimenDNA.reduce((acc, base) => (base === 'C' || base === 'G') ? acc + 1 : acc, 0);
		//   const percentage = (countCG / this.specimenDNA.length) * 100;
		//   return percentage >= 60;
		// }
	}
}

let survivingOrganisms = []
while (survivingOrganisms.length < 30) {
	let newOrganism = pAequorFactory(mockUpStrand())
	if (newOrganism.willLikelySurvive()) {
		survivingOrganisms.push(newOrganism)
	}
}

// const organism1 = pAequorFactory(mockUpStrand())
// const objToCompare = pAequorFactory(mockUpStrand())
// console.log(objToCompare.specimenDNA)
// console.log(organism1.specimenDNA)
// // console.log(organism1.mutate())
// console.log(organism1.compareDNA(objToCompare))
// console.log(organism1.willLikelySurvive())

// const organism2 = pAequorFactory(mockUpStrand())
// console.log(organism2.specimenNum)
// console.log(organism2.specimenDNA)
// console.log(organism2.mutate())

console.log(survivingOrganisms)
