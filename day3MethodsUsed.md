**set**:<br/>
It is an **object that lets you store unique values of any type**.<br/>
It can be also a collection of values.Each value is unique <br/>
in the collection.<br/>
The **Set object provides methods like** : <br/>
**add** to add elements<br/>
**delete** to remove elements<br/> 
**has** to **check for the presence of an element**<br/>
 It's particularly useful when you need to work with collections of unique values and want to perform operations like checking membership efficiently.<br/>
It's **particularly handy for tasks like filtering out duplicate elements from an array or checking whether a value has already been processed**.<br/>

**The method has** : is used in certain data structures such as Set and Map.<br/> to check wether an element is present in the collection.<br/>
The **has method** returns a **boolean value**, true if the key or element is found, and false otherwise.
**This method is helpful for conditional checks**, allowing you to determine whether a specific value is already in the collection before performing further actions.<br/>

Example:<br/>

const mySet = new Set([1,2,3]);<br/>
const searchValue = 2;<br/>

if(mySet.has(searchValue)) { <br/>
    console.log(`${searchValue} is present in the Set.`);<br/>
} else {<br/>
    console.log(`${searchValue} is not present in the Set.`);<br/>
}<br/>

**has**<br/>
The method has is used to check if **searchValue** which has the value of 2,
is present in the **Set**.<br/>
Depending on the result, the code inside the if conditional is executed.<br/>
**Very Important**<br/>
The has method is used for conditional logic based on whether a specific element is found in a collection or not.<br/>

