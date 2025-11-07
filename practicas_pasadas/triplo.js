//r=a+b-c*d
let a = 5;
let b = 10;
let c = 2;
let d = 3;  

let t1=c*d;//t1: 6
let t2=a+b;//t2: 15
let t3=t2-t1;//t3: 9
let r=t3;
console.log(r);//resultado: 9

//******************************************************* */
//x=(m*n)/(p+q)-r
let m = 20;
let n = 5;
let p = 3; 
let q = 7;
let r1 = 9;

let te1= m*n;//te1: 100
let te2= p+q;//te2: 10
let te3= te1/te2;//te3: 10
let te4= te3 - r;//te4: 1
let x= te4;
console.log(x);//resultado: 1

//******************************************************* */
//total=(a+b+c)*(d-e)
let a1 = 8;
let b1 = 12;
let c1 = 10;
let d1 = 15;
let e1 = 5;

let vt1=a1+b1;//vt: 20
let vt2=vt1+c1;//vt2: 30
let vt3=d1-e1;//vt3: 10
let vt4=vt2*vt3;//vt4: 300
let total=vt4;
console.log(total);//resultado: 300

//******************************************************* */
//val=a*(b+c/d)-e
let a2 = 6;
let b2 = 18;
let c2 = 12;
let d2 = 4;
let e2 = 5;

let va1=c2/d2;//va1: 3
let va2=b2+va1;//va2: 21
let va3=a2*va2;//va3: 126
let va4=va3-e2;//va4: 121
let val=va4;
console.log(val);//resultado: 121       

//******************************************************* */
//z=(x+y)*(a-b)/(c+d)
let x1 = 7;
let y1 = 13;
let a3 = 20;
let b3 = 5;
let c3 = 4;
let d3 = 6;

let vz1=x1+y1;//vz1: 20
let vz2=a3-b3;//vz2: 15             
let vz3=c3+d3;//vz3: 10
let vz4=vz1*vz2;//vz4: 300
let vz5=vz4/vz3;//vz5: 30
let z=vz5;
console.log(z);//resultado: 30