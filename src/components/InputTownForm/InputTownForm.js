import './InputTownForm.css';
import timezones from '../../data/timezones';
import { useState } from 'react';
import Clocks from '../Clocks/Clocks';
import { nanoid } from 'nanoid';

const data = [
    { 'city': 'London', 'timezone': 'Europe/London', },
    { 'city': 'Moscow', 'timezone': 'Europe/London' },
    { 'city': 'gfdhjsd', 'timezone': 'Etc/GMT-12' },
];

function InputTownForm() {
    const [cities, setCities] = useState(data);
    const [selectedOption, setSelectedOption] = useState('choose time zone');
    const [currentTown, setCurrentTown] = useState('');

    const removeClock = (currentCity) => {
        setCities(prevState => {
            return prevState.filter(item => item.city !== currentCity)
        })
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (selectedOption !== 'choose time zone') {
            setCities([...cities,
                {
                    'city': currentTown,
                    'timezone': selectedOption.slice(12, selectedOption.length)
                }]);
                setCurrentTown('');
                setSelectedOption('choose time zone');
        };
    }

    return (
        <div className='InputTownForm'>

            <form onSubmit={(e) => handleSubmitForm(e)}>

                <div className='form-town'>
                    <label htmlFor='city'>Town</label>
                    <input
                        required
                        className='city-input'
                        value={currentTown}
                        onChange={(e) => setCurrentTown(e.target.value)}>
                    </input>
                </div>

                <div className='form-timezone'>
                    <label htmlFor='timezones'>timezones</label>
                    <select onChange={(e) => setSelectedOption(e.target.value)} required>
                        <option key={nanoid()}>{selectedOption}</option>
                        {timezones.map((option) => <option key={nanoid()}>{option.offset} - {option.name}</option>)}
                    </select>
                </div>

                <button>add</button>
            </form>

            <Clocks clocks={cities} onRemove={removeClock} />

        </div>

    )
}

export default InputTownForm;