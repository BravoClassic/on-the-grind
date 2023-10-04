
import PropTypes from 'prop-types'
export const ReceipeChoices = ({handleChange,label,choices,checked}) => {
  return (
    <div className="radio-buttons">
    {choices &&
      choices.map((choice) => (
        <li key={choice}>
          <input
            id={choice}
            value={choice}
            name={label}
            type="radio"
            onChange={handleChange}
            checked={checked == choice}
          />
            {choice}
        </li>
      ))}
  </div>
  )
}


ReceipeChoices.propTypes = {
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    choices: PropTypes.array.isRequired,
    checked: PropTypes.string.isRequired
    }