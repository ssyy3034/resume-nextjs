import { CSSProperties, Fragment, PropsWithChildren } from 'react';

import { HrefTargetBlank } from '.';
import { IRow } from './IRow';

import { Markdown } from './Markdown';

/** Description Recusion Generator */
export function CommonDescription({
  descriptions,
  option,
}: PropsWithChildren<{ descriptions: IRow.Description[]; option?: { padding?: boolean } }>) {
  return (
    <>
      {descriptions ? (
        <ul className={option?.padding ? 'pt-2' : ''}>
          {descriptions.map((description) => {
            return (
              <Fragment key={description.content}>
                <Description description={description} />
                {description.descriptions ? (
                  <DescriptionRecursion descriptions={description.descriptions} />
                ) : (
                  ''
                )}
              </Fragment>
            );
          })}
        </ul>
      ) : (
        ''
      )}
    </>
  );
}

// ul 태그 depth 표현을 위한 재귀
function DescriptionRecursion({
  descriptions,
}: PropsWithChildren<{ descriptions: IRow.Description[] }>) {
  return (
    <ul>
      {descriptions.map((description) => {
        return (
          <Fragment key={description.content}>
            <Description description={description} />
            {description.descriptions ? (
              <DescriptionRecursion descriptions={description.descriptions} />
            ) : (
              ''
            )}
          </Fragment>
        );
      })}
    </ul>
  );
}

function Description({ description }: PropsWithChildren<{ description: IRow.Description }>) {
  const { content, href, postImage, postHref, weight } = description;

  const liStyle: CSSProperties = {
    ...getFontWeight(weight),
    letterSpacing: '-0.01em',
    lineHeight: '1.8',
    marginBottom: '0.4rem',
  };

  if (href && postImage) {
    return (
      <li style={liStyle}>
        <HrefTargetBlank url={href} text={Markdown.parseBold(content)} />{' '}
        <img src={postImage} alt={postImage} />
      </li>
    );
  }
  if (href) {
    return (
      <li style={liStyle}>
        <HrefTargetBlank url={href} text={Markdown.parseBold(content)} />
      </li>
    );
  }
  if (postHref && postImage) {
    return (
      <li style={liStyle}>
        {Markdown.parseBold(content)} <HrefTargetBlank url={postHref} text={postHref} />{' '}
        <img src={postImage} alt={postImage} />
      </li>
    );
  }
  if (postHref) {
    return (
      <li style={liStyle}>
        {Markdown.parseBold(content)} <HrefTargetBlank url={postHref} text={postHref} />
      </li>
    );
  }
  if (postImage) {
    return (
      <li style={liStyle}>
        {Markdown.parseBold(content)} <img src={postImage} alt={postImage} />
      </li>
    );
  }
  return (
    <Fragment key={content}>
      <meta name="format-detection" content="telephone=no" />
      <li style={liStyle}>{Markdown.parseBold(content)}</li>
    </Fragment>
  );
}

function getFontWeight(weight?: IRow.Description['weight']): CSSProperties {
  if (!weight) {
    // style 에 fontWeight 범벅 되는것을 방지
    return {};
  }
  return {
    fontWeight: fontWeight[weight || 'DEFAULT'],
  };
}

// Pretendard Weights: 100, 200, 300, 400, 500, 600, 700, 800, 900
const fontWeight: Record<IRow.FontWeightType, number> = {
  DEFAULT: 300,
  //
  THIN: 100,
  EXTRA_LIGHT: 200,
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
  EXTRA_BOLD: 800,
  BLACK: 900,
};
