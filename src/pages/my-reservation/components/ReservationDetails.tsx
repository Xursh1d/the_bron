const ReservationDetails = () => {
    return (
        <div className="grid grid-cols-2 gap-2">
            <h1 className="col-span-2 text-2xl font-bold">Information about order</h1>
            <p className="text-lg">Time</p>
            <p className="text-lg text-end">14:00</p>
            <p className="text-lg">Date</p>
            <p className="text-lg text-end">2023-08-10</p>
            <p className="text-lg">Booking table</p>
            <p className="text-lg text-end">J-5</p>
            <p className="text-lg">Manzil</p>
            <p className="text-lg text-end">Amir Temur Street 14/85</p>
            <p className="text-lg">To’lov</p>
            <p className="text-lg text-end">50%</p>
            <p className="text-lg">Tolov vositasi</p>
            <div className="flex justify-end">
                <img className="w-[80px] object-cover h-6" src="/images/payme.svg" alt="PAYME" />
            </div>
            <p className="text-lg">Qoldiq</p>
            <p className="text-lg font-bold text-end">000 000сумм</p>
        </div>
    );
};

export default ReservationDetails;
