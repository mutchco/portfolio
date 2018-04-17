## Classes

<dl>
<dt><a href="#App">App</a></dt>
<dd><p>Class representing the entire app</p>
</dd>
<dt><a href="#Circle">Circle</a></dt>
<dd><p>Class representing a floating circle</p>
</dd>
<dt><a href="#EmailModal">EmailModal</a></dt>
<dd><p>Class representing the email form modal</p>
</dd>
<dt><a href="#Header">Header</a></dt>
<dd><p>Class representing the header</p>
</dd>
<dt><a href="#Line">Line</a></dt>
<dd><p>Class representing an animated line</p>
</dd>
<dt><a href="#Ripple">Ripple</a></dt>
<dd><p>Class representing a touch-feedback ripple</p>
</dd>
<dt><a href="#Sphere">Sphere</a></dt>
<dd><p>Class representing a set of animated spheres</p>
</dd>
<dt><a href="#Title">Title</a></dt>
<dd><p>Class representing an animated title</p>
</dd>
<dt><a href="#Home">Home</a></dt>
<dd><p>Class for home route</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#{Array[">{Array[</a></dt>
<dd></dd>
</dl>

<a name="App"></a>

## App
Class representing the entire app

**Kind**: global class  
<a name="App+render"></a>

### app.render()
Render method, renders header, router and routes

