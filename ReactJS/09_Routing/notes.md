d1. Template -> 09_Routing_App
2. Component -> Headers --list item -> Home, About, Contact
3. Pages - Home, About, Contact

4. App.jsx --> import saare pages ko aur Header
5. App.jsx -> <div></div><Header/> <Home/> </div>


5. Install React - Router
    npm i react-router

6. Top Level Component -> App.jsx
    Import BrowserRouter, Routes, Route

    BrowserRouter --> Puri App ko Wrap kro BrowserRouter'
    Routes -> Wo part jo routing base change hoga for example pages wo part Routes me ayega and wo part jiska page navigation se lena dena nahi hum use alag rakh sakte hai jaise ki <Header/>--- So, other part wrap honge <Routes> se

    Route --> Jitne Pages hai -- usko hum Route pe add krenge with conditions
    <Route path = "pageKaPath" element={Component}/>
    <Route path="about" element={<About/>}>

7. Replace anchor tags with Link 
    Link -> to --> strinng
    <Link to="/about"/>


8. When we need active Route Styling, we will replace Navlink with Link
    Becoz Navlink ke pass isActive props milta hai