import React from "react";
import apt1 from "../../assets/apt1.jpeg"
import apt2 from "../../assets/apt2.jpeg"
import Slider from "./Slider";


function SliderData(){

    return(
        <div className="slide">
            <Slider
                imageSrc={apt1}
                title={"Folder-1"}
                subtitle={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
            />

            <Slider
                imageSrc={apt2}
                title={"Folder-2"}
                subtitle={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
                flipped={true}
            />
        </div>
    )

}

export default SliderData