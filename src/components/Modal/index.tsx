"use client"
import { ModalCardProps } from '@/@types/card-type';
import { useVideosContext } from '@/contexts/VideosContext';
import { Modal } from 'antd';


export function ModalComponent({children}:ModalCardProps){
  const {isModalOpen, setIsModalOpen} = useVideosContext();

    const handleCancel = () => {
      setIsModalOpen(false);
    };

    return (
      <>
        <Modal open={isModalOpen} onCancel={handleCancel} 
        maskStyle={{
            backgroundColor: 'var(--blue-filter-200)'
        }}
        style={{
            borderRadius:'10px',
            borderTop: '5px solid var(--primary-color)',    
        }}
        footer={null}
        width='650px'
        >
            {children}
        </Modal>
      </>
    );
}