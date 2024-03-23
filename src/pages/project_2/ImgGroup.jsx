import React from "react";

// images
import bird from "../../assets/images/project_2/group/bird.jpg";
import building from "../../assets/images/project_2/group/building.jpg";
import cat from "../../assets/images/project_2/group/cat.jpg";
import dog from "../../assets/images/project_2/group/dog.jpg";
import house1 from "../../assets/images/project_2/group/house1.jpg";
import house2 from "../../assets/images/project_2/group/house2.jpg";
import man from "../../assets/images/project_2/group/man.jpg";
import snow from "../../assets/images/project_2/group/snow.jpg";
import woman from "../../assets/images/project_2/group/woman.jpg";


function ImgGroup() {
    return (
        <section id="group-2">
            <div className="group-2">
                <img src={bird} alt="bird" className="imgsize-2 bird"/>
                <img src={building} alt="building" className="imgsize-2 building"/>
                <img src={cat} alt="cat" className="imgsize-2 cat"/>
                <img src={dog} alt="dog" className="imgsize-2 dog"/>
                <img src={house1} alt="house1" className="imgsize-2 house1"/>
                <img src={house2} alt="house2" className="imgsize-2 house2"/>
                <img src={man} alt="man" className="imgsize-2 man"/>
                <img src={snow} alt="snow" className="imgsize-2 snow"/>
                <img src={woman} alt="woman" className="imgsize-2 woman "/>
            </div>
        </section>
    );
}

export default ImgGroup;