function takeANumber(l,n){
  var x = l.length + 1 
  
  return `Welcome, ${n}. You are number ${x} in line.`
}
function nowServing(d){
  if (d.length === 0){
    return "There is nobody waiting to be served!"
  }
  else { 
    var n = d[0]
    unshift.d[0]
    return n
  }
}
function currentLine(d){
  if (d.length === 0){
    return "The line is currently empty."
  }
  else {
    var x = d.length;
    var l = 1 
    var m = "The line is currently:"
    while (x>0) {m = m + l.toString() + "." + d[l-1];
    x--
    l++
    return m
    }
  }
}