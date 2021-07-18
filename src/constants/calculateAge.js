export const calculateAge = (birthdate) => {
    const date = new Date();
    const userBirthdate = new Date(birthdate);
    const year = date.getFullYear() - userBirthdate.getFullYear();

    return year;
};