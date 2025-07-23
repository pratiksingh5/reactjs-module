1. Google Font Setup

useState -- Data store karega within taht component


Syntax: const [stateKaNaam, WoFunctionJoStateKOUpdateKarega ] = useState("initialValue")


onClick-->

button --> onClick ->> get the text or ID in the button --> Update the image and title according to the clicked ID/text


1. Class Based Component
    - State is available
2. Functional based Component
    - State is not available

We can use the state with the help of React Hooks --- Feature/Functionality

State in Functional component


import useState from "react";

State Rule: YOU CANT UPDATE REACT STATE DIRECTLY

email = "nupur@gmail.com" 

email = "amol@gmail.com"   XXX

const updateEmail = (newEmail) => {
    email = newEmail;      Correct
}


const [stateName, methodToUpdateTheState] = useState(initalValue);

const [email, setEmail] = useState("");

email = "pratik@gmail.com" -- XXX
setEmail("pratik@gmail.com") -- 



Event Listener //

1. <button onclick="updateName()">
2. let btn = document.querySelector("button");
btn.addEventListener('click', function() {
    //
})

onclick -- onClick