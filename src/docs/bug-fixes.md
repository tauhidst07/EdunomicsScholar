# Bug Fixes & Feature Development Log – Md Tauhid 

## 1. Scholarship Amount Saved as String

### **Issue**
Donor entered scholarship amount as a string, while the backend expected a number.

### **Cause**
Input field used `type="text"` instead of `type="number"`.

### **Fix**
Updated the input field to `type="number"`.

### **Outcome**
Backend now receives the correct numeric value.

---

## 2. Donor Unable to Type in Question Field

### **Issue**
Donor was unable to type in the question input field.

### **Cause**
Missing `name` attribute in the input field, breaking controlled component behavior.

### **Fix**
Added the correct `name` attribute to the input element.

### **Outcome**
Field now accepts user input normally.

---

## 3. Eligibility Form Resetting on Each Re-render

### **Issue**
Eligibility form values (array inputs) were resetting whenever any other field was updated.

### **Cause**
The input component had local state **inside** the parent component, causing it to reset with every parent re-render.

### **Fix**
- Moved the input component **outside** the parent component.
- Ensured proper state handling for array values.

### **Outcome**
Eligibility inputs now persist and no longer reset on re-render.

---

## 4. Application Status Change Not Working (Donor Side)

### **Issue**
Application status updates were not functioning for donors.

### **Cause**
Incorrect update logic and payload mismatch with backend API requirements.

### **Fix**
- Rewrote the status update logic.
- Ensured correct API request structure and state update flow.

### **Outcome**
Donors can now successfully change applicant status.

---

## 5. Incorrect or Missing Value Rendering (Applicant Side)

### **Issue**
Some values on the applicant side were not rendering correctly.

### **Fix**
Corrected mapping logic and verified accurate field references.

### **Outcome**
All relevant applicant data now displays properly.

---

## 6. Missing Logic for Switching Applications by Status

### **Location**
My Applications Page (Applicant Side)

### **Issue**
Switching between `Pending`, `Accepted`, and `Rejected` applications did not work.

### **Cause**
Status-based filtering logic was not implemented.

### **Fix**
Added filtering logic to dynamically display applications based on the selected status.

### **Outcome**
Users can now switch between application lists according to their status categories.

---

