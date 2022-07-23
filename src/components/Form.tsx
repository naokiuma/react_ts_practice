//form.tsx

// https://api.weatherapi.com/v1/current.json?key=5c2df4c00423492cb1985434221707&q=tokyo&aqi=no
//TypeScriptの型を指定する書き方には大きく二つの方法があル。
//一つは　useState<string>("");のように、指定したいものの横に型を書き込む方法。
//もう一つはtypeなどで別の箇所で指定


type FormPropsType = {
    //これらの方は、定義している箇所でマウスオーバーすることで確認できる。

    setCity:React.Dispatch<React.SetStateAction<string>>;
    getWeather:(e: React.FormEvent<HTMLFormElement>) => void;
    city:string;
}

const Form = ({city,setCity,getWeather}:FormPropsType) =>{
    return(
        <form onSubmit={getWeather}>
            <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)} value={city}/>
        </form>
    );
}

export default Form;