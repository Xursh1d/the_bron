import ReservationHeader from './ReservationHeader';
import ReservationDetails from './ReservationDetails';
import ReservationTimes from './ReservationTimes';
import ReservationActions from './ReservationActions';
import { Outlet } from 'react-router-dom';

export default function Reservation() {
    return (
        <div className="border border-[#E0E0E0] p-5 rounded-[10px] space-y-5">
            <ReservationHeader status='cancel' />
            <div className="h-[1px] bg-[#D9D9D9]"></div>
            <ReservationDetails />
            <div className="h-[1px] bg-[#D9D9D9]"></div>
            <ReservationTimes />
            <ReservationActions />
            <Outlet />
        </div>
    );
}
