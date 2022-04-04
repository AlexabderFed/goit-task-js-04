// Задача №1 
  function makePizza() {
    return "Your pizza is being prepared, please wait.";
  }
  
  
  const result = makePizza();
  const pointer = makePizza;
  
  // Задача №2 
  function deliverPizza(pizzaName) {
    return `Delivering ${pizzaName} pizza.`;
  }
  
  function makePizza(pizzaName) {
    return `Pizza ${pizzaName} is being prepared, please wait...`;
  }
  
 
  function makeMessage(pizzaName, callback) {
    
    return callback(pizzaName);
  }
  
  // Задача №3 
  function makePizza(pizzaName, callback) {
    console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
    callback(pizzaName);
  }
  
  makePizza("Royal Grand", function deliverPizza(pizzaName) {
    console.log(`Delivering pizza ${pizzaName}.`);
  });
 
  
  makePizza("Ultracheese", function eatPizza(pizzaName) {
    console.log(`Eating pizza ${pizzaName}.`);
  });
  
  // Задача №4 
  const pizzaPalace = {
    pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
    order(pizzaName, onSuccess, onError) {
      if (pizzaPalace.pizzas.includes(pizzaName)){
        console.log(onSuccess(pizzaName));
        return onSuccess(pizzaName);
      }
      console.log(onError(`There is no pizza with a name ${pizzaName} in the assortment.`));
      return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
    },
  };
 
  
  // Callback for onSuccess
  function makePizza(pizzaName) {
    return `Your order is accepted. Cooking pizza ${pizzaName}.`;
  }
  
  // Callback for onError
  function onOrderError(error) {
    return `Error! ${error}`;
  }
  
  // Method calls with callbacks
  pizzaPalace.order('Smoked', makePizza, onOrderError);
  pizzaPalace.order('Four meats', makePizza, onOrderError);
  pizzaPalace.order('Big Mike', makePizza, onOrderError);
  pizzaPalace.order('Vienna', makePizza, onOrderError);
  
  // Задача №5 
  function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    
    orderedItems.forEach(function(number, index){
    totalPrice += number;
    });
    
    return totalPrice;
  }
  // Задача №6 
  function filterArray(numbers, value) {
    const filteredNumbers = [];
    
  numbers.forEach(function(number, index){
    if(number > value){
      filteredNumbers.push(number);
    }
  });
    
    return filteredNumbers;
  }
  
  // Задача №7
  function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    
    firstArray.forEach(function(namber, index){
      if(secondArray.includes(namber)){
  commonElements.push(namber);
      }
    })
  
    return commonElements;
 
  }
  
  // Задача №8 


const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

  // Задача №9 

const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;


  // Задача №10 
const calculateTotalPrice = (orderedItems) => {
    let totalPrice = 0;
  
    orderedItems.forEach((item) => {
      totalPrice += item;
    });
  
    return totalPrice;
  }
  
  
  // Задача №11 
const filterArray = (numbers, value) => {
    const filteredNumbers = [];
  
    numbers.forEach((number) => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
  
  
    return filteredNumbers;
  }
  
  // Задача №12 

const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];
  
    firstArray.forEach((element) => {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });
  
    
    return commonElements;
  }
  
  // Задача №13 
  function changeEven(numbers, value) {
   
   const a = [];
    numbers.forEach( (number) => 
    {number % 2 === 0 ? a.push(number + value) : a.push(number);}
  
   
  );
  
    return a;
  }
  
  // Задача №14 
  const planets = ["Earth", "Mars", "Venus", "Jupiter"].map(planet => planet);
  const planetsLengths = [5, 4, 5, 7].map(planet => planet);
  
  // Задача №15
  const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
    {
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
  ];
  
  
  const titles = books.map(book => book.title);
  
  // Задача №16 
  const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      genres: ["adventure", "history"],
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      genres: ["fiction"],
    },
    {
      title: "Redder Than Blood",
      author: "Tanith Lee",
      genres: ["horror", "mysticism"],
    },
  ];

  
  const genres = books.flatMap(book => book.genres);
  
  // Задача №17
const getUserNames = users => {
    
    return users.map(user => user.name);
      };
      
  // Задача №18 
