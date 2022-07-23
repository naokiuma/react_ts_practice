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
    const{country,cityName,temprature,conditionText,icon} = props.results;

    return (
        <div>
            {country && <div>{country}</div>}
            {cityName && <div>{cityName}</div>}
            {temprature && <div>{temprature}<span>°C</span></div>}
            {conditionText && 
            <div>
                <img src={icon} alt="icon" />
                <span>{conditionText}</span>
            </div>}



        </div>
        
    );
}

export default Results;