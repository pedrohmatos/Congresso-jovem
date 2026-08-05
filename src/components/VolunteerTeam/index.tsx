import './VolunteerTeam.css';

type VolunteerTeamType = {
    title: string;
    description: string;
}

function VolunteerTeam({ title, description }: VolunteerTeamType) {
    return (
        <a href={import.meta.env.VITE_VOLUNTEERS} target='_blank' className='volunteer-team'>
            <h3>{title}</h3>
            <p>
                {description}
            </p>
        </a>
    )
}

export default VolunteerTeam;