## Namaste react

# package.json is configuration of npm

# parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - Written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting 
- Differential Bundling - Support older Browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different Dev and production bundles

# #############################################

- Two ways to create REACT COMPONENT
=> Class Based Component - Old
=> Functional Component - New



# #############################################

| Feature                             | Monolithic Architecture                                       | Microservices Architecture                                                |
| ----------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Structure**                       | Single, unified codebase (all features tightly coupled)       | Multiple independent services, each handling a specific business function |
| **Deployment**                      | Entire application is deployed as one unit                    | Each service can be deployed independently                                |
| **Scalability**                     | Scales as a whole (even if only one part needs scaling)       | Scales individual services based on demand                                |
| **Technology Stack**                | Usually limited to a single stack across the app              | Each service can use its own stack (polyglot architecture)                |
| **Development Speed (early stage)** | Faster to build and launch initially                          | Slower at start due to complexity and service setup                       |
| **Development Speed (long-term)**   | Slows down as app grows (tight coupling, spaghetti code risk) | Faster long-term, as teams work independently on services                 |
| **Fault Isolation**                 | A bug or crash can affect the whole application               | Failures are isolated to the service they occur in                        |
| **Team Organization**               | Works best with small teams                                   | Encourages independent, cross-functional teams                            |
| **Testing**                         | Easier to set up unit/integration tests                       | More complex (needs service mocks, API contracts)                         |
| **Communication**                   | Internal function calls (in-memory)                           | Communication over APIs (HTTP/gRPC, message queues)                       |
| **Performance**                     | Faster internally (no network calls)                          | Slightly slower (network latency between services)                        |
| **Maintenance**                     | Harder as system grows; difficult to update specific parts    | Easier to maintain individual services                                    |
| **Deployment Risk**                 | High (a small change requires redeploying whole system)       | Low (only the changed service needs redeployment)                         |
| **Best Use Case**                   | Small-to-medium apps, MVPs, startups                          | Large, complex systems with many teams and scaling needs                  |

# ##############################################

# whenever state variable update, react triggers a reconciliation cycle (re-renders the component)

# if no dependency array => useEffect is called on every render
# if dependency array is empty = [] =>  useEffect is called on initial render (just once)
# if dependency array is [somethingInsideIt] => useEffect is only called when "somethingInsideIt" changed

# ##############################################

# 2 types Routing in web App
- client side routing
- server side routing

# ##############################################

# React class component life cycle 
- Parent Constructor
- Parnet render

  -- first child constructor
  -- first child render

  -- 2nd child constructor
  -- 2nd child render

  -- first child did mount
  -- 2nd child did mount

- Parent Did mount


---------------------------------

<!-- class component  -->

import React from 'react';
import ClassUserCard from './ClassUserCard';

class About extends React.Component {

  constructor(props) {

    super(props),
      console.log("parent constructor")

  }

  componentDidMount() {
    console.log("parent component dit mount");
  }


  render() {

    console.log("parent render");

    return (
      <div className='p-7 space-y-12'>
        <p>About</p>
        <ClassUserCard name="First (class)" location="Lahore (class)" contact="ali@gmail.com (class)" />
        <ClassUserCard name="Second (class)" location="Lahore (class)" contact="ali@gmail.com (class)" />
      </div>
    );

  };

};


export default About;

# ##############################################

# REDUX TOOLKIT

- install @reduxjs/toolkit and react-redux
- Build our store 
- Connect our store to our App
- Slice (cartSlice)
- dispatch (action)
- Selector


# ############################################

# what is state mutation ?
- changing the data (state) inside redux.
# EXAMPLE 
- you cart is empty => items: [];
- you add a pizza => state change to [pizza];
- THAT CHANGE = MUTATION

# Older Redux 

- you were not allowed to change state directly 
- you always had to return a new copy 
- return {
  ...state,
  items: [...state.items, action.payload] // -NEW ARRAY
}

# Redux Toolkit (with immer)

- Now you can write code as if you are mutating , like:
- state.items.push(action.payload);
-but behind the scenes, immer makes a new copy for you (so state is still safe/immutable). 