import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginLeft:'0rem',

   
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    color:'black',
    fontSize:'18px',
    fontWeight: 500,
  },
  Typography:{
    color:'grey',
    fontWeight: 500,
    

  }
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography  className={classes.heading}>Are award contributions tax deductible?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.Typography}>
          Yes! Donations are made to the Edunomics Foundation, a 501(c)(3) non-profit (Federal Tax ID #84-2719715). When your donation is processed, you’ll receive an email with documentation confirming your tax-deductible donation.


          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>How long does it take for donations to process?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.Typography}>
          Donations made by credit card process right away. Donations made by ACH can take 3-5 business to process.


          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Why do you require awards to be funded upfront?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.Typography}>
          Since awards require a time commitment from applicants, we verify that the award is ready by accepting the donation upfront before asking applicants to spend the time to apply. If you have a special request for a different process, please contact edunomics.in to discuss!




          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What happens with scholarship donations until they’re distributed?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.Typography}>
          The Edunomics holds the scholarship donation in cash escrow until you’ve selected your winner, at which point we’ll distribute the funds to the winner as specified by your award specifications.






          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>How do I know how my donation will be used?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.Typography}>
          100% of your tax-deductible donation will go to your recipient, and will typically be either applied directly to their tuition or directly to their student loans. In cases where you’ve specified your award to go towards an educational experience, we require documentation from the recipient that the award has been used for eligible expenses.
 </Typography>
        </AccordionDetails>
      </Accordion>
      <header className="faq-header" >
      <p style={{ fontSize: "2rem", fontWeight: 600 ,marginBottom:'1rem'}}>Scholarship, Fellowship, and Grant Details
</p>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What are the possible causes to which awards can go?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.Typography}>
          In general, we work with financial aid offices to apply awards directly to your recipient’s tuition. If you’d like, you can also specify that you’d like your award to go towards paying off your recipient’s student loans, or to covering other educational expenses. In all cases, the purpose of your grant must be to achieve a specific objective, produce a report or other similar product, or improve or enhance a literary, artistic, musical, scientific, teaching, or other similar capacity, skill, or talent of the grantee.

</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Do you use algorithms to review applications or people?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.Typography}>
          People! Our team reads every application to your scholarship and, based on the selection criteria you define, shortlists the most promising applications for your review.

</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Can reviewers have unlimited logins, or is there a limit?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.Typography}>
          We currently support one login per donor account, but are working on multi-login support.

</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Can my award applications include images or video?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.Typography}>
          Yes! Check our Award Features page for more details.

</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Can I interview candidates or request letters of recommendation from them?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.Typography}>
          Yes, we can facilitate this for any award finalists you choose!

</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>How do you review no-essay awards?
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.Typography}>
          Edunomics award applicants have extensive profiles that detail their background, abilities, and goals. These profiles are included in every application and are used to evaluate candidates for no-essay awards.


</Typography>
        </AccordionDetails>
      </Accordion>

</header>
<header className="faq-header" >
      <p style={{ fontSize: "2rem", fontWeight: 600 ,marginBottom:'1rem'}}>Applicant Details

</p>
<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>How many applications to my scholarship should I expect?
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.Typography}>
          This depends on your eligibility criteria and award timeline. Scholarships with more narrow criteria will typically 50-200 applications. Broader scholarships will receive many hundreds of applications.

For all scholarships, our team will read every application and shortlist recommended applications for you to review based on the selection criteria you define.

</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What types of applicants are on Edunomics.in?
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.Typography}>
          Edunomics.in applicants range from high schoolers through to graduate students, and include many recent graduates with student debt as well. Based on your award criteria, we’ll reach out directly to eligible applicants and relevant organizations to make sure you get quality applicants.



</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Is  Edunomics.in open to non-students?
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.Typography}>
          Yes! Many Edunomics.in members are graduates who are focused on paying off their student debt.



</Typography>
        </AccordionDetails>
      </Accordion>

</header>
<header className="faq-header" >
      <p style={{ fontSize: "2rem", fontWeight: 600 ,marginBottom:'1rem'}}>Edunomics.in Details

</p>
<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What types of donors are on Edunomics.in?
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.Typography}>
          Edunomics.in donors include individuals, families, large and small companies, foundations, and more. We make it easy for anyone and any organization to create and manage customized scholarships, fellowships, and grants, in minutes.




</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>How do you make money?

</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.Typography}>
          We work with highly vetted partner companies that support our operations and allow us to keep Edunomics.in completely free for applicants and fee-free for donors, with 100% of donations going to recipients.




</Typography>
        </AccordionDetails>
      </Accordion>
</header>
     
    </div>
  );
}
