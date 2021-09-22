function onlyVowelOf(string)
{
    const vowels = ['A','E','I','O','U','a','e','i','o','u']
    
    vowels.forEach(vowelItem => {
        string.split('').forEach(stringItem => {
            if(vowelItem == stringItem)
            {
                console.log(vowelItem)
            }
          })      
      })      
}

onlyVowelOf("thisissomeword");