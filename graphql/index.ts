export const nurseSigninQuery = `
    query NurseSignin($email: String!, $password: String!) {
        nurseSignin(email: $email, password: $password) {
        address
        email
        firstName
        gender
        globalId
        id
        lastName
        phone
        picture
        profilePictureUrl
        residence
        token
        }
    }
`;

export const nurseProfileQuery = `
    query NurseProfile {
        nurseProfile {
        createdHealthFacility {
            id
            facilityName
        }
        }
    }
`
