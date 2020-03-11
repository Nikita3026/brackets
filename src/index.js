module.exports = function check(str, bracketsConfig) {
  let stack=[];
  for(let i=0;i<str.length;i++)
  { 
    if(str[i]=="|")
    {
      if(stack[stack.length-1]=="|") stack.pop();
      else stack.push(str[i]);
    } 
    if(str[i]=="7")
    {
      if(stack[stack.length-1]=="7") stack.pop();
      else stack.push(str[i]);
    }
    if(str[i]=="8")
    {
      if(stack[stack.length-1]=="8") stack.pop();
      else stack.push(str[i]);
    }
    if(str[i]=='(' || str[i]=="{" || str[i]=="[" || str[i]=="1" || str[i]=="3" || str[i]=="5") stack.push(str[i]);
      

    if(str[i]==')' || str[i]=="}" || str[i]=="]") {
      switch(str[i]){
        case ")":
          if(i-1<0) return false;
          if(stack[stack.length-1]=="(") stack.pop();
          else{
            return false;
          }
          break;
        case "}":
          if(i-1<0) return false;
          if(stack[stack.length-1]=="{") stack.pop();
          else{
            return false;
          }
          break;
        case "]":
          if(i-1<0) return false;
            if(stack[stack.length-1]=="[") stack.pop();
            else{
              return false;
            }
            break;
      }
    }
    if(str[i]=="2" || str[i]=="4" || str[i]=="6"){
      switch(str[i]){
      case "2":
        if(i-1<0) return false;
        if(stack[stack.length-1]=="1") stack.pop();
        else return false;
        break;
      case "4":
         if(i-1<0) return false;
         if(stack[stack.length-1]=="3") stack.pop();
         else return false;
         break;
      case "6":
        if(i-1<0) return false;
        if(stack[stack.length-1]=="5") stack.pop();
        else return false;
        break;
      }
    }
  }
  if(stack.length>0) return false;
  return true;
}
