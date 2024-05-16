import checkIcon from '../../assets/check.svg'
import { Props } from './props'
import './styles.css'

export const SuccessAlert: React.FC<Props> = ({closeAlert}) => {
  return (
    <div className='alert'>
      <img className='check-icon' src={checkIcon} alt='check-icon'/>
      <span className='alet-label'>Vote register successfully</span>
      <button className='alert-button' onClick={closeAlert}>X</button>
    </div>
  )
}