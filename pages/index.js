import Aboutcontent from "../components/about-content"
import React from "react";
import Programs from "../components/programs";
import Recent from "../components/recent";
import Team from "../components/team";
import Appl from "../components/dummy";
import Exp from "../components/experience";
import Blogs from "../components/blogs";

export default function k(){

    return <div>
        <div className="parallax-container"></div>
        <Aboutcontent></Aboutcontent>
        <Programs></Programs>
        <Recent></Recent>
        <Team></Team>
        <Exp></Exp>
        <Blogs></Blogs>
    </div>
}

