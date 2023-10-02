//ES5 version

function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
}

//ES2015

const createInstructor = (firstName, lastName) => {
    return {
        firstName, 
        lastName
    };
};

//computed property names
//ES5 version

var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

//ES2015 version

const favNumber = 42;
let instructor = {
    firstName: 'Colt'
}
[favNumber] = 'That is my favorite!'

//ES5 version

var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }

//ES2015 version

let instructor = {
    firstName: 'Colt',
    sayHi(){
        return 'Hi!';
    },
    sayBye(){
        return `${this.firstName} says bye!`
    }
};

//ES5 version

const animal = (species, verb, noise) => {
    return {
        species,
        [verb](){
            return noise;
        }
    }
}
