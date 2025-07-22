import { Helmet } from "react-helmet";

const SEO = ({
  title,
  description,
  keywords,
  url,
  image,
  canonical,
  ogTitle,
  ogDescription,
  author = "Aeontrix | AI Transformation Partner",
  twitterSite,
  schemaMarkup,
}) => (
  <Helmet>
    {/* Basic */}
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="author" content={author} />
    <link rel="canonical" href={canonical || url} />

    {/* Open Graph */}
    <meta property="og:title" content={ogTitle || title} />
    <meta property="og:description" content={ogDescription || description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={ogTitle || title} />
    <meta name="twitter:description" content={ogDescription || description} />
    <meta name="twitter:image" content={image} />
    {twitterSite && <meta name="twitter:site" content={twitterSite} />}

    {/* Schema Markup */}
    {schemaMarkup && (
      <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
    )}
  </Helmet>
);

export default SEO;