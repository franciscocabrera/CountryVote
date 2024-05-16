export interface Props {
  isModalOpen: boolean
  countryVotes: {name: string, votes: number}[]
  closeModal: () => void
  setVotes: (votes: {name: string, votes: number}[]) => void
  showAlert: () => void
}

export const modalStyle = {
  content: {
    width: '53%',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    bottom: 'auto',
    right: 'auto',
    padding: 24,
    borderRadius: '5px',
    backgroundColor: '#fafafa',
  },
  overlay: {
    backgroundColor: '#00000040'
  }
}