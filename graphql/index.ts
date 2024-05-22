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

export const patientVisitQuery = `
    query GetVisitWithClinicalData($visitId: ID, $healthFacilityId: Int!, $getPatientDoctorVisitId: Int!) {
            getVisitClinicalData(visitId: $visitId) {
            clinicalSummary
            diagnosis {
                doctorId
                fullCode
                fullName
                notes
            }
            treatmentPlan
            visitId
        }
        getPatientDoctorVisit(healthFacilityId: $healthFacilityId, id: $getPatientDoctorVisitId) {
            id
            prescriptions {
                id
                items {
                    id
                    name
                    doctorPrescriptionItemDosage {
                        duration
                        durationUnit
                        durationValue
                        frequency
                        id
                        quantity
                        quantityUnit
                        route
                    }
                }
            }
            title
            vitalChecks {
                notes
            }
        }
    }
`


export const patientDataQuery = `
    query GetPatientData($healthFacilityId: Int!, $getPatientDoctorVisitId: Int!, $visitId: ID) {
        getPatientDoctorVisit(healthFacilityId: $healthFacilityId, id: $getPatientDoctorVisitId) {
            title
        }
        getVisitClinicalData(visitId: $visitId) {
            clinicalSummary
            treatmentPlan
            diagnosis {
                doctorId
                fullCode
                fullName
                notes
            }
        }
    }
`
