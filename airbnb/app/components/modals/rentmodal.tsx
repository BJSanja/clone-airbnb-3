'use client'

import userentModal from "@/app/hooks/userentmodal";
import Modal from "./modal";

const RentModal = () => {
    const rentModal =userentModal();
    return (
        <Modal
            isOpen={rentModal.isOpen}
            onClose={rentModal.onClose}
            onSubmit={rentModal.onClose}
            title="Airbnb your home!"
            actionLabel="Submit"
        />
    )
}

export default RentModal;
