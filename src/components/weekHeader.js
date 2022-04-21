import './weekHeader.css'

const WeekHeader = () => {
    return (
        <>
            <h1>Weekly Meal Planner</h1>
            <ul className='weekHeader'>
                <li>Monday</li>
                <li>Tuesday</li>
                <li>Wednesday</li>
                <li>Thursday</li>
                <li>Friday</li>
                <li>Saturday</li>
                <li>Sunday</li>
            </ul>
        </>
    );
}

export default WeekHeader;
