import { useState } from 'react'
import {Container, Box} from '@chakra-ui/react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { TextInput } from './components/TextInput'
import { KeywordModal } from './components/KeywordModal'
import {useToast} from '@chakra-ui/react'

function App() {
  const toast = useToast()

  const [keywords, setKeywords] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const extractKeywords = async (text) => {
    setLoading(true)
    setIsOpen(true)
    
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt:
          'Extract keywords from this text. Make the first letter of every word uppercase and separate with commas:\n\n' +
          text +
          '',
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.8,
        presence_penalty: 0.0,
      })
    }

    try{
      const res = await fetch(
        import.meta.env.VITE_OPENAI_API_URL,
        options
      )

      const json = await res.json()
      console.log(json.choices[0].text.trim())
      setKeywords(json.choices[0].text.trim())
      setLoading(false)
    }catch(err){
      toast({
				title: 'Error',
				description: 'Something went wrong',
				status: 'error',
				duration: 5000,
				isClosable: false
			})
    }
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <Box bg='blue.600' color='white' height='100vh' paddingTop={130}>
      <Container maxW='3xl' centerContent>
        <Header />
        <TextInput  extractKeywords={extractKeywords} />
        <Footer />
      </Container>

      <KeywordModal
        keywords={keywords}
        loading={loading}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </Box>
  )
}

export default App
