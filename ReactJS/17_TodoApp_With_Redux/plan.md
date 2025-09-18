1. Template Code Understanding

2. What is Redux? Why Redux? -- State Management --> Centralised Store --> Huge Ecosystem, Productio Apps

3. What is Redux ToolKit?

Redux-  complexity
Redux Toolkit -- Simplified

4. Single Source of truth -- Redux vs context API

5. Understand the following:
    - Store
    - dispatch
    - actions
    - reducer

6. Core Flow Diagram

7. useDispatch

Jab bhi apko state update karna ho -- Aap useDispatch use kroge [POST]

8. useSelector

Jab bhi hume state ko get karna ho --- Hum useSelector use krenge [GET]

9. Installation

    - npm install @reduxjs/toolkit
    - npm install react-redux


10. We will make store




1. Create store -> configureStore()

2. Create reducer ->

    Slice --ka part hota hai reducer bas slice me ek do property aur aati hai jaise slice ka naam, initialState ki value etc

    Slice ->
    1. Name
    2. InitialState
    3. reducers functions

3. Linking between Store and reducer (slice)

4. Wrap store on the top level component

5. Add Todo -
    - dispatch(addTodo(task))

6. Read Todo

    useSelector - state