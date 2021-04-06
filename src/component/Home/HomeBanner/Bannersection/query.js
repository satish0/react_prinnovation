import gql from "graphql-tag";
const BANNERS_QUERY = gql`
  query {
    bannercontents(stage: PUBLISHED) {
      id
      stage
      imageOrVideo {
        id
        fileName
        url
        mimeType
      }
      imageOrVideoPoster {
        id
        fileName
        url
        mimeType
      }
      heading
      subheading
      buttonText
    }
  }
`;
export default BANNERS_QUERY;