**Kind**: instance method of [<code>App</code>](#App)  
<a name="Circle"></a>

## Circle
Class representing a floating circle

**Kind**: global class  

* [Circle](#Circle)
    * [.clickHandler()](#Circle+clickHandler)
    * [.closeHandler()](#Circle+closeHandler)
    * [.build(left, top)](#Circle+build)
    * [.componentDidMount()](#Circle+componentDidMount)
    * [.render()](#Circle+render)

<a name="Circle+clickHandler"></a>

### circle.clickHandler()
Click handler to open the circle

**Kind**: instance method of [<code>Circle</code>](#Circle)  
<a name="Circle+closeHandler"></a>

### circle.closeHandler()
Close handler for the circle

**Kind**: instance method of [<code>Circle</code>](#Circle)  
<a name="Circle+build"></a>

### circle.build(left, top)
Build the circle with the top and left coordinates

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Params**

- left <code>Number</code> - the left position (in pixels) for the circle
- top <code>Number</code> - the top position (in pixels) for the circle

<a name="Circle+componentDidMount"></a>

### circle.componentDidMount()
CDM function, add event listeners and get children with 'mut_item' class

**Kind**: instance method of [<code>Circle</code>](#Circle)  
<a name="Circle+render"></a>

### circle.render()
Render function, accepts props containing color and children

**Kind**: instance method of [<code>Circle</code>](#Circle)  
<a name="EmailModal"></a>

## EmailModal
Class representing the email form modal

**Kind**: global class  

* [EmailModal](#EmailModal)
    * [.onInput](#EmailModal+onInput)
    * [.onSubmit](#EmailModal+onSubmit)
    * [.render()](#EmailModal+render)

<a name="EmailModal+onInput"></a>

### emailModal.onInput
Handles input events, sets state of input name

**Kind**: instance property of [<code>EmailModal</code>](#EmailModal)  
<a name="EmailModal+onSubmit"></a>

### emailModal.onSubmit
Handles submit event, preforms validation and sends fetch to AWS api gateway

**Kind**: instance property of [<code>EmailModal</code>](#EmailModal)  
<a name="EmailModal+render"></a>

### emailModal.render()
Render method, manipulates dom based on modal open and loading value,

**Kind**: instance method of [<code>EmailModal</code>](#EmailModal)  
<a name="Header"></a>

## Header
Class representing the header

**Kind**: global class  
<a name="Header+render"></a>

### header.render()
Render method, basic header

**Kind**: instance method of [<code>Header</code>](#Header)  
<a name="Line"></a>

## Line
Class representing an animated line

**Kind**: global class  
<a name="Line+render"></a>

### line.render()
Render method adds style class

**Kind**: instance method of [<code>Line</code>](#Line)  
<a name="Ripple"></a>

## Ripple
Class representing a touch-feedback ripple

**Kind**: global class  

* [Ripple](#Ripple)
    * [.clickHandler](#Ripple+clickHandler)
    * [.componentDidMount()](#Ripple+componentDidMount)
    * [.render()](#Ripple+render)

<a name="Ripple+clickHandler"></a>

### ripple.clickHandler
Handles parent click event, positions ripple and adds open css class

**Kind**: instance property of [<code>Ripple</code>](#Ripple)  
<a name="Ripple+componentDidMount"></a>

### ripple.componentDidMount()
CDM method, adds css parent, calculates diameter and adds click handler to parent

**Kind**: instance method of [<code>Ripple</code>](#Ripple)  
<a name="Ripple+render"></a>

### ripple.render()
Render method, adds ripple ref to instance

**Kind**: instance method of [<code>Ripple</code>](#Ripple)  
<a name="Sphere"></a>

## Sphere
Class representing a set of animated spheres

**Kind**: global class  
<a name="Sphere+render"></a>

### sphere.render()
Render method, adds style class and renders number of spheres

**Kind**: instance method of [<code>Sphere</code>](#Sphere)  
<a name="Title"></a>

## Title
Class representing an animated title

**Kind**: global class  

* [Title](#Title)
    * [.open](#Title+open)
    * [.close](#Title+close)
    * [.render()](#Title+render)

<a name="Title+open"></a>

### title.open
Brings the title content into view

**Kind**: instance property of [<code>Title</code>](#Title)  
<a name="Title+close"></a>

### title.close
Hides the content from view

**Kind**: instance property of [<code>Title</code>](#Title)  
<a name="Title+render"></a>

### title.render()
Render method, sets font-size, animation delay and sets content as

**Kind**: instance method of [<code>Title</code>](#Title)  
<a name="Home"></a>

## Home
Class for home route

**Kind**: global class  

* [Home](#Home)
    * [.onResize](#Home+onResize)
    * [.onModalOpen](#Home+onModalOpen)
    * [.onModalClose](#Home+onModalClose)
    * [.componentDidMount()](#Home+componentDidMount)
    * [.componentWillUnmount()](#Home+componentWillUnmount)
    * [.buildCircleGraph()](#Home+buildCircleGraph)
    * [.getRandom(items, maximum)](#Home+getRandom)
    * [.getRandomWithin(min, max)](#Home+getRandomWithin)
    * [.render()](#Home+render)

<a name="Home+onResize"></a>

### home.onResize
Handles window resize, rebuilding the circle graph

**Kind**: instance property of [<code>Home</code>](#Home)  
<a name="Home+onModalOpen"></a>

### home.onModalOpen
Handles modal open

**Kind**: instance property of [<code>Home</code>](#Home)  
<a name="Home+onModalClose"></a>

### home.onModalClose
Handles modal close

**Kind**: instance property of [<code>Home</code>](#Home)  
**Params**

- event <code>Event</code> - The touch/click event

<a name="Home+componentDidMount"></a>

### home.componentDidMount()
CDM function, calls graph build and adds resize listener

**Kind**: instance method of [<code>Home</code>](#Home)  
<a name="Home+componentWillUnmount"></a>

### home.componentWillUnmount()
CWU function, removes resize listener

**Kind**: instance method of [<code>Home</code>](#Home)  
<a name="Home+buildCircleGraph"></a>

### home.buildCircleGraph()
Determines circle radius, calculates random positions of circles, triggers circle build

**Kind**: instance method of [<code>Home</code>](#Home)  
<a name="Home+getRandom"></a>

### home.getRandom(items, maximum)
Get random number between 0 and maxium with no duplicates

**Kind**: instance method of [<code>Home</code>](#Home)  
**Params**

- items <code>Array.&lt;Number&gt;</code> - currently selected numbers, to prevent duplicates
- maximum <code>Number</code> - the largest number the random can be

<a name="Home+getRandomWithin"></a>

### home.getRandomWithin(min, max)
Get random number within min and max

**Kind**: instance method of [<code>Home</code>](#Home)  
**Params**

- min <code>Number</code> - The lowest number the random can be
- max <code>Number</code> - the highest number the random can be

<a name="Home+render"></a>

### home.render()
Render function

**Kind**: instance method of [<code>Home</code>](#Home)  
<a name="{Array["></a>

## {Array[
**Kind**: global constant  