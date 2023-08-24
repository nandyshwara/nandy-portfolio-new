import Marquee from "react-fast-marquee";
import biAcademy from "../assets/svgs/Biacademy.svg"
import foodhub from "../assets/imgs/foodhub.png"
import optum from "../assets/imgs/optum.png"
import transcurators from "../assets/imgs/transcurators.png"
export default function Clients(){
    return(
        <div className="bg-[#19191D] mt-10 mb-0 py-10">
            <p className="text-4xl font-bold text-color-one text-center pb-10">Organizations And Clients</p>
            <Marquee>
                <img className="h-12 mr-10" src={biAcademy} alt="companyImages"/>
                <img className="h-12 mr-10" src={transcurators} alt="companyImages"/>
                <img className="h-12 mr-10" src={optum} alt="companyImages"/>
                <img className="h-12 mr-10" src={foodhub} alt="companyImages"/>
            </Marquee>
        </div>
    )
}