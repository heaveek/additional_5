module.exports = function check(str, bracketsConfig) {
  const arrStr = str.split('');
  if (arrStr.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i <= arrStr.length; i++) {
    for (let j = 0; j <= arrStr.length; j++) {
      if(arrStr[i] == bracketsConfig[i][j]) {        
          return true;
      } else {return false;}
    }
  } 
}
