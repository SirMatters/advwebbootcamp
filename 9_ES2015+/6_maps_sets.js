class MessageBoard {  
  constructor(){
      this.messages = new Map;
      this.id = 1;
  }  
  addMessage(str){
    this.messages.set(this.id, str);
    this.id++;
    return this;
  }
  findMessageById(id){
    return this.messages.get(id);
  }
  findMessageByValue(str){
    for(let msg of this.map.values()){
      if (msg == str) return msg
    }			
  }
  removeMessage(id){
    this.messages.delete(id);
  }
  numberOfMessages(){
    return this.messages.size;
  }
  messagesToArray(){
    return Array.from(this.messages.values());
  }
}

function uniqueValues(arr){
  return new Set(arr);
}

function hasDuplicates(arr){
  return new Set(arr).size !== arr.length;
}

function countPairs(arr, num){
let cache = new Set(arr);
let count = 0;
for(val of arr){
  cache.delete(val);
  if (cache.has(num-val)){
    count++;
  }
}
return count;
}
