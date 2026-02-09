import React from 'react';

const AddJob = () => {
    return (
        <div>
            <h2>Please add a job</h2>
            <form>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                    <label className="label">Job Title</label>
                    <input type="email" className="input" placeholder="Job Title" />

                    <label className="label">Company</label>
                    <input type="text"
                        name='company'
                        className="input" placeholder="Company name" />

                    <label className='label'>Location</label>
                    <input type="text" name="location" className='input' placeholder='Company location' />
                    <label className='label'>Company logo</label>
                    <input type="text" name='company_logo' className='input' placeholder='Company Logo URL' />
                    <button className="btn btn-neutral mt-4"></button>
                </fieldset>

                {/* Job type */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Type  </legend>
                    <div className="filter">
                        <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                        <input className="btn" type="radio" name="jobType" aria-label="On-Site" />
                        <input className="btn" type="radio" name="jobType" aria-label="Remote" />
                        <input className="btn" type="radio" name="jobType" aria-label="Hybrid" />
                    </div>

                </fieldset>
                {/* JOb Category */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Category</legend>

                    <select defaultValue="Job Category"
                        name='category'
                        className="select">
                        <option disabled={true}>Job Category</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Sales</option>
                        <option>Finance</option>
                    </select>

                </fieldset>
                {/* Application Deadline  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Application Deadline</legend>

                    <input type="date" className="input" />

                </fieldset>

                {/* Salary Range */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Salary range</legend>

                    <label className="label">Minimum Salary</label>
                    <input type="text"
                        name='salaryMin'
                        className="input" placeholder="Minimum Salary" />

                    <label className="label">Maximum Salary</label>
                    <input type="text"
                        name='salaryMax'
                        className="input" placeholder="Maximum Salary" />

                    <label className="label">Currency</label>

                    <select defaultValue="Select a currency"
                        name='category'
                        className="select">
                        <option disabled={true}>Select a currency</option>
                        <option>BDT</option>
                        <option>USD</option>
                        <option>EUR</option>
                        <option>YUN</option>
                    </select>    

                    <input type="text" className="input" placeholder="Name" />
                </fieldset>

                {/*  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                </fieldset>
                {/*  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                </fieldset>
                {/*  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                </fieldset>
                {/*  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                </fieldset>

            </form>
        </div>
    );
};

export default AddJob;