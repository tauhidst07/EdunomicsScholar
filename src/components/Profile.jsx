import React from 'react'
import DashboardHeader from './DashboardHeader';
import FinanceField from './profileFields/FinanceField';
import FutureIntrestsField from './profileFields/FutureIntrestsField';
import PublicServicesField from './profileFields/PublicServicesField'
import SportsField from './profileFields/SportsField'
import CareerField from './profileFields/CareerField'
import ArtsField from './profileFields/ArtsField'
import ResearchField from './profileFields/ResearchField'
import Footer from './Footer';
import profileImage from '../media/profile.png';
import '../styles/profile.css';

const Profile = () => {





  return (
    <>
      <div className="profile">
        <DashboardHeader />
        <div className="profile__background">
          <div className="profile__container">
            <div className="profile__containerLeft">

              <div className="profile__containerLeft__imageContainer">
                <div>
                  <img
                    src={profileImage}
                    alt="profile"
                  />
                </div>
              </div>

              <div
                data-tip="Your scholarship nominations show donors that your peers see you as worthy of winning scholarships."
                currentitem="false"
              >
                <div className="profile__containerLeft__nomination">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ "max-width": "24px", "width": "100%", "height": "auto" }}>
                    <g filter="url(#filter0_d)">
                      <ellipse cx="13.0055" cy="13.3318" rx="7.5084" ry="7.35135" fill="black">
                      </ellipse>
                    </g>
                    <circle cx="12" cy="12" r="12" fill="#C2820A">
                    </circle>
                    <circle cx="12" cy="12" r="10" fill="#F4B94A">
                    </circle>
                    <path d="M18.0781 10.8211L15.0937 12.4723L12.2321 9.04444C12.2206 9.03064 12.2056 9.01944 12.1885 9.01173C12.1713 9.00402 12.1523 9 12.1332 9C12.114 9 12.095 9.00402 12.0778 9.01173C12.0607 9.01944 12.0457 9.03064 12.0342 9.04444L9.17412 12.4723L6.18824 10.8211C6.10083 10.7729 5.98735 10.8376 6.00115 10.9299L7.1728 14.8127C7.18967 14.9215 7.29395 15.0055 7.41817 15.0055H16.8512C16.9739 15.0055 17.0797 14.9229 17.095 14.8127L18.2667 10.9299C18.279 10.8376 18.167 10.7729 18.0781 10.8211Z" fill="white">
                    </path>
                    <defs>
                      <filter id="filter0_d" x="3.49707" y="4.88188" width="19.0168" height="18.7027" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix">
                        </feFlood>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
                        </feColorMatrix>
                        <feOffset dy="0.901408">
                        </feOffset>
                        <feGaussianBlur stdDeviation="1">
                        </feGaussianBlur>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.820833 0 0 0 0 0.4925 0 0 0 0 0 0 0 0 1 0">
                        </feColorMatrix>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow">
                        </feBlend>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape">
                        </feBlend>
                      </filter>
                    </defs>
                  </svg>
                  <span font-size="xsmall" color="text">
                    Get nominated for a scholarship to improve your profile!
                </span>
                </div>
              </div>

              <div>
                <ul className="profile__containerLeft__socioContainer">
                  <li>
                    <div>Age</div>
                    <div>15</div>
                    <div>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        style={{ "height": "18px", "width": "18px", "padding": "8px" }}
                      >
                        <path d="M13.4348 8H4.56522C3.70077 8 3 8.65122 3 9.45455V14.5455C3 15.3488 3.70077 16 4.56522 16H13.4348C14.2992 16 15 15.3488 15 14.5455V9.45455C15 8.65122 14.2992 8 13.4348 8Z"
                          stroke="#CCD1D9"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                        </path>
                        <path d="M6 7V5.22222C6 4.63285 6.31607 4.06762 6.87868 3.65087C7.44129 3.23413 8.20435 3 9 3C9.79565 3 10.5587 3.23413 11.1213 3.65087C11.6839 4.06762 12 4.63285 12 5.22222V7"
                          stroke="#CCD1D9"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                        </path>
                      </svg>
                    </div>
                  </li>
                  <li>
                    <div>Gender</div>
                    <div>Male</div>
                    <div>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        style={{ "height": "18px", "width": "18px", "padding": "8px" }}
                      >
                        <path d="M13.4348 8H4.56522C3.70077 8 3 8.65122 3 9.45455V14.5455C3 15.3488 3.70077 16 4.56522 16H13.4348C14.2992 16 15 15.3488 15 14.5455V9.45455C15 8.65122 14.2992 8 13.4348 8Z"
                          stroke="#CCD1D9"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                        </path>
                        <path d="M6 7V5.22222C6 4.63285 6.31607 4.06762 6.87868 3.65087C7.44129 3.23413 8.20435 3 9 3C9.79565 3 10.5587 3.23413 11.1213 3.65087C11.6839 4.06762 12 4.63285 12 5.22222V7"
                          stroke="#CCD1D9"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                        </path>
                      </svg>
                    </div>
                  </li>
                  <li>
                    <div>Ethnicity</div>
                    <div>Asia</div>
                    <div>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        style={{ "height": "18px", "width": "18px", "padding": "8px" }}
                      >
                        <path d="M13.4348 8H4.56522C3.70077 8 3 8.65122 3 9.45455V14.5455C3 15.3488 3.70077 16 4.56522 16H13.4348C14.2992 16 15 15.3488 15 14.5455V9.45455C15 8.65122 14.2992 8 13.4348 8Z"
                          stroke="#CCD1D9"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                        </path>
                        <path d="M6 7V5.22222C6 4.63285 6.31607 4.06762 6.87868 3.65087C7.44129 3.23413 8.20435 3 9 3C9.79565 3 10.5587 3.23413 11.1213 3.65087C11.6839 4.06762 12 4.63285 12 5.22222V7"
                          stroke="#CCD1D9"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                        </path>
                      </svg>
                    </div>
                  </li>
                  <li>
                    <div>Religion</div>
                    <div>Muslim</div>
                    <div>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        style={{ "height": "18px", "width": "18px", "padding": "8px" }}
                      >
                        <path d="M13.4348 8H4.56522C3.70077 8 3 8.65122 3 9.45455V14.5455C3 15.3488 3.70077 16 4.56522 16H13.4348C14.2992 16 15 15.3488 15 14.5455V9.45455C15 8.65122 14.2992 8 13.4348 8Z"
                          stroke="#CCD1D9"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                        </path>
                        <path d="M6 7V5.22222C6 4.63285 6.31607 4.06762 6.87868 3.65087C7.44129 3.23413 8.20435 3 9 3C9.79565 3 10.5587 3.23413 11.1213 3.65087C11.6839 4.06762 12 4.63285 12 5.22222V7"
                          stroke="#CCD1D9"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                        </path>
                      </svg>
                    </div>
                  </li>

                </ul>

              </div>
              <div className="profile__containerLeft__bottom">
                <div className="profile__containerLeft__location">
                  <span>LOCATION</span>
                  <ul>
                    <li>
                      I'm currently in
                </li>
                    <li>Agra,KS</li>
                    <li>icon</li>
                  </ul>
                </div>

                <div className="profile__containerLeft__hobbies">
                  <span>HOBBIES</span>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>

                <div className="profile__containerLeft__additionalIntest">
                  <span>ADDITIONAL INTRESTS</span>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>

                <div className="profile__containerLeft__reading">
                  <span>READING</span>
                  <ul>
                    <li></li>
                    <li></li>
                    <li>icon</li>
                  </ul>
                </div>

                <div className="profile__containerLeft__creaditScore">
                  <span>CREADIT SCORE</span>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>

                <div className="profile__containerLeft__usCitizenship">
                  <span>US CITIZENSHIP</span>
                  <ul>
                    <li>US Citizen</li>
                    <li>icon</li>
                  </ul>
                </div>
              </div>





            </div>
            <div className="profile__containerRight">

              <div className="profile__containerRight__header">
                <div>
                  <div className="profile__containerRight__headerName">
                    <h1>Karan Kumar</h1>
                  </div>
                  <div className="profile__containerRight__headerPoints">
                    180
              </div>
                </div>

                <div>
                  <div>View profile as</div>
                </div>
              </div>

              <div className="profile__containerRight__profileStrength">
                <div className="profile__containerRight__profileStrength__Header profileHeading">
                  <div>Your Profile Strength:</div>
                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 0L13.2543 0.0657377L14.4949 0.262229L15.7082 0.587322L16.8808 1.03745L18 1.6077L19.0534 2.2918L20.0296 3.08226L20.9177 3.97043L21.7082 4.94658L22.3923 6L22.9625 7.11916L23.4127 8.2918L23.7378 9.50506L23.9343 10.7457L24 12L23.9343 13.2543L23.7378 14.4949L23.4127 15.7082L22.9625 16.8808L22.3923 18L21.7082 19.0534L20.9177 20.0296L20.0296 20.9177L19.0534 21.7082L18 22.3923L16.8808 22.9625L15.7082 23.4127L14.4949 23.7378L13.2543 23.9343L12 24L10.7457 23.9343L9.50506 23.7378L8.2918 23.4127L7.11916 22.9625L6 22.3923L4.94658 21.7082L3.97043 20.9177L3.08226 20.0296L2.2918 19.0534L1.6077 18L1.03745 16.8808L0.587322 15.7082L0.262229 14.4949L0.0657377 13.2543L0 12L0.0657377 10.7457L0.262229 9.50506L0.587322 8.2918L1.03745 7.11916L1.6077 6L2.2918 4.94658L3.08226 3.97043L3.97043 3.08226L4.94658 2.2918L6 1.6077L7.11916 1.03745L8.2918 0.587322L9.50506 0.262229L10.7457 0.0657377L12 0Z" fill="#5093F8"></path><path d="M12 0L13.2543 0.0657377L14.4949 0.262229L15.7082 0.587322L16.8808 1.03745L18 1.6077L19.0534 2.2918L20.0296 3.08226L20.9177 3.97043L21.7082 4.94658L22.3923 6L22.9625 7.11916L23.4127 8.2918L23.7378 9.50506L23.9343 10.7457L24 12L23.9343 13.2543L23.7378 14.4949L23.4127 15.7082L22.9625 16.8808L22.3923 18L21.7082 19.0534L20.9177 20.0296L20.0296 20.9177L19.0534 21.7082L18 22.3923L16.8808 22.9625L15.7082 23.4127L14.4949 23.7378L13.2543 23.9343L12 24L10.7457 23.9343L9.50506 23.7378L8.2918 23.4127L7.11916 22.9625L6 22.3923L4.94658 21.7082L3.97043 20.9177L3.08226 20.0296L2.2918 19.0534L1.6077 18L1.03745 16.8808L0.587322 15.7082L0.262229 14.4949L0.0657377 13.2543L0 12L0.0657377 10.7457L0.262229 9.50506L0.587322 8.2918L1.03745 7.11916L1.6077 6L2.2918 4.94658L3.08226 3.97043L3.97043 3.08226L4.94658 2.2918L6 1.6077L7.11916 1.03745L8.2918 0.587322L9.50506 0.262229L10.7457 0.0657377L12 0Z" fill="#BBB2EE"></path><g filter="url(#filter0_d)"><circle cx="12.0061" cy="11.8508" r="6.11574" fill="black"></circle></g><circle cx="12" cy="12" r="9" fill="#6B5ADD"></circle><g filter="url(#filter1_i)"><path d="M12 6L13.854 9.6204L18 10.2045L15 13.021L15.708 17L12 15.1204L8.292 17L9 13.021L6 10.2045L10.146 9.6204L12 6Z" fill="#3929A2"></path></g><defs><filter id="filter0_d" x="4.41351" y="4.99667" width="15.1852" height="15.1852" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="0.738434"></feOffset><feGaussianBlur stdDeviation="0.738434"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.678308 0 0 0 0 0.681736 0 0 0 0 0.726302 0 0 0 1 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter><filter id="filter1_i" x="6" y="6" width="12" height="12" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend></filter></defs></svg>

                    <div>Beginner</div>
                  </div>
                </div>

                <div className="profile__containerRight__profileStrength__info">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <g clip-path="url(#clip0)">
                      <rect x="4" y="12" width="40" height="28" rx="4" fill="#C5C8E2">
                      </rect>
                      <path d="M4 16C4 13.7909 5.79086 12 8 12H40C42.2091 12 44 13.7909 44 16V22H4V16Z" fill="#1C1D38">
                      </path>
                      <path d="M15 12H33L31.1652 8.94202C30.4423 7.7372 29.1403 7 27.7352 7H20.2648C18.8597 7 17.5577 7.7372 16.8348 8.94202L15 12Z" fill="#1C1D38">
                      </path>
                      <g filter="url(#filter0_dd)">
                        <circle cx="24" cy="26" r="12" fill="#FAF9FF">
                        </circle>
                      </g>
                      <circle cx="24" cy="26" r="9" fill="#434465">
                      </circle>
                      <circle cx="24" cy="26" r="6" fill="#555777">
                      </circle>
                      <circle cx="24" cy="26" r="4" fill="#1C1D38">
                      </circle>
                      <circle cx="25.5" cy="24.5" r="1.5" fill="#555777">
                      </circle>
                      <path d="M8 11C8 10.4477 8.44772 10 9 10H13C13.5523 10 14 10.4477 14 11V12H8V11Z" fill="#1C1D38">
                      </path>
                      <path d="M36 15H41V19H36V15Z" fill="#FFF9BE">
                      </path>
                    </g>
                    <defs>
                      <filter id="filter0_dd" x="-18" y="-12" width="84" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix">
                        </feFlood>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
                        </feColorMatrix>
                        <feOffset dy="4">
                        </feOffset>
                        <feGaussianBlur stdDeviation="15">
                        </feGaussianBlur>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0">
                        </feColorMatrix>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow">
                        </feBlend>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
                        </feColorMatrix>
                        <feOffset dy="1">
                        </feOffset>
                        <feGaussianBlur stdDeviation="1.5">
                        </feGaussianBlur>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0">
                        </feColorMatrix>
                        <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow">
                        </feBlend>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape">
                        </feBlend>
                      </filter><clipPath id="clip0">
                        <rect width="48" height="48" fill="white">
                        </rect>
                      </clipPath>
                    </defs>
                  </svg>



                  <div className="profile__containerRight__profileStrength__infoTxt">
                    <div className="bold">
                      Let's add your profile picture
              </div>
                    <div>
                      Adding a profile picture makes you 8x more likely to win.
              </div>
                  </div>

                  <div className="profile__containerRight__profileStrength__infoPoint">
                    <div>50</div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.857 2.85764V0.000488281H7.14269V2.85764C7.14269 4.43603 8.42249 5.7148 9.99985 5.7148C11.5782 5.7148 12.857 4.43603 12.857 2.85764Z" fill="#5D57FB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.2855 0.000488281V2.85764C14.2855 4.435 15.5643 5.7148 17.1427 5.7148H19.9998V0.000488281H14.2855Z" fill="#5D57FB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.71431 2.85716V0H0V5.71431H2.85716C4.43554 5.71431 5.71431 4.43554 5.71431 2.85716Z" fill="#5D57FB"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.71431 10.0007C5.71431 8.42233 4.43554 7.14355 2.85716 7.14355H0V12.8579H2.85716C4.43554 12.8579 5.71431 11.5791 5.71431 10.0007Z" fill="#5D57FB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19.9996 14.2861H17.1424C15.5651 14.2861 14.2853 15.5649 14.2853 17.1433V20.0004H19.9996V14.2861Z" fill="#5D57FB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.857 10.0007C12.857 8.42233 11.5782 7.14355 9.99985 7.14355C8.42249 7.14355 7.14269 8.42233 7.14269 10.0007C7.14269 11.5791 8.42249 12.8579 9.99985 12.8579C11.5782 12.8579 12.857 11.5791 12.857 10.0007Z" fill="#5D57FB"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99998 14.2861C8.4216 14.2861 7.14283 15.5649 7.14283 17.1433V20.0004H12.8571V17.1433C12.8571 15.5649 11.5784 14.2861 9.99998 14.2861Z" fill="#5D57FB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.85729 14.2861H0.000133514V20.0004H5.71445V17.1433C5.71445 15.5649 4.43568 14.2861 2.85729 14.2861Z" fill="#5D57FB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.1425 7.14355C15.5642 7.14355 14.2854 8.42233 14.2854 10.0007C14.2854 11.5781 15.5642 12.8579 17.1425 12.8579H19.9997V7.14355H17.1425Z" fill="#5D57FB"></path>
                    </svg>
                  </div>




                </div>
                <div className="profile__containerRight__profileStrength__infoBottom">

                  <div className="profileInfo__nav">
                    <div>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M11.25 13.5L6.75 9L11.25 4.5" stroke="#6D7B8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <div>Previous</div>
                    </div>
                    <div >
                      <div>Next</div>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M6.75 13.5L11.25 9L6.75 4.5" stroke="#ACB4BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </div>
                  </div>

                  <div>
                    <button className="profile__addphoto">Add photo</button>
                  </div>
                </div>
              </div>


              <div className="profileBio">
                <h1 className="profileHeading">Bio</h1>
                <div className="profileBio__link">
                  <div>
                    <div>
                      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="left-panel/freeuser" transform="translate(-44.000000, -58.000000)">
                            <g id="Group-5"><g id="content" transform="translate(0.000000, 58.000000)">
                              <g id="Other/Grammarly-Logo" transform="translate(44.000000, -0.000000)">
                                <g id="Logo">
                                  <path d="M23.5497232,11.5711095 C23.5497232,17.9613804 18.3693878,23.1422189 11.9786137,23.1422189 C5.58834278,23.1422189 0.40750429,17.9613804 0.40750429,11.5711095 C0.40750429,5.18033539 5.58834278,0 11.9786137,0 C18.3693878,0 23.5497232,5.18033539 23.5497232,11.5711095" id="Fill-10" fill="#15C39A"></path>
                                  <path d="M14.261644,13.1392463 C13.7806883,13.1392463 13.400854,13.5724083 13.4909074,14.0694629 C13.5593279,14.448291 13.9155169,14.7078863 14.300382,14.7078863 L15.512833,14.7078863 L16.2156522,14.6092803 C15.0912422,16.2589181 13.1387432,17.0180835 11.0041251,16.6830244 C9.26644631,16.4103487 7.77377319,15.2346233 7.14390236,13.592532 C5.7141157,9.86512545 8.43634498,6.30625465 11.9836447,6.30625465 C13.8325067,6.30625465 15.4534682,7.38840493 16.3831817,8.69543721 C16.3836848,8.69543721 16.3841879,8.72260416 16.3841879,8.72361035 C16.6312059,9.07929619 17.119708,9.18142381 17.4758969,8.93440578 C17.8139746,8.69996504 17.9070465,8.25472887 17.7037975,7.90457703 L17.7093315,7.90457703 C16.4234291,5.89724109 14.1127288,4.61284794 11.5142601,4.78691767 C8.13096831,5.01381204 5.39314319,7.78232575 5.1984467,11.1676299 C4.97255852,15.106838 8.09726116,18.3231034 11.9836447,18.3231034 C14.0251908,18.3231034 15.852923,17.4341403 17.098075,15.9958011 L16.9506692,16.8208715 L16.9506692,17.5664534 C16.9506692,17.9508155 17.2097614,18.3075075 17.5885895,18.375928 C18.0861472,18.4654783 18.518806,18.0856441 18.518806,17.6046884 L18.518806,13.1392463 L14.261644,13.1392463" id="Fill-11" fill="#FFFFFF"></path></g>
                              </g>
                            </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <span>
                        7x your chances of winning with perfect grammar.
              </span>
                    </div>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M6.75 13.5L11.25 9L6.75 4.5" stroke="#ACB4BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </div>
                </div>
              </div>




              <div className="profileEducation">
                <h1 className="profileHeading">Education</h1>

                <div className="profile__emptySection">
                  Do you currently play organized sports or have you in the past?
              </div>

                <div className="profile__addSection">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" >
                    <path d="M14.0001 9.00005H3.99995" stroke="#314BBE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M9 4V14.0001" stroke="#314BBE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <span>Add Sport</span>
                </div>
              </div>

              <CareerField />

              <FinanceField />

              <SportsField />

              <ResearchField />

              <ArtsField />

              <PublicServicesField />

              {/*   ************FUTURE INTRESTS***********  */}
              <FutureIntrestsField />

            </div>





          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Profile;
