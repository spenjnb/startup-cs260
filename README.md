# Startup-cs260
&emsp;My idea is creating an app that generates suggestions of things you can do during your free time. To personalize the experience users will take a quiz or have the option during the registration process to provide some information about themselves and the things they like to do. Users will be given options of activities to do with friends, alone, sports, recreational or for a date night. If the people you know are registered they can get updates and notifications of a new event or newly created party.<br/>&emsp;Customers can add pictures to keep and share memories. The app would provide links to places and calculate activities according to the suggested budget input by the users. The goal of the app if to get rid of the question most people face on a night out “where should we go?”.

![startup-picture](https://user-images.githubusercontent.com/98859625/214980690-1ae8191f-cca8-4a68-94c7-f995d7862862.PNG)

<h3>Important</h3>
&emsp;Use the ssh console program to shell into your production environment server. <br/>
ssh -i [key pair file] ubuntu@[yourdomainnamehere] <br/>
Example: ssh -i ~/keys/production.pem ubuntu@myfunkychickens.click <br/>

<h3>Learning HTML</h3>
&emsp;Structure of webpage. Format for webpages o documents, uses elements and tags. It's got attributes and classes thta classify groups of elements. We can add images and links to other pages by using "href" hyperlink. <br/>
<b>Important links:</b><br/>
- HTML Intrudcution: 
   <br/>CODEPEM, https://codepen.io/spenjnb/pen/dyjLvvO
   <br/>READING, https://github.com/webprogramming260/.github/blob/main/profile/html/introduction/introduction.md
   <br/>
- HTML Structure: 
   <br/>CODEPEN, https://codepen.io/spenjnb/pen/eYjovXp
   <br/>READING, https://github.com/webprogramming260/.github/blob/main/profile/html/structure/structure.md
   <br/>
- HTML Input:
   <br/>CODEPEN, https://codepen.io/spenjnb/pen/WNKWjKr
   <br/>READING, https://github.com/webprogramming260/.github/blob/main/profile/html/input/input.md
   <br/>
- HTML Media:
  <br/>CODEPEN, https://codepen.io/spenjnb/pen/NWBmvZm
  <br/>READING, https://github.com/webprogramming260/.github/blob/main/profile/html/media/media.md
  <br/>
  
<h3>Simon asssignment</h3>
&emsp;Implementing the different html files of Simon helped me apply the concepts that I learned from the HTML lectures and practices. I was able to use most of the material from the readings which I think is really important and very helpful.<br/>&emsp;I got to practice writing on Visual Studio and using the live server tool which helps me see live what is happening as I work on the webapp. Commiting and pushing the work to Github creates a good personal practice and habit that I am sure is necessary when working on complex and simple proyects.<br/>&emsp;Overall, it was a great way to practice which I really appreciate, I am sure this will be useful during the creation of my own original website.
<br/>
<h3>Learning CSS</h3>
&emsp;Cascading Style Sheets(CSS) The tool that is used to give style to the bewsite.
<br/>
- There are different ways to associate HTML and CSS.<br/>
- CSS works in a cascade style. Lower level declarations override higher ones.<br/>
- It's defined as boxes. elements contents - padding - border - margin.<br/>
- Box-sizing value can be change to redifine the width and height to include padding and the border.<br/>
<h4>CSS Selectors</h3>
- Reading link: https://github.com/webprogramming260/.github/blob/main/profile/css/selectors/selectors.md<br/>
- CodePem link: https://codepen.io/spenjnb/pen/BaPXjrR<br/>
<h4>CSS Declarations</h4>
- Reading link: https://github.com/webprogramming260/.github/blob/main/profile/css/declarations/declarations.md<br/>
- CodePem link: https://codepen.io/spenjnb/pen/rNrXLNM<br/>
<h4>CSS Fonts</h4>
- Reading link: https://github.com/webprogramming260/.github/blob/main/profile/css/fonts/fonts.md<br/>
- CodePem link: https://codepen.io/spenjnb/pen/mdjNEVz<br/>
- Google fonts link: https://fonts.google.com/<br/>
<h4>CSS Animations</h4>
- Reading link: https://github.com/webprogramming260/.github/blob/main/profile/css/animation/animation.md<br/>
- Simple Animation CodePem link: https://codepen.io/spenjnb/pen/GRBVqrz<br/>
- Watch Animation CodePem link: https://codepen.io/spenjnb/pen/wvxVWgV<br/>
- Clouds Animation CodePem link: https://codepen.io/spenjnb/pen/KKBOMWV<br/>

<h3>Simon Css Assignment</h3>
&emsp;Updating the previous HTML files and adding the css file was very interesting this week. I learned that rewriting html files when they were using outdated or old code can be dificult since things can fall apart very easy and one can sometimes get lost because of it. However, the structure of the html themselves was solid and I was able to see were things were moving and interpret what was happening to the webpage. So it important to have solid structures and trust things will come together after everything has been written.<br/>
&emsp;Bootstrap is very helpful, there are so many tools that make writing html easier and more intuitive. It words well with VS IDE, so having frameworks proves to ve very advantageous. It is important to keep track of the components and look them up online if necessary to make sure we are sure of what is happening.<br/>
- Naming classes appropiately helps understand css better. <br/>
- To see boder lines, use "border: size solid color. <br/>
- Take advantage of positioning by using, absolute/relative, flex, float. <br/>

<h3>Learning JavaScript</h3>
&emsp;Language based on C, Java, and Scheme. Most used language and all websites use them. It compiles at runtime. JavaScript does not complain too much (which is actually not good). Important links to refer to for more information [MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) or [CanIUse](https://caniuse.com/). JS is a weakly typed language, meaning that variables always have type, but they can change type when assigned a new value. <br/>
- JavaScript console object provides interaction wiht debuggers console. <br/>
- Console object outputs value of texts and objects, timers and iterations. <br/>
- Link : https://github.com/webprogramming260/.github/blob/main/profile/javascript/console/console.md. <br/>
- To insert JavaScript to HTML file we can either put it in directly or use the src attribute and reference the JS file. <br/>
- To declare variables we will use either "let" if we want to be able to make changes to variable or "const" if we do not want to change it. <br/> <br/>

<h4>JavaScript defines several primitives types:</h4>

| Type        | Meaning                                                    |
| ----------- | ---------------------------------------------------------- |
| `Null`      | The type of a variable that has not been assigned a value. |
| `Undefined` | The type of a variable that has not been defined.          |
| `Boolean`   | true or false.                                             |
| `Number`    | A 64 bit signed number.                                    |
| `BigInt`    | A number of arbitrary magnitude.                           |
| `String`    | A textual sequence of characters.                          |
| `Symbol`    | A unique value.                                            |

<h4>Some commonly used objects:</h4>

| Type       | Use                                                                                    | Example                  |
| ---------- | -------------------------------------------------------------------------------------- | ------------------------ |
| `Object`   | A collection of properties represented by name value pairs. Values can be of any type. | `{a:3, b:'fish'}`        |
| `Function` | An object that has the ability to be called.                                           | `function a() {}`        |
| `Date`     | Calendar dates and times.                                                              | `new Date('1995-12-17')` |
| `Array`    | An ordered sequence of any type.                                                       | `[3, 'fish']`            |
| `Map`      | A collection of key value pairs that support efficient lookups.                        | `new Map()`              |
| `JSON`     | A lightweight data-interchange format used to share information across programs.       | `{"a":3, "b":"fish"}`    |

<h5>Common Operators</h5>
- add '+' - subtract '-' - multiply '*'  divide '/'. <br/>
- Important difference between, Strict Equality '===' (three) and Equality '==' (two). <br/>
- JS supports concatenation. <br/>
- Ternary operator, compact 'if else', (if 'a' equals '1' ) a === 1 ? (print '1') console.log(1) (else) : (print 'not 1') console.log('not 1'); <br/>
<h4>Functions</h4>
- JS functions are first class objects, meaning they can be assigned a name, passed as a parameter, returned as a result and referenced from an object or array like any other variable. </br>
- Functions can be defiend anonymously and assigned to a variable. </br>
- Functions can be declared inside other fuctions. </br>
- To avoid cluttering due to lots of anonymous functions, JS has arrow syntax. "() => 3"; </br>
<h4>Arrays</h4>
Some functions associated with arrays in J:<br/><br/>

| Function | Meaning                                                   | Example                       |
| -------- | --------------------------------------------------------- | ----------------------------- |
| push     | Add an item to the end of the array                       | `a.push(4)`                   |
| pop      | Remove an item from the end of the array                  | `x = a.pop`                   |
| slice    | Return a sub-array                                        | `a.slice(1,-1)`               |
| sort     | Run a function sort an array in place                     | `a.sort((a,b) => b-a)`        |
| values   | Creates an iterator for use with a `for of` loop          | `for (i of a.values()) {...}` |
| find     | Find the first item satisfied by a test function          | `a.find(i => i < 2)`          |
| forEach  | Run a function on each array item                         | `a.forEach(console.log)`      |
| reduce   | Run a function to reduce each array item to a single item | `a.reduce((a, c) => a + c)`   |
| map      | Run a function to map an array to a new array             | `a.map(i => i+i)`             |
| filter   | Run a function to remove items                            | `a.filter(i => i%2)`          |
| every    | Run a function to test if all items match                 | `a.every(i => i < 3)`         |
| some     | Run a function to test if any items match                 | `a.some(i => 1 < 1)`          |

<h4>Objects and Classes</h4>
* Objects can be dynamically modify. <br/>
* We can use object-literal syntax to declare a variable of object type. <br/>
* Objects have static functions some of them are, 'entries', 'keys', 'values'. <br/>
* Any method that returns an object is considered a constructor. It can be invoked with `new` operator. <br/>
* Objects can have any type of property value. Methods can be created as part of the objects encapsulation. <br/>
* `this` pointer depends upon the scope of where it is used. It objects it refers to the to a pointer to the object. <br/>
<h4>Classes</h4>
* Classes can define objects. <br/>
* It helps clarify the intent to create a reusable component. <br/>
* Classes have explicit constructors. <br/>
* To make properties and functions private use prefix `#`. <br/>
* Classes can be extended using `extends` keyword to define inheritance. <br/>
* Parameters passed to the parent class are delivered using `super` function. <br/>
* Methods with same name as parent method override the parent's implementation. <br/>
* To access parent method we can use `super` keyword. <br/>
<h4>Regular Expressions (Regex)</h4>
&emsp;Regular expressions are patterns used to match combinations in strings. We can create regular expressions usings literal or objects.</br>
- Use literal if we know the pattern and if we are sure it won't change. </br>
- Constructor works better if we need to get pattern from user getting it from input. </br>
- More details in this link: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">Regular Expressions</a> <br/>
<h4>Scope</h4>
1. Gobal - Visible to all code </br>
2. Module - Visible to all code running in a module </br>
3. Function - Visible within a function </br>
4. Block - Visible within a block of code delimited by curly braces </br>
Link for more details: <a href="https://github.com/webprogramming260/.github/blob/main/profile/javascript/scope/scope.md">Scope</a> <br/>
<h4>Document Object Model</h4>
<h5>Event Listeners</h5>
All DOM elements support the ability to attach a function that gets called when an event occurs on the element.<br/>
These functions are called event listeners.<br/><br/>

| Event Category | Description           |
| -------------- | --------------------- |
| Clipboard      | Cut, copied, pasted   |
| Focus          | An element gets focus |
| Keyboard       | Keys are pressed      |
| Mouse          | Click events          |
| Text selection | When text is selected |

<br/>

<h4>URL</h4>
&emsp;The Uniform Resource Locator (URL) represents the location of a web resource. A web resource can be anything, such as a web page, font, image, video stream, database record, or JSON object. It can also be completely ephemeral, such as a visitation counter, or gaming session.<br/>

The URL syntax uses the following convention. Notice the delimiting punctuation between the parts of the URL. Most parts of the URL are optional. The only ones that are required are the scheme, and the domain name.

```yaml
<scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>
```

| Part        | Example                              | Meaning                                                                                                                                                                                                                                                                             |
| ----------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scheme      | https                                | The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.                                                                                                                            |
| Domain name | byu.edu                              | The domain name that owns the resource represented by the URL.                                                                                                                                                                                                                      |
| Port        | 3000                                 | The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.     |
| Path        | /school/byu/user/8014                | The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.                                                    |
| Parameters  | filter=names&highlight=intro,summary | The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string. |
| Anchor      | summary                              | The anchor usually represents an sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID.                    |

Technically you can also provide a user name and password before the domain name. This was used historically to authenticate access, but for security reasons this is deprecated. However, you will still see this convention for URLs that represent database connection strings.

<br/>

