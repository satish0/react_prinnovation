import gql from "graphql-tag";
const PORTFOLIO_QUERY = gql`
    query {
        portfoliosWeManages {
            id
            stage
            portfoliosWeManage {
            ... on ImageHeadingSubheadingTextModal {
                image {
                id
                url
                fileName
                mimeType
                }
                ImageHeadingSubheadingTextModal_heading: heading
            }
            }
        }
    }
`;
export default PORTFOLIO_QUERY;