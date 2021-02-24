import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'


export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html lang="pt-br">
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" href="favicon.svg" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="description" content="Psicóloga Estefane Medeiros" />
                    <meta name="keywords" content="Terapia online, psicologa online, psicologa brasileira, terapeuta brasileira"/>
                    <meta name="robots" content="index, nofollow"></meta>
                    <meta name="google-site-verification" content="H29sf9bbLHPqqlsjM1Q3LMz1yy8nONzqxIZ6J-3rtuk" />
                    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700;900&display=swap" rel="stylesheet" />
                    <link href="https://fonts.cdnfonts.com/css/louis-george-cafe" rel="stylesheet"/>
                    

                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-173602044-1" />
                    <script
                        dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
    
                        gtag('config', 'UA-173602044-1');`
                        }}
                    />

                  <title>Estefane Medeiros | Psicóloga</title>

                </Head>
                <body>
                    <Main />
                    <NextScript />
                
                </body>
            </Html >
        )
    }
}