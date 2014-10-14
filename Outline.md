## Instructor: David East

## Difficulty: Intermediate

## Source Files Location: https://github.com/davideast/getting-started-with-react

## Topic: React

## Categories: Web Development, React, JavaScript

## Software/Languages/Frameworks (include version): React.js 0.11.1

# Course Name:

Getting Started with React

# Course Description:

React is a view library whose philosophy greatly differs from the usual framework. This course will cover what makes React different from all the other frameworks and libraries out there.

# Source Files Description:

All of the source files for this course are available on the GitHub repo.


# Getting Started with React

# Introduction

## 1.1 Welcome
Welcome to the course! In this lesson we'll do a brief overview of the topics we'll cover.

## 1.2 React is different
Before we dive into any of the code, we need to understand why React is different.

# Component Basics
## 2.1 First Component
In this lesson we'll write our first component with JSX. We'll cover all of the basics of properly transforming JSX and rendering our component to the page.
 - [React CDN](http://fb.me/react-0.11.1.js)
 - [JSX Transformer CDN](http://fb.me/JSXTransformer-0.11.1.js)

## 2.2 JSX vs. React.DOM
There are two ways to write components in React: JSX and React.DOM. This lesson will compare the two syntaxes.

## 2.3 State
Managing state is one of React's amazing features. This lesson will cover the basics of storing and managing state in your components.

## 2.4 Props
React uses props to give components composability. In this lesson we'll use the state we created in the previous lesson as the source of props for our owned components.

## 2.5 Synthetic Events
In this lesson we'll cover React's synthetic events. We'll see how these events work with the usual DOM events we're used to dealing with.

## 2.6 Refs
Since elements can change with re-render, it's hard to get a handle on the DOM. In this lesson we'll learn how to grab single elements using refs.

# Data Flow

## 3.1 One way directional flow of data
This lesson will cover the best practice for dealing with state and props in React. We'll also go over dealing with callbacks for changing our top-level state.

## 3.2 Comparing Angular's two-way data-binding to React
This lesson compares Angular's two-way data-binding to React's re-rendering.
 - [Angular two-way data-binding](http://jsbin.com/juqux/1/edit)
 - [Angular computed data-binding](http://jsbin.com/cakoza/1/edit)

# Component Lifecycle
## 4.1 Mounting
The first phase of the component lifecycle is the mounting phase. This lesson will cover the actions we can take before our component has mounted.

## 4.2 Updating
The second phase of the component lifecycle is the updating phase. This lesson will cover the actions we can take as our component updates with each render pass.

## 4.3 Unmounting
The last phase of the component lifecycle is the unmounting phase. This lesson will cover the actions we can take before we remove our elements from the DOM.

# JSX Transformers

## 5.1 React Tools
The in-browser JSX transformer used in so far is for development only. In production we'll need to pre-transform our JSX to JS. This lesson will go over the React Tools Node module, which allows us to transform our JSX as we develop.
 - [React Tools](https://www.npmjs.org/package/react-tools)

## 5.2 Browserify
When writing components in React it's best to put them in separate files. Since components are dependencies of other components it can make it hard to reference other files. In this lesson we'll cover the Node module Browserify. Browserify makes dependency management in React a cinch.
- [Browserify](http://browserify.org/)

## Realtime Project

## 6.1 Project Overview
To provide context to what we'll be building; we'll do a brief overview of the completed project.

## 6.2 Build process with Gulp and Browserify
It's important to have a build process in place before the project starts moving. Using Gulp and Browserify we'll make this process a cinch.

## 6.3 Static version
When building applications with React it's best to first begin with a static version. With an HTML mockup in hand we'll build a static version of our app in React.

## 6.4 Wiring up events
Now that our project is in a static state, we'll give it life by adding the events.

## 6.5 Realtime data with Firebase
Firebase is an API that allows you to store and sync your data in realtime. Firebase excels at syncing the state of your application and React excels at re-rendering when state changes. This lesson will show how the two are a great fit for one another.
 - [Firebase](https://firebase.com/)

# Conclusion

## 7.1 Further learning
Thanks for watching the course! Now that we're almost to the end we'll discuss some interesting topics to check out from here. We'll discuss using React with other frameworks and on the server as well.
 - [Backbone and React](https://github.com/tastejs/todomvc/tree/gh-pages/labs/architecture-examples/react-backbone)
 - [React Router](https://github.com/rackt/react-router)
 - [ngReact](https://github.com/davidchang/ngReact)
 - [React server rendering](https://github.com/petehunt/react-server-rendering-example)
 - [Firebase](https://firebase.com/)