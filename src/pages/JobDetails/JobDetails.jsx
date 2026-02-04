import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const { _id, title, company } = useLoaderData();
    // console.log(job);
    return (
        <div>
            <h2 className='text-6xl'>
                Job Details of:  {title}
            </h2>
            <p className='text-3xl font-bold'>Company: {company}</p>
            <Link to={`/jobApply/${_id}`} className='btn btn-primary'>Apply Now</Link>
        </div>
    );
};

export default JobDetails;