const getUserEmails = users => {
    return users.map(user => user.email)
  
    };
  
  // Задача №19
  const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
 
  
  const evenNumbers = numbers.filter(value => value%2 == 0);
  const oddNumbers = numbers.filter(value => value%2 != 0);
  // Задача №20 
  const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      genres: ["adventure", "history"],
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      genres: ["fiction", "mysticism"],
    },
    {
      title: "Redder Than Blood",
      author: "Tanith Lee",
      genres: ["horror", "mysticism", "adventure"],
    },
  ];
  
  const allGenres = books.flatMap(book => book.genres);
  const uniqueGenres = books.flatMap(book => book.genres).filter((course, index, array) => array.indexOf(course) === index);
  // Задача №21 
  const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
    {
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
  ];
  
  const MIN_RATING = 8;
  const AUTHOR = "Bernard Cornwell";

  
  const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
  const booksByAuthor = books.filter(book => book.author === AUTHOR);
  
  // Задача №22 

const getUsersWithEyeColor = (users, color) => {
 
    return users.filter(user => user.eyeColor === color);
    };
    
  // Задача №23 

const getUsersWithAge = (users, minAge, maxAge) => {
    return users.filter(user => user.age >= minAge && user.age <= maxAge )
   
   };
  
  // Задача №24 

const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName));
   };
  
  // Задача №25 

const getFriends = (users) => {
    const a = users.flatMap (user => user.friends);
 console.log(a)
 const b = a.filter((users, index, array) => { return array.indexOf(users) === index});
 return b;
};

  // Задача №26 

const getActiveUsers = (users) => {
 
    return users.filter((user) => user.isActive
    );
    
  }
  
  // Задача №27 

