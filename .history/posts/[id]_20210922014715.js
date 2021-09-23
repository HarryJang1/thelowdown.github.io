import { google } from 'googleapis';

export async function getServerSideProps() {

    return {
        props: {
            title, content
        }
    }
}