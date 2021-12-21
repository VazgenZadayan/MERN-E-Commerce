import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'The Capital Shop',
  description: 'We sell the best products for cheap',
  keywords: 'hookah, tobacco, yerevan, shop, onlline shop, кальян, магазин, табак, blackburn, burn, dark side, serbetli, nakhla, ',
}

export default Meta
