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
