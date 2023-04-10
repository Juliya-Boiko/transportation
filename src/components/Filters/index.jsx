


export const Filters = ({ values, onChange }) => {
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
      
      <label htmlFor="to-filter">
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
    </div>
  );
}