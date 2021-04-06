import gql from "graphql-tag";
const WHYPARTNER_QUERY = gql`
    query {
        whyPartners(stage: PUBLISHED) {
            id
            stage
            subheading
            text
            image {
                id
                fileName
                url
                mimeType
            }
            headingAndButtonText {
            ... on SectionHeading {
                    id
                    heading
                }
            }
            sectionButtonText {
            ... on SectionButtonText {
                    id
                    buttonText
                }
            }
        }
    }
`;
export default WHYPARTNER_QUERY;