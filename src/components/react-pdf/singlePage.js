import React, {useState} from 'react';
import {Page} from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import {Document} from 'react-pdf/dist/esm/entry.webpack';
import {Button} from 'react-bootstrap'


export default function SinglePage(props) {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(0)

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages);
    setPageNumber(1)
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset)
  }

//page number navi lock mechanism
  function previousPage() {
    if (pageNumber === 1) {
      changePage(0)
    } else {
      changePage(-1)
    }
  }

//page number navi lock mechanism
  function nextPage() {
    if (pageNumber === 2) {
      changePage(0)
    } else {
      changePage(1);
    }
  }

  function onItemClick({pageNumber: itemPageNumber}) {
    setPageNumber(itemPageNumber);
  }

  const {pdf} = props;

  return (
     <>
       <Document file={pdf}
                 options={{workerSrc: "/pdf.worker.js"}}
                 onload={onDocumentLoadSuccess}
                 onItemClick={onItemClick}
                 externalLinkTarget={"_blank"}
                 renderMode={"canvas"}
                 className={{string: "viewer-pdf"}}

       >
         <Page pageNumber={pageNumber || 1}
               scale={1}
               width={975}
               className={{string: "viewer-pdf"}}
         />
       </Document>
       <div>
         <p>
           Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
         </p>
         <Button variant="outline-secondary" size="lg" type="button" disbaled onClick={previousPage}
                 className="btn-prev">
           Previous
         </Button>
         <Button variant="outline-success" size="lg" type="button" onClick={nextPage}>
           Next
         </Button>
       </div>
     </>
  )
}
