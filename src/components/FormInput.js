import styles from "../styles/modules/forminput.module.scss"

const FormInput = ({ label, errorMessage, onChange, id, ...inputProps}) => 
    <div className={styles.FormInput}>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...inputProps} onChange={onChange}
        />
        <span>{errorMessage}</span>
    </div>
export default FormInput