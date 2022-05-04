// Styled-Components Imports
import { ThemeProvider } from 'styled-components'
import { Container } from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global'

// Components
import Header from './components/Haeder'
import Card from './components/Card'
import Footer from './components/Footer'

// JS data (Card-Content)
import {content} from './content'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item}/>
          ))}
        </Container>
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
