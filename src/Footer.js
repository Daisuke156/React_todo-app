import { useState } from 'react';
import { List } from './List';
import { Form } from './Form';
import { Languages } from './const/Languages';
import './App.css';

function Footer() {
    const [description, setDescription] = useState('Befoer Click!');
    const [tab, setTab] = useState('list');
    const [Langs, setLangs] = useState(Languages);
    
    const addLang = (Lang) => {
        setLangs([...Langs,Lang]);
        setTab('list');
    };
    const changeDescription = () => {
        setDescription('HaHaHa');

    };
    
    return(
        <div>
            <header>
            <ul>
                <li onClick ={()=>setTab('list')}>A</li>
                <li onClick ={()=>setTab('Form')}>B</li>
            </ul>
            </header>
            <button onClick={ changeDescription }>Hey!</button>
            { description }
            { tab === 'list' ? <List Langs = {Langs} /> : <Form onAddLang={addLang}/> }
            
        </div>
        );
}

export default Footer;