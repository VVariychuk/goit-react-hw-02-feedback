import PropTypes from 'prop-types';
import styles from './Button.module.css'

export default function Button({ changeValue, label }) {
    return (
        <button
            type="button"
            name={label.toLowerCase()}
            onClick={changeValue}
            className={styles.button}
        >
            {label}
        </button>
    )
};
  
Button.propTypes = {
    label: PropTypes.string.isRequired,
    changeValue: PropTypes.func.isRequired
};