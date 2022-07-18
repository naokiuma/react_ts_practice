type ResultsPropsType = {
    //これらの方は、定義している箇所でマウスオーバーすることで確認できる。
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
        <>
            <h1>気象データ</h1>
            {props.results.country}<br/>
            {props.results.temprature}度
        </>
        
    );
}

export default Results;