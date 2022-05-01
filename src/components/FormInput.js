import styles from "../styles/modules/forminput.module.scss"

const FormInput = (props) => {
    const { label, errorMessage, onChange, id, ...inputProps} = props;
  return (
    <div className={styles.FormInput}>
        <label>{label}</label>
        <input  {...inputProps} onChange={onChange}
        />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput