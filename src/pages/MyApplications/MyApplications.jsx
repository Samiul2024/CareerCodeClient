import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/useAuth';
import { myApplicationsPromise } from '../../api/applicationsApi';


// const myApplicationsPromise = email => {
//     return fetch(`http://localhost:3000/applications?email=${email}`).then(res = res.json())
// }
// const myApplicationPromise=fetch(``)

const MyApplications = () => {


    const { user } = useAuth();


    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={'loading your applications'}>
                <ApplicationList
                    myApplicationsPromise={myApplicationsPromise(user.email)}
                ></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;