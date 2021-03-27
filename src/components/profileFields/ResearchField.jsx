import React from 'react'

const ResearchField = (props) => {
  return (
    <>
    <div className="profileEducation">
      <h1 className="profileHeading">Research</h1>

      <div className="profile__emptySection">
        Do you have current or past research experience?
    </div>

      <div className="profile__addSection">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" >
          <path d="M14.0001 9.00005H3.99995" stroke="#314BBE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M9 4V14.0001" stroke="#314BBE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <span>Add Research</span>
      </div>
    </div>
    </>
  )
}

export default ResearchField;
