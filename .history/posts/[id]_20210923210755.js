import { google } from 'googleapis';

//Back-end
export async function getServerSideProps() {

    //Authentication
    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']});

    const sheets = google.sheets({ version: 'v4', auth });

    //Query
    const {id} = query;
    const range = 'Sheet1!A${id}:K${id}';

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: ProcessingInstruction.env.SHEET_ID,
        range,
    })

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
        <div dangerouslySetInnerHTML={}></div>

        <h3>{publishingDate}</h3>

        <h2>{content}</h2>

    </article>
}