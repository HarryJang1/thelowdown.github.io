import { google } from 'googleapis';
import Image from 'next/image';

//Back-end
export async function getServerSideProps({query}) {

    //Authentication
    const auth = await google.auth.getClient({scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']});

    const sheets = google.sheets({version: 'v4', auth});

    //Query
    const { id } = query;
    const range = `Database!B${id}:K${id}`;

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
    return <article margin="500">
        <h1>{title}</h1>
        <h2>{countryCode} - {region}</h2>

        <Image src={image} width="700" height="700"></Image>
        <p>Source: {imageCredit}</p>

        <p>Published Date: {publishingDate}</p>
        <break></break>
        <p>{content}</p>

        <h4>{authorName} - {correspondentForRegion}</h4>
        <Image src={authorProfilePicture} width="100" height="100"></Image>

    </article>
}