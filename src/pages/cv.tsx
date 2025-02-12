import React from 'react';
import Layout from '../components/Layout';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';


const CVPage = () => {
  return (
    <Layout>
      <div style={{ position: 'fixed', margin: '16px'}} >
        <a href="/RizkyCV.pdf" download="RizkyCV.pdf" style={{ textDecoration: 'none' }}>
          <Button variant="contained" endIcon={<DownloadIcon />}>
            Download PDF
          </Button>
        </a>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '24px' }}>
        <img src={"/cv1.jpg"} alt={"RizkyCV1"}
          width={800}
        />
        <br />
        <img src={"/cv2.jpg"} alt={"RizkyCV2"}
          width={800}
        />
      </div>
    </Layout>
  );
};

export default CVPage;