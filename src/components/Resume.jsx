import {useState} from 'react'
import {Document, Page, pdfjs} from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.5.136/pdf.min.mjs`;

const Resume = () => {

  const [uploadType, setUploadType] = useState('pdf')

  const [pdf, setPdf] = useState(null)
  // const [numPages, setNumPages] = useState(null)
  // const [pageNumber, setPageNumber] = useState(1)
  // console.log('pdf', pdf)

  const [textField, setTextField] = useState('')

  const handleUpload = (e) => {
    // console.dir(e.target.result)
    setPdf(e.target.files)
  }

  // const onLoadSuccess = ({numPages}) => {
  //   setNumPages({numPages})
  // }

  // const handleUpload = (e) => {
  //   console.log(e.target.files)
  //   setPdf(e.target.files[0])
  // }

  const handleSubmit = () => {
    const formData = new FormData()

    formData.append('file', pdf)
    formData.append('fileName', pdf.name)

    // Post request

  }

  return (
    <div id='resumePage'>
      <h4>Upload Resume</h4>

      <section id='upload'>
        {uploadType === 'pdf' && <section>
            <p>Upload PDF here OR click <button onClick={() => {setUploadType('text')}}>HERE</button> to paste resume</p>
            <input 
              type="file" 
              accept='.pdf, application/pdf' 
              name="" 
              id="" 
              onChange={handleUpload}
              // style={{backgroundColor:'red', width: '200px'}}
            />

            {/* {pdf && (
              <Document file={pdf['0']} onLoadSuccess={onLoadSuccess}>
                <Page pageNumber={pageNumber} />
              </Document>
            )} */}
          </section>
        }

        {uploadType === 'text' && <section>
            <p>Paste resume here OR click <button onClick={() => {setUploadType('pdf')}}>HERE</button> to upload PDF</p>
            <textarea 
              value={textField}
              onChange={(e) => setTextField(e.target.value)}
            /> 
          </section>
        }

      </section>

      
      

    </div>
  )
}

export default Resume
