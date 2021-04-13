import React, {useState, useEffect} from 'react'
import DashboardHeader from '../DashboardHeader';
import '../../styles/MyApplication.css';
import img from  '../../media/scholar-img.jpeg';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import RedeemIcon from '@material-ui/icons/Redeem';

const AppliedApplicants = () => {



  return (
    <div className="myApplication">
      <DashboardHeader
        myapplication="myapplications"
      />
      <div className="myApplication__main">
        <h1>Applicants</h1>



        <div className="myApplication__main__scholarships">

          <div className="myApplication__main__scholarships_Container">

            <a href="/">
              <img width="120px" height="80px" src={img}  />

              <div className="myApplication__main__scholarships_ContainerContent">
                <div className="myApplication__title">Applicant Name</div>
                <ul className="myscholarship__details">
                  <li>
                    <div>
                      <AccessTimeIcon />
                    </div>
                    <div>
                      <div>Status</div>
                      <div>Applied</div>
                    </div>
                  </li>

                  <li>
                    <div>
                      <RedeemIcon />
                    </div>
                    <div>
                      <div>Rank</div>
                      <div>N/A</div>
                    </div>
                  </li>

                  <li>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0)"><path d="M3.75 5C3.75 4.86193 3.86193 4.75 4 4.75H23C23.1381 4.75 23.25 4.86193 23.25 5V16C23.25 16.1381 23.1381 16.25 23 16.25H4C3.86193 16.25 3.75 16.1381 3.75 16V5Z" fill="white" stroke="#9597A6" stroke-width="1.5"></path><path d="M17.25 10.5C17.25 12.0188 16.0188 13.25 14.5 13.25C12.9812 13.25 11.75 12.0188 11.75 10.5C11.75 8.98122 12.9812 7.75 14.5 7.75C16.0188 7.75 17.25 8.98122 17.25 10.5Z" fill="white" stroke="#9597A6" stroke-width="1.5"></path><path d="M0.75 8C0.75 7.86193 0.861929 7.75 1 7.75H20C20.1381 7.75 20.25 7.86193 20.25 8V19C20.25 19.1381 20.1381 19.25 20 19.25H1C0.861929 19.25 0.75 19.1381 0.75 19V8Z" fill="white" stroke="#9597A6" stroke-width="1.5"></path><path d="M13.25 13.5C13.25 15.0188 12.0188 16.25 10.5 16.25C8.98122 16.25 7.75 15.0188 7.75 13.5C7.75 11.9812 8.98122 10.75 10.5 10.75C12.0188 10.75 13.25 11.9812 13.25 13.5Z" fill="white" stroke="#9597A6" stroke-width="1.5"></path></g><defs><clipPath id="clip0"><path d="M0 0H24V24H0V0Z" fill="white"></path></clipPath></defs>
                      </svg>
                    </div>
                    <div>
                      <div>Applied On</div>
                      <div>22 - july - 2021</div>
                    </div>
                  </li>
                </ul>

            </div>
            </a>


              <div className="finishApplicationBtn">
                <button>View Application
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M6.75 13.5L11.25 9L6.75 4.5" stroke="#ACB4BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </button>
              </div>


          </div>

        </div>



      </div>

    </div>
  )
}

export default AppliedApplicants;
