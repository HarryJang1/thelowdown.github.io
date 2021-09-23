import { google } from 'googleapis';

//Back-end
export async function getServerSideProps() {

    //Authentication
    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']});

    const sheets = google.sheets({ version: 'v4', auth });

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

//Front-end
export default function Post({title, publishingDate, countryCode, region, image, 
imageCredit, content, authorName, authorProfilePicture,correspondentForRegion}) {
    return <article>
        <h1>{title}</h1>

    </article>
}