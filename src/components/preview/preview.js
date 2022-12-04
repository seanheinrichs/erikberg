import { Dialog } from '@mui/material';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';

function Preview({ handleOnClose, open }) {
  return (
    <Dialog onClose={handleOnClose} open={open}>
      <Document file="/pdfs/anthony-returns.pdf">
        <Page pageNumber={11} renderTextLayer={false} renderAnnotationLayer={false} scale={1.3} />
      </Document>
    </Dialog>
  );
}

export default Preview;
