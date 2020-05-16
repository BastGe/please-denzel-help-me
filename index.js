//By Bastien GERARD

// Q1. Create a variable called `denzel` - that can't be redeclared - and assign it the string 'please denzel, help me'
const denzel = 'please denzel, help me';
// Q2. Use the variable `actor` to create a new variable called `inspirational` that is assigned the string "Is Denzel Washington an inspirational actor?"
const actor = 'Denzel Washington';
const inspirational= 'Is' + actor + ' an inspirational actor?';
// Q3  Create an object called `family` and give it the following properties:
// family has been `married` on "1983" (Number)
// family is not `presidentOfTheUnitedStates` (boolean)
// family has `children` called "John David", "Katia", "Olivia" and "Malcolm" (array of strings)
const family= {
    'married':1983,
    'presidentOfTheUnitedStates':false,
    'children':['John David','Katia','Olivia','Malcolm']
};
// Q4. Change
// * the `name` stage to "A Raisin in the Sun"
// * the `year` stage to "2014"
// by using the dot notation
const stage = {
  'name': 'Fences',
  'year': '2010'
};
stage.name='A Raisin in the Sun';
stage.year='2014';

// Q5. Change the `movie` "glory" to "Training Day" using square bracket notation
const awards = {
  'movie': 'glory'
};
awards["movie"]='Training Day';

// Q6. Create an object called "earlywork"
// The key should be the movie name and the value the release year
// Movies are
// * Carbon Copy (1981)
// * A Soldier Story (1984)
// * Power (1986)
// * Cry Freedom (1987)
// * For Queen and Countryy (1988)
const earlywork= {
    'movie':['Carbon Copy', 'A Soldier Story', 'Power', 'Cry Freedom', 'For Queen and Countryy'],
    'releaseYear':[1981,1894,1986,1987,1988]
};

// Q7. Return a new array from `debaters` with all item in uppercase
const debaters = ['we do', 'what we have to do', 'in order to do', 'what we want to do'];
const debatersUppercase = new Array(debaters.length);
for (i=0;i<debaters.length;i++) {
  debatersUppercase[i] = debaters[i].toUpperCase();
  //console.log(debatersUppercase[i]);
}


// Q8. Using this array.
// Do the following 5 steps
const directors = ['spikelee', 'ridleyscott', 'zemeckis'];

// 1. add "tonyscott" value to the end of `directors` array
directors.push('tonyscott');
// 2. remove "spikelee" value and store it in a variable called firstDirector
const firstDirector = directors.shift();
// 3. add "himself" value to the start of `directors` array
directors.unshift('himself');
// 4. remove "ridleyscott" value from the array and store it in a variable called secondDirector
const secondDirector = directors[1];
directors.splice(1,1);
// 5. let 'zemeckis' in the array but put a copy of it on a variable called thirdDirector
const thirdDirector= directors[2];


// Q9. Write the function `duplicate` that return the expected result
const duplicate = function(arr) {
  const result= new Array(arr.length*2)
  for (i=0;i<arr.length;i++) {
    result[i]=arr[i];
  }
  for(i=arr.length;i<result.length;i++){
    result[i]=arr[i-arr.length];
  }
  return result;
}
const arrDup = duplicate(['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']);
for (i=0;i<arrDup.length;i++)
{
  console.log(arrDup[i]);
}

// ❯ ['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child', 'Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']

// Q10. Refactor the current ES5-style function `police` in ES6-style.
const police =(names)=> {
  const results = [];

  for (let i = 0; i < names.length; i++) {
    results.push(names[i] + 'I am the police');
  }
  return results;
};

const quotes = ['You will never see the light of... ', 'I run shit around here ', 'King Kong aint got shit on me '];

console.log(police(quotes));
 // ❯ ['You will never see the light of... I am the police', 'I run shit around here I am the police', 'King Kong aint got shit on me I am the police'];


// Q11. Related to the https://www.tvmaze.com/people/66167/denzel-washington link
// What's the query selector to get all Cast Credits titles (Live with Kelly & Ryan, The Late Show with Stephen Colbert...).

document.querySelectorAll('a[href^="/shows"]');

// Q12. Related to the https://www.tvmaze.com/people/66167/denzel-washington link
// How many http requests are performed to render the page?

// ---> 56 requests

// Q13. Related to the following api call with "curl"
// ❯ curl "http://api.tvmaze.com/people/6616"
// Could you describe and explain the response?

//It does the same thing as right click -> inpect element but instead prints the contents
//of the URL in the console. Following the link in a browser and entering curl (url) gave me the same result.

// Q14. Refactor the following codebase with a promise notation
const fs = require('fs').promises;
fs.readFile(filePath)
.then((data) => 
{
  console.log(data);
})
.catch((err) => 
{
  console.error(err);
});


// Q15. Refactor the following codebase with async/await notation
function resolveFetch(reponse) {
  return new Promise(resolve =>{
    resolve(reponse.json());
  })
}
async function asyncF() {
  let data = await ( await fetch('http://api.tvmaze.com/search/people?q=denzel+washington').json());
  const {pers} = data[0];
  const {id} = pers;
  let persData = await ( await (await fetch(`http://api.tvmaze.com/people/${id}/castcredits?embed=show`)).json());
  console.log(persData);
}


// Q16. Give me at least 3 memorable websites that engage to continue (because of nice UX/UI AND avoid to give me facebook, airbnb etc...)

/*Some of the best websites to me are : 
  - Spotify's website, which follows the same design as their native application (black/white/gray and some green).
  - TvTime.com, which is a website that lets you track your TV shows, etc and is well done
  - tumblr.com, because the level of customization you can achieve on your blog is great.*/

// Q17. Describe an ESILV project that you worked on that you’re proud of?
/*This year's project (PIMO for me because I was doing my first semester abroad) consisted of creating an online class, for 2nd or 3rd year students
at ESILV. The topic of this course is about learning WPF and XAML from simple windows up to databinding & code-behind.
We made a website for that course and I am proud of what we have accomplished because it is a well-rounded course
and easy to understand.*/

// Q18. Describe ESILV project that you worked on that you’re not so proud of?
/*I am not proud of the Sudoku we had to do a few years ago, I got lazy and waited too much time before investing myself
and actually coding the project. Since then I have changed the way I approach projects.*/

// Q19. What are some things you like about the developer tools you use?
/* I love the fact that, for most of them, they are very versatile and there are multiple ways to achieve
your goals, multiple correct ways and different logic behind what you can do.*/

// Q20. Last question: could you explain me - in your terms - why the title of the course is "Web Application Architecture(s)" and not "Web Application Architecture"?

/*To me, it's Web Application ArchitechtureS because there are multiple different interfaces
and ways to manage your data. For example, you can use node.js, react, express, python... It's up to you to choose the one that
suits you the most.*/
