
export const useValidateEmail = () => {
  const emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  const isValidEmail = (email: string) => emailFormat.test(email)

  return { isValidEmail }
}