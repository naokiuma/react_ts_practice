//app.tsxのtypeと違い、resultsというpropsに入れているので、こちらでもresultsで包む必要がある
type ResultsPropsType = {
    results:{
        country:string;
        cityName:string;
        temprature:string;
        conditionText:string;
        icon:string;
    }
    
}

const Results = (props:ResultsPropsType) =>{

    return (
        <div>
            {props.results.country && <div>{props.results.country}</div>}
            {props.results.cityName && <div>{props.results.cityName}</div>}
            {props.results.temprature && <div>{props.results.temprature}<span>°C</span></div>}
            {props.results.conditionText && 
            <div>
                <img src={props.results.icon} alt="icon" />
                <span>{props.results.conditionText}</span>
            </div>}



        </div>
        
    );
}

export default Results;