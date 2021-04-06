import gql from "graphql-tag";
const OFFLINEPRESENCE_QUERY = gql`
    query {
        offlinePresences {
            id
            stage
            offlinePresenceData {
                ... on ImageHeadingSubheadingTextModal {
                id
                image {
                    id
                    url
                    fileName
                    mimeType
                }
                heading
                subheading
                text
                }
            }
            offlinePresenceHeading {
                ... on SectionHeading {
                id
                heading
                }
            }
        }
    }
`;
export default OFFLINEPRESENCE_QUERY;