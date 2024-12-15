/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import './styles.css'

export const Button = ({ text, onClick, disabled }) => (
  <button
      disabled ={disabled}
      className='button'
      onClick={ onClick }
  >
      {text}
  </button>
)
