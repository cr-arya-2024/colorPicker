import React,{useState} from 'react'
function ColorPicker(){
    const [color,setColor]=useState("#ffffff");
    function handleColor(e){
        setColor(e.target.value)
    }
return(
    <>
    <div className="color-Picker-contianer">
        <h1>Color Picker</h1>
<div className='color' style={{backgroundColor:color}}><p className='color-para'>
    {color}
    </p></div>
    <h3>Color Selected:{color}</h3>
    <input type="color" value={color} onChange={handleColor}/>
    </div>
    </>
)
}
export default ColorPicker