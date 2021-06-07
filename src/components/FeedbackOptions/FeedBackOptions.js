import PropTypes from 'prop-types';
import Button from './Button'
import styles from './FeedBackOptions.module.css'

export default function FeedBackOptions({changeValue }) {
    return (
        <ul className={ styles.optionsList}>
            <li className={styles.optionsListItm}><Button label="Good" changeValue={changeValue}/></li>
            <li className={styles.optionsListItm}><Button label="Neutral" changeValue={changeValue}/></li>
            <li className={styles.optionsListItm}><Button label="Bad" changeValue={changeValue}/></li>             
          </ul>
    )
};

FeedBackOptions.propTypes = {
changeValue: PropTypes.func.isRequired
};