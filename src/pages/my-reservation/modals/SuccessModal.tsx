import SuccessIcon from '@/components/icons/SuccessIcon'
import ModalContainer from '@/components/ModalContainer'
import { useNavigate } from 'react-router-dom'

export default function SuccessCancel() {
    const navigate = useNavigate()

    return (
        <ModalContainer title='Бронь удалена' onClose={() => navigate("/my-reservation")}>
            <div className='flex justify-center pb-5'>
                <SuccessIcon />
            </div>
        </ModalContainer>
    )
}
