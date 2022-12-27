import { useCSVDownloader } from 'react-papaparse';

export interface CSVDownloaderProps {
    filename?: string
    data: [] | {}
}

const CSVDownloader = (props: CSVDownloaderProps) => {
    const { CSVDownloader, Type } = useCSVDownloader();
    const filename = props.filename || 'csv';
    return (
        <CSVDownloader type={Type.Button} filename={filename} bom={true} config={{ delimiter: ";" }} data={props.data}>
            ダウンロード
        </CSVDownloader>
    );
};

export default CSVDownloader

