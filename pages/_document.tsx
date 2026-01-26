import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class ResumeDocument extends Document {
  render() {
    return (
      <Html lang="ko-KR">
        <Head>
          {/* Step 5: Output the styles in the head  */}
          <meta charSet="utf-8" />
          {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700|Parisienne&display=swap&subset=korean"
            rel="stylesheet"
          />
          <link
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Parisienne&display=swap"
            rel="stylesheet"
          />
          <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                @media print {
                  @page {
                    margin: 15mm 10mm;
                  }

                  /* Prevent sections from splitting across pages */
                  .row, .col, .container, section, div {
                    break-inside: avoid;
                    page-break-inside: avoid;
                  }

                  /* Specific components that should not split */
                  h2, h3, h4 {
                    break-after: avoid;
                    page-break-after: avoid;
                  }

                  li {
                    break-inside: avoid;
                  }

                  /* Ensure background colors and images are printed */
                  * {
                    -webkit-print-color-adjust: exact !important;
                    print-color-adjust: exact !important;
                  }

                  /* Reset margins for printing to use @page margins */
                  body {
                    margin: 0;
                    padding: 0;
                  }

                  .mt-5 {
                    margin-top: 2rem !important;
                  }
                }
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
