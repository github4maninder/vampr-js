class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
    this.descendents = 0;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {

    let vampireCount = 0;
    let currentVampire = this;

    while(currentVampire.creator) {
      currentVampire = currentVampire.creator;
      vampireCount++;
    }

    return vampireCount;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;
  }

  listOfVampiresFromOriginal() {
    let currentVampire = this;
    let vampiresList = [[currentVampire.name, currentVampire]];

    while(currentVampire.creator) {
      currentVampire = currentVampire.creator;
      vampiresList.push([currentVampire.name, currentVampire]);
    }

    return vampiresList;
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

    let thisVampireAncestors = this.listOfVampiresFromOriginal();
    let anotherVampireAncestors = vampire.listOfVampiresFromOriginal();

    for (let ancestor of thisVampireAncestors) {
      for(let ancestor2 of anotherVampireAncestors){
        if (ancestor[0] === ancestor2[0]){
          return ancestor[1];
        }
      }
    }
  }
}

module.exports = Vampire;