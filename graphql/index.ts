export const nurseSigninQuery = `
    query NurseSignin($email: String!, $password: String!) {
        nurseSignin(email: $email, password: $password) {
            address
            email
            firstName
            gender
            lastName
            id
            globalId
            phone
            picture
            profilePictureUrl
            residence
            token
        }
  }
`;