const getInactiveUsers = (users) => {
    return users.filter((user) => !user.isActive
   );
 };
 
 
  // Задача №28 
  const books = [
    {
      title: 'The Last Kingdom',
      author: 'Bernard Cornwell',
      rating: 8.38,
    },
    {
      title: 'Beside Still Waters',
      author: 'Robert Sheckley',
      rating: 8.51,
    },
    {
      title: 'The Dream of a Ridiculous Man',
      author: 'Fyodor Dostoevsky',
      rating: 7.75,
    },
    { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  ];
  const BOOK_TITLE = 'The Dream of a Ridiculous Man';
  const AUTHOR = 'Robert Sheckley';
  
  
  const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
  const bookByAuthor = books.find((book) => book.author === AUTHOR);
  // Задача №29 

const getUserWithEmail = (users, email) => {
    return users.find(user => user.email === email)
  };
  
  // Задача №30 
  const firstArray = [26, 94, 36, 18];
  const secondArray = [17, 61, 23];
  const thirdArray = [17, 26, 94, 61, 36, 23, 18];
  
  
  const eachElementInFirstIsEven = firstArray.every(value => value/2);
  const eachElementInFirstIsOdd = firstArray.every(value => !value%2);
  
  const eachElementInSecondIsEven = secondArray.every(value => !value);
  const eachElementInSecondIsOdd = secondArray.every(value => value);
  
  const eachElementInThirdIsEven = thirdArray.every(value => value%2);
  const eachElementInThirdIsOdd = thirdArray.every(value => !value/2);
  // Задача №31 

const isEveryUserActive = (users) => {
    return users.every(user => user.isActive)
  };
  
  // Задача №32 
  const firstArray = [26, 94, 36, 18];
  const secondArray = [17, 61, 23];
  const thirdArray = [17, 26, 94, 61, 36, 23, 18];
  
  
  const anyElementInFirstIsEven = firstArray.some(value => value >= 0);
  const anyElementInFirstIsOdd = firstArray.some(value => !value);
  
  const anyElementInSecondIsEven = secondArray.some(value => !value);
  const anyElementInSecondIsOdd = secondArray.some(value => value);
  
  const anyElementInThirdIsEven = thirdArray.some(value => value);
  const anyElementInThirdIsOdd = thirdArray.some(value => value >= 0);
  
  // Задача №33 

const isAnyUserActive = users => {
    return users.some(user => user.isActive)
 };

  // Задача №34 
  const players = {
    mango: 1270,
    poly: 468,
    ajax: 710,
    kiwi: 244
  };
  const playtimes = Object.values(players); // [1270, 468, 710, 244]
  
  
  const totalPlayTime = playtimes.reduce((acc, item) => {return acc + item}, 0 );
  
  
  const averagePlayTime = totalPlayTime / playtimes.length;
  // Задача №35 
  const players = [
    { name: "Mango", playtime: 1270, gamesPlayed: 4 },
    { name: "Poly", playtime: 469, gamesPlayed: 2 },
    { name: "Ajax", playtime: 690, gamesPlayed: 3 },
    { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
  ];
  
  
  const totalAveragePlaytimePerGame = players.reduce((total, player) => {
    return (total + player.playtime / player.gamesPlayed)
  },0);
  // Задача №36 
const calculateTotalBalance = users => {
    const a = users
     .map(value => value.balance)
     .reduce((acc, item) => {
   
       console.log (acc + item)
       return acc + item;
   
   }, 0)
     return a;
   };
   
  // Задача №37 
const getTotalFriendCount = users => {
    return users.reduce((acc, item) => {
         return acc + item.friends.length
            }, 0);
  };
  
  // Задача №38 
  const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
  const authors = [
    "Tanith Lee",
    "Bernard Cornwell",
    "Robert Sheckley",
    "Fyodor Dostoevsky",
  ];
  
  
  const ascendingReleaseDates = [...releaseDates].sort();
  
  const alphabeticalAuthors = [...authors].sort();
  // Задача №39 
  const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
  
  
  const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
  
  const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
  // Задача №40 
  const authors = [
    "Tanith Lee",
    "Bernard Cornwell",
    "Robert Sheckley",
    "Fyodor Dostoevsky",
    "Howard Lovecraft",
  ];
  
  
  const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));;
  
  const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
  
  // Задача №41 
  const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
    {
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
  ];
  
  
  const sortedByAuthorName = [...books].sort((firstStudent, secondStudent) =>
    firstStudent.author.localeCompare(secondStudent.author)
  );
  
  const sortedByReversedAuthorName = [...books].sort((firstStudent, secondStudent) =>
    secondStudent.author.localeCompare(firstStudent.author)
  );
  
  const sortedByAscendingRating = [...books].sort(
    (firstStudent, secondStudent) => firstStudent.rating - secondStudent.rating
  );
  
  const sortedByDescentingRating = [...books].sort(
    (firstStudent, secondStudent) => secondStudent.rating - firstStudent.rating
  );
  
  // Задача №42 

const sortByAscendingBalance = users => {
    return [...users].sort((firstStudent, secondStudent) =>
    firstStudent.balance - secondStudent.balance)
  ;
  };
  
  // Задача №43 
const sortByDescendingFriendCount = users => {
    return [...users].sort((a,b) => b.friends.length - a.friends.length);
  };
  
  // Задача №44 
const sortByName = users => {
    return [...users].sort((a,b) => a.name.localeCompare(b.name))
  };
  
  // Задача №45
  const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
    {
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    {
      title: "The Dreams in the Witch House",
      author: "Howard Lovecraft",
      rating: 8.67,
    },
  ];
  const MIN_BOOK_RATING = 8;
  // Change code below this line
  
  const names = books
  .filter(value => value.rating > MIN_BOOK_RATING)
  .map(user => user.author)
  .sort((a,b) => a.localeCompare(b))
  ;
  
  // Задача №46 
const getNamesSortedByFriendCount = users => {
   
    return [...users]
    .sort((a,b) => a.friends.length - b.friends.length)
    .map(user => user.name)
    ;;
  };
  
  // Задача №47 
const getSortedFriends = users => {
    return users.flatMap (user => user.friends)
     .filter((course, index, array) => array.indexOf(course) === index)
     .sort((a,b) => a.localeCompare(b));
   };
  
  // Задача №48 
const getTotalBalanceByGender = (users, gender) => {
    return users
   .filter ( user => user.gender === gender) 
   .reduce((acc, item) => acc+item.balance,0)
 };
 