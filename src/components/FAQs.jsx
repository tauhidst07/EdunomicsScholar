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
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
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
          <Typography>
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
          <Typography>
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
          <Typography>
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
          <Typography>
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
          <Typography>
          100% of your tax-deductible donation will go to your recipient, and will typically be either applied directly to their tuition or directly to their student loans. In cases where you’ve specified your award to go towards an educational experience, we require documentation from the recipient that the award has been used for eligible expenses.








          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
