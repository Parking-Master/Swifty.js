# Swifty.js
_Warning: This library is still in developement testing. Use at your own risk._

## Simplifying JavaScript, without using JavaScript.
Swifty.js uses its own syntax and keywords.<br>
Doing that will make JavaScript more fun (building custom keywords, specifying syntax etc.)<br>
Here's an example code of Swifty.js:
```
[ swift version 0.1 ]

FUNCTION example = FUNC(
[...any],
({
constant params = any
return params
})
))

example("String") # "String"
```

## Learning Step-by-Step
A complete walkthrough of how to treat Swifty.js keywords and syntax correctly.

## How was Swifty.js built? (Using JavaScript!)
Swifty.js is a JavaScript PreProcesser that takes code, transforms it fully into JavaScript, and runs it.<br>
Take this for example:
```
[ swift version 0.1 ]
FUNCTION myFunction = FUNC([...any], ({})))

##+
Check if version is valid and remove it
Take keywords and make the JavaScript-readable
Add semicolons
##-
```

## Get started
You can get it by CDNjs:
###### Regular
```html
<script src="https://cdn.jsdelivr.net/gh/Parking-Master/Swifty.js@latest/swifty.js" async>[ swift version 0.3 ]</script>
```
###### Minified
```html
<script src="https://cdn.jsdelivr.net/gh/Parking-Master/Swifty.js@latest/swifty.min.js" async>[ swift version 0.3 ]</script>
```

\- _Or download the file [here]()._

### Documentation
Let's walk through some CS (Common-Syntax) in Swifty.js.

#### 1. Correct Placement
Swifty.js code is **NOT** to be placed in `.js` (JavaScript) files.<br>
Swifty.js code is **NOT** to be placed the HTML `<script>` tag.

Instead, it uses its own tag called the `<swift>` tag:
```html
<swift>
  # Code here
</swift>
```

#### 2. Functions
From an example code, you may have noticed that Swifty.js functions are "UPPERCASE":
```
FUNCTION example = FUNC(...)
^^^^^^^^           ^^^^
```

It's so the code is not to be mixed with pre-defined keywords and variables, etc.<br>
_ALWAYS_ use "UPPERCASE" syntax for Swifty.js.

To define a function, just use `FUNCTION`.<br>
Then, the function body starts with `FUNC()`.

##### Example:
```
FUNCTION example = FUNC(...)
```

Then, to defined paramaters, you use an `Array`:
```
FUNCTION example = FUNC(
[...any],
({
constant params = any # These will be the parameters
})
))
```

**Note** that Swifty.js _never_ uses semicolons.

#### 3. Variables
A variable is simple in Swifty.js, because it is just called a `variable`:
```
variable myVar = 1
```

#### 4. Letters
A letter is also simple in Swifty.js, because it is just called a `letter`:
```
letter myLet = 0
```

#### 5. Constants
A constant is also simple in Swifty.js, because it is just called a `constant`:
```
constant myConst = 2
```

#### 6. Strings
A letter is also simple in Swifty.js, because it is just called a `letter`:
```
string myStr = "Test string"
```

#### 7. Single-Line Comments
Swifty.js comments are quite familiar because they're related to other file-type comments.<br>
They begin with a hashtag (`#`), and the comment comes right after it:
```
# This is a single-line comment
```

#### 8. Multi-Line Comments
Swifty.js multi-line comments are _not_ familiar.<br>
First, you start with two hashtags (`##`).<br>
The first one starts with a plus-sign (`+`).<br>
The lat one ends with a minus-sign (`-`).<br>

##### Example:
```
##+
Multi
Line
Comment
##-
```

<hr>

#### Here, we showed CS (Common-Syntax) in Swifty.js.

If you'd like to see more AS (Advanced-Syntax), please see the [Full Documentation]().

## License
MIT
