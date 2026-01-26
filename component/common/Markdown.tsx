import React, { Fragment, ReactNode } from 'react';

export const Markdown = {
  parseBold: (text: string | ReactNode): ReactNode => {
    if (typeof text !== 'string') return text;
    if (!text) return text;

    // 1. Split by bold markers
    const parts = text.split(/(\*\*.*?\*\*)/g);

    // 2. Process each part for line breaks and bolding
    return parts.reduce((acc: ReactNode[], part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const content = part.slice(2, -2);
        acc.push(
          // eslint-disable-next-line react/no-array-index-key
          <strong key={`bold-${i}-${content}`}>
            {content.split('\n').map((line, j, array) => (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={`bold-line-${i}-${j}-${line}`}>
                {line}
                {j < array.length - 1 && <br />}
              </Fragment>
            ))}
          </strong>,
        );
      } else {
        // Handle regular text and line breaks
        part.split('\n').forEach((line, j, array) => {
          acc.push(
            // eslint-disable-next-line react/no-array-index-key
            <Fragment key={`text-${i}-${j}-${line}`}>
              {line}
              {j < array.length - 1 && <br />}
            </Fragment>,
          );
        });
      }
      return acc;
    }, []);
  },
};
