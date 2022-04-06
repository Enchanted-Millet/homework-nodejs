//import logo from './logo.svg';
import './App1-1.css';
import React, {Component} from 'react';

class App extends Component {
  
render(){
  const top = ['', 'Breed', 'Age', 'Owner', 'Eating Habits']
  const Knocky = ['Knocky','Jack Russell','16','Mother-in-law',"Eats everyone's"]
  const Flor = ['Flor', 'Poodle', '9', 'Me', 'Nibbles at food']
  const Ella = ['Ella', 'Streetdog', '10','Me','Hearty eater']
  const Juan = ['Juan', 'Cocker Spaniel','5','Sister-in-law','Will eat till he explodes']

return (
<div>
<table>
<td className='table'>
{top.map((i)=>{return <tr className='li'>{i}</tr>})}
</td>
<td className='table'>
{Knocky.map((i)=>{return <tr className='li'>{i}</tr>})}
</td>
<td className='table'>
{Flor.map((i)=>{return <tr className='li'>{i}</tr>})}
</td>
<td className='table'>
{Ella.map((i)=>{return <tr className='li'>{i}</tr>})}
</td>
<td className='table'>
{Juan.map((i)=>{return <tr className='li'>{i}</tr>})}
</td>
</table>
</div>

)
}
}
export default App;
