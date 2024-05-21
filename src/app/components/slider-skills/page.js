import "./style.css"

export default function SliderSkills(){

    let skills = [
        "React",
        "JavaScript",
        "Python",
        "HTML",
        "CSS",
        "Photoshop",
        "Illustrator",
        "Indesign",
        "Git"
    ]
    return(
        <section className="Slider-skills">
            <article id="left">
                <div>
                    {
                        skills.map((index) =>{
                            return(
                                <span key={index +"1"}>
                                    {index}
                                </span>
                            )
                        })
                    }
                </div>
                <div>
                    {
                        skills.map((index) =>{
                            return(
                                <span key={index +"2"}>
                                    {index}
                                </span>
                            )
                        })
                    }
                </div>
            </article>
            <article id="right">
                <div>
                    {
                        skills.map((index) =>{
                            return(
                                <span key={index+"3"}>
                                    {index}
                                </span>
                            )
                        })
                    }
                </div>
                <div>
                    {
                        skills.map((index) =>{
                            return(
                                <span key={index+"4"}>
                                    {index}
                                </span>
                            )
                        })
                    }
                </div>
            </article>
            <article id="left">
                <div>
                    {
                        skills.map((index) =>{
                            return(
                                <span key={index+"5"}>
                                    {index}
                                </span>
                            )
                        })
                    }
                </div>
                <div>
                    {
                        skills.map((index) =>{
                            return(
                                <span key={index+"6"}>
                                    {index}
                                </span>
                            )
                        })
                    }
                </div>
            </article>
        </section>
    )
}