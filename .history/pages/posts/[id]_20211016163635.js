import { google } from 'googleapis';

//Back-end
export async function getServerSideProps({query}) {

    //Authentication
    const auth = await google.auth.getClient({scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']});

    const sheets = google.sheets({version: 'v4', auth});

    //Query
    const {id} = query;
    const range = 'Database!A${id}:D${id}';

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range,
    });

    //Result
    const [title, publishingDate, countryCode, region, image, imageCredit, 
    content, authorName, authorProfilePicture, correspondentForRegion] = response.data.values[0];


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

        <image>{image}</image>

        <h3>{publishingDate}</h3>

        <div dangerouslySetInnerHTML={{__html: content}}></div>

    </article>
}