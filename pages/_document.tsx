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
                    margin: 15mm 15mm;
                    size: A4;
                  }

                  html, body {
                    height: auto !important;
                    overflow: visible !important;
                    margin: 0;
                    padding: 0;
                    font-size: 10pt;
                    line-height: 1.2;
                  }

                  /* Stronger Profile Image Scaling */
                  .profile-image img, img.img-fluid {
                    max-height: 150px !important;
                    width: auto !important;
                    margin-bottom: 5px !important;
                  }

                  /* Reset all containers to allow natural break */
                  .container, .row, [class*="col-"], div {
                    height: auto !important;
                    min-height: 0 !important;
                    overflow: visible !important;
                    break-inside: auto !important;
                    page-break-inside: auto !important;
                    display: block !important; /* Stack everything by default */
                  }

                  /* Side-by-side title/content layout using floats for stability */
                  .col-md-3 {
                    width: 22% !important;
                    float: left !important;
                    clear: left !important;
                  }
                  .col-md-9 {
                    width: 78% !important;
                    float: left !important;
                  }

                  /* Clear floats after each main section */
                  .introduce-section, .skill-section, .mt-5 {
                    clear: both !important;
                    margin-top: 1rem !important;
                    padding-top: 0.5rem !important;
                  }

                  .row.pb-3 {
                    padding-bottom: 0 !important;
                    margin-bottom: 0.5rem !important;
                  }

                  .alert {
                    display: block !important;
                    padding: 0.3rem !important;
                    margin-bottom: 0.5rem !important;
                  }

                  li {
                    break-inside: avoid;
                  }

                  h1, h2, h3, h4 {
                    break-after: avoid;
                    page-break-after: avoid;
                    margin-top: 0.8rem !important;
                    margin-bottom: 0.3rem !important;
                    line-height: 1.1 !important;
                  }

                  * {
                    -webkit-print-color-adjust: exact !important;
                    print-color-adjust: exact !important;
                  }

                  .badge {
                    border: 1px solid #ddd !important;
                    color: #333 !important;
                    background-color: transparent !important;
                    padding: 1px 4px !important;
                    font-size: 8pt !important;
                  }

                  /* Hide scrollbars and UI elements in print if any */
                  ::-webkit-scrollbar {
                    display: none;
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
