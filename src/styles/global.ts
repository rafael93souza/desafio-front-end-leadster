import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color:#0084ff;
        --max-width: 1200px;
        --white-100: #ffffff;

        --blue-100:#f0f8ff;
        --blue-900:#1c3c50;

        --gray-100:#c8d4dd;

        --blue-filter-100:rgba(0, 132, 255,0.5)
    }

    * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    }

    html,
    body {
    max-width: 100vw;
    overflow-x: hidden;
    }
`

export default GlobalStyle