import "./style.css";
import BoxComponent from "./BoxComponent";

const Content = () => {

    const arr = new Array(14).fill(0);

    return (
        <h1 className="contentContainer">
            {  arr.map(index => 
                <BoxComponent/>
            )

            }
        </h1>
    )
}

export default Content;