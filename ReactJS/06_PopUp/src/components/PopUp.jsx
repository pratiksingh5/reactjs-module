import React, { useEffect } from "react";

const PopUp = ({ onClose , isOpen }) => {

    useEffect(() => {

        //mounting
        console.log("Pop up component mount hogya");
        console.log("isOpen", isOpen);
        // onOpen();


        // unmounting
        return () => {
            console.log("unmount hogya")
        }



    }, []);

    // [] --> Dependency STATE 

    // [] Is Array ke andar jo bhi state hai agar uski value change huyi toh ye pura UseEffect Phir se RUN HOGA


    return (
        <div className="pop-up">
            Hello React
            <div className="close-btn">
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default PopUp;
