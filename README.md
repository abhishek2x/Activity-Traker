# Activity-Traker
An Application to track user activity and regulate the tasks accordingly.

## Style Guide

### Component definition

All components (presentation, containers or pages) are 
defined as a directory, named with pascal casing. The main component file
should be `index.js`, main stylesheet `style.css`. CSS custom properties
can be kept in `properties.css`:

```
AwesomeCard/
├── index.js
├── properties.css
└── style.css
```
---

### Project organization

The project components are separated in at least three directories:

```
awesome-react-project/
└── src/
   ├── components/
   ├── containers/
   └── pages/
```

Each of these directories have special types of components:


#### `components/`

Stateless components. Shouldn't store state. Most components in this
directory will be function-based components. Stuff like buttons, inputs,
labels and all presentational components goes here. This components can
also accept functions as props and dispatch events, but no state should
be held inside.

#### `containers/`

Container components can store state. Containers are built mostly from
the composition of presentational components with some styles to layout
them together. Containers can also store internal state and access refs
to provide additional logic, but all actions should be accepted as
component callbacks.

#### `pages/`

Page components can store state, receive route parameters and dispatch
Redux actions when applicable. Pages are the highest level of application's
components. They represent the application routes and most times are
displayed by a router. Pages are also responsible for handling container
components callbacks and flowing data into children containers.

---

## References

The Style Guide is followed from [react-style-guide](https://github.com/pagarme/react-style-guide)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---
