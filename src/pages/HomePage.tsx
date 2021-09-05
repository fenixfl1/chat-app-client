import React, { useCallback, useEffect, useState } from 'react'
import { CustomButton, CustomForm, CustomInput } from '../components/semantic'
import { useAuthState, useSocketContext } from '../context/context'

const HomePage = (): React.ReactElement => {
  const socket = useSocketContext()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { userData } = useAuthState()
  const [message, setMessage] = useState<string>()
  const [connect, setConnect] = useState<boolean>()

  const handleConnect = useCallback(() => {
    setConnect(true)
  }, [])

  const handleSendMessages = useCallback(() => {
    socket.on('SEND_MESSAGE', () => {
      socket.send(message)
    })
  }, [message])

  useEffect(() => {
    connect && socket.connect()
  }, [handleConnect])

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
  }

  return (
    <>
      {connect ? (
        <CustomForm onSubmit={handleSendMessages}>
          <CustomInput
            value={message}
            onChange={handleOnChange}
            name={'MESSAGE'}
            placeholder={'Write something'}
          />
          <CustomButton primary type={'submit'}>
            Enviar
          </CustomButton>
        </CustomForm>
      ) : (
        <CustomButton onClick={handleConnect}>Connect</CustomButton>
      )}
    </>
  )
}

export default HomePage
