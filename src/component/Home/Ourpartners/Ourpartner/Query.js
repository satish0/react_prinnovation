import gql from 'graphql-tag';
const OURPARTNER_QUERY = gql`
    query {
        ourPartners {
            id
            stage
            online {
            ... on ImageHeadingSubheadingTextModal {
                id
                image {
                id
                url
                fileName
                mimeType
                }
            }
            }
            offline {
            ... on ImageHeadingSubheadingTextModal {
                id
                image {
                id
                url
                fileName
                mimeType
                }
            }
            }
            omnichannel {
            ... on ImageHeadingSubheadingTextModal {
                id
                image {
                id
                url
                fileName
                mimeType
                }
            }
            }
        }
    }
`;
export default OURPARTNER_QUERY;