Higher Order Function:

map, filter ,

function a(){
return function b()
}

Higher Order Component:

Function --> Function

Component --> Component

return <div> </div> and return <div> </div>

return (
<main>

        return (
            <div></div>
        )

    </main>

)

A Higher-Order Component (HOC) in React is a function that takes a component as input and returns a new, enhanced component, which wraps the original component 

function HOC(Component) {
return
<div>
<h1> Free ka content</h1>
<Component/>
</div>
}


Phone --> Samsung - Blue color

Phone --> Samsung --> Black color

Phone cover --> (Samsung Phone) -- Enhanced / With changes in look -- Phone

HOC -- Component --> 