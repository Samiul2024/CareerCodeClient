import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const JobApply = () => {
    const { id: jobId } = useParams();
    const { user } = useAuth()
    // console.log(params);
    console.log(jobId, user);

    const handleApplyFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;

        console.log(linkedIn, github, resume);

    }


    return (
        <div>
            <h3 className="text-4xl">Apply Job For</h3>
            <form onSubmit={handleApplyFormSubmit}>
                <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-xs'>
                    <label className='label'>
                        LinkedIn Link
                    </label>
                    <input type="url"
                        name="linkedIn" className="input" placeholder="LinkedIn profile Link">
                    </input>

                    <label className='label'>
                        Github Link
                    </label>
                    <input type="url"
                        name="github"
                        className="input" placeholder="Github profile Link">
                    </input>

                    <label className='label'>
                        Resume Link
                    </label>
                    <input type="url"
                        name="resume"
                        className="input" placeholder="Resume Link">
                    </input>

                    <input type="submit" className='btn' value="Apply" />

                </fieldset>
            </form>
        </div>
    );
};

export default JobApply;