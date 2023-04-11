import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { ReactComponent as Reset } from '../../assets/close.svg';
import 'react-day-picker/dist/style.css';

export const Filters = ({ values, onChange }) => {
  const [showPicker, setShowPicker] = useState(false);

  const selectHandler = (e) => {
    setShowPicker(false);
    onChange({ target: { name: 'date', value: e.toLocaleDateString() } })
  };
  
  return (
    <div className="filters">
      <label htmlFor="from-filter" className="filters__label">
        <span className="filters__title">From: </span>
        <input
          id="from-filter"
          name="from"
          type="text"
          value={values.from}
          onChange={onChange}
          className="filters__input"
        />
      </label>
      
      <label htmlFor="to-filter" className="filters__label">
        <span className="filters__title">To: </span>
        <input
          id="to-filter"
          name="to"
          type="text"
          value={values.to}
          onChange={onChange}
          className="filters__input"
        />
      </label>

      <div className='filters__picker'>
        <span className="filters__title">Date: </span>
        <span name="date" className='filters__date' onClick={() => setShowPicker(prevState => !prevState)} >{values.date}</span>
        {values.date
          ?  <button type='button' className='filters__reset-btn' onClick={() => onChange({ target: { name: 'date', value: '' } })}><Reset /></button>
          : null
        }
      </div>

      {showPicker
        ? <DayPicker mode="single" selected={values.date} onSelect={selectHandler} className='custom-rdp' /> 
        : null
      }

    </div>
  );
}