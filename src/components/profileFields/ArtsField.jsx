import React, {useState} from 'react'
import Modal from 'react-modal';

const ArtsField = () => {

  const customStyles = {
    content: {
      "position": "fixed",
      "top": "50%",
      "left": "50%",
      "transform": "translate(-50%,-50%)",
      "z-index": "1001",
      "background": "#fff",
      "overflow": "auto",
      "-webkit-overflow-scrolling": "touch",
      "border-radius": "4px",
      "outline": "none",
      "max-width": "700px",
      "max-height": "70%",
      "min-height": "70%",
      "padding": "24px 28px 28px"
    }
  };

  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
    <div className="profileEducation">
      <h1 className="profileHeading">Arts</h1>

      <div className="profile__emptySection">
        Do you have experience in the arts?
    </div>

      <div className="profile__addSection">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" >
          <path d="M14.0001 9.00005H3.99995" stroke="#314BBE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M9 4V14.0001" stroke="#314BBE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <span onClick={openModal}>Add Public Services</span>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <div className="profile__modelContainer" tabindex="-1" role="dialog" aria-label="Edit interest information" aria-modal="true">
          <div>
            <div className="profile__modelContainer__header">
              <h3 color="text" font-size="large" font-weight="600" class="Title__StyledHeading-sc-14ii9t5-0 jdLSGv">
                Add public service information
              </h3>
              <svg onClick={closeModal} width="11" height="10" viewBox="0 0 11 10" fill="none">
                <path d="M1.00136 2.15221C0.60043 1.77238 0.600429 1.15655 1.00136 0.776722L1.04224 0.737998C1.44317 0.358167 2.09321 0.358167 2.49414 0.737997L9.99892 7.84779C10.3999 8.22762 10.3999 8.84345 9.99892 9.22328L9.95805 9.262C9.55712 9.64183 8.90707 9.64183 8.50614 9.262L1.00136 2.15221Z" fill="#6D7B8C">
                </path>
                <path d="M8.50614 0.737998C8.90707 0.358167 9.55712 0.358166 9.95805 0.737997L9.99892 0.776721C10.3999 1.15655 10.3999 1.77238 9.99892 2.15221L2.49414 9.262C2.09321 9.64183 1.44317 9.64183 1.04224 9.262L1.00136 9.22328C0.60043 8.84345 0.600429 8.22762 1.00136 7.84779L8.50614 0.737998Z" fill="#6D7B8C">
                </path>
              </svg>
            </div>

            <div >
              <div className="profile__modelContainer__form" >

                <div>
                  <span>
                    What type of experience was it?
                  </span>

                </div>

                <div className="profile__modelContainer__formField">
                  <span class="FormField-module--label--10Nfx">
                    Long-term, do your goals include advocacy?
                  </span>
                  <div className="profile__modelContainer__formField__RadioButtonGroup">
                    <div class="RadioButtonGroup-module--radio-button--3Fn7H">
                      <input type="radio" />
                      <label for="Yes">Yes</label>
                    </div>
                    <div class="RadioButtonGroup-module--radio-button--3Fn7H">
                      <input type="radio" checked="" />
                      <label for="No">No</label>
                    </div>
                  </div>
                </div>
                <div className="profile__modelContainer__formField">
                  <span class="FormField-module--label--10Nfx">
                    Long-term, do your goals include volunteering?
                    </span>
                  <div className="profile__modelContainer__formField__RadioButtonGroup">
                    <div class="RadioButtonGroup-module--radio-button--3Fn7H">
                      <input type="radio" />
                      <label for="Yes">
                        Yes
                          </label>
                    </div>
                    <div class="RadioButtonGroup-module--radio-button--3Fn7H">
                      <input type="radio" checked="" />
                      <label for="No">
                        No
                            </label>
                    </div>
                  </div>
                </div>
                <div className="profile__modelContainer__formField">
                  <span class="FormField-module--label--10Nfx">
                    Long-term, do your goals include philanthropy?
                        </span>
                  <div className="profile__modelContainer__formField__RadioButtonGroup">
                    <div class="RadioButtonGroup-module--radio-button--3Fn7H">
                      <input type="radio" />
                      <label for="Yes">
                        Yes
                              </label>
                    </div>
                    <div class="RadioButtonGroup-module--radio-button--3Fn7H">
                      <input type="radio" checked={true} />
                      <label for="No">
                        No
                              </label>
                    </div>
                  </div>
                </div>
                <div className="profile__modelContainer__formField">
                  <span class="FormField-module--label--10Nfx">
                    Long-term, do your goals include entrepreneurship?
                          </span>
                  <div className="profile__modelContainer__formField__RadioButtonGroup">
                    <div class="RadioButtonGroup-module--radio-button--3Fn7H">
                      <input type="radio" />
                      <label for="Yes">
                        Yes
                              </label>
                    </div>
                    <div class="RadioButtonGroup-module--radio-button--3Fn7H">
                      <input type="radio" />
                      <label for="No">
                        No
                              </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="profile__saveChangesContainer">
              <button>
                Save changes
              </button>
            </div>
          </div>
        </div>

      </Modal>


    </div>

    </>

  )
}

export default ArtsField;
