//Q1: User should enter array of numbers and you are giving thr number, one of the two numbers 
//that equals the sum of the given number
var numbers = [1,2,3,4,5,6,7,8,9,10]
function adding(x,y){
    return (x+y)

}
console.log(adding(6,6));



//Q2: find the cone volume using hight(h) and radius(r)
// v= 1/3*(3.14)*r2*h
function getVolum(h , r)
{
    let radius = r * r
    console.log(`The radius is ${radius}`)
    let hight = h
    console.log(`The hight is ${hight}`)
    let v = 0.3 * 3.14 * radius * h
    console.log(`The volum is ${v}`)
}
console.log(5,6);



//Q3: Write a program that comapring three numbers and get the largest number , user should enter the numbers
function getLargest(a,b,c)
{
    if(a>b && a>c && b>c){
        console.log(a + " is Max " + c +"  is min")  
    }
    else if(b>a && b>c && a>c){
        console.log (b+ " is Max " + c + " is min")
    }
    else if(c>a && c>b && a>c){
        console.log (c + " C is Max " + b + " is min")
    }
    
    else {
        console.log (c+ " is Max "+ a +" is min")
    }    
}
console.log(getLargest(100,66,4))



//Q4: Mohammed wanted to find out if the person he was talking to online 
//was a girl or a boy by their username by this method : 
//characters in the username is single --> user is boy otherwise it is girl

function getCher(a)
 {
    if(a % 2 === 0 ){
         console.log("  is a boy")  
     }
     else{
         console.log (" is girl")
    }
    
 }
 console.log(getCher(5))




