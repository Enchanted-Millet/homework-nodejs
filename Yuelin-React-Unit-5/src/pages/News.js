import './News.css'
import myImage from '../1.jpeg'

const News = () => {
    return (
        <div className={"container"}>
            <div className={"newsBox"}>
                <img src={myImage} alt={'island'}/>
                <div className={"content"}>
                    <h1>Texas district attorney</h1>
                    <h3>Protesters stand outside the Starr County Jail after a woman was charged with murder</h3>
                    <p> Ramirez will file the motion to dismiss the indictment on Monday, his statement said, but stressed that the sheriff's office acted according to its responsibilities under the law.
                        "In reviewing this case, it is clear that the Starr County Sheriff's Department did their duty in investigating the incident brought to their attention by the reporting hospital. To ignore the incident would have been a dereliction of their duty," Ramirez's statement reads.
                        "Prosecutorial discretion rests with the District Attorney's office, and in the State of Texas a prosecutor's oath is to do justice. Following that oath, the only correct outcome to this matter is to immediately dismiss the indictment," Ramirez adds.
                        CNN's calls and emails to Delgado and the sheriff's office were not returned on Saturday or Sunday.</p>
                </div>
            </div>

            <div className={"newsBox"}>
                <img src={myImage} alt={'island'}/>
                <div className={"content"}>
                    <h1>Texas district attorney</h1>
                    <h3>Protesters stand outside the Starr County Jail after a woman was charged with murder</h3>
                    <p> Ramirez will file the motion to dismiss the indictment on Monday, his statement said, but stressed that the sheriff's office acted according to its responsibilities under the law.
                        "In reviewing this case, it is clear that the Starr County Sheriff's Department did their duty in investigating the incident brought to their attention by the reporting hospital. To ignore the incident would have been a dereliction of their duty," Ramirez's statement reads.
                        "Prosecutorial discretion rests with the District Attorney's office, and in the State of Texas a prosecutor's oath is to do justice. Following that oath, the only correct outcome to this matter is to immediately dismiss the indictment," Ramirez adds.
                        CNN's calls and emails to Delgado and the sheriff's office were not returned on Saturday or Sunday.</p>
                </div>
            </div>
        </div>
    )
}

export default News