import { google } from 'googleapis';

export async function getServerSideProps() {

    return {
        props: {
            title,
            publishingDate,
            countryCode,
            region,
            image,
            imageCredit,
            content,
            authorName,
            authorProfilePicture,
            correspondentForRegion
        }
    }
}