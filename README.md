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