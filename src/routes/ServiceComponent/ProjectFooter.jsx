import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-2'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold '>
                <MDBIcon icon="gem"  />
                Rapid Response
              </h6>
              <p>
              Revolutionizing Emergency Response in Gampaha, Sri Lanka.
               Learn more about who we are, our mission, and how we are making a difference in the community.
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-1'>
              <h6 className='text-uppercase fw-bold '>Contact</h6>
              <p>
                <MDBIcon icon="home" />
                District secretariat, Bandiyamulla, Gampaha.
              </p>
              <p>
                <MDBIcon icon="phone"  /> Phone: +94 332 222 235

              </p>
              <p>
                <MDBIcon icon="print" /> Fax: +94 332 222 900
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        ©Copyright © 2024 District Secretariat - Gampaha. All Rights Reserved:
        <a className='text-reset fw-bold' href='http://gampaha.dist.gov.lk/index.php/en/'  > 
        District Secretariat - Gampaha
        </a>
      </div>
    </MDBFooter>
  );
}