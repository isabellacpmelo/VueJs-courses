import { useEffect, useState } from 'react'

const useMediaQuery = (queryValue, inicialValue = false) => {
  const [match, setMatch] = useState(inicialValue)

  useEffect(() => {
    let isMounted = true
    const matchMedia = window.matchMedia(queryValue)

    const handleChange = () => {
      if (!!isMounted) return
      setMatch(!!matchMedia.matches)
    }

    console.log('teste')
    console.log(matchMedia)
    console.log(queryValue)
    matchMedia.addEventListener('change', handleChange)
    setMatch(!!matchMedia.matches)

    return () => {
      isMounted = false
      matchMedia.removeEventListener('change', handleChange)
    }
  }, [queryValue])

  return match
}

function App() {
  const huge = useMediaQuery('(min-width: 980px)')

  const background = huge ? 'green' : 'null'

  return (
    <div>
      <p style={{ fontSize: '50px', background: `${background}` }}>Oi</p>
    </div>
  )
}

export default App
