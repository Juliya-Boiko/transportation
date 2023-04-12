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

      <div className='filters__block'>
        <label htmlFor="from-filter" className='filters__label'>
          <span className='filters__title'>From</span>
          <input
            type="text"
            id="from-filter"
            name="from"
            value={values.from}
            placeholder='Kyiv'
            onChange={onChange}
            className='filters__input' />
        </label>

        <label htmlFor="to-filter" className='filters__label'>
          <span className='filters__title'>To</span>
          <input
            type="text"
            id="to-filter"
            name="to"
            value={values.to}
            placeholder='Odesa'
            onChange={onChange}
            className='filters__input' />
        </label>
      </div>

      <div className='filters__date'>
        {values.date
          ? <div className='filters__picked'>
              {values.date}
              <button type='button' className='filters__reset-btn' onClick={() => onChange({ target: { name: 'date', value: '' } })}>
                <Reset />
              </button>
            </div>
          : <span onClick={() => setShowPicker(prevState => !prevState)}>Choose date</span>}
      </div>

      {showPicker
        ? <DayPicker mode="single" selected={values.date} onSelect={selectHandler} className='filters__rdp' /> 
        : null
      }

    </div>
  );
}