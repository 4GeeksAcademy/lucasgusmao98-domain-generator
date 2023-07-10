
  //write your code here
  
  const generatedomainname=() =>{
    let pronoun = ['the','our'];
  let adj = ['great', 'big' ];
  let noun = ['jogger','racoon'];
    for(let i=0; i<pronoun.length; i++){
      for(let a=0; a<adj.length; a++){
        for(let r=0; r<noun.length; r++){
          console.log(pronoun[i]+adj[a]+noun[r])
        }
      }
    }
  }
  console.log (generatedomainname())

