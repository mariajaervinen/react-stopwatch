import React, {useState} from 'react'

export default function Toggle(props) {
    const [isToggleOn, setToggleOn] = useState(true);

    function handleClick(){
        setToggleOn(!isToggleOn) //asettaa se vastakkaiseen, eli false
        if(isToggleOn){ 
            props.stop(); //jos kellon käynnissä -> pysäytetään
        }else{
            props.start();//jos ei -> käynnistää
        }
    }

    return (
        <div>
            <button onClick={handleClick}>
                {isToggleOn ? 'Stop':'Start'/*buttonin teksti, riippuen onko käynnissä vai ei*/} 
            </button>
        </div>
    )
}
