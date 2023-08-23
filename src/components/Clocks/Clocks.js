import './Clocks.css';
import Clock from './Clock';
import { nanoid } from 'nanoid';

function Clocks({ clocks, onRemove }) {
    
    return (
        <div className='Clocks'>
            {clocks.map((clock) => {
                return (
                    <Clock 
                    key = {nanoid()} 
                    city = {clock.city} 
                    timezone = {clock.timezone}
                    onRemove = {onRemove}
                    />
                )
            })}
        </div>
    )
}

export default Clocks;