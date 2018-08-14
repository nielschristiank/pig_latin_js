//var sentence = "This is a pig latin test. Squirrels are my favorite! Xlyophone, apples, mezquit: by, thy, dry, cry, crypts, flyby";

//Grabs input from user, and runs it inside pigLatinTranslator()
function translator(){
  input = document.getElementById("user_input").value;
  document.getElementById("pig-latin-translation").innerHTML = pigLatinTranslator(input);
}

// Takes in a str and returns the string in pigLatin.
function pigLatinTranslator(input){
  //create empty array to store translated words
  var results = [];
  // split input str into an array of words.
  var words = input.toLowerCase().split(" ");
  //Loop through words[]
  for(let i = 0; i < words.length; i++){
    //Check if first character is a vowel
    if(isVowel(words[i][0])){
      //Push word+way into results[], and run repositionPunctuation
      results.push(repositionPunctuation(words[i] + "way"));
    } else {
      //If the first character is not a vowel.
      //Run consonants() on words[i] and run repositionPunctuation
      results.push(repositionPunctuation(consonants(words[i]) + "ay"));
    }
  }
  //Join results array and return as string.
  return results.join(" ");
}

// function that checks if a character is a vowel: return true or false
function isVowel(char){
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  //Loop through array of vowels
  for(let i = 0; i < vowels.length; i++){
    //Check character against vowels
    if(char === vowels[i]){
      return true;
    }
  }
  return false;
}

//Takes in a str, and returns a string with consonant(s) moved to the end, or consosant(s) + "qu".
function consonants(str){
  //Create 2 string vars to store the split string.
  var startStr;
  var endStr;
  //Loop through word until a vowel is found.
  for(i = 0; i < str.length; i++){
    //If a vowel is found
    if(isVowel(str[i])){
      //Check if last consonant, and current vowel is q and u.
      if(str[i - 1] === "q" && str[i] === "u"){
        //Slice str into 2 strings after vowels ("u") index.
        startStr = str.slice(i + 1);
        endStr = str.slice(0, (i + 1));
        return startStr + endStr;
      } else {
        //Slice str 2 new strings at vowels index.
        startStr = str.slice(i);
        endStr = str.slice(0, i);
        return startStr + endStr;
      }
    }
  }
  return str.slice(1, str.length) + str[0];
}

//Finds punctuation and moves it to the end of the str.
function repositionPunctuation(str){
  //Array of punctuation
  var punctuation = [".", "?", "!", ",", ";", ":"];
  //Loop through punctuation array
  for(let i = 0; i < punctuation.length; i++){
    //check if str includes punctuation.
    if(str.includes(punctuation[i])){
      //Slice at the punctuation's index, and return with punctuation at the end.
      let index = str.indexOf(punctuation[i]);
      return str.slice(0, index) + str.slice((index + 1), (str.length)) + punctuation[i];
    }
  }
  //if no punctuation found return original string.
  return str;
}

//console.log(pigLatinTranslator(sentence));
