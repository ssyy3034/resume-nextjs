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
                    margin: 10mm 10mm;
                    size: A4;
                  }

                  body {
                    margin: 0;
                    padding: 0;
                    font-size: 10pt; /* Optimal for reading on paper */
                    line-height: 1.5;
                  }

                  /* Layout adjustments */
                  .container {
                    max-width: 100% !important;
                    width: 100% !important;
                    padding: 0 !important;
                  }

                  /* Reduce spacing to fit more content */
                  .mt-5 {
                    margin-top: 1.5rem !important;
                  }

                  .row.pb-3 {
                    padding-bottom: 0.5rem !important;
                  }

                  /* Improved Page Breaking */
                  /* Only prevent breaking inside specific logical units, not everywhere */
                  section, article {
                    break-inside: avoid;
                    page-break-inside: avoid;
                  }

                  /* Allow breaking long lists but keep list items together if possible */
                  li {
                    break-inside: avoid;
                  }

                  /* Keep titles with their content */
                  h2, h3, h4 {
                    break-after: avoid;
                    page-break-after: avoid;
                  }

                  /* Optimization for Grid System in Print */
                  .row {
                    display: flex;
                    flex-wrap: wrap;
                  }

                  /* Adjust column widths for better space usage */
                  .col-md-3 {
                    flex: 0 0 18% !important;
                    max-width: 18% !important;
                  }
                  .col-md-9 {
                    flex: 0 0 82% !important;
                    max-width: 82% !important;
                  }

                  /* Visual Improvements */
                  * {
                    -webkit-print-color-adjust: exact !important;
                    print-color-adjust: exact !important;
                  }

                  /* Refine Badges for print */
                  .badge {
                    border: 1px solid #ddd !important;
                    color: #333 !important;
                    background-color: transparent !important;
                    padding: 2px 6px !important;
                  }

                  /* Remove shadows and other screen-only effects */
                  .shadow, .shadow-sm, .shadow-lg {
                    box-shadow: none !important;
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
