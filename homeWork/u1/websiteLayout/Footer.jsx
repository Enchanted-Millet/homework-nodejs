const Footer = () => {

    const arr = new Array(4).fill(0);

    return (
        <div className="footerContainer">
        {
            arr.map(index => (
                <h1 key={index} className="footer"></h1>
            ))
        }
        </div>
       
    )
}

export default Footer;