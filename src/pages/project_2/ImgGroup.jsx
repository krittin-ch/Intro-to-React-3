import React from "react";
import bird from "../../assets/images/project_2/group/bird.jpg"

function ImgGroup() {
    return (
        <section id="group-2">
            <div className="group-2">
                <img src={bird} alt="bird" className="imgsize bird"/>
            </div>
        </section>
    );
}

export default ImgGroup;