export const calculateAdmissionDate = (admissionDate, birthdate) => {
    const admission = new Date(admissionDate);
    const userBirthdate = new Date(birthdate);

    const calculateAdmission = admission.getFullYear() - userBirthdate.getFullYear();

    return calculateAdmission;